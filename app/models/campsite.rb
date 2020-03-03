class Campsite < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :price, :venue_id, :campsite_type, :lat, :lng, presence: true
    # validates :type, inclusion: {in: ["CAMPING", "RV", "GLAMPING"]}

    # belongs_to :venue
end
