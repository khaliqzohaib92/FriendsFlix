class MyListUpdateIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :mylists, name: "index_mylists_on_profile_id"
    remove_index :mylists, name: "index_mylists_on_video_id"
    add_index :mylists, [:video_id, :profile_id], :unique =>  true
  end
end
