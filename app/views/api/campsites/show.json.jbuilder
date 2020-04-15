json.campsite do 
    json.partial! "api/campsites/campsite", campsite: @campsite
    json.extract! @campsite, :weather_api
end

json.tags(@campsite.tags) do |tag|
    json.(tag, :id, :name, :category, :icon)
end

json.bookings do 
    @campsite.bookings.each do | booking | 
        json.set! booking.id do 
            json.(booking, :id, :user_id, :status, :start_date, :end_date, :group_size, :updated_at)
        end
    end
end

json.reviews do 
  @campsite.reviews.each do | review | 
    json.set! review.id do 
      json.partial! "api/reviews/review", review: review 
    end
  end
end 
