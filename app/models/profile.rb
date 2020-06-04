# == Schema Information
#
# Table name: profiles
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Profile < ApplicationRecord
    validates :title, :user_id, presence: true

    belongs_to :user, class_name: "User", foreign_key: "user_id"
end
