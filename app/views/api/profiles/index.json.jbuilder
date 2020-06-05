@profiles.each do |profile|
    # //degbuuger
    json.set! profile.id do
        json.partial! 'api/profiles/profile', profile: profile
    end
end