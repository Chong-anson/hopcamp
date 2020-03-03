class RenameTypeInCampsite < ActiveRecord::Migration[5.2]
  def change
    rename_column :campsites, :type, :campsite_type
  end
end
