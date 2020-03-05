json.tags do 
    @tags.each do |tag|
        json.partial "api/tags/tag", tag: tag
    end
end

json.campsites do 
    @tags.each do |tag| 
        tag.campsites.each do |campsite| 
            json.extract! "api/campsites/campsite", campsite: campsite
        end
    end
end
