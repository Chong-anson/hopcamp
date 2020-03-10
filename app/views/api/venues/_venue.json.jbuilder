json.extract! venue, :id, :name, :description

json.photo_url url_for(venue.photo) if venue.photo.attached?