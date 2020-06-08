# 
json.id video.id
json.title video.title
json.videoType video.video_type
json.thumbnailUrl video.thumbnail_url.attached? ? url_for(video.thumbnail_url) : ""
# 
if full_details
    json.videoUrl  video.video_url.attached? ? url_for(video.video_url) : ""
    json.description video.description
    json.year video.year
    json.runtime video.runtime
    json.videoRating video.video_rating
    json.contentRating video.content_rating
    json.createdAt video.created_at
end
json.categoryIds video.categories.ids 
