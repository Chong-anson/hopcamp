class CampsiteTagging < ApplicationRecord
    validates :campsite_id, :tag_id, presence: true 
    validates :campsite_id, uniqueness: {scope: :tag_id}

    belongs_to :campsite
    belongs_to :tag
end
