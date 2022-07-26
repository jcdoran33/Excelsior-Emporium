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
      image: '',
      category: categories[0]._id,
      price: 20000.00,
      quantity: 10
    },
    {
      name: "Lightning Bolt",
      description:
        "Thor's newly stolen weapon of choice from Zues",
      image: '',
      category: categories[0]._id,
      price: 50000.00,
      quantity: 5
    },
    {
      name: 'Stormbreaker',
      category: categories[0]._id,
      description:
        "Thor's new axe",
      image: '',
      price: 10000.00,
      quantity: 15
    },
    {
      name: 'Ironman Suit',
      category: categories[1]._id,
      description:
        "Mr.Stark's most technically sound version of his suit yet",
      image: '',
      price: 75000.00,
      quantity: 20
    },
    {
      name: 'Jarvis AI System',
      category: categories[1]._id,
      description:
        "Iron Man's AI system",
      image: '',
      price: 100000.00,
      quantity: 10
    },
    {
      name: 'Physics Lesson with Mr. Stark',
      category: categories[1]._id,
      description:
        "One on one physics lesson with the most brilliant man of his time",
      image: '',
      price: 50000.00,
      quantity: 50
    },
    {
      name: 'Stark Industries Gift Card',
      category: categories[1]._id,
      description:
        "Gift card valued at $500 to use at the one and only Stark Industries Gift Shop",
      image: '',
      price: 500.00,
      quantity: 1000
    },
    {
      name: 'Shield',
      category: categories[2]._id,
      description:
        "Equally useful for offense and defense, this shield of Proto-Adamantium and Vibranium provides endless fun",
      image: '',
      price: 50000.00,
      quantity: 50
    },
    {
      name: 'Suit',
      category: categories[2]._id,
      description:
        "A striking look for any occassion, this carbon polymer suit is resistant to damage and feature the classic red, white, and blue color scheme",
      image: '',
      price: 25000.00,
      quantity: 100
    },
    {
      name: 'Vial of Super Soldier Serum',
      category: categories[2]._id,
      description:
        "The stuff that turned Steve Rogers into Captain America as we know him, this serum is a one of a kind formulation and in very limited supply",
      image: '',
      price: 500000.00,
      quantity: 25
    },
    {
      name: 'Time Stone',
      category: categories[3]._id,
      description:
        "One of the six Infinity Stones, this stone predates the universe and represents time",
      image: '',
      price: 250000.00,
      quantity: 50
    },
    {
      name: 'Soul Stone',
      category: categories[3]._id,
      description:
        "One of the six Infinity Stones, this stone represents the element of soul",
      image: '',
      price: 250000.00,
      quantity: 50
    },
    {
      name: 'Reality Stone',
      category: categories[3]._id,
      description:
        "One of the six Infinity Stones, the Reality Stone is liquified into a dark red liquid called the Aether, and represents the element of reality",
      image: '',
      price: 250000.00,
      quantity: 50
    },
    {
      name: 'Mind Stone',
      category: categories[3]._id,
      description:
        "One of the six Infinity Stones, this Mind Stone represents the element of the mind",
      image: '',
      price: 250000.00,
      quantity: 50
    },
    {
      name: 'Space Stone',
      category: categories[3]._id,
      description:
        "One of the six Infinity Stones, the Space Stone is housed in the Tesseract and should be handled with caution",
      image: '',
      price: 250000.00,
      quantity: 50
    },
    {
      name: 'Custom Spider Web',
      category: categories[4]._id,
      description:
        "Ruquest a custom, made-to-order decoration made with 100% authentic spider silk straight from your friendly neighborhood Spiderman",
      image: '',
      price: 2000.00,
      quantity: 1000
    },
    {
      name: "Green Goblin's Helmet",
      category: categories[4]._id,
      description:
        "",
      image: '',
      price: 20000.00,
      quantity: 100
    },
    {
      name: 'Daily Prophet Subscription',
      category: categories[4]._id,
      description:
        "",
      image: '',
      price: 50.00,
      quantity: 10000
    },
    {
      name: 'Black Panther Suit',
      category: categories[5]._id,
      description:
        "",
      image: '',
      price: 25000.00,
      quantity: 100
    },
    {
      name: 'Vibranium Cube',
      category: categories[5]._id,
      description:
        "",
      image: '',
      price: 50000.00,
      quantity: 1000
    },
    {
      name: "Shuri's Remote Driving System",
      category: categories[5]._id,
      description:
        "",
      image: '',
      price: 100000.00,
      quantity: 100
    },
    {
      name: 'Tour of Wakanda Vibranium Mine',
      category: categories[5]._id,
      description:
        "",
      image: '',
      price: 5000.00,
      quantity: 1000
    },
    {
      name: 'The Heart Shaped Herb',
      category: categories[5]._id,
      description:
        "Healing powers",
      image: '',
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
        products: [products[0]._id, products[0]._id, products[1]._id]
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
        products: [products[0]._id, products[0]._id, products[1]._id]
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
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  console.log('users seeded');

  process.exit();
});
