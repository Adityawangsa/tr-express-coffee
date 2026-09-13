# ☕ Panduan Alur Kerja Rendering UI React (Study Case: Landing Page TR Express Coffee)

Panduan ini dibuat khusus untuk kamu yang sedang memperkuat fundamental React melalui studi kasus Landing Page sebelum melangkah ke aplikasi yang lebih kompleks (seperti Dashboard).

---

## 1. Konsep Mental React: Cara Pandang Sederhana

Sebelum masuk ke baris kode, ingat prinsip dasar React:
> **"UI adalah hasil dari Data/State yang diproses oleh Komponen."**  
> `UI = Component(Data, State)`

Alih-alih membuat satu file HTML raksasa yang panjang dan kaku, di React kita membagi halaman web menjadi potongan-potongan balok LEGO kecil yang disebut **Komponen**.

---

## 2. Peta Alur Rendering dari Titik Nol hingga Layar Browser

Berikut diagram alur bagaimana browser dari pertama kali dibuka hingga akhirnya menampilkan website utuh:

```text
1. index.html (<div id="root"></div>)
         │
         ▼
2. main.jsx (createRoot & menyuntikkan React)
         │
         ▼
3. App.jsx (Orkestrator / Master Blueprint Halaman)
   ├── UI Components: SplashScreen (efek timer/state)
   ├── Layout: Header & Navigasi
   ├── Sections: Hero -> Highlights -> Menu -> Experience -> Team -> dll.
   └── Layout: Footer & BottomMobileNav
         │
         ▼
4. Virtual DOM & Browser Rendering
```

---

## 3. Tahap demi Tahap Alur Eksekusi

### Langkah 1: Titik Awal (`index.html`)
Browser memuat file `index.html`. Di file ini hanya ada satu wadah kosong:
```html
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
```
Wadah `#root` inilah tempat di mana seluruh aplikasi React kamu akan "ditempelkan".

---

### Langkah 2: Gerbang Masuk JavaScript (`src/main.jsx`)
File `main.jsx` bertugas mengambil alih elemen `#root` tadi:
```jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```
Di sini React berkata: *"Halo browser, serahkan wadah `#root` ini padaku, aku akan merender komponen `<App />` di dalamnya."*

---

### Langkah 3: Dirigen / Orkestrator Utama (`src/App.jsx`)
File `App.jsx` bertindak seperti **sutradara panggung**. Dia tidak mengurus detail teks atau warna tiap tombol secara langsung, melainkan menyusun urutan penampilan komponen dari atas ke bawah:

```jsx
function App() {
  return (
    <main className="min-h-screen bg-[#f8f3eb] text-stone-900">
      <SplashScreen />      {/* 1. Komponen UI: Muncul pertama saat loading */}
      <Header />            {/* 2. Komponen Layout: Navigasi atas */}
      <HeroSection />       {/* 3. Komponen Section: Sambutan & visual utama */}
      <FeatureHighlights /> {/* 4. Komponen Section: Nilai jual cepat */}
      <MenuSection />       {/* 5. Komponen Section: Katalog interaktif */}
      <ExperienceSection /> {/* 6. Komponen Section: Daya tarik tempat */}
      <TeamSection />       {/* 7. Komponen Section: Human touch / barista */}
      <AboutSection />      {/* 8. Komponen Section: Cerita & timeline */}
      <TestimonialsSection />{/* 9. Komponen Section: Bukti sosial */}
      <LocationSection />   {/* 10. Komponen Section: Alamat & kontak */}
      <Footer />            {/* 11. Komponen Layout: Kaki halaman */}
      <BottomMobileNav />   {/* 12. Komponen Layout: Navigasi praktis HP */}
    </main>
  );
}
```

---

### Langkah 4: Bagaimana 3 Folder Bekerja Sama

Inilah alasan mengapa arsitektur kita dipecah menjadi 3 folder:

```text
src/components/
├── layout/   ---> Bingkai Halaman (Header, Footer, Mobile Nav)
├── sections/ ---> Konten Cerita / Bagian Halaman (Hero, Menu, dll.)
└── ui/       ---> Elemen yang Dipakai Berulang-ulang (SectionHeading, SplashScreen)
```

#### A. Folder `ui/` (Koleksi Komponen Reusable)
- **Contoh: `SectionHeading.jsx`**
  Setiap kali kita butuh judul section (eyebrow, title, description), kita tidak perlu menulis ulang tag `<h2>`, `<p>`, dan styling panjangnya.
  Kita cukup memanggil:
  ```jsx
  <SectionHeading 
    eyebrow="Signature Menu" 
    title="Pilihan Terbaik Minggu Ini" 
    tone="light" 
  />
  ```
  Ini membuat kode tetap **DRY (Don't Repeat Yourself)** dan konsisten.

#### B. Folder `sections/` (Blok Konten Independen)
- Mengambil data khusus dari `siteContent.json` (misalnya daftar menu, testimoni, atau profil tim).
- Menggunakan komponen `ui` di dalamnya (seperti `SectionHeading`).
- Mengatur logika lokalnya sendiri (misalnya filter menu aktif di `MenuSection.jsx`).

#### C. Folder `layout/` (Struktur & Navigasi)
- Mengatur elemen yang memayungi halaman seperti `Header` dan `Footer`.
- Membantu pengunjung berpindah antar bagian halaman lewat anchor link (`#home`, `#menu`, `#lokasi`).

---

## 4. Dua Logika Penting di Komponen: Statis vs Dinamis (State)

Dalam landing page ini, kamu bisa mempelajari 2 jenis komponen:

### 1. Komponen Statis (Data-Driven)
**Contoh**: `HeroSection.jsx` atau `TeamSection.jsx`.
- Komponen ini hanya menerima data dari file JSON, melakukan `.map()` untuk mengulang card/item, lalu merendernya ke layar.
- Tidak ada data yang berubah setelah halaman tampil.

### 2. Komponen Dinamis (Interactive / State-Driven)
**Contoh 1: `SplashScreen.jsx`**
- Menggunakan `useState(true)` saat pertama kali muncul.
- Menggunakan `useEffect` dengan timer 2 detik (`setTimeout`).
- Setelah 2 detik, timer mengubah state menjadi `false`.
- React mendeteksi perubahan state dan melakukan **Re-render**: SplashScreen menghilang secara otomatis!

**Contoh 2: `MenuSection.jsx`**
- Menggunakan `useState("Semua")` untuk kategori yang sedang dipilih.
- Saat user mengklik tombol "Kopi", fungsi `setActiveCategory("Kopi")` dipanggil.
- Hook `useMemo` menyaring menu yang hanya berkategori "Kopi".
- React langsung memperbarui daftar kartu menu di layar tanpa perlu reload browser!

---

## 5. Ringkasan Tips untuk Pemula

1. **Mulai dari Pecahan UI Terkecil**: Saat melihat desain di Figma, pisahkan dulu: mana yang menjadi header, mana kartu, mana judul section, dan mana tombol.
2. **Pisahkan Data dari Tampilan**: Jangan menulis teks berulang-ulang di dalam JSX. Simpan data di array/JSON (`siteContent.json`), lalu render menggunakan `.map()`.
3. **Pahami Kapan Butuh State**: Jika ada data yang nilainya bisa berubah akibat aksi user (klik, ketik, waktu berjalan) dan harus mempengaruhi tampilan, gunakan `useState`.
4. **Struktur Bersih = Mudah Naik Level**: Dengan memahami pola `layout`, `sections`, dan `ui` ini, saat nanti kamu membuat **Dashboard**, polanya akan sama:
   - `layout/`: Sidebar, Topbar, DashboardLayout.
   - `sections/`: OverviewCards, RevenueChart, RecentTransactions.
   - `ui/`: Button, Modal, Badge, Table, Input.
