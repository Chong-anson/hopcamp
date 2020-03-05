class CreateCampsiteTaggings < ActiveRecord::Migration[5.2]
  def change
    create_table :campsite_taggings do |t|
      t.integer :campsite_id, null: false
      t.integer :tag_id, null: false
      t.timestamps
    end

    add_index :campsite_taggings, [:campsite_id, :tag_id], unique: true
  end
end
