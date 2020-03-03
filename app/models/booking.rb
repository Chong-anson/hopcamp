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

class Booking < ApplicationRecord
    STATUS = %w(PENDING APPROVED DENIED)
    validates :campsite_id, :user_id, :start_date, :end_date, :status, presence: true 
    validates :status, inclusion: {in: STATUS}
    validate :deos_not_overlap_approved_request

    belongs_to :user
    belongs_to :campsite

    def overlapping_requests
        campsite = Campsite.find_by(id: self.campsite_id)
        if campsite
            campsite
                .bookings
                .where.not(id: self.id)
                .where('? < end_date', self.start_date)
                .where('? > start_date', self.end_date)
        else
            []
        end
    end

    def overlapping_approved_requests
        result =  self.overlapping_requests
        if result.empty?
            result
        else 
            result.where("status LIKE 'APPROVED'")
        end 
    end

    def deos_not_overlap_approved_request 
        unless overlapping_approved_requests.empty?
            errors[:overlapping] << "Overlap with approved request!"
        end 
    end 

    def overlapping_pending_requests 
        result = self.overlapping_requests 
        if result.empty?
            result
        else 
            result.where("status LIKE 'PENDING'")
        end 
    end 

    def approve!
        self.status = 'APPROVED'
        self.save
        self.overlapping_pending_requests.update_all(status: 'DENIED')
    end

    def deny! 
        self.update(status: 'DENIED')
    end 
end
