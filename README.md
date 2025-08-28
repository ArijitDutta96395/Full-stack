# 🏢 Employee Management System

A comprehensive full-stack web application for managing employees, built with React on the frontend and Node.js/Express on the backend, using MySQL as the database.

![Project Status](https://img.shields.io/badge/status-active-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![React](https://img.shields.io/badge/react-%5E18.2.0-blue)
![Node.js](https://img.shields.io/badge/node.js-%5E14.0.0-green)
![Express](https://img.shields.io/badge/express-%5E4.18.2-lightgrey)
![MySQL](https://img.shields.io/badge/mysql-%5E3.6.1-orange)

## 📋 Table of Contents

- [Features](#-features)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Database Setup](#-database-setup)
- [Running the Application](#-running-the-application)
- [API Endpoints](#-api-endpoints)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

## 🌟 Features

- **🔐 Authentication System**
  - Admin login with email/password
  - Employee login with email/password
  - JWT token-based authentication
  - Protected routes for authorized access

- **👥 Employee Management**
  - Add new employees with profile pictures
  - View all employees
  - Edit employee details
  - Delete employees
  - View employee details

- **🏷️ Category Management**
  - Create employee categories
  - View all categories

- **📊 Dashboard**
  - Admin dashboard with statistics
  - Employee count visualization
  - Salary overview

- **👤 Profile Management**
  - User profile section
  - Personal information management

## 🏗️ Architecture

```
CLIENT (React)        SERVER (Node.js/Express)        DATABASE (MySQL)
     │                          │                           │
     ├─────── HTTP Requests ────┤                           │
     │                          ├────── Database Queries ───┤
     │                          │                           │
     └─────── JSON Responses ───┘                           │
```

## 🛠️ Tech Stack

### Frontend
- **React** - JavaScript library for building user interfaces
- **React Router** - Declarative routing for React
- **Bootstrap** - Frontend component library
- **Axios** - Promise based HTTP client
- **Vite** - Next generation frontend tooling

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MySQL2** - MySQL client for Node.js
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **Multer** - Middleware for handling file uploads

### Database
- **MySQL** - Relational database management system

## 📋 Prerequisites

- Node.js (v14 or higher)
- MySQL database
- npm or yarn package manager

## 🚀 Installation

### Clone the repository
```bash
git clone https://github.com/your-username/employee-management-system.git
cd employee-management-system
```

### Install frontend dependencies
```bash
cd clientside
npm install
```

### Install backend dependencies
```bash
cd ../serverside
npm install
```

## 🗄️ Database Setup

1. Create a MySQL database named `employeems`
2. Update the database configuration in `serverside/utils/db.js` with your MySQL credentials:

```javascript
const con = mysql.createConnection({
    host: "localhost",     // Your MySQL host
    user: "root",          // Your MySQL username
    password: "",          // Your MySQL password
    database: "employeems" // Your database name
})
```

3. Create the required tables:

```sql
CREATE TABLE admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    address TEXT,
    salary DECIMAL(10, 2),
    image VARCHAR(255),
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES category(id)
);
```

## ▶️ Running the Application

### Start the backend server
```bash
cd serverside
npm start
```
The server will run on http://localhost:8000

### Start the frontend development server
```bash
cd clientside
npm run dev
```
The client will run on http://localhost:5173

## 🌐 API Endpoints

### Authentication
- `POST /auth/adminlogin` - Admin login
- `POST /employee/employee_login` - Employee login
- `GET /auth/logout` - Admin logout
- `GET /employee/logout` - Employee logout
- `GET /verify` - Verify user authentication

### Admin Routes
- `GET /auth/category` - Get all categories
- `GET /auth/employee` - Get all employees
- `GET /auth/employee/:id` - Get employee by ID
- `GET /auth/admin_count` - Get admin count
- `GET /auth/employee_count` - Get employee count
- `GET /auth/salary_count` - Get total salary
- `POST /auth/add_category` - Add new category
- `POST /auth/add_employee` - Add new employee
- `PUT /auth/edit_employee/:id` - Edit employee
- `DELETE /auth/delete_employee/:id` - Delete employee

### Employee Routes
- `GET /employee/detail/:id` - Get employee details

## 📁 Project Structure

```
employee-management-system/
├── clientside/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── AddCategory.jsx
│   │   │   ├── AddEmployee.jsx
│   │   │   ├── Category.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── EditEmployee.jsx
│   │   │   ├── Employee.jsx
│   │   │   ├── EmployeeDetail.jsx
│   │   │   ├── EmployeeLogin.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── PrivateRoute.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── Start.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── serverside/
    ├── Public/
    │   └── Images/
    ├── Routes/
    │   ├── AdminRoute.js
    │   └── EmployeeRoute.js
    ├── utils/
    │   └── db.js
    ├── index.js
    └── package.json
```

## 📸 Screenshots

> Add screenshots of your application here to showcase the UI

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Bootstrap](https://getbootstrap.com/)

---

<p align="center">
  Made with ❤️ by Arijit Dutta
</p>
