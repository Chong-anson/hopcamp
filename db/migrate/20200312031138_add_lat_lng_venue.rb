class AddLatLngVenue < ActiveRecord::Migration[5.2]
  def change
    add_column :venues, :lat, :float, null: false
    add_column :venues, :lng, :float, null: false
  end
end
