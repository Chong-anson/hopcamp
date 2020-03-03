json.campsites do
    @campsites.each do | campsite | 
        json.set! campsite.id do
            json.partial! "/api/campsites/campsite", campsite: campsite
        end
    end
end

json.venues do 
    venues = Hash.new{ |h,k| h[k] = []}; 

    @campsites.each do |campsite|
        venues[campsite.venue.id] << campsite.id
    end
    venues.each do | k,v| 
        json.set! k do 
            json.array! v
        end
    end
end