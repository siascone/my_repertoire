# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Post.delete_all

u1 = User.create!(
  fname: 'Guest',
  lname: 'Guestington',
  email: 'guest.guestington@guest.com',
  username: 'guest',
  password: 'password'
)

u2 = User.create!(
  fname: 'User',
  lname: 'Usington',
  email: 'user.usington@user.com',
  username: 'username',
  password: 'password'
)

post1 = Post.create!(
  title: 'The Post with the Most',
  text: 'So much to say about this post...',
  user_id: u1.id
)
post2 = Post.create!(
  title: 'Painting landscapes',
  text: 'My top tips to painting lanscapes are...',
  user_id: u1.id
)
post3 = Post.create!(
  title: 'Music for the soul',
  text: 'Here is my favorite 10 albums of the 2010s...',
  user_id: u1.id
)
post4 = Post.create!(
  title: 'Music rocks',
  text: 'Exploring my favorite styles of music...',
  user_id: u2.id
)
post5 = Post.create!(
  title: 'Theater Folks!',
  text: 'Hey theater friends, I\'v set up a meetup for us...',
  user_id: u2.id
)