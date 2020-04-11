class AddIconNameToTag < ActiveRecord::Migration[5.2]
  def change
    add_column :tags, :icon, :string 
  end
end
