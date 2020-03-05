class RenameColumnInTags < ActiveRecord::Migration[5.2]
  def change
    rename_column :tags, :category_id, :category
  end
end
