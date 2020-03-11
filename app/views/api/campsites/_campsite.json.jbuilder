json.extract! campsite, :id, :name, :price, :description, :address, :lat, :lng, :capacity, :campsite_type

json.tags do
    json.array! campsite.tags.ids
end 

json.bookings do
    json.array! campsite.bookings.ids
end

if campsite.photos
    json.photoUrls campsite.photos.map { |file| url_for(file) }
end