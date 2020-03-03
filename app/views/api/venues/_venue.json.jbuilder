json.extract! venue, :id, :name
json.campsites do 
    json.array! venue.campsites.ids
end