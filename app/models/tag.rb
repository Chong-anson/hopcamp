class Tag < ApplicationRecord
    validates :name, :category_id, presence: true
    
    has_many :campsite_taggings

    has_many :campsites,
        through: :campsite_taggings,
        source: :tag
end
