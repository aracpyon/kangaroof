# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

ActiveRecord::Base.transaction do 
  User.destroy_all
  Spot.destroy_all


  ara = User.create(email: "aracpyon@gmail.com", name: "Ara C Pyon", password: "ilovedogscats")
  akeem = User.create(email: "akeem@aa.com", name: "Akeem Nicholas", password: "helovesanimes")
  albert = User.create(email: "albert@aa.com", name: "Albert Lee", password: "secretfanofAmazon")
  phong = User.create(email: "phong@aa.com", name: "Phong Ngo", password: "smartdoody")
  jay = User.create(email: "jay@aa.com", name: "Jay Higgs", password: "myfavgirl")
  lawrence = User.create(email: "lorry@aa.com", name: "Lawrence Nicastro", password: "governmentdocument")
  paul = User.create(email: "paul@aa.com", name: "Paul Tan", password: "heissosmarthooh!")
  harry = User.create(email: "harry@aa.com", name: "Harry Zec", password: "musicianguyfromconnecticut")
  kai = User.create({email: "kai@aa.com", name: "Kai Ho", password: "Ihaveagirlfriend"})
  rich = User.create({email: "rich@aa.com", name: "Rich Lim", password: "Ajjussiinheart"})
  julian = User.create(email: "julian@aa.com", name: "Julian Knoche", password: "Croissanteverymorning")
  jesse = User.create({email: "jesse@aa.com", name: "Jesse Colligan", password: "onedayhadgreenhair"})
  jason = User.create({email: "jason@aa.com", name: "Jason Wang", password: "hassamenamewithmybrodadhubby"})
  raz = User.create({email: "raz@aa.com", name: "Raz Efron", password: "wasmypaironthe2ndday"})
  rob = User.create({email: "rob@aa.com", name: "Rob Romano", password: "saystooyoungwithoutbeard"})
  antonio = User.create({email: "antonio@aa.com", name: "Antonio Cuccu", password: "lovesfashion&books"})
  chris = User.create({email: "chris@aa.com", name: "Chris Garthright", password: "alwayssmiley!"})
  danny = User.create({email: "danny@aa.com", name: "Danny Yoo", password: "healsomakesairbnb"})
  calvin = User.create({email: "calvin@aa.com", name: "Calvin Curnuck", password: "henevergetscold"})


  
  met = Spot.create(title: "The Metropolitan Museum of Art: Night with Masters' Paintings",
                    host_id: ara.id,
                    address: "1000 5th Ave, New York, NY 10028", 
                    city: "New York",
                    lat: 40.7794, 
                    lng: 73.9632, 
                    price: 200,
                    description: "The Metropolitan Museum of Art of New York City, colloquially 'the Met', is the largest art museum in the United States. With 6,953,927 visitors to its three locations in 2018, it was the third most visited art museum in the world. Its permanent collection contains over two million works, divided among 17 curatorial departments. The main building at 1000 Fifth Avenue, along the Museum Mile on the eastern edge of Central Park in Manhattan's Upper East Side, is by area one of the world's largest art galleries. A much smaller second location, The Cloisters at Fort Tryon Park in Upper Manhattan, contains an extensive collection of art, architecture, and artifacts from medieval Europe. On March 18, 2016, the museum opened the Met Breuer museum along Madison Avenue on the Upper East Side; it extends the museum's modern and contemporary art program.")

  anime = Spot.create(title: "NYC Anime: Best Place for Anime Lovers", 
                      host_id: akeem.id, 
                      address: "429 11th Ave, New York, NY 10001",
                      city: "New York", 
                      lat: 40.7578,
                      lng: 74.0023,
                      price: 300,
                      description: "Anime NYC is an annual three-day anime convention held during November at the Jacob K. Javits Convention Center in New York City. The convention typically offers arcade games, an artist alley, concerts, manga library (Carolina Manga Library), masquerade, panels, screenings, vendors, and video and card games. Anime NYC offered 100 hours of programming in 2017. Anime NYC's organizer LeftField Media created the New York Comic Con and also runs Washington DC’s Awesome Con.")
  
  amazon = Spot.create(title: "A Greate Night with The World Biggest Commercial Website",
                       host_id: albert.id,
                       address: "410 Terry Ave N, Seattle 98109, WA",
                       city: "Seattle",
                       lat: 47.608013,
                       lng: -122.335167,
                       price: 200,
                       description: "Amazon.com, Inc., is an American multinational technology company based in Seattle that focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. It is considered one of the Big Four tech companies, along with Google, Apple, and Facebook. 
                       Amazon is known for its disruption of well-established industries through technological innovation and mass scale. It is the world's largest online marketplace, AI assistant provider, and cloud computing platform as measured by revenue and market capitalization. Amazon is the largest Internet company by revenue in the world. It is the second largest private employer in the United States and one of the world's most valuable companies."
                       )
  google_ny = Spot.create(title: "Google NYC: Stunning Office Room in Chelsea",
                          host_id: rich.id,
                          address: "111 8th Ave, New York, NY 10011", 
                          city: "New York",
                          lat: 40.7128,
                          lng: 74.0060,
                          price: 400,
                          description: "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple, and Facebook. In 2010, Google, which had previously leased space in the building contracted to purchase the entire 2,900,000-square-foot (270,000 m2) building, in a deal reported to be worth around $1.9 billion.")
  eiffel = Spot.create(title: "Eiffel Tower: Midnight in Paris",
                        host_id: julian.id,
                        address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
                        city: "Paris",
                        lat: 48.8584,
                        lng: 2.2945,
                        price: 500,
                        description: "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower. Constructed from 1887 to 1889 as the entrance to the 1889 World's Fair, it was initially criticised by some of France's leading artists and intellectuals for its design, but it has become a global cultural icon of France and one of the most recognisable structures in the world. The Eiffel Tower is the most-visited paid monument in the world; 6.91 million people ascended it in 2015.")
  timessquare = Spot.create(title: "Times Square: Crazy Night at the Center of NYC",
                            host_id: jay.id,
                            address: "Broadway, 7th Avenue, 42nd and 47th Streets",
                            city: "New York",
                            lat: 40.7580,
                            lng: 73.9855,
                            price: 200,
                            description: "Times Square is a major commercial intersection, tourist destination, entertainment center, and neighborhood in the Midtown Manhattan section of New York City, at the junction of Broadway and Seventh Avenue. Brightly lit by numerous billboards and advertisements, it stretches from West 42nd to West 47th Streets, and is sometimes referred to as 'the Crossroads of the World', 'the Center of the Universe', 'the heart of the Great White Way', and 'the heart of the world'. One of the world's busiest pedestrian areas, it is also the hub of the Broadway Theater District and a major center of the world's entertainment industry. Times Square is one of the world's most visited tourist attractions, drawing an estimated 50 million visitors annually."
                            )

#NYC
  met.photos.attach(io: open("https://kangaroof-dev.s3.amazonaws.com/NYC/met1.jpg"), filename: "met1.jpg")
  met.photos.attach(io: open("https://kangaroof-dev.s3.amazonaws.com/NYC/met2.jpg"), filename: "met2.jpg")
  met.photos.attach(io: open("https://kangaroof-dev.s3.amazonaws.com/NYC/met3.jpeg"), filename: "met3.jpeg")
  met.photos.attach(io: open("https://kangaroof-dev.s3.amazonaws.com/NYC/met4.jpg"), filename: "met4.jpg")
  met.photos.attach(io: open("https://kangaroof-dev.s3.amazonaws.com/NYC/met5.jpg"), filename: "met5.jpg")

  anime.photos.attach(io: open("https://kangaroof-dev.s3.amazonaws.com/NYC/anime1.jpeg"), filename: "anime1.jpeg")
  anime.photos.attach(io: open("https://kangaroof-dev.s3.amazonaws.com/NYC/anime2.jpg"), filename: "anime2.jpg")
  anime.photos.attach(io: open("https://kangaroof-dev.s3.amazonaws.com/NYC/anime3.jpg"), filename: "anime3.jpg")
  anime.photos.attach(io: open("https://kangaroof-dev.s3.amazonaws.com/NYC/anime4.jpg"), filename: "anime4.jpg")

  google_ny.photos.attach(io: open("https://kangaroof-dev.s3.amazonaws.com/NYC/google1.jpeg"), filename: "google1.jpeg")
  google_ny.photos.attach(io: open("https://kangaroof-dev.s3.amazonaws.com/NYC/google2.jpg"), filename: "google2.jpg")
  google_ny.photos.attach(io: open("https://kangaroof-dev.s3.amazonaws.com/NYC/google3.jpeg"), filename: "google3.jpeg")
  google_ny.photos.attach(io: open("https://kangaroof-dev.s3.amazonaws.com/NYC/google4.jpg"), filename: "google4.jpg")
  google_ny.photos.attach(io: open("https://kangaroof-dev.s3.amazonaws.com/NYC/google5.jpg"), filename: "google5.jpg")

  timessquare.photos.attach(io: open("https://kangaroof-dev.s3.amazonaws.com/NYC/ts1.jpg"), filename: "ts1.jpg")
  timessquare.photos.attach(io: open("https://kangaroof-dev.s3.amazonaws.com/NYC/ts2.jpg"), filename: "ts2.jpg")
  timessquare.photos.attach(io: open("https://kangaroof-dev.s3.amazonaws.com/NYC/ts3.jpeg"), filename: "ts3.jpeg")
  timessquare.photos.attach(io: open("https://kangaroof-dev.s3.amazonaws.com/NYC/ts4.jpg"), filename: "ts4.jpg")

  #Seattle
  amazon.photos.attach(io: open("https://kangaroof-dev.s3.amazonaws.com/Seattle/amazon1.jpg"), filename: "amazon1.jpg")
  amazon.photos.attach(io: open("https://kangaroof-dev.s3.amazonaws.com/Seattle/amazon2.jpg"), filename: "amazon2.jpg")
  amazon.photos.attach(io: open("https://kangaroof-dev.s3.amazonaws.com/Seattle/amazon3.jpg"), filename: "amazon3.jpg")
  amazon.photos.attach(io: open("https://kangaroof-dev.s3.amazonaws.com/Seattle/amazon4.jpg"), filename: "amazon4.jpg")
  amazon.photos.attach(io: open("https://kangaroof-dev.s3.amazonaws.com/Seattle/amazon5.jpg"), filename: "amazon5.jpg")

  #Paris
  eiffel.photos.attach(io: open("https://kangaroof-dev.s3.amazonaws.com/Paris/eiffel1.jpeg"), filename: "eiffel1.jpeg")
  eiffel.photos.attach(io: open("https://kangaroof-dev.s3.amazonaws.com/Paris/eiffel2.jpg"), filename: "eiffel2.jpg")
  eiffel.photos.attach(io: open("https://kangaroof-dev.s3.amazonaws.com/Paris/eiffel3.jpg"), filename: "eiffel3.jpg")
  eiffel.photos.attach(io: open("https://kangaroof-dev.s3.amazonaws.com/Paris/eiffel4.jpg"), filename: "eiffel4.jpg")
                      
end