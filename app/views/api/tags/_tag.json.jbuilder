json.extract! tag, :id, :name, :category
json.campsites do 
    json.array! tag.campsites.ids
end