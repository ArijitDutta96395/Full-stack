# 🏢 Employee Management System

A **Full Stack Employee Management System** built with **React (Vite)**, **Node.js**, **Express**, and **MySQL**.  
It enables users to **add**, **edit**, **delete**, and **view** employee details with secure authentication and a responsive UI.

---

## 🚀 Features

### ✨ Frontend (React + Vite)
- Employee List View
- Add New Employee
- Edit Employee Details
- Delete Employee
- JWT-based Authentication (Login/Logout)
- Responsive Design with **Bootstrap 5** and **Bootstrap Icons**
- React Router v6 for Navigation
- API Communication with Axios

### ✨ Backend (Node.js + Express)
- RESTful API Endpoints
- MySQL Database Integration
- JWT-based User Authentication
- Password Encryption with bcrypt
- File Upload Support with Multer (if applicable)
- CORS Enabled
- Cookie-based Sessions

---
![Project Image 1](https://github.com/ArijitDutta96395/Full-stack/blob/main/pic1.png)
*Homepage layout showcasing navigation and featured sections* 

![Project Image 2](https://github.com/ArijitDutta96395/Full-stack/blob/main/pic2.png)
*Backend MySQL server demonstrating database and regsitered users* 


---

## 🛠️ Tech Stack

| Technology       | Purpose                     |
|------------------|-----------------------------|
| React            | Frontend UI Framework       |
| Vite             | Frontend Development & Build Tool |
| Bootstrap 5      | UI Styling                  |
| React Icons      | Icon Support                |
| React Router     | Routing                     |
| Axios            | API Requests                |
| Node.js          | Backend Runtime             |
| Express.js       | Backend Framework           |
| MySQL            | Database                    |
| bcrypt           | Password Encryption         |
| jsonwebtoken     | Token Authentication        |
| multer           | File Uploads (Optional)     |
| nodemon          | Auto-reload Backend         |

---

## ⚙️ Installation & Setup Guide (Frontend + Backend)

### ✅ Step 1: Clone Repository
```bash
git clone https://github.com/yourusername/employee-management-system.git
cd employee-management-system
```

### ✅ Step 2: Backend Setup (Node.js + Express)
```bash
cd serverside
npm install
```

Configure MySQL Database:
Edit your DB config file (db.js or equivalent).

Sample .env file (Backend):

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=employee_db
JWT_SECRET=your_jwt_secret
```

Start Backend Server:
```bash
npm start
```

### ✅ Step 3: Frontend Setup (React + Vite)
```bash
cd ../clientside
npm install
```

Start Frontend Development Server:
```bash
npm run dev
```

---
### 📄 Available Scripts

👉 Frontend (React + Vite)
• npm run dev → Start Dev Server

• npm run build → Build Production Files

• npm run preview → Preview Production Build

• npm run lint → Run Linting
---
👉 Backend (Node.js + Express)
• npm start → Start Server (with Nodemon)

---

### 🔒 Authentication
• JWT (JSON Web Tokens) for API Authentication

• bcrypt for Password Hashing

---
## 👨‍💻 Author
**Arijit Dutta**

---

## 📝 License
This project is licensed under the **MIT License**.

---
