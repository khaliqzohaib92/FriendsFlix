class ChangeIndexInProfiles < ActiveRecord::Migration[5.2]
  def change
    remove_index :profiles, :title
    #Ex:- change_column("admin_users", "email", :string, :limit =>25)
    add_index :profiles, [:title, :user_id], unique: true 
  end
end
