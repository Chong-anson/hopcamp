class Review < ApplicationRecord
  validates :body, :user_id, :campsite_id, presence: true
  validates :user_id, uniqueness: {scope: :campsite_id}

  belongs_to :campsite
  belongs_to :user
end
