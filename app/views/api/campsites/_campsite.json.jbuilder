json.extract! campsite, :id, :name, :price, :description, :address, :lat, :lng, :capacity, :campsite_type

json.truncated false 

json.tags do
    json.array! campsite.tags.ids
end 

json.bookings do
    json.array! campsite.bookings.ids
end

json.reviews do 
  json.array! campsite.reviews.ids 
end

if (campsite.reviews.length != 0)  
  reviews = campsite.reviews
  rating = (reviews.count { |el| el.recommended }) * 100.0 / reviews.length
else 
  rating = 0
end

json.rating rating 

if campsite.photos
    json.photoUrls campsite.photos.map { |file| url_for(file) }
end

