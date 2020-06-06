# == Schema Information
#
# Table name: videos
#
#  id             :bigint           not null, primary key
#  title          :string           not null
#  description    :string           not null
#  year           :integer          not null
#  video_type     :string           not null
#  runtime        :integer          not null
#  video_rating   :string           not null
#  content_rating :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Video < ApplicationRecord
    validates :title, :description, :year, :video_type, :runtime, :video_rating, :content_rating, presence: true
    validates :title, uniqueness: {scope: :year}
    validates :video_type, inclusion: {in: ["movies", "tvshows"]}


    has_many :categories_link, class_name: "Categorieslink", foreign_key: "video_id"

    has_many :categories, through: :categories_link, source: :category
end
