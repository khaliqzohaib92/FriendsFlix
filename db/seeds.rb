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

video1 = Video.create(title:"Mission: Impossible - Fallout", description:"Mission: Impossible is a series of American action spy films both based on and a follow-on from the television series of the same name created by Bruce Geller. The series is co-produced by and stars Tom Cruise, whose character is Ethan Hunt, an agent of the Impossible Missions Force.", year:2018, video_type: "movies", runtime: (90*60), video_rating: "7", content_rating: "PG-13")
video2 = Video.create(title:"SuperFly", description:"Cocaine kingpin Youngblood Priest realizes that it's time to get out of the game after surviving a violent attack from a crazed rival. Hoping for one last score, Priest and his partner travel to Mexico to arrange a deal. ", year:2018, video_type:  "movies", runtime: (60*60), video_rating: "5", content_rating: "PG-13")
video3 = Video.create(title:"Boundaries", description:"Laura is a well-meaning single mother who is forced to drive her estranged pot-dealing father, Jack, from Texas to California, with her troubled son Henry along for the ride. While Jack uses Henry and the road trip to help him distribute his copious supply of marijuana, Laura finally confronts Leonard - her dead-beat ex-husband.", year:2018, video_type:  "movies", runtime: (120*60), video_rating: "6", content_rating: "PG-10")
video4 = Video.create(title:"Deadpool 2", description:"Wisecracking mercenary Deadpool meets Russell, an angry teenage mutant who lives at an orphanage. When Russell becomes the target of Cable -- a genetically enhanced soldier from the future -- Deadpool realizes that he'll need some help saving the boy from such a superior enemy.", year:2018, video_type:  "movies", runtime: (100*60), video_rating: "6", content_rating: "PG-13")
video5 = Video.create(title:"Fantastic Four - Rise of the Silver Surfer", description:"Reed (Ioan Gruffudd), Susan (Jessica Alba), Johnny (Chris Evans) and Ben (Michael Chiklis) face an intergalactic messenger who has arrived to prepare Earth for its destruction. While the enigmatic being wreaks havoc around the world, the heroic quartet must also contend with the unexpected return of their enemy, Victor Von Doom.", year:2007, video_type:  "movies", runtime: (80*60), video_rating: "5", content_rating: "PG-11")
video6 = Video.create(title:"The Bourne Ultimatum", description:"A former CIA assassin continues his quest to fill in memory gaps. When a `Guardian' reporter stumbles onto his trail, the man spies his chance to blow the Blackbriar black-ops brigade wide open. With some very powerful people intent on keeping their skeletons buried", year:2007, video_type:  "movies", runtime: (80*60), video_rating: "4.5", content_rating: "PG-13")

trending = Category.create(title:"Trending")
most_popular = Category.create(title:"Most Popular")
top_friends_flix = Category.create(title:"Top Friend Flix")
top_action = Category.create(title:"Top Action")
top_thriller = Category.create(title:"Top Thriller")

Categorieslink.create(video_id: video2.id, category_id: trending.id)
Categorieslink.create(video_id: video1.id, category_id: trending.id)
Categorieslink.create(video_id: video4.id, category_id: trending.id)
Categorieslink.create(video_id: video3.id, category_id: trending.id)
Categorieslink.create(video_id: video6.id, category_id: trending.id)
Categorieslink.create(video_id: video5.id, category_id: trending.id)
Categorieslink.create(video_id: video3.id, category_id: trending.id)
Categorieslink.create(video_id: video6.id, category_id: trending.id)
Categorieslink.create(video_id: video5.id, category_id: trending.id)
Categorieslink.create(video_id: video3.id, category_id: trending.id)



Categorieslink.create(video_id: video3.id, category_id: most_popular.id)
Categorieslink.create(video_id: video6.id, category_id: most_popular.id)
Categorieslink.create(video_id: video6.id, category_id: most_popular.id)
Categorieslink.create(video_id: video5.id, category_id: most_popular.id)
Categorieslink.create(video_id: video3.id, category_id: most_popular.id)
Categorieslink.create(video_id: video2.id, category_id: most_popular.id)
Categorieslink.create(video_id: video1.id, category_id: most_popular.id)
Categorieslink.create(video_id: video4.id, category_id: most_popular.id)
Categorieslink.create(video_id: video5.id, category_id: most_popular.id)
Categorieslink.create(video_id: video3.id, category_id: most_popular.id)



Categorieslink.create(video_id: video3.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: video6.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: video5.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: video2.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: video1.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: video4.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: video3.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: video6.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: video5.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: video3.id, category_id: top_friends_flix.id)


Categorieslink.create(video_id: video6.id, category_id: top_action.id)
Categorieslink.create(video_id: video5.id, category_id: top_action.id)
Categorieslink.create(video_id: video3.id, category_id: top_action.id)
Categorieslink.create(video_id: video6.id, category_id: top_action.id)
Categorieslink.create(video_id: video2.id, category_id: top_action.id)
Categorieslink.create(video_id: video1.id, category_id: top_action.id)
Categorieslink.create(video_id: video4.id, category_id: top_action.id)
Categorieslink.create(video_id: video3.id, category_id: top_action.id)
Categorieslink.create(video_id: video5.id, category_id: top_action.id)
Categorieslink.create(video_id: video3.id, category_id: top_action.id)


Categorieslink.create(video_id: video6.id, category_id: top_thriller.id)
Categorieslink.create(video_id: video5.id, category_id: top_thriller.id)
Categorieslink.create(video_id: video3.id, category_id: top_thriller.id)
Categorieslink.create(video_id: video6.id, category_id: top_thriller.id)
Categorieslink.create(video_id: video4.id, category_id: top_thriller.id)
Categorieslink.create(video_id: video3.id, category_id: top_thriller.id)
Categorieslink.create(video_id: video5.id, category_id: top_thriller.id)
Categorieslink.create(video_id: video2.id, category_id: top_thriller.id)
Categorieslink.create(video_id: video1.id, category_id: top_thriller.id)
Categorieslink.create(video_id: video3.id, category_id: top_thriller.id)


# seeding video url to videos

require 'open-uri'

# thumbnail urls
mission_impossible_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/Mission_Impossible_2.jpg')
boundries_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/boundries.jpg')
bourne_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/bourne.jpg')
dead_2_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/deadpool_2.jpg')
f4_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/f4-ss-header.webp')
superfly_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/superfly_2018_poster.webp')

# videos urls
dummy_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/trailer_hd.ogv')
f4_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/Fantastic+Four+-+Rise+of+the+Silver+Surfer+-+Trailer.mp4')
bourne_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/The+Bourne+Ultimatum+-+Trailer.mp4')

# attach to videos
video1.thumbnail_url.attach(io: mission_impossible_thumb, filename: "thumb_mission_impossible.jpg")
video2.thumbnail_url.attach(io: superfly_thumb, filename: "superfly.webp")
video3.thumbnail_url.attach(io: boundries_thumb, filename: "boundries.jpg")
video4.thumbnail_url.attach(io: dead_2_thumb, filename: "dead_2.jpg")
video5.thumbnail_url.attach(io: f4_thumb, filename: "f4.webp")
video6.thumbnail_url.attach(io: bourne_thumb, filename: "bourne.jpg")


video1.video_url.attach(io: f4_video, filename: "f4_video1.mp4")
video2.video_url.attach(io: bourne_video, filename: "bourne_video.mp4")
video3.video_url.attach(io: dummy_video, filename: "dummy2.ogv")
# video4.video_url.attach(io: dummy_video, filename: "dummy3.ogv")
# video5.video_url.attach(io: f4_video, filename: "f4_video.mp4")
# video6.video_url.attach(io: bourne_video, filename:  "bourne_video2.mp4")