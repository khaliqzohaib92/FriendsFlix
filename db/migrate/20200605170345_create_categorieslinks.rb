class CreateCategorieslinks < ActiveRecord::Migration[5.2]
  def change
    create_table :categorieslinks do |t|
      t.integer :category_id
      t.integer :video_id

      t.timestamps
    end
    add_index :categorieslinks, :category_id
    add_index :categorieslinks, :video_id
  end
end
