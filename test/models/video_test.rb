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
require 'test_helper'

class VideoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
