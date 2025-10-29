
```
backend/
│
├── src/
│   ├── config/
│   │   └── db.js                # MongoDB connection setup
│   │
│   ├── controllers/
│   │   ├── userController.js    # Handles user logic (signup/login)
│   │   ├── blogController.js    # Handles blog logic (create/update/get)
│   │   └── ...moreControllers.js
│   │
│   ├── models/
│   │   ├── userModel.js         # User schema
│   │   ├── blogModel.js         # Blog schema
│   │   └── ...moreModels.js
│   │
│   ├── routes/
│   │   ├── userRoutes.js        # User-related routes (/api/users)
│   │   ├── blogRoutes.js        # Blog-related routes (/api/blogs)
│   │   └── index.js             # Combines all routes
│   │
│   ├── middlewares/
│   │   ├── authMiddleware.js    # JWT verification
│   │   ├── errorMiddleware.js   # Centralized error handling
│   │   └── uploadMiddleware.js  # (Optional) File upload config
│   │
│   ├── utils/
│   │   ├── generateToken.js     # For JWT token generation
│   │   └── logger.js            # (Optional) Logging utility
│   │
│   ├── app.js                   # Express app setup (middlewares, routes)
│   └── server.js                # Entry point (starts server)
│
├── .env                         # Environment variables (DB_URI, JWT_SECRET)
├── .gitignore
├── package.json
└── README.md
```
---

## 1) .env file
We keep sensitive information.

    npm i dotenv

```env
MONGODB_URL="fgsdfgd"
```

```js
// db.js : Where we want to access
import dotenv from "dotenv"
dotenv.config()

//how to access
mongoose.connect(process.env.MONGODB_URL)
```

## 2) config folder
```js
//db.js
// Code to connect with database
```

## 3) Routes folder 
```js
//user.routes.js
```

## 4) Controllers
```js
//Functions of routes are kept here
```