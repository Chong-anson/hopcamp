json.extract! tag, :id, :name, :category, :icon
json.campsites do 
    json.array! tag.campsites.ids
end