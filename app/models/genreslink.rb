# == Schema Information
#
# Table name: genreslinks
#
#  id         :bigint           not null, primary key
#  genre_id   :integer          not null
#  video_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Genreslink < ApplicationRecord
    validates :video_id, :genre_id, presence: true

    belongs_to :genre, class_name: "Genre", foreign_key: "genre_id"

    belongs_to :video, class_name: "Video", foreign_key: "video_id"

end
