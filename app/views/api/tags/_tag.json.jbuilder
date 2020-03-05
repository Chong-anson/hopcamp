json.extract! tag, :id, :name
json.campsites do 
    json.array! tag.campsites.ids
end