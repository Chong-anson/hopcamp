# == Schema Information
#
# Table name: tags
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  category   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Tag < ApplicationRecord
    validates :name, presence: true
    
    has_many :campsite_taggings,
      dependent: :destroy

    has_many :campsites,
        through: :campsite_taggings,
        source: :campsite
end
