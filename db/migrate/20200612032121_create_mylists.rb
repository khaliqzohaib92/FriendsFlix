class CreateMylists < ActiveRecord::Migration[5.2]
  def change
    create_table :mylists do |t|
      t.integer  :profile_id
      t.integer :video_id

      t.timestamps
    end
    add_index :mylists, :profile_id
    add_index :mylists, :video_id
    #Ex:- add_index("admin_users", "username")
  end
end
