const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Thor' },
    { name: 'Iron Man' },
    { name: 'Captain America' },
    { name: 'Thanos' },
    { name: 'Spiderman' },
    { name: 'Black Panther' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Mjolnir',
      description:
        "Thor's original hammer",
      image: 'mjolnir.jpg',
      category: categories[0]._id,
      price: 20000.00,
      quantity: 10
    },
    {
      name: "Lightning Bolt",
      description:
        "Thor's newly stolen weapon of choice from Zues",
      image: 'lightningbolt.jpg',
      category: categories[0]._id,
      price: 50000.00,
      quantity: 5
    },
    {
      name: 'Stormbreaker',
      category: categories[0]._id,
      description:
        "Thor's new axe",
      image: 'stormbreaker.jpg',
      price: 10000.00,
      quantity: 15
    },
    {
      name: 'Iron Man Suit',
      category: categories[1]._id,
      description:
        "Mr.Stark's most technically sound version of his suit yet",
      image: 'ironmansuit.jpg',
      price: 75000.00,
      quantity: 20
    },
    {
      name: 'Jarvis AI System',
      category: categories[1]._id,
      description:
        "Iron Man's AI system",
      image: 'jarvis.jpg',
      price: 100000.00,
      quantity: 10
    },
    {
      name: 'Physics Lesson with Mr. Stark',
      category: categories[1]._id,
      description:
        "One on one physics lesson with the most brilliant man of his time",
      image: 'physicslessons.jpg',
      price: 50000.00,
      quantity: 50
    },
    {
      name: 'Stark Industries Gift Card',
      category: categories[1]._id,
      description:
        "Gift card valued at $500 to use at the one and only Stark Industries Gift Shop",
      image: 'starkgiftcard.jpg',
      price: 500.00,
      quantity: 1000
    },
    {
      name: 'Captain America Shield',
      category: categories[2]._id,
      description:
        "Equally useful for offense and defense, this shield of Proto-Adamantium and Vibranium provides endless fun",
      image: 'captamericashield.jpg',
      price: 50000.00,
      quantity: 50
    },
    {
      name: 'Captain America Suit',
      category: categories[2]._id,
      description:
        "A striking look for any occassion, this carbon polymer suit is resistant to damage and feature the classic red, white, and blue color scheme",
      image: 'captamericasuit.jpg',
      price: 25000.00,
      quantity: 100
    },
    {
      name: 'Vial of Super Soldier Serum',
      category: categories[2]._id,
      description:
        "The stuff that turned Steve Rogers into Captain America as we know him, this serum is a one of a kind formulation and in very limited supply",
      image: 'superserum.jpg',
      price: 500000.00,
      quantity: 25
    },
    {
      name: 'Time Stone',
      category: categories[3]._id,
      description:
        "One of the six Infinity Stones, this stone predates the universe and represents time",
      image: 'timestone.jpg',
      price: 250000.00,
      quantity: 50
    },
    {
      name: 'Soul Stone',
      category: categories[3]._id,
      description:
        "One of the six Infinity Stones, this stone represents the element of soul",
      image: 'soulstone.jpg',
      price: 250000.00,
      quantity: 50
    },
    {
      name: 'Reality Stone',
      category: categories[3]._id,
      description:
        "One of the six Infinity Stones, the Reality Stone is liquified into a dark red liquid called the Aether, and represents the element of reality",
      image: 'realitystone.jpg',
      price: 250000.00,
      quantity: 50
    },
    {
      name: 'Mind Stone',
      category: categories[3]._id,
      description:
        "One of the six Infinity Stones, this Mind Stone represents the element of the mind",
      image: 'mindstone.jpg',
      price: 250000.00,
      quantity: 50
    },
    {
      name: 'Space Stone',
      category: categories[3]._id,
      description:
        "One of the six Infinity Stones, the Space Stone is housed in the Tesseract and should be handled with caution",
      image: 'spacestone.jpg',
      price: 250000.00,
      quantity: 50
    },
    {
      name: 'Custom Spider Web',
      category: categories[4]._id,
      description:
        "Ruquest a custom, made-to-order decoration made with 100% authentic spider silk straight from your friendly neighborhood Spiderman",
      image: 'spiderweb.jpg',
      price: 2000.00,
      quantity: 1000
    },
    {
      name: "Green Goblin's Helmet",
      category: categories[4]._id,
      description:
        "One of Spiderman's most infamous adversaries, the Green Goblin has a distinctive outfit which includes this terrifying helmet",
      image: 'greengoblinhelmet.jpg',
      price: 20000.00,
      quantity: 100
    },
    {
      name: 'Daily Bugle Subscription',
      category: categories[4]._id,
      description:
        "New York's premier newspaper, the Daily Bugle will keep you up to date on your favorite super hero's extracurricular activities",
      image: 'dailybugle.jpg',
      price: 50.00,
      quantity: 10000
    },
    {
      name: 'Black Panther Suit',
      category: categories[5]._id,
      description:
        "Worn by the King and protector of Wakanda, this special vibranium-weave suit is as durable as it is striking",
      image: 'blackpanthersuit.jpg',
      price: 25000.00,
      quantity: 100
    },
    {
      name: 'Vibranium Cube',
      category: categories[5]._id,
      description:
        "This is a cube of vibranium, the rarest and strongest material on Earth. It originally came to Earth on a meteorite that landed in Wakanda",
      image: 'vibranium.jpg',
      price: 50000.00,
      quantity: 1000
    },
    {
      name: "Shuri's Remote Driving System",
      category: categories[5]._id,
      description:
        "A next-generation remote driving system from Shuri's lab, this allows one to operate a vehicle without actually being in the vehicle",
      image: 'shuriremotedriving.jpg',
      price: 100000.00,
      quantity: 100
    },
    {
      name: 'Tour of Wakanda Vibranium Mine',
      category: categories[5]._id,
      description:
        "Take a tour of the biggest deposit and mining operation of vibranium on the planet",
      image: 'wakandamine.jpg',
      price: 5000.00,
      quantity: 1000
    },
    {
      name: 'The Heart Shaped Herb',
      category: categories[5]._id,
      description:
        "A native plant of Wakanda, this herb is rumored to give the consumer special powers and access to the ancestral plane",
      image: 'heartshapedherb.jpg',
      price: 20000.00,
      quantity: 1000
    },
  ]);
  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Kishan',
    lastName: 'Shah',
    email: 'kishan@email.com',
    password: 'pass1234',
    orders: [
      {
        products: [products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Jack',
    lastName: 'Doran',
    email: 'jack@email.com',
    password: 'pass1234',
    orders: [
      {
        products: [products[0]._id, products[15]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Alyssa',
    lastName: 'Lopez',
    email: 'alyssa@email.com',
    password: 'pass1234',
    orders: [
      {
        products: [products[4]._id]
      }
    ]
  });

  console.log('users seeded');

  process.exit();
});