class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.boolean :recommended, null: false, default: false 
      t.integer :user_id, null: false 
      t.integer :campsite_id, null: false 
      t.timestamps
    end
    add_index :reviews, [:campsite_id, :user_id], unique: true 
  end
end
