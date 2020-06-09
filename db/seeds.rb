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

mission_impossible = Video.create(title:"Mission: Impossible - Fallout", description:"Mission: Impossible is a series of American action spy films both based on and a follow-on from the television series of the same name created by Bruce Geller. The series is co-produced by and stars Tom Cruise, whose character is Ethan Hunt, an agent of the Impossible Missions Force.", year:2018, video_type: "movies", runtime: (90*60), video_rating: "7", content_rating: "PG-13")
superfly = Video.create(title:"SuperFly", description:"Cocaine kingpin Youngblood Priest realizes that it's time to get out of the game after surviving a violent attack from a crazed rival. Hoping for one last score, Priest and his partner travel to Mexico to arrange a deal. ", year:2018, video_type:  "movies", runtime: (60*60), video_rating: "5", content_rating: "PG-13")
boundries = Video.create(title:"Boundaries", description:"Laura is a well-meaning single mother who is forced to drive her estranged pot-dealing father, Jack, from Texas to California, with her troubled son Henry along for the ride. While Jack uses Henry and the road trip to help him distribute his copious supply of marijuana, Laura finally confronts Leonard - her dead-beat ex-husband.", year:2018, video_type:  "movies", runtime: (120*60), video_rating: "6", content_rating: "PG-10")
deadpool_2 = Video.create(title:"Deadpool 2", description:"Wisecracking mercenary Deadpool meets Russell, an angry teenage mutant who lives at an orphanage. When Russell becomes the target of Cable -- a genetically enhanced soldier from the future -- Deadpool realizes that he'll need some help saving the boy from such a superior enemy.", year:2018, video_type:  "movies", runtime: (100*60), video_rating: "6", content_rating: "PG-13")
f4 = Video.create(title:"Fantastic Four - Rise of the Silver Surfer", description:"Reed (Ioan Gruffudd), Susan (Jessica Alba), Johnny (Chris Evans) and Ben (Michael Chiklis) face an intergalactic messenger who has arrived to prepare Earth for its destruction. While the enigmatic being wreaks havoc around the world, the heroic quartet must also contend with the unexpected return of their enemy, Victor Von Doom.", year:2007, video_type:  "movies", runtime: (80*60), video_rating: "5", content_rating: "PG-11")
bourne = Video.create(title:"The Bourne Ultimatum", description:"A former CIA assassin continues his quest to fill in memory gaps. When a `Guardian' reporter stumbles onto his trail, the man spies his chance to blow the Blackbriar black-ops brigade wide open. With some very powerful people intent on keeping their skeletons buried", year:2007, video_type:  "movies", runtime: (80*60), video_rating: "4.5", content_rating: "PG-13")
rambo = Video.create(title:"Rambo: Last Blood", description:"Vietnam War veteran John Rambo tries to find some semblance of peace by raising horses on a ranch in Arizona. He's also developed a special familial bond with a woman named Maria and her teenage granddaughter Gabriela.", year:2019, video_type:  "movies", runtime: (70*60), video_rating: "6.5", content_rating: "PG-10")
volition = Video.create(title:"Volition", description:"Vietnam War veteran John Rambo tries to find some semblance of peace by raising horses on a ranch in Arizona. He's also developed a special familial bond with a woman named Maria and her teenage granddaughter Gabriela.", year:2019, video_type:  "movies", runtime: (70*60), video_rating: "6.5", content_rating: "PG-10")
recovery= Video.create(title:"Recovery", description:"The night before their high school graduation, Jessie and her friends are guided by a 'Find My iPhone' app to recover her lost device from a house whose demented tenants are hell bent on making her a flesh and blood member of the family.", year:2019, video_type:  "movies", runtime: (70*60), video_rating: "7.5", content_rating: "PG-12")
dictator = Video.create(title:"The Dictator", description:"Gen. Aladeen (Sacha Baron Cohen) has ruled the oil-rich North African country of Wadiya since the age of six, when 97 stray bullets and a hand grenade killed his father in a hunting accident.", year:2019, video_type:  "movies", runtime: (50*60), video_rating: "6.5", content_rating: "PG-12")
xxx = Video.create(title:"XXX - Returns", description:"After coming out of self-imposed exile, daredevil operative Xander Cage (Vin Diesel) must race against time to recover a sinister weapon known as Pandora's Box, a device that controls every military satellite in the world.", year:2017, video_type:  "movies", runtime: (50*60), video_rating: "6.5", content_rating: "PG-12")
noble = Video.create(title:"Noble", description:"Christina Noble overcomes the harsh difficulties of her childhood in Ireland to discover her destiny on the streets of Saigon.", year:2018, video_type:  "movies", runtime: (50*60), video_rating: "6.5", content_rating: "PG-12")

trending = Category.create(title:"Trending")
most_popular = Category.create(title:"Most Popular")
top_friends_flix = Category.create(title:"Top Friend Flix")
top_action = Category.create(title:"Top Action")
top_thriller = Category.create(title:"Top Thriller")

Categorieslink.create(video_id: superfly.id, category_id: trending.id)
Categorieslink.create(video_id: mission_impossible.id, category_id: trending.id)
Categorieslink.create(video_id: deadpool_2.id, category_id: trending.id)
Categorieslink.create(video_id: boundries.id, category_id: trending.id)
Categorieslink.create(video_id: bourne.id, category_id: trending.id)
Categorieslink.create(video_id: f4.id, category_id: trending.id)
Categorieslink.create(video_id: noble.id, category_id: trending.id)
Categorieslink.create(video_id: xxx.id, category_id: trending.id)
Categorieslink.create(video_id: dictator.id, category_id: trending.id)
Categorieslink.create(video_id: volition.id, category_id: trending.id)



Categorieslink.create(video_id: boundries.id, category_id: most_popular.id)
Categorieslink.create(video_id: bourne.id, category_id: most_popular.id)
Categorieslink.create(video_id: volition.id, category_id: most_popular.id)
Categorieslink.create(video_id: f4.id, category_id: most_popular.id)
Categorieslink.create(video_id: rambo.id, category_id: most_popular.id)
Categorieslink.create(video_id: noble.id, category_id: most_popular.id)
Categorieslink.create(video_id: mission_impossible.id, category_id: most_popular.id)
Categorieslink.create(video_id: deadpool_2.id, category_id: most_popular.id)
Categorieslink.create(video_id: f4.id, category_id: most_popular.id)
Categorieslink.create(video_id: dictator.id, category_id: most_popular.id)


Categorieslink.create(video_id: f4.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: bourne.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: xxx.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: superfly.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: mission_impossible.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: deadpool_2.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: boundries.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: dictator.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: volition.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: rambo.id, category_id: top_friends_flix.id)


Categorieslink.create(video_id: bourne.id, category_id: top_action.id)
Categorieslink.create(video_id: f4.id, category_id: top_action.id)
Categorieslink.create(video_id: noble.id, category_id: top_action.id)
Categorieslink.create(video_id: recovery.id, category_id: top_action.id)
Categorieslink.create(video_id: superfly.id, category_id: top_action.id)
Categorieslink.create(video_id: mission_impossible.id, category_id: top_action.id)
Categorieslink.create(video_id: deadpool_2.id, category_id: top_action.id)
Categorieslink.create(video_id: xxx.id, category_id: top_action.id)
Categorieslink.create(video_id: rambo.id, category_id: top_action.id)
Categorieslink.create(video_id: boundries.id, category_id: top_action.id)

Categorieslink.create(video_id: deadpool_2.id, category_id: top_thriller.id)
Categorieslink.create(video_id: boundries.id, category_id: top_thriller.id)
Categorieslink.create(video_id: f4.id, category_id: top_thriller.id)
Categorieslink.create(video_id: superfly.id, category_id: top_thriller.id)
Categorieslink.create(video_id: noble.id, category_id: top_thriller.id)
Categorieslink.create(video_id: xxx.id, category_id: top_thriller.id)
Categorieslink.create(video_id: noble.id, category_id: top_thriller.id)
Categorieslink.create(video_id: volition.id, category_id: top_thriller.id)
Categorieslink.create(video_id: dictator.id, category_id: top_thriller.id)
Categorieslink.create(video_id: bourne.id, category_id: top_thriller.id)

# seeding video url to videos

require 'open-uri'

# thumbnail urls
mission_impossible_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/Mission_Impossible_2.jpg')
boundries_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/boundries.jpg')
bourne_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/bourne.jpg')
dead_2_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/deadpool_2.jpg')
f4_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/f4-ss-header.webp')
superfly_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/superfly.jpg')
noble_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/noble.jpg')
recovery_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/recovery.jpg')
xxx_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/xxx.jpg')
volition_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/volition.jpg')
dictator_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/dictator-movie-clip1.jpg')
rambo_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/rambo.jpg')

# videos urls
f4_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/fantasticfour-tlr1_h480p.mp4')
bourne_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/jasonbourne-usca-biggame_h480p.mp4')
mission_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/mission-impossible-fallout-big-game-spot_h480p.mp4')
boundries_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/boundaries-clip-1_h480p.mp4')
dead_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/deadpool-2-clip-1_h480p.mp4')
superfly_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/superfly-trailer-1_h480p.mp4')
noble_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/noble-tlr1_h480p.mp4')
recovery_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/recovery-trailer-1_h480p.mp4')
xxx_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/xxx-return-of-xander-cage-clip-1_h480p.mp4')
dictator_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/thedictator-sbspot_h480p.mp4')
volition_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/volition-trailer-1_h480p.mp4')
rambo_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/rambo-tlr2_h480p.mp4')

# attach thumbnails to videos
mission_impossible.thumbnail_url.attach(io: mission_impossible_thumb, filename: "thumb_mission_impossible.jpg")
superfly.thumbnail_url.attach(io: superfly_thumb, filename: "superfly.webp")
boundries.thumbnail_url.attach(io: boundries_thumb, filename: "boundries.jpg")
deadpool_2.thumbnail_url.attach(io: dead_2_thumb, filename: "dead_2.jpg")
f4.thumbnail_url.attach(io: f4_thumb, filename: "f4.webp")
bourne.thumbnail_url.attach(io: bourne_thumb, filename: "bourne.jpg")
recovery.thumbnail_url.attach(io: recovery_thumb, filename: "recovery.jpg")
xxx.thumbnail_url.attach(io: xxx_thumb, filename: "xxx.jpg")
volition.thumbnail_url.attach(io: volition_thumb, filename: "volition.jpg")
rambo.thumbnail_url.attach(io: rambo_thumb, filename: "rambo.jpg")
dictator.thumbnail_url.attach(io: dictator_thumb, filename: "dictator.jpg")
noble.thumbnail_url.attach(io: noble_thumb, filename: "noble.jpg")


mission_impossible.video_url.attach(io: mission_video, filename: "mission.mp4")
superfly.video_url.attach(io: superfly_video, filename: "superfly_video.mp4")
boundries.video_url.attach(io: boundries_video, filename: "boundries.mp4")
deadpool_2.video_url.attach(io: dead_video, filename: "dead.mp4")
f4.video_url.attach(io: f4_video, filename: "f4123.mp4")
bourne.video_url.attach(io: bourne_video, filename: "bourne.mp4")
recovery.video_url.attach(io: recovery_video, filename: "recovery.mp4")
xxx.video_url.attach(io: xxx_video, filename: "xxx.mp4")
volition.video_url.attach(io: volition_video, filename: "volition.mp4")
rambo.video_url.attach(io: rambo_video, filename: "rambo.mp4")
dictator.video_url.attach(io: dictator_video, filename: "dictator.mp4")
noble.video_url.attach(io: noble_video, filename: "noble.mp4")
# deadpool_2.video_url.attach(io: dummy_video, filename: "dummy3.ogv")
# f4.video_url.attach(io: f4_video, filename: "f4_video.mp4")
# bourne.video_url.attach(io: bourne_video, filename:  "bourne_video2.mp4")