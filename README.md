🏠 Airbnb Clone — Node.js, Express, EJS, Passport
📖 Overview

This project is a clone version of Airbnb, built using Node.js, Express.js, and EJS templating.
It provides a complete web platform where users can register, log in, list properties, browse listings, and manage their profiles — similar to the real Airbnb experience.

The project demonstrates a full-stack web application with a strong focus on:

RESTful routing

User authentication and authorization

Secure session handling

Dynamic templating with EJS

Clean MVC-style structure

🚀 Features

🧭 Home & Listings Page: Browse all available listings dynamically.

🏡 Add New Listing: Authenticated users can create and manage their listings.

🔐 Authentication & Authorization:

Sign up / Log in using Passport.js (Local Strategy).

Session management with express-session.

Only logged-in users can create or edit their listings.

🖼️ EJS Templates: Dynamic and reusable UI views.

⚙️ CRUD Functionality: Create, Read, Update, and Delete listings.

💬 Flash Messages: Display success/error notifications.

💾 MongoDB: For storing users and listings data.

🌐 Responsive Design: Clean UI using Bootstrap.

🧰 Tech Stack

Frontend:

EJS

HTML5, CSS3

Bootstrap

Backend:

Node.js

Express.js

Passport.js (for authentication)

MongoDB & Mongoose

Express-Session & Connect-Flash

Authentication:

Passport Local Strategy

Encrypted passwords with bcrypt

⚙️ Installation and Setup
1. Clone the repository
git clone https://github.com/syedimran09/Airbnb.git

2. Navigate to project folder
cd Airbnb

3. Install dependencies
npm install

4. Configure environment variables

Create a .env file in the project root and add:

PORT=3000
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key

5. Run the app
npm start


App will run on:
👉 http://localhost:3000

🧩 Folder Structure
airbnb-clone/
├── views/              # EJS templates
│   ├── layouts/
│   ├── listings/
│   └── users/
├── public/             # Static assets (CSS, JS, images)
├── routes/             # Route files
├── models/             # Mongoose schemas
├── app.js              # Main app entry
├── package.json
└── README.md

🔐 Authentication Flow

User registers through /register.

Password gets hashed using bcrypt.

User logs in through /login using Passport.js LocalStrategy.

Session persists across requests using cookies.

Protected routes (like creating or editing listings) are accessible only to logged-in users.

🧠 Learning Highlights
How to structure a Node.js + Express web app using MVC.

Implementing authentication using Passport.js.

Managing sessions and authorization middleware.

Using EJS partials and layouts for reusable UI components.

Working with MongoDB and Mongoose models.
📸 Screenshots
Home Page
<img width="1878" height="867" alt="image" src="https://github.com/user-attachments/assets/1a8de201-ea60-4ae3-a6b1-89cfbe9c8bed" />
SignIn Page
<img width="1912" height="873" alt="image" src="https://github.com/user-attachments/assets/7c8bfc8f-6f28-4e64-87a4-01e54309b297" />
LoginIn Page
<img width="1917" height="867" alt="image" src="https://github.com/user-attachments/assets/87836610-e4a6-4950-8b03-59566b485dbc" />
Individual Listing Details
<img width="1892" height="731" alt="image" src="https://github.com/user-attachments/assets/b3a43e21-8d3c-4445-81fd-6c254c9eb65d" />
Reviews Section
<img width="1887" height="868" alt="image" src="https://github.com/user-attachments/assets/aa757b9a-47e5-46a7-ab3d-1f9aea63f0ff" />

👤 Author
Syed Imran.
🔗 GitHub Profile



