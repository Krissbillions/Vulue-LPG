# Vulue Project 🚀

A responsive landing page + login/waitlist flow built with **React**, **Vite**, and **Tailwind CSS**.

## 📂 Project Structure
```
Vulue_LPG/
├── public/
│   └── assets/          # Static images and assets
├── src/
│   ├── assets/          # Imported images (optional)
│   ├── App.jsx          # Main router setup
│   ├── Main.jsx         # Landing page
│   ├── Login.jsx        # Login page (Admins only)
│   ├── Waitlist.jsx     # Join Wait-list page
│   ├── index.css        # Global styles
│   └── main.jsx         # React entry
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## ⚙️ Setup Instructions

1. **Clone or unzip the project**
   ```bash
   unzip Vulue_LPG.zip
   cd Vulue_LPG
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server** (on port **5000**)
   ```bash
   npm run dev
   ```
   Open 👉 [http://localhost:5000](http://localhost:5000)

4. **Build for production**
   ```bash
   npm run build
   npm run preview
   ```

## 🔐 Login Logic

- Only **Vulue Admins** with valid credentials can log in.  
- Non-admin users will be redirected to **Join our Wait-list** page to enter:
  - First name  
  - Surname  
  - Email  

Both the login and wait-list pages share the same modern UI aesthetics.

## 🛠 Tech Stack

- **React 18** (with Vite)  
- **Tailwind CSS** (utility-first styling)  
- **PostCSS + Autoprefixer**  
- **React Router** (for navigation between Landing, Login, Wait-list)

## ✨ Features

- Fully **responsive design** (mobile → desktop).  
- Landing page links like **Get Started / Login** navigate to the **Login page**.  
- Protected Admin Login → redirects non-admins to **Wait-list form**.  
- Assets organized in `public/assets/` for clean imports.  
