json.extract! user, :id, :email, :first_name, :last_name
json.bookings do 
    json.array! user.bookings.ids
end