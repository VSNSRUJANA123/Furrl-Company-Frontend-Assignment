# Furrl HomeHunts

Furrl HomeHunts is a React-based web application designed to showcase a list of products with the ability to view detailed information for each product. The application features infinite scrolling, a navbar with wishlist and cart icons, and the ability to share product details on various social media platforms.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)


## Features

- Navbar with wishlist and cart icons.
- Product list with infinite scrolling.
- Detailed product view on item click.
- Share product details on social media (Facebook, Twitter, LinkedIn, WhatsApp).
- Mobile-first responsive design.

## Demo

You can view a live demo of the application [here](#).

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/furrl-homehunts.git
    ```

2. Navigate to the project directory:
    ```bash
    cd furrl-homehunts
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

To run the project locally:

1. Start the development server:
    ```bash
    npm start
    ```

2. Open your browser and go to `http://localhost:3000`.


## Api Integration

Testing and Debugging
Test the application in mobile view using browser developer tools. Ensure that the following features work correctly:

Infinite scroll functionality.
Navigation from the product list to the product detail page.
Social media sharing.
General user interactions.
Deployment
To deploy the application, you can use platforms like Vercel or Netlify which support React applications natively.

## Build the application:

```bash
npm run build
```
Follow the deployment instructions for your chosen platform.

Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

## Project Structure

```plaintext
furrl-homehunts/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── ProductList.js
│   │   ├── ProductItem.js
│   │   ├── ProductDetail.js
│   │   ├── ShareButton.js
│   │   └── ...
│   ├── styles/
│   │   ├── Navbar.css
│   │   ├── ProductList.css
│   │   ├── ProductItem.css
│   │   ├── ProductDetail.css
│   │   ├── ShareButton.css
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   ├── mockData.js
│   └── ...
├── .gitignore
├── README.md
└── package.json



