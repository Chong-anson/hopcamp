json.extract! venue, :id, :name
json.campsites do 
    json.array! venue.campsites.ids
end


json.photo_url url_for(venue.photo) if venue.photo.attached?