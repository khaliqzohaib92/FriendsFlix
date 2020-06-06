# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Category < ApplicationRecord
    validates :title, presence: true

    has_many :categories_link, class_name: "Categorieslink", foreign_key: "category_id"

    has_many :videos, through: :categories_link, source: :video
end
