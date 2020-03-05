# Only fetch the list of tags 
@tags.each do |tag|
    json.set! tag.id do 
        json.partial! "api/tags/tag", tag: tag
    end 
end


