# ☕ TR Express Coffee - Website Profil Warung Kopi Modern

[![React](https://img.shields.io/badge/React-19.2-20232a?style=flat-flat&logo=react&logoColor=61DAFB)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=flat-flat&logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-38B2AC?style=flat-flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-emerald.svg?style=flat-flat)](LICENSE)

**TR Express Coffee** adalah aplikasi landing page satu halaman (single-page website) modern dan premium yang dirancang untuk profil kedai kopi. Dibuat menggunakan **React 19**, **Vite**, dan **Tailwind CSS v4**, website ini menggabungkan estetika premium yang hangat khas kedai kopi dengan interaktivitas yang mulus layaknya aplikasi SaaS modern.

---

## 🎨 Cuplikan Desain (Preview)

Website ini mengusung estetika **Sleek Warm & Cozy Cafe Style** dengan perpaduan warna tanah (*earthy tones*), hijau zamrud (*emerald*), dan krem hangat. Dilengkapi dengan transisi animasi halus dan tata letak responsif yang memukau.

```
+--------------------------------------------------------+
|  [Logo] TR Express Coffee       Menu  Experience  Lokasi|
+--------------------------------------------------------+
|                                                        |
|  Rasa kopi yang rapi untuk ruang yang produktif.       |
|                                                        |
|  [Lihat Menu]  [Buka Lokasi]   +--------------------+  |
|                                |   Signature        |  |
|  * 4.8/5 Rating                |   Garasi Aren      |  |
|  * 18+ Event                   |   [Image Mockup]   |  |
|                                +--------------------+  |
+--------------------------------------------------------+
```

---

## ✨ Fitur Utama

- 🚀 **Performa Kilat dengan React 19 & Vite**: Pengalaman browsing yang instan tanpa loading lama berkat Hot Module Replacement (HMR) terbaru.
- 🎨 **Tampilan Premium & Responsif**: Menggunakan **Tailwind CSS v4** dengan transisi micro-animation pada setiap tombol, kartu menu, dan tautan navigasi.
- 📋 **Sistem Menu Interaktif (Data-Driven)**:
  - Filter kategori menu yang mulus (*Coffee*, *Non Coffee*, *Food*).
  - Fitur *Load More* (Tampilkan menu lainnya) untuk menjaga performa halaman tetap optimal.
- 📱 **Navigasi Khusus Mobile (Floating Bar)**: Dilengkapi menu melayang di bagian bawah layar untuk akses cepat ke Menu, Peta, dan WhatsApp saat dibuka melalui smartphone.
- 🛠️ **Arsitektur Clean & Terkelola**: Semua konten web (teks, harga, gambar, link sosial, hingga kutipan tim) dikelola terpusat dari satu file konfigurasi JSON (`src/data/siteContent.json`). Sangat mudah diperbarui tanpa menyentuh kode program.
- 💬 **Integrasi Kontak Cepat (Call-To-Action)**: Tombol reservasi langsung terhubung dengan WhatsApp API dan peta lokasi terintegrasi dengan Google Maps.

---

## 🛠️ Tech Stack & Dependensi

Proyek ini dibangun di atas teknologi modern:
- **Framework Utama:** React 19.2 (Fitur React Compiler Aktif)
- **Bundler & Dev Server:** Vite 8.0
- **Styling Engine:** Tailwind CSS v4 (menggunakan integrasi `@tailwindcss/vite` untuk build super cepat)
- **Library Ikon:** Lucide React (untuk ikon minimalis yang tajam)

---

## 📁 Struktur Folder Proyek

```bash
tr-express-coffe/
├── public/                 # Aset statis publik (favicon, svg, dll.)
├── src/
│   ├── assets/             # Aset gambar lokal
│   ├── components/
│   │   └── SiteSections.jsx # Kumpulan komponen halaman (Hero, Menu, Lokasi, dll.)
│   ├── data/
│   │   └── siteContent.json # SEMUA konten teks & data (sumber kebenaran tunggal)
│   ├── App.jsx             # Layout dasar & struktur urutan section
│   ├── main.jsx            # Entry point aplikasi React
│   └── style.css           # Kustomisasi CSS & setup Tailwind v4
├── eslint.config.js        # Konfigurasi standard kualitas kode
├── index.html              # Template HTML utama
├── package.json            # Daftar dependensi & script proyek
└── vite.config.js          # Konfigurasi bundler Vite + React compiler + Tailwind
```

---

## 🚀 Panduan Instalasi & Menjalankan Proyek

Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) di komputer Anda.

### 1. Klon Repositori
```bash
git clone https://github.com/username/tr-express-coffe.git
cd tr-express-coffe
```

### 2. Instal Dependensi
Gunakan `npm` untuk mengunduh semua library yang diperlukan:
```bash
npm install
```

### 3. Jalankan Mode Pengembangan (Development Mode)
Jalankan server lokal untuk melihat perubahan secara *real-time*:
```bash
npm run dev
```
Buka browser Anda dan akses halaman di `http://localhost:5173`.

### 4. Build untuk Produksi
Untuk menghasilkan file statis yang siap di-deploy ke server hosting (Vercel, Netlify, Github Pages):
```bash
npm run build
```
Hasil kompilasi akan berada di folder `dist`.

---

## ⚙️ Cara Mengubah Konten Website (Kustomisasi)

Anda tidak perlu mengedit file komponen `.jsx` jika hanya ingin mengubah teks, daftar menu, atau informasi kontak. Cukup buka dan ubah file:
📂 **`src/data/siteContent.json`**

### Contoh 1: Menambah Menu Baru
Tambahkan objek baru ke dalam array `menuItems.items`:
```json
{
  "name": "Caramel Macchiato",
  "category": "Coffee",
  "price": "30K",
  "tag": "New",
  "description": "Espresso kuat dengan sirup karamel manis dan foam susu tebal.",
  "image": "https://images.unsplash.com/photo-example..."
}
```

### Contoh 2: Mengubah Jam Operasional / Link WhatsApp
Cari bagian data yang ingin diubah, seperti nomor telepon di bagian WhatsApp button link:
```json
"https://wa.me/6281554223866" // Ganti dengan nomor WhatsApp bisnis Anda
```

---

## 👥 Profil Tim (Behind the Bar)

Proyek ini terinspirasi oleh dedikasi tim hebat di balik meja barista:
- **Sarah Salsabila** (Community Manager)
- **Adityawangsa** (Head Barista)
- **Prita Lauren Tina** (Senior Barista)

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah lisensi MIT. Anda bebas menggunakan dan memodifikasi proyek ini untuk kebutuhan portofolio pribadi Anda.

---

*Dibuat dengan ☕ dan semangat oleh [M. Syaikhul Ma'arif Adityawangsa](https://github.com/adityawangsa).*
