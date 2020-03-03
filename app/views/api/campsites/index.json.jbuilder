json.campsites do
    @campsites.each do | campsite | 
        json.set! campsite.id do
            json.partial! "/api/campsites/campsite", campsite: campsite
        end
    end
end


json.venues do 
    venues = @campsites.map { |camp| camp.venue}
    venues.uniq.each do |venue|
        json.set! venue.id do 
            json.array! venue.campsites.ids
        end
    end
end