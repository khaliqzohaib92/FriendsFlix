# debugger
json.id video.id
json.title video.title
json.video_type video.video_type
if full_details
    json.video_url rails_blob_url(video.video_url, disposition: :inline)
    json.description video.description
    json.year video.year
    json.runtime video.runtime
    json.video_rating video.video_rating
    json.content_rating video.content_rating
    json.created_at video.created_at
end
json.categoryIds video.categories.ids 
