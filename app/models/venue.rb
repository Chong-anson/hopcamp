# == Schema Information
#
# Table name: venues
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Venue < ApplicationRecord
    validates :name, presence: true, uniqueness: true 
    
    has_many :campsites

    has_one_attached :photo
end
