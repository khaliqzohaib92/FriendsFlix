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

    has_many :my_lists, class_name: "Mylist", foreign_key: "video_id"

    has_many :profiles, through: :my_lists, source: :profile

    def self.find_all
        Video
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

    def self.find_all_by_genre(id)
        Video
        .joins(:genres_links)
        .with_attached_thumbnail_url
        .where('genreslinks.genre_id = ?', id)
        .includes(:categories, :genres)
    end

    def self.find_all_by_genre_id_and_type(genre_id, type)
        Video
        .joins(:genres_links)
        .with_attached_thumbnail_url
        .where('video_type= ? AND genreslinks.genre_id = ?',type, genre_id)
        .includes(:categories, :genres)
    end

    def self.search(name)
        Video
        .joins(:genres)
        .with_attached_thumbnail_url
        .where('LOWER(title) Like ? OR LOWER(genres.name) Like ?',"%#{name}%", "%#{name}%")
        .includes(:genres)
    end
end
