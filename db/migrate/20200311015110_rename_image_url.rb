class RenameImageUrl < ActiveRecord::Migration[5.2]
  def change
    rename_column :campsites, :iamge_url, :image_url
  end
end
