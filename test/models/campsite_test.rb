# == Schema Information
#
# Table name: campsites
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  capacity      :integer          not null
#  price         :integer          not null
#  campsite_type :string           not null
#  lat           :float            not null
#  lng           :float            not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  description   :text             not null
#  address       :string           not null
#
require 'test_helper'

class CampsiteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
