# == Schema Information
#
# Table name: campsite_taggings
#
#  id          :bigint           not null, primary key
#  campsite_id :integer          not null
#  tag_id      :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class CampsiteTagging < ApplicationRecord
    validates :campsite_id, :tag_id, presence: true 
    validates :campsite_id, uniqueness: {scope: :tag_id}

    belongs_to :campsite
    belongs_to :tag
end
