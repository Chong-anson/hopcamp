json.extract! user, :id, :email, :first_name, :last_name
json.bookings do 
    json.array! user.bookings.ids
end

json.campsites do 
  json.array! user.booked_campsites.ids
end