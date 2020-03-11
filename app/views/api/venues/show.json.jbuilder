json.venue do 
    json.partial! "api/venues/venue", venue: @venue
end

# json.campsites do 
#     @venue.campsites.each do |campsite| 
#         json.set! campsite.id do 
#             json.partial! "api/campsites/campsite", campsite: campsite
#         end
#     end
# end