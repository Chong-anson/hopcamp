class AddCampsiteAddress < ActiveRecord::Migration[5.2]
  def change
    add_column :campsites, :address, :string, null: false
    add_column :venues, :description, :string, null: false
  end
end
