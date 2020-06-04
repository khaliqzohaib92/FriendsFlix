class AddConstraintInProfiles < ActiveRecord::Migration[5.2]
  def change
    add_index :profiles, :title, unique: true
    #Ex:- add_index("admin_users", "username")
  end
end
