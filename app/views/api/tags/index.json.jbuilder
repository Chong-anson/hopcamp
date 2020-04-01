# Only fetch the list of tags 
if @tags
    json.array!(@tags) do |tag|
      json.partial! "api/tags/tag", tag: tag
    end
end


