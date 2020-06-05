class AddNotNullToColorInProfiles < ActiveRecord::Migration[5.2]
  def change
    change_column :profiles, :color, :string, null: false
    #Ex:- change_column("admin_users", "email", :string, :limit =>25)
  end
end
