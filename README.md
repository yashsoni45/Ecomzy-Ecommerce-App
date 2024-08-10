

# ECOMZY-Ecommerce - Responsive Shopping Cart Summary



A responsive and dynamic shopping cart summary application built with the MERN stack and Tailwind CSS. This project showcases a fully functional cart system where users can add, remove items, and view the total amount in their cart with real-time updates. The application is designed to be responsive, providing an optimal user experience across all devices.

## Features

- **Dynamic Cart Summary**: Displays the total number of items and the total amount in the cart. The summary updates instantly as users add or remove items.
- **Responsive Design**: The cart layout adjusts beautifully across different screen sizes, from mobile devices to desktops.
- **Interactive UI**: Includes features like item removal and checkout functionality with smooth transitions and hover effects.
- **State Management**: Uses Redux Toolkit for efficient state management across the application.
- **User Notifications**: Integrated with React Toastify to provide real-time feedback on user actions like adding or removing items from the cart.

## Technologies Used

### Frontend
- **React.js**: For building the user interface.
- **Tailwind CSS**: For responsive and modern styling.
- **Redux Toolkit**: For managing the application state.
- **React Router**: For navigation and routing within the app.
- **React Toastify**: For displaying toast notifications.

### Backend
- **Node.js**: JavaScript runtime for the backend.
- **Express.js**: Web framework for building the backend API.

### Database
- **MongoDB**: NoSQL database for storing cart data.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (v14 or higher)
- MongoDB

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/study-notion.git
   cd study-notion
   ```

2. **Install dependencies** for both frontend and backend:
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory with the following environment variables:
   ```bash
   MONGO_URI=your_mongo_database_uri
   PORT=5000
   ```

4. **Run the application**:
   ```bash
   npm run dev
   ```

5. **Access the application**:
   Open your browser and go to `http://localhost:3000`.

## Usage

- **Add Items to Cart**: Browse products and click "Add to Cart" to add items to your cart.
- **View Cart Summary**: See the number of items and total amount in your cart at any time.
- **Remove Items from Cart**: Click "Remove Item" to take an item out of your cart.
- **Checkout**: Proceed to checkout when you’re ready to purchase.

## Folder Structure

```
study-notion/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── public/
│   └── ...
│
├── .env
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Author**: Yash Raj Soni
- **Email**: yashaj4549@gmail.com
- **GitHub**: [yashsoni45](https://github.com/yashsoni45)
