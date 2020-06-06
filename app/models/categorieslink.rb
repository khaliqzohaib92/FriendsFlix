# == Schema Information
#
# Table name: categorieslinks
#
#  id          :bigint           not null, primary key
#  category_id :integer
#  video_id    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Categorieslink < ApplicationRecord
    validates :category_id, :video_id, presence: true

    belongs_to :category, class_name: "Category", foreign_key: "category_id"

    belongs_to :video, class_name: "Video", foreign_key: "video_id"
end
