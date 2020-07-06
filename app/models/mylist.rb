# == Schema Information
#
# Table name: mylists
#
#  id         :bigint           not null, primary key
#  profile_id :integer
#  video_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Mylist < ApplicationRecord
    validates :video_id, uniqueness: {scope: :profile_id}

    belongs_to :profile, class_name: "Profile", foreign_key: "profile_id"

    belongs_to :video, class_name: "Video", foreign_key: "video_id"
end
