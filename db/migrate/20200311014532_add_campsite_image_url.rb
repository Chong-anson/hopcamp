class AddCampsiteImageUrl < ActiveRecord::Migration[5.2]
  def change
    add_column :campsites, :iamge_url, :string
  end
end
