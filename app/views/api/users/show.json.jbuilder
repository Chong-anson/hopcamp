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