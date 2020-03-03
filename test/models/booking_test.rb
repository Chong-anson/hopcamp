# == Schema Information
#
# Table name: bookings
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  campsite_id :integer          not null
#  status      :string           default("PENDING"), not null
#  start_date  :date             not null
#  end_date    :date             not null
#  group_size  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
