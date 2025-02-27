# GTA 6 Landing Page

🚀 **Landing Page GTA 6** dibuat dengan **React.js 18.2.0**, menampilkan desain futuristik dengan **gradient ala GTA 6** dan animasi modern.

## 🎮 Fitur Utama
- 🔥 **Gradient Neon** ala GTA 6.
- 🎨 Desain responsif menggunakan **Tailwind CSS** dan **CSS3 animations**.
- 🚀 Routing menggunakan **React Router**.
- 📱 Mobile-friendly layout.

## 🛠️ Teknologi yang Digunakan
- **React.js 18.2.0**
- **React Router v6**
- **Tailwind CSS**
- **Framer Motion** (opsional untuk animasi tambahan)

## 📂 Struktur Folder
```
GTA6-LandingPage/
│── public/
│── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   ├── App.js
│   ├── index.js
│── .gitignore
│── package.json
│── README.md
```

## 🚀 Cara Install dan Jalankan
### **1. Clone Repository**
```sh
git clone https://github.com/Fijriant/GTA6-LandingPage.git
cd GTA6-LandingPage
```

### **2. Install Dependencies**
```sh
npm install
```

### **3. Jalankan Project**
```sh
npm start
```
Lalu buka **http://localhost:3000/** di browser.

## 🎨 Gradient Warna GTA 6
```css
.gta6-gradient {
    background: linear-gradient(135deg, #a833ff, #ff33a8, #33ffc4);
    background-size: 400% 400%;
    animation: gradientAnimation 5s ease infinite;
}

@keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}
```

## 🤝 Kontribusi
Jika ingin berkontribusi, silakan **fork repo ini**, buat branch baru, lalu **pull request**. 🚀🔥

## 📜 Lisensi
Proyek ini dibuat untuk keperluan edukasi dan inspirasi. Semua hak cipta GTA 6 dimiliki oleh **Rockstar Games**.

