json.set! @video.id do
    json.partial! '/api/mylists/mylist', mylsit: @mylist
end
