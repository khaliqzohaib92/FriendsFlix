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
require 'test_helper'

class CategorieslinkTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
