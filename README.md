# 💫 GIF Oasis: Search App (Modern UI/UX 2025)

Aplikasi pencarian GIF **Dark Mode-first** yang dikembangkan menggunakan **React.js** dan **Tailwind CSS** dengan fokus pada estetika minimalis, bersih, dan interaksi yang halus (smooth transitions), terintegrasi dengan **Giphy API**.

## ✨ Fitur Modern

- **Dark Mode Default:** Pengalaman pengguna yang nyaman dan modern.
- **Aksen Teal:** Penggunaan aksen warna cerah yang menarik (Teal/Cyan) pada UI yang gelap.
- **Micro-interactions:** Efek `hover` dan `active` yang halus pada tombol dan kartu.
- **UI Minimalis:** Header yang ringkas dan fokus utama pada konten visual GIF.
- **Loading Skeleton:** (Tinggal ditambahkan) Placeholder/spinner yang menarik.
- **Trending Gifs:** Memuat GIF populer saat pertama kali aplikasi dibuka.

## 🛠️ Tech Stack

- **React.js** – Library UI (Vite Setup)
- **Tailwind CSS** – Utility-first CSS framework (Dark Mode Class-based)
- **Giphy API** – Sumber data GIF

## 🚀 Instalasi & Setup

1. Clone repositori dan pindah ke direktori proyek:
   ```bash
   git clone [https://github.com/username/gif-oasis-app.git](https://github.com/username/gif-oasis-app.git)
   cd gif-oasis-app
   ```

````

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  **Konfigurasi API Key (PENTING):**

      - Dapatkan **API Key** dari [Giphy Developer Portal](https://developers.giphy.com/).
      - Buat file `.env.local` di root proyek dan tambahkan API Key Anda di sana:
        ```
        # .env.local
        VITE_GIPHY_API_KEY=ganti_dengan_api_key_kamu
        ```

    *(Menggunakan variabel lingkungan adalah praktik yang lebih baik daripada menempatkannya langsung di kode).*

4.  Jalankan aplikasi:

    ```bash
    npm run dev
    ```

5.  Buka browser di `http://localhost:5173`.

## 📁 Struktur Proyek

```
gif-oasis-app/
├── src/
│   ├── components/
│   │   └── GifCard.jsx   # Kartu dengan efek 3D hover
│   ├── App.jsx           # Komponen utama & logic Dark Mode
│   └── index.css         # Konfigurasi Tailwind CSS
└── .env.local            # API Key (Ignored by Git)
```

## 📝 Lisensi

Proyek ini bersifat open-source. Silakan gunakan dan modifikasi sesuai kebutuhan\!

```

---

Dengan perubahan ini, aplikasi GIF Search Anda tidak hanya fungsional tetapi juga memiliki tampilan yang modern, sesuai dengan tren UI/UX desain yang bersih dan Dark Mode-centric di tahun 2025.
```
````
