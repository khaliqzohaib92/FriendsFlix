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
require 'test_helper'

class MylistTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
