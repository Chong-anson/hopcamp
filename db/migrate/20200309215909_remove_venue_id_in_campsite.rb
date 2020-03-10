class RemoveVenueIdInCampsite < ActiveRecord::Migration[5.2]
  def change
    remove_column :campsites, :venue_id
  end
end
