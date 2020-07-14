json.set! @mylist.id do
    json.partial! '/api/mylists/mylist', mylist: @mylist
end
