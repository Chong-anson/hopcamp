class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :user_id, null: false
      t.integer :campsite_id, null: false
      t.string :status, null: false, default: "PENDING"
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.integer :group_size, null: false
      t.timestamps
    end
    add_index :bookings, :user_id
    add_index :bookings, :campsite_id 

  end
end
