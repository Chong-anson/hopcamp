class AddDescriptionToCampsites < ActiveRecord::Migration[5.2]
  def change
    add_column :campsites, :description, :text, null: false
  end
end
