# == Schema Information
#
# Table name: campsite_taggings
#
#  id          :bigint           not null, primary key
#  campsite_id :integer          not null
#  tag_id      :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class CampsiteTaggingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
