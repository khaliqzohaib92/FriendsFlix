class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :year, null: false
      t.string :video_type, null: false
      t.integer :runtime, null: false
      t.string :video_rating, null: false
      t.string :content_rating, null: false

      t.timestamps
    end
    add_index :videos, [:title, :year], :unique => true
    #Ex:- add_index("admin_users", "username")
  end
end
