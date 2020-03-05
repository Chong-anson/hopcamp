class ChangeCategoryTypeInTags < ActiveRecord::Migration[5.2]
  def change
    change_column :tags, :category, :string
  end
end
