json.user do 
    json.partial! "api/users/user", user: @user
end

json.bookings do 
    @user.bookings.each do | booking | 
        json.set! booking.id do 
            json.(booking, *Booking.column_names)
        end
    end
end

json.campsites do 
    @user.booked_campsites.each do | campsite | 
        json.set! campsite.id do
            json.extract! campsite, :id, :name, :address, :campsite_type, :lat, :lng
            if campsite.photos
                json.photoUrls campsite.photos.map { |file| url_for(file) }
            end
        end
      end
end

