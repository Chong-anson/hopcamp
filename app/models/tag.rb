class Tag < ApplicationRecord
    validates :name, presence: true
    
    has_many :campsite_taggings

    has_many :campsites,
        through: :campsite_taggings,
        source: :campsite
end
