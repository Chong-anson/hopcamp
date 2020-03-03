class CreateCampsites < ActiveRecord::Migration[5.2]
  def change
    create_table :campsites do |t|
      t.string :name, null: false
      t.integer :capacity, null: false
      t.integer :price, null: false
      t.integer :venue_id, null: false
      t.string :type, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.timestamps
    end
    add_index :campsites, :name, unique: true 
    add_index :campsites, :venue_id
  end
end
