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
require 'test_helper'

class GenreslinkTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
