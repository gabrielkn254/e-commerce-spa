# E-commerce - React SPA
## Description
E-commerce-spa is a smart watch store multipage app that allows users to browse, view & admin to add new products.
It is built with react, react-router with vite.

## Pages
- A home page: displays a welcome content and links with other pages.
- A shop page: displays all products.
- An admin page: allows admins to manage products.
- A single product page: displays a specific product details.

## Features
### Shop page
- Dynamically search products to filter
- Click a product card view a product in detail

### Admin Portal
- A form: allows admin to add  new products.
- A product archive list: Admin can remove a product & preview it.

### Data storage
- Since this app has no database, the projects data is stored in your browser's `localStorage`.
- It works by using your `localStorage` to store data and react states to render projects' cards.

### Component Tree
App
  ↳ HomePage
      ↳ Navbar
      ↳ HeroSection
      ↳ ProductsList
      ↳ Footer

  ↳ ShopPage
      ↳ Navbar
      ↳ SearchBar
      ↳ ProductsList
          ↳ ProductCard
          ↳ ProductDetails
      ↳ Footer
  
  ↳ AdminPortal
      ↳ Navbar
      ↳ AddProductForm
      ↳ ArchivesList
          ↳ ArchiveCard
      ↳ Footer

## Technologies Used
- React: Creating UI components and handling states & events.
- React Router: handling navigation.
- Vite: Build tool to enable seamless react development.
- npm: Handle all our project dependecies & modules.
- HTML5 & CSS: Semantic markup and Styling.
- Javascript: add functionality

## Getting Started
You only a web browser to run this application.

### installation
1. Clone the repository:
`git clone https://github.com/gabrielkn254/e-commerce-spa`

2. Navigate to the project directory:
`cd e-commerce-spa`

3. To run raw code
`npm run dev`

### execution
Click this link to open the deployed app
Link -> `https://gabrielkn254.github.io/e-commerce-spa/`

## License
This project is licensed under the MIT License.