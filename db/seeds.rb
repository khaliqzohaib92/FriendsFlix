# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Video.destroy_all
Category.destroy_all
Categorieslink.destroy_all

demoUser = User.create(email:"demo@gmail.com", password: "demo123");

video1 = Video.create(title:"test", description:"desc", year:2020, video_type: "movies", runtime: 123, video_rating: "7", content_rating: "13+")
video2 = Video.create(title:"test2", description:"desc2", year:2021, video_type:  "movies", runtime: 123, video_rating: "7", content_rating: "13+")
video3 = Video.create(title:"test3", description:"desc3", year:2022, video_type:  "movies", runtime: 123, video_rating: "7", content_rating: "13+")

category1 = Category.create(title:"test title 1")
category2 = Category.create(title:"test title 2")

categories_link1 = Categorieslink.create(video_id: video1.id, category_id: category1.id)
categories_link2 = Categorieslink.create(video_id: video2.id, category_id: category1.id)
categories_link3 = Categorieslink.create(video_id: video3.id, category_id: category2.id)


# seeding video url to videos

require 'open-uri'

# create a File from the url
file = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/trailer_hd.ogv')

# attach to user
video1.video_url.attach(io: file, filename: 'test_video.ogv')