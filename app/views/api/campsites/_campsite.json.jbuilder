json.extract! campsite, :id, :name, :price, :lat, :lng, :capacity
json.venue campsite.venue.name

json.tags do
    json.array! campsite.tags.ids
end 

json.bookings do
    json.array! campsite.bookings.ids
end

json.photos do
    json.photo_url url_for(campsite.photo) if campsite.photo.attached?
end
