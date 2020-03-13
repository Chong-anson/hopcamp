json.campsite do 
    json.partial! "api/campsites/campsite", campsite: @campsite
    json.extract! @campsite, :weather_api
end

json.tags(@campsite.tags) do |tag|
    json.(tag, :id, :name, :category)
end

json.bookings do 
    @campsite.bookings.each do | booking | 
        json.set! booking.id do 
            json.(booking, :id, :user_id, :status, :start_date, :end_date, :group_size)
        end
    end
end
