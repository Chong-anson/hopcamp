json.extract! venue, :id, :name, :description, :lat, :lng

json.photo_url url_for(venue.photo) if venue.photo.attached?