import JerseyProduct from '../assets/img/jerseyHero.png';
import JerseyProduct2 from '../assets/img/jerseyHero2.png';

// Define the data types separately
export const ProductsTypes = {
  id: 'string',
  title: 'string',
  description: 'string',
  image: 'string',
  price: 'number'
};

// Define the products data
export const Products = [
  {
    id: "1", // String
    title: 'Jersey A', // String
    description: 'High-quality jersey for sports lovers.', // String
    image: JerseyProduct2.src, // String (image path)
    price: 30, // Number
   
  },
  {
    id: "2", // String
    title: 'Jersey B', // String
    description: 'Comfortable jersey for everyday wear.', // String
    image: JerseyProduct.src, // String (image path)
    price: 25, // Number

  },
  {
    id: "3", // String
    title: 'Jersey C', // String
    description: 'Stylish jersey with breathable fabric.', // String
    image: JerseyProduct2.src, // String (image path)
    price: 28, // Number

  },
  {
    id: "4", // String
    title: 'Jersey D', // String
    description: 'Durable jersey perfect for outdoor activities.', // String
    image: JerseyProduct.src, // String (image path)
    price: 32, // Number

  },
  {
    id: "5", // String
    title: 'Jersey E', // String
    description: 'Classic jersey design, suitable for all sports.', // String
    image: JerseyProduct2.src, // String (image path)
    price: 27, // Number

  },
  {
    id: "6", // String
    title: 'Jersey F', // String
    description: 'Trendy jersey with modern aesthetics.', // String
    image: JerseyProduct.src, // String (image path)
    price: 35, // Number

  },
  {
    id: "7", // String
    title: 'Jersey G', // String
    description: 'Lightweight jersey for maximum comfort.', // String
    image: JerseyProduct2.src, // String (image path)
    price: 29, // Number

  },
  {
    id: "8", // String
    title: 'Jersey H', // String
    description: 'Functional jersey designed for performance.', // String
    image: JerseyProduct.src, // String (image path)
    price: 33, // Number
 
  },
  {
    id: "9", // String
    title: 'Jersey I', // String
    description: 'Premium jersey for serious athletes.', // String
    image: JerseyProduct2.src, // String (image path)
    price: 40, // Number

  },
  {
    id: "10", // String
    title: 'Jersey J', // String
    description: 'Classic jersey, perfect for team sports.', // String
    image: JerseyProduct.src, // String (image path)
    price: 26, // Number

  },
  {
    id: "11", // String
    title: 'Jersey K', // String
    description: 'Classic jersey with a unique design.', // String
    image: JerseyProduct.src, // String (image path)
    price: 26, // Number
   
  },
];

