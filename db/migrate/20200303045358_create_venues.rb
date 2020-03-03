class CreateVenues < ActiveRecord::Migration[5.2]
  def change
    create_table :venues do |t|
      t.string :name, null: false
      t.timestamps
    end

    add_index :venues, :name, unique: true 
  end
end
