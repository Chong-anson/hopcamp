class Tag < ApplicationRecord
    validates :name, :category_id, presence: true
    
end
