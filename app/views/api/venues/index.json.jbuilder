@venues.each do |venue| 
    json.set! venue.id do 
        json.partial! "api/venues/venue", venue: venue
    end
end

