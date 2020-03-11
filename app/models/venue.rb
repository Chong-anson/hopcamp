# == Schema Information
#
# Table name: venues
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :string           not null
#
class Venue < ApplicationRecord
    validates :name, presence: true, uniqueness: true 
    validates :description, presence: true
    
    # has_many :campsites

    has_one_attached :photo
end
