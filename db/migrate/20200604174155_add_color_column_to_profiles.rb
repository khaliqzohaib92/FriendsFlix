class AddColorColumnToProfiles < ActiveRecord::Migration[5.2]
  def change
    add_column :profiles, :color, :string
  end
end
