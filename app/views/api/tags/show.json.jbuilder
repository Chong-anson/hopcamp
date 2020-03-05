json.tags do 
    json.partial "api/tags/tag", tag: @tag
end 

json.campsites do 
    tag.campsites.each do |campsite| 
        json.extract! "api/campsites/campsite", campsite: campsite
    end
end