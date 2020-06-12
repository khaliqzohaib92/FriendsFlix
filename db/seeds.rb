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
Genre.destroy_all
Genreslink.destroy_all

demoUser = User.create(email:"demo@gmail.com", password: "demo123");


# movies----------------------------------------------------------------------

mission_impossible = Video.create(title:"Mission: Impossible - Fallout", description:"Mission: Impossible is a series of American action spy films both based on and a follow-on from the television series of the same name created by Bruce Geller. The series is co-produced by and stars Tom Cruise, whose character is Ethan Hunt, an agent of the Impossible Missions Force.", year:2018, video_type: "movies", runtime: (90*60), video_rating: "7", content_rating: "PG-13")
superfly = Video.create(title:"Superfly", description:"Cocaine kingpin Youngblood Priest realizes that it's time to get out of the game after surviving a violent attack from a crazed rival. Hoping for one last score, Priest and his partner travel to Mexico to arrange a deal. ", year:2018, video_type:  "movies", runtime: (60*60), video_rating: "5", content_rating: "PG-13")
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
family_man = Video.create(title:"A Family Man", description:"A Family Man is a 2016 American drama film directed by Mark Williams, in his directorial debut, and written by Bill Dubuque.", year:2016, video_type:  "movies", runtime: (50*60), video_rating: "6.5", content_rating: "PG-12")
close_range = Video.create(title:"Close Range", description:"From the Pulitzer Prize-winning and bestselling author of The Shipping News and Accordion Crimes comes one of the most celebrated short story collections ...", year:2018, video_type:  "movies", runtime: (50*60), video_rating: "6.5", content_rating: "PG-12")
focus = Video.create(title:"Focus", description:"Nicky (Will Smith), a veteran con artist, takes a novice named Jess (Margot Robbie) under his wing. While Nicky teaches Jess the tricks of the trade, the pair become romantically involved; but, when Jess gets uncomfortably close, Nicky ends their relationship.", year:2018, video_type:  "movies", runtime: (50*60), video_rating: "6.5", content_rating: "PG-12")
wild_card = Video.create(title:"Wild Card", description:"A bodyguard (Jason Statham) goes after the sadistic thug who beat his friend, only to find that the object of his wrath is the son of a powerful mob boss.", year:2018, video_type:  "movies", runtime: (50*60), video_rating: "6.5", content_rating: "PG-12")
battle_drone = Video.create(title:"Battle Drone", description:"A highly skilled team of mercenaries arrive in a disused industrial complex for a new mission. After exploring the empty buildings, they find out they are being used to test a small army of heavily armed robots.", year:2018, video_type:  "movies", runtime: (50*60), video_rating: "6.5", content_rating: "PG-12")
top_guns = Video.create(title:"Top Guns", description:"Top Gun is a 1986 American action drama film directed by Tony Scott, and produced by Don Simpson and Jerry Bruckheimer, in association with Paramount ..", year:2018, video_type:  "movies", runtime: (50*60), video_rating: "6.5", content_rating: "PG-12")
james_bond = Video.create(title:"James Bond", description:"No Time to Die is a forthcoming British spy film and the twenty-fifth instalment in the James ... No Time to Die was originally scheduled for release in April 2020, but was postponed worldwide due to the COVID-19 pandemic. It is now scheduled ...", year:2018, video_type:  "movies", runtime: (50*60), video_rating: "6.5", content_rating: "PG-12")
survive_night = Video.create(title:"Survive The Night", description:"A doctor and his family are held hostage by a wounded gunman and his unhinged brother.", year:2018, video_type:  "movies", runtime: (50*60), video_rating: "6.5", content_rating: "PG-12")
under_water = Video.create(title:"Under Water", description:"Disaster strikes more than six miles below the ocean surface when water crashes through the walls of a drilling station. Led by their captain, the survivors realize that their only hope is to walk across the sea floor to reach the main part of the facility. But they soon find themselves in a fight f…", year:2018, video_type:  "movies", runtime: (50*60), video_rating: "6.5", content_rating: "PG-12")
seven = Video.create(title:"7500", description:"A pilot fights to maintain control of his airliner as terrorists storm the cockpit.", year:2018, video_type:  "movies", runtime: (50*60), video_rating: "6.5", content_rating: "PG-12")

trending = Category.create(title:"Trending")
most_popular = Category.create(title:"Most Popular")
top_friends_flix = Category.create(title:"Top Friend Flix")
top_action = Category.create(title:"Top Action")
top_thriller = Category.create(title:"Top Thriller")


Categorieslink.create(video_id: family_man.id, category_id: trending.id)
Categorieslink.create(video_id: close_range.id, category_id: trending.id)
Categorieslink.create(video_id: focus.id, category_id: trending.id)
Categorieslink.create(video_id: wild_card.id, category_id: trending.id)
Categorieslink.create(video_id: battle_drone.id, category_id: trending.id)
Categorieslink.create(video_id: top_guns.id, category_id: trending.id)
Categorieslink.create(video_id: james_bond.id, category_id: trending.id)
Categorieslink.create(video_id: survive_night.id, category_id: trending.id)
Categorieslink.create(video_id: under_water.id, category_id: trending.id)
Categorieslink.create(video_id: seven.id, category_id: trending.id)
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
Categorieslink.create(video_id: family_man.id, category_id: most_popular.id)
Categorieslink.create(video_id: close_range.id, category_id: most_popular.id)
Categorieslink.create(video_id: focus.id, category_id: most_popular.id)
Categorieslink.create(video_id: wild_card.id, category_id: most_popular.id)
Categorieslink.create(video_id: battle_drone.id, category_id: most_popular.id)
Categorieslink.create(video_id: top_guns.id, category_id: most_popular.id)
Categorieslink.create(video_id: james_bond.id, category_id: most_popular.id)
Categorieslink.create(video_id: survive_night.id, category_id: most_popular.id)
Categorieslink.create(video_id: under_water.id, category_id: most_popular.id)
Categorieslink.create(video_id: seven.id, category_id: most_popular.id)


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
Categorieslink.create(video_id: family_man.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: close_range.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: focus.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: wild_card.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: battle_drone.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: top_guns.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: james_bond.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: survive_night.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: under_water.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: seven.id, category_id: top_friends_flix.id)


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
Categorieslink.create(video_id: family_man.id, category_id: top_action.id)
Categorieslink.create(video_id: close_range.id, category_id: top_action.id)
Categorieslink.create(video_id: focus.id, category_id: top_action.id)
Categorieslink.create(video_id: wild_card.id, category_id: top_action.id)
Categorieslink.create(video_id: battle_drone.id, category_id: top_action.id)
Categorieslink.create(video_id: top_guns.id, category_id: top_action.id)
Categorieslink.create(video_id: james_bond.id, category_id: top_action.id)
Categorieslink.create(video_id: survive_night.id, category_id: top_action.id)
Categorieslink.create(video_id: under_water.id, category_id: top_action.id)
Categorieslink.create(video_id: seven.id, category_id: top_action.id)

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
Categorieslink.create(video_id: family_man.id, category_id: top_thriller.id)
Categorieslink.create(video_id: close_range.id, category_id: top_thriller.id)
Categorieslink.create(video_id: focus.id, category_id: top_thriller.id)
Categorieslink.create(video_id: wild_card.id, category_id: top_thriller.id)
Categorieslink.create(video_id: battle_drone.id, category_id: top_thriller.id)
Categorieslink.create(video_id: top_guns.id, category_id: top_thriller.id)
Categorieslink.create(video_id: james_bond.id, category_id: top_thriller.id)
Categorieslink.create(video_id: survive_night.id, category_id: top_thriller.id)
Categorieslink.create(video_id: under_water.id, category_id: top_thriller.id)
Categorieslink.create(video_id: seven.id, category_id: top_thriller.id)

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
family_man_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/more_movies_data/family+man.jpg')
close_range_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/more_movies_data/close_range.jpg')
focus_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/more_movies_data/focus.jpg')
wild_card_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/more_movies_data/wild_card.jpg')
battle_drone_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/more_movies_data/battle+drone.jpg')
top_guns_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/more_movies_data/top+guns.jpg')
james_bond_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/more_movies_data/james+bond.jpg')
survive_night_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/more_movies_data/survive+the+night.jpg')
under_Water_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/more_movies_data/underwater.webp')
seven_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/more_movies_data/7500.jpg')

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
family_man_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/more_movies_data/family+man.mp4')
close_range_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/more_movies_data/close+range.mp4')
focus_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/more_movies_data/james+bond.mp4')
wild_card_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/more_movies_data/wild+card.mp4')
battle_drone_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/more_movies_data/battle+dron.mp4')
top_guns_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/more_movies_data/top+guns.mp4')
james_bond_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/more_movies_data/james+bond.mp4')
survive_night_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/more_movies_data/survive+the+night.mp4')
under_Water_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/more_movies_data/underwater.mp4')
seven_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/more_movies_data/7500.mp4')

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
family_man.thumbnail_url.attach(io: family_man_thumb, filename: "family.jpg")
close_range.thumbnail_url.attach(io: close_range_thumb, filename: "close.jpg")
focus.thumbnail_url.attach(io: focus_thumb, filename: "focus.jpg")
wild_card.thumbnail_url.attach(io: wild_card_thumb, filename: "wildcard.jpg")
battle_drone.thumbnail_url.attach(io: battle_drone_thumb, filename: "battle.jpg")
top_guns.thumbnail_url.attach(io: top_guns_thumb, filename: "topguns.jpg")
james_bond.thumbnail_url.attach(io: james_bond_thumb, filename: "jamesbond.jpg")
survive_night.thumbnail_url.attach(io: survive_night_thumb, filename: "survive.jpg")
under_water.thumbnail_url.attach(io: under_Water_thumb, filename: "undewate.jpg")
seven.thumbnail_url.attach(io: seven_thumb, filename: "seven.jpg")
noble.thumbnail_url.attach(io: noble_thumb, filename: "noble.jpg")


# attach video urls to videos
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
family_man.video_url.attach(io: family_man_video, filename: "family.mp4")
close_range.video_url.attach(io: close_range_video, filename: "close.mp4")
focus.video_url.attach(io: focus_video, filename: "focus.mp4")
wild_card.video_url.attach(io: wild_card_video, filename: "wild.mp4")
battle_drone.video_url.attach(io: battle_drone_video, filename: "battle.mp4")
top_guns.video_url.attach(io: top_guns_video, filename: "topguns.mp4")
james_bond.video_url.attach(io: james_bond_video, filename: "james.mp4")
survive_night.video_url.attach(io: survive_night_video, filename: "survive.mp4")
seven.video_url.attach(io: seven_video, filename: "seven.mp4")
noble.video_url.attach(io: noble_video, filename: "noble.mp4")
# deadpool_2.video_url.attach(io: dummy_video, filename: "dummy3.ogv")
# f4.video_url.attach(io: f4_video, filename: "f4_video.mp4")
# bourne.video_url.attach(io: bourne_video, filename:  "bourne_video2.mp4")

# tvshows--------------------------------------------------------------------------------------------------------------------------------
# videos
legacies = Video.create(title:"Legacies", description:"The town of Mystic Falls has a new generation of protectors in this spin-off of The Vampire Diaries and The Originals. The Salvatore School for the Young and Gifted is home to Klaus Mikaelson's daughter Hope, Alaric Saltzman's twins Lizzie and Josie, and other young adults who are coming of age", year:2018, video_type: "tvshows", runtime: (80*60), video_rating: "7", content_rating: "PG-13")
the_flash = Video.create(title:"The Flash", description:"At 11, Barry Allen's life changed completely when his mother died in a freak accident and his innocent father was convicted of her murder. Orphaned Barry later becomes Detective Joe West. Now a crime-scene investigator, his dedication to learn the truth about his mother's death drives him to follow", year:2014, video_type: "tvshows", runtime: (90*60), video_rating: "6", content_rating: "PG-11")
lost_in_space = Video.create(title:"Lost in Space", description:"Danger, Will Robinson! The rest of the Robinson clan should be on the lookout for danger, as well, because they are facing challenging times. It's 30 years in the future and the family has been chosen to start a new life in a space colony. On the way to what they believe will be a better world", year:2018, video_type: "tvshows", runtime: (90*60), video_rating: "7", content_rating: "PG-13")
arrow = Video.create(title:"Arrow", description:"When presumed-dead billionaire playboy Oliver Queen returns home to Starling City after five years stranded on a remote island in the Pacific, he hides the changes the experience had on him, while secretly seeking reconciliation with his ex, Laurel. By day he picks up where he left off", year:2018, video_type: "tvshows", runtime: (70*60), video_rating: "7", content_rating: "PG-13")
prison_break = Video.create(title:"Prison Break", description:"Michael Scofield is a desperate man in a desperate situation. His brother, Lincoln Burrows, was convicted of a crime he didn't commit and put on Death Row. Michael holds up a bank to get himself incarcerated alongside his brother in Fox River State Penitentiary, then sets in motion a series ", year:2018, video_type: "tvshows", runtime: (90*60), video_rating: "5", content_rating: "PG-13")
lucifer = Video.create(title:"Lucifer", description:"Based on characters created by Neil Gaiman, Sam Kieth and Mike Dringenberg, this series follows Lucifer, the original fallen angel, who has become dissatisfied with his life in hell. After abandoning his throne and retiring to Los Angeles, Lucifer indulges in his favorite things (women, wine and son", year:2018, video_type: "tvshows", runtime: (90*60), video_rating: "8", content_rating: "PG-13")



# categories---------------------------------------

Categorieslink.create(video_id: legacies.id, category_id: trending.id)
Categorieslink.create(video_id: the_flash.id, category_id: trending.id)
Categorieslink.create(video_id: lost_in_space.id, category_id: trending.id)
Categorieslink.create(video_id: arrow.id, category_id: trending.id)
Categorieslink.create(video_id: prison_break.id, category_id: trending.id)
Categorieslink.create(video_id: lucifer.id, category_id: trending.id)


Categorieslink.create(video_id: lucifer.id, category_id: most_popular.id)
Categorieslink.create(video_id: prison_break.id, category_id: most_popular.id)
Categorieslink.create(video_id: arrow.id, category_id: most_popular.id)
Categorieslink.create(video_id: lost_in_space.id, category_id: most_popular.id)
Categorieslink.create(video_id: the_flash.id, category_id: most_popular.id)
Categorieslink.create(video_id: legacies.id, category_id: most_popular.id)


Categorieslink.create(video_id: legacies.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: lucifer.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: the_flash.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: arrow.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: prison_break.id, category_id: top_friends_flix.id)
Categorieslink.create(video_id: lost_in_space.id, category_id: top_friends_flix.id)


Categorieslink.create(video_id: lost_in_space.id, category_id: top_action.id)
Categorieslink.create(video_id: prison_break.id, category_id: top_action.id)
Categorieslink.create(video_id: arrow.id, category_id: top_action.id)
Categorieslink.create(video_id: legacies.id, category_id: top_action.id)
Categorieslink.create(video_id: lucifer.id, category_id: top_action.id)
Categorieslink.create(video_id: the_flash.id, category_id: top_action.id)

Categorieslink.create(video_id: the_flash.id, category_id: top_thriller.id)
Categorieslink.create(video_id: lucifer.id, category_id: top_thriller.id)
Categorieslink.create(video_id: legacies.id, category_id: top_thriller.id)
Categorieslink.create(video_id: prison_break.id, category_id: top_thriller.id)
Categorieslink.create(video_id: lost_in_space.id, category_id: top_thriller.id)
Categorieslink.create(video_id: arrow.id, category_id: top_thriller.id)


# seeding video url to videos

# require 'open-uri'


# thumbnail urls
legacies_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/lagecies.jpg')
lucifer_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/download.jpg')
lost_in_space_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/lost_in_space.jpg')
the_flash_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/the-flash-banner-104171-1280x720.jpg')
prison_break_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/prison-break-banner.jpg')
arrow_thumb = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/Arrow-Season-7.png')


# videos urls

legacies_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/lagacies.mp4')
lucifer_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/Official+Trailer+-+Season+1+-+LUCIFER+(1).mp4')
lost_in_space_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/Lost+in+Space+-+Official+Trailer+-+Netflix.mp4')
the_flash_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/THE+FLASH+-+Season+1+Trailer+2+(FAN-MADE)+HD+1080p.mp4')
prison_break_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/Prison+Break+-+Trailer.mp4')
arrow_video = open('https://friends-flix-seed.s3.us-east-2.amazonaws.com/Arrow+Season+6+Trailer+2+(HD).mp4')


# attach thumbnails to videos
legacies.thumbnail_url.attach(io: legacies_thumb, filename: "lag.jpg")
arrow.thumbnail_url.attach(io: arrow_thumb, filename: "arr.jpg")
lucifer.thumbnail_url.attach(io: lucifer_thumb, filename: "luci.jpg")
the_flash.thumbnail_url.attach(io: the_flash_thumb, filename: "fla.jpg")
prison_break.thumbnail_url.attach(io: prison_break_thumb, filename: "prison.jpg")
lost_in_space.thumbnail_url.attach(io: lost_in_space_thumb, filename: "lost.jpg")


# attach video urls to videos
legacies.video_url.attach(io: legacies_video, filename: "luci.mp4")
arrow.video_url.attach(io: arrow_video, filename: "ow.mp4")
lucifer.video_url.attach(io: lucifer_video, filename: "fier.mp4")
the_flash.video_url.attach(io: the_flash_video, filename: "the.mp4")
prison_break.video_url.attach(io: prison_break_video, filename: "break.mp4")
lost_in_space.video_url.attach(io: lost_in_space_video, filename: "space.mp4")


# seeding genre

all_genre = Genre.create(name:"All")
horror_genre = Genre.create(name:"Horror")
comdey_genre = Genre.create(name:"Comedy")
action_genre = Genre.create(name:"Action")
thriller_genre = Genre.create(name:"Thriller")
crime_genre = Genre.create(name:"Crime")
scifi_genre = Genre.create(name:"Science fiction")


#movies
Genreslink.create(video_id: family_man.id , genre_id: all_genre.id)
Genreslink.create(video_id: close_range.id , genre_id: all_genre.id)
Genreslink.create(video_id: focus.id , genre_id: all_genre.id)
Genreslink.create(video_id: wild_card.id , genre_id: all_genre.id)
Genreslink.create(video_id: battle_drone.id , genre_id: all_genre.id)
Genreslink.create(video_id: top_guns.id , genre_id: all_genre.id)
Genreslink.create(video_id: james_bond.id , genre_id: all_genre.id)
Genreslink.create(video_id: survive_night.id , genre_id: all_genre.id)
Genreslink.create(video_id: under_water.id , genre_id: all_genre.id)
Genreslink.create(video_id: seven.id , genre_id: all_genre.id)
Genreslink.create(video_id: mission_impossible.id , genre_id: all_genre.id)
Genreslink.create(video_id: superfly.id , genre_id: all_genre.id)
Genreslink.create(video_id: boundries.id , genre_id: all_genre.id)
Genreslink.create(video_id: deadpool_2.id , genre_id: all_genre.id)
Genreslink.create(video_id: f4.id , genre_id: all_genre.id)
Genreslink.create(video_id: bourne.id , genre_id: all_genre.id)
Genreslink.create(video_id: rambo.id , genre_id: all_genre.id)
Genreslink.create(video_id: volition.id , genre_id: all_genre.id)
Genreslink.create(video_id: recovery.id , genre_id: all_genre.id)
Genreslink.create(video_id: dictator.id , genre_id: all_genre.id)
Genreslink.create(video_id: noble.id , genre_id: all_genre.id)
Genreslink.create(video_id: xxx.id , genre_id: all_genre.id)

#tvshows
Genreslink.create(video_id: arrow.id, genre_id: all_genre.id)
Genreslink.create(video_id: legacies.id, genre_id: all_genre.id)
Genreslink.create(video_id: lucifer.id, genre_id: all_genre.id)
Genreslink.create(video_id: the_flash.id, genre_id: all_genre.id)
Genreslink.create(video_id: prison_break.id, genre_id: all_genre.id)
Genreslink.create(video_id: lost_in_space.id, genre_id: all_genre.id)

#movies
Genreslink.create(video_id: volition.id , genre_id: horror_genre.id)
Genreslink.create(video_id: family_man.id , genre_id: horror_genre.id)
Genreslink.create(video_id: close_range.id , genre_id: horror_genre.id)
Genreslink.create(video_id: battle_drone.id , genre_id: horror_genre.id)
Genreslink.create(video_id: survive_night.id , genre_id: horror_genre.id)
Genreslink.create(video_id: under_water.id , genre_id: horror_genre.id)
Genreslink.create(video_id: seven.id , genre_id: horror_genre.id)
Genreslink.create(video_id: recovery.id, genre_id: horror_genre.id)

#tvshows
Genreslink.create(video_id: arrow.id, genre_id: horror_genre.id)
Genreslink.create(video_id: lucifer.id, genre_id: horror_genre.id)


#movies
Genreslink.create(video_id: deadpool_2.id , genre_id: comdey_genre.id)
Genreslink.create(video_id: dictator.id, genre_id: comdey_genre.id)
Genreslink.create(video_id: f4.id, genre_id: comdey_genre.id)
Genreslink.create(video_id: rambo.id, genre_id: comdey_genre.id)

#tvshows
Genreslink.create(video_id: the_flash.id, genre_id: comdey_genre.id)
Genreslink.create(video_id: legacies.id, genre_id: comdey_genre.id)


#movies
Genreslink.create(video_id: mission_impossible.id , genre_id: action_genre.id)
Genreslink.create(video_id: deadpool_2.id, genre_id: action_genre.id)
Genreslink.create(video_id: f4.id, genre_id: action_genre.id)
Genreslink.create(video_id: bourne.id, genre_id: action_genre.id)
Genreslink.create(video_id: rambo.id, genre_id: action_genre.id)
Genreslink.create(video_id: family_man.id , genre_id: action_genre.id)
Genreslink.create(video_id: close_range.id , genre_id: action_genre.id)
Genreslink.create(video_id: focus.id , genre_id: action_genre.id)
Genreslink.create(video_id: wild_card.id , genre_id: action_genre.id)
Genreslink.create(video_id: battle_drone.id , genre_id: action_genre.id)
Genreslink.create(video_id: top_guns.id , genre_id: action_genre.id)
Genreslink.create(video_id: james_bond.id , genre_id: action_genre.id)
Genreslink.create(video_id: survive_night.id , genre_id: action_genre.id)
Genreslink.create(video_id: under_water.id , genre_id: action_genre.id)
Genreslink.create(video_id: seven.id , genre_id: action_genre.id)
Genreslink.create(video_id: xxx.id, genre_id: action_genre.id)

#tvshows
Genreslink.create(video_id: lucifer.id, genre_id: action_genre.id)
Genreslink.create(video_id: arrow.id, genre_id: action_genre.id)
Genreslink.create(video_id: the_flash.id, genre_id: action_genre.id)
Genreslink.create(video_id: prison_break.id, genre_id: action_genre.id)

#movies
Genreslink.create(video_id: superfly.id , genre_id: thriller_genre.id)
Genreslink.create(video_id: boundries.id, genre_id: thriller_genre.id)
Genreslink.create(video_id: f4.id, genre_id: thriller_genre.id)
Genreslink.create(video_id: family_man.id , genre_id: thriller_genre.id)
Genreslink.create(video_id: close_range.id , genre_id: thriller_genre.id)
Genreslink.create(video_id: focus.id , genre_id: thriller_genre.id)
Genreslink.create(video_id: wild_card.id , genre_id: thriller_genre.id)
Genreslink.create(video_id: battle_drone.id , genre_id: thriller_genre.id)
Genreslink.create(video_id: top_guns.id , genre_id: thriller_genre.id)
Genreslink.create(video_id: james_bond.id , genre_id: thriller_genre.id)
Genreslink.create(video_id: survive_night.id , genre_id: thriller_genre.id)
Genreslink.create(video_id: under_water.id , genre_id: thriller_genre.id)
Genreslink.create(video_id: seven.id , genre_id: thriller_genre.id)
Genreslink.create(video_id: xxx.id, genre_id: thriller_genre.id)
Genreslink.create(video_id: recovery.id, genre_id: thriller_genre.id)
Genreslink.create(video_id: volition.id, genre_id: thriller_genre.id)
Genreslink.create(video_id: rambo.id, genre_id: thriller_genre.id)

#tvshows
Genreslink.create(video_id: arrow.id, genre_id: thriller_genre.id)
Genreslink.create(video_id: lucifer.id, genre_id: thriller_genre.id)
Genreslink.create(video_id: prison_break.id, genre_id: thriller_genre.id)
Genreslink.create(video_id: the_flash.id, genre_id: thriller_genre.id)
Genreslink.create(video_id: lost_in_space.id, genre_id: thriller_genre.id)



#movies
Genreslink.create(video_id: xxx.id , genre_id: crime_genre.id)
Genreslink.create(video_id: deadpool_2.id, genre_id: crime_genre.id)
Genreslink.create(video_id: f4.id, genre_id: crime_genre.id)
Genreslink.create(video_id: close_range.id , genre_id: crime_genre.id)
Genreslink.create(video_id: focus.id , genre_id: crime_genre.id)
Genreslink.create(video_id: wild_card.id , genre_id: crime_genre.id)
Genreslink.create(video_id: battle_drone.id , genre_id: crime_genre.id)
Genreslink.create(video_id: top_guns.id , genre_id: crime_genre.id)
Genreslink.create(video_id: james_bond.id , genre_id: crime_genre.id)
Genreslink.create(video_id: survive_night.id , genre_id: crime_genre.id)
Genreslink.create(video_id: seven.id , genre_id: crime_genre.id)
Genreslink.create(video_id: mission_impossible.id, genre_id: crime_genre.id)

#tvshows
Genreslink.create(video_id: arrow.id, genre_id: crime_genre.id)
Genreslink.create(video_id: prison_break.id, genre_id: crime_genre.id)
Genreslink.create(video_id: the_flash.id, genre_id: crime_genre.id)


#movies
Genreslink.create(video_id: mission_impossible.id , genre_id: scifi_genre.id)
Genreslink.create(video_id: f4.id, genre_id: scifi_genre.id)
Genreslink.create(video_id: close_range.id , genre_id: scifi_genre.id)
Genreslink.create(video_id: wild_card.id , genre_id: scifi_genre.id)
Genreslink.create(video_id: battle_drone.id , genre_id: scifi_genre.id)
Genreslink.create(video_id: top_guns.id , genre_id: scifi_genre.id)
Genreslink.create(video_id: james_bond.id , genre_id: scifi_genre.id)
Genreslink.create(video_id: under_water.id , genre_id: scifi_genre.id)
Genreslink.create(video_id: deadpool_2.id, genre_id: scifi_genre.id)

#tvshows
Genreslink.create(video_id: the_flash.id, genre_id: scifi_genre.id)
Genreslink.create(video_id: lost_in_space.id, genre_id: scifi_genre.id)