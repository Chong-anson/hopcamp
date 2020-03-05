json.campsites do
    @campsites.each do | campsite | 
        json.set! campsite.id do
            json.partial! "/api/campsites/campsite", campsite: campsite
        end
    end
end

# json.tags do 
#     @campsites.each do | campsite | 
#         campsite.tags.each do | tag | 
#             json.partial! "api/tags/tag", tag: tag
#         end
#     end
# end

# TODO: add booking slice for the owner to see 