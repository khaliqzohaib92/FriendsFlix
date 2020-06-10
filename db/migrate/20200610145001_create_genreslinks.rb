class CreateGenreslinks < ActiveRecord::Migration[5.2]
  def change
    create_table :genreslinks do |t|
      t.integer :genre_id, null: false
      t.integer :video_id, null: false

      t.timestamps
    end
    add_index :genreslinks, :genre_id
    add_index :genreslinks, :video_id
  end
end
