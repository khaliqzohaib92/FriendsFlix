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

    has_many :genres_links, class_name: "Genreslink", foreign_key: "video_id"

    has_many :genres, through: :genres_links, source: :genre

    has_many :categories, through: :categories_link, source: :category

    has_one_attached :video_url

    has_one_attached :thumbnail_url

    def self.find_all
        Video
        .with_attached_video_url
        .with_attached_thumbnail_url
        .all
        .includes(:categories, :genres)
    end

    def self.find_by_id(id)
        Video
        .with_attached_video_url
        .with_attached_thumbnail_url
        .find_by(id: id)
    end

    def self.find_all_by_type(type)
        Video
        .with_attached_video_url
        .with_attached_thumbnail_url
        .where('video_type= ? ',type)
        .includes(:categories, :genres)
    end

    def self.find_all_by_genre_id_and_type(genre_id, type)
        Video
        .join(:genres_links)
        .with_attached_video_url
        .with_attached_thumbnail_url
        .where('video_type= ? AND genrelinks.genre_id = ?',type, genre_id)
        .includes(:categories, :genres)
    end
end
