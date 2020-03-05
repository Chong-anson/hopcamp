class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string :name, null: false
      t.integer :category_id, null: false
      t.timestamps
    end
    add_index :tags, :category_id
    add_index :tags, :name
  end
end
