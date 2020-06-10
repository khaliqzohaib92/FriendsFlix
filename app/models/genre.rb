# == Schema Information
#
# Table name: genres
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Genre < ApplicationRecord
    validates :name, presence: true

    has_many :genres_links, class_name: "Genreslink", foreign_key: "genre_id"

    has_many :videos, through: :genres_links, source: :video
end
