# == Schema Information
#
# Table name: campsites
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  capacity      :integer          not null
#  price         :integer          not null
#  campsite_type :string           not null
#  lat           :float            not null
#  lng           :float            not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  description   :text             not null
#  address       :string           not null
#
class Campsite < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :price, :campsite_type, :lat, :lng, :description, :address, presence: true
    validates :campsite_type, inclusion: {in: ["CAMPING", "RV", "GLAMPING"]}
    validates :lat, uniqueness: {scope: :lng, message: "Duplicate coordintes!"}

    # belongs_to :venue,
    #     class_name: :Venue

    has_many :bookings,
      dependent: :destroy 
      
    has_many :campsite_taggings,
      dependent: :destroy

    has_many :tags,
        through: :campsite_taggings,
        source: :tag

    has_many :reviews,
      dependent: :destroy

    has_many :reviewers, 
      through: :reviews,
      source: :user 
    
    has_many_attached :photos

    def self.in_bounds(bounds)
        campsites = Campsite
                    .where('lat BETWEEN ? AND ?', bounds["southWest"]["lat"],bounds["northEast"]["lat"])
                    .where('lng BETWEEN ? AND ?', bounds["southWest"]["lng"],bounds["northEast"]["lng"])
        return campsites
    end

    def weather_api
        response = Excon.get("http://api.openweathermap.org/data/2.5/weather?lat=#{self.lat}&lon=#{self.lng}&appid=#{ENV['WEATHER_API_KEY']}&units=imperial")
        return nil if response.status != 200
        result = JSON.parse(response.body)
        result = {weather: result["weather"].first["main"], temperature: result["main"]["temp"]}
    end
    

end
