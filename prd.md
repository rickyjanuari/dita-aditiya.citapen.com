# Dokumen Kebutuhan Produk (PRD)
# Website Personal Branding — Dita Aditiya (Tukang Bangunan Profesional)

**Versi:** 2.0
**Tanggal:** 3 Juli 2026
**Domain:** dita.citapen.com (subdomain)
**Tech Stack:** SvelteKit (Static Site Generation) — Deploy via GitHub Pages
**Disusun oleh:** Ricky Januari

---

## 1. Latar Belakang & Tujuan

Dita Aditiya adalah seorang tukang bangunan profesional yang selama ini mendapatkan pekerjaan dari rekomendasi mulut ke mulut. Website ini dibuat untuk membangun identitas profesional secara digital, membedakan Dita dari tukang bangunan lain, serta menjadi kanal utama bagi calon klien atau mandor untuk menilai kredibilitas sebelum melakukan kontak langsung.

**Tujuan Utama:**
- Meningkatkan kepercayaan calon klien melalui bukti visual (dokumentasi pekerjaan, testimoni)
- Mempermudah kontak langsung melalui WhatsApp
- Menampilkan portofolio proyek secara terstruktur dan mudah ditelusuri
- Membedakan Dita secara persepsi dari kompetitor melalui pendekatan storytelling personal

**Target Pengguna:**
- Pemilik rumah yang membutuhkan renovasi atau pembangunan skala kecil-menengah
- Mandor proyek yang mencari tenaga tambahan terpercaya
- Kontraktor lokal yang membutuhkan tenaga lepas untuk proyek jangka pendek

---

## 2. Perubahan Utama dari Versi Sebelumnya

| Aspek | Versi 1.0 | Versi 2.0 |
|---|---|---|
| Tech Stack | HTML/CSS statis | SvelteKit (Static Site Generation) |
| Hosting | Subdomain shared hosting | GitHub Pages + custom domain (dita.citapen.com) |
| Struktur Halaman | One-page | Multi-halaman: Beranda, Portofolio, Kontak |
| Responsivitas | Dasar | Mobile-first, breakpoint terstandarisasi |
| Bahasa | Full Bahasa Indonesia, tanpa istilah informal | Dipertahankan |

---

## 3. Lingkup Produk (Scope)

**In-scope:**
- Website multi-halaman berbasis SvelteKit, dirender statis (Static Site Generation)
- Halaman Beranda (ringkasan profil, kenapa berbeda, testimoni singkat, CTA)
- Halaman Portofolio (daftar proyek lengkap dengan detail per proyek)
- Integrasi WhatsApp click-to-chat di seluruh halaman
- Deployment otomatis ke GitHub Pages melalui GitHub Actions
- Custom domain (dita.citapen.com) diarahkan ke GitHub Pages
- Desain fully responsive di semua ukuran perangkat

**Out-of-scope (fase awal):**
- Sistem booking/kalender online
- Panel admin/CMS untuk update konten mandiri (konten dikelola langsung lewat kode/markdown)
- Multi-bahasa
- E-commerce/pembayaran online

---

## 4. Kebutuhan Fungsional

| ID | Fitur | Deskripsi | Halaman | Prioritas |
|---|---|---|---|---|
| F1 | Hero Section | Statement profil utama + CTA WhatsApp | Beranda | Wajib |
| F2 | Tentang Saya | Narasi pengalaman & statistik kerja | Beranda | Wajib |
| F3 | Kenapa Berbeda | Tiga diferensiator dibanding tukang bangunan lain | Beranda | Wajib |
| F4 | Perjalanan Karier | Riwayat pekerjaan dalam format garis waktu | Beranda | Disarankan |
| F5 | Ringkasan Portofolio | Tiga proyek unggulan + tautan "Lihat Semua" | Beranda | Wajib |
| F6 | Daftar Portofolio Lengkap | Grid seluruh proyek dengan filter kategori | Portofolio | Wajib |
| F7 | Detail Proyek | Halaman/modal berisi galeri foto dan deskripsi tiap proyek | Portofolio | Disarankan |
| F8 | Testimoni | Kutipan dari klien atau mandor sebelumnya | Beranda | Wajib |
| F9 | Kontak & Lokasi | WhatsApp, area layanan, formulir kontak sederhana | Kontak | Wajib |
| F10 | Navigasi Responsif | Menu hamburger di perangkat mobile | Semua Halaman | Wajib |
| F11 | Tombol WhatsApp Melayang | CTA tetap terlihat saat menggulir di mobile | Semua Halaman | Disarankan |
| F12 | Animasi Scroll-Reveal | Elemen muncul halus saat digulir | Semua Halaman | Opsional |
| F13 | Analitik Pengunjung | Pelacakan klik WhatsApp (Google Analytics 4) | Semua Halaman | Opsional |

---

## 5. Kebutuhan Non-Fungsional

- **Performa:** Waktu muat di bawah 1.5 detik (keunggulan SvelteKit sebagai compiler ringan), skor Lighthouse minimal 90
- **Responsivitas:** Wajib mendukung breakpoint mobile (kurang dari 640px), tablet (640-1024px), dan desktop (lebih dari 1024px)
- **Kompatibilitas:** Berfungsi optimal di Chrome, Safari, dan Firefox versi terbaru, termasuk versi mobile
- **Aksesibilitas:** Kontras warna teks memenuhi standar WCAG AA, seluruh gambar memiliki atribut alt text
- **Keamanan:** HTTPS otomatis melalui GitHub Pages, tanpa penyimpanan data sensitif pengguna
- **Kemudahan Perawatan:** Konten portofolio dikelola melalui file markdown/JSON agar mudah diperbarui tanpa mengubah kode inti

---

## 6. Arsitektur Teknis

### 6.1 Tech Stack

- **Framework:** SvelteKit dengan adapter-static (menghasilkan file statis HTML/CSS/JS)
- **Styling:** CSS native atau Tailwind CSS (sesuai preferensi tim)
- **Font:** Bebas Neue (heading), Space Grotesk (body) via Google Fonts
- **Hosting:** GitHub Pages
- **Domain:** Custom domain dita.citapen.com diarahkan via CNAME record ke GitHub Pages
- **CI/CD:** GitHub Actions untuk build dan deploy otomatis setiap push ke branch main
- **Analitik (opsional):** Google Analytics 4 atau Meta Pixel

### 6.2 Struktur Folder SvelteKit

```
dita-aditiya-site/
├── src/
│   ├── routes/
│   │   ├── +page.svelte              (Beranda)
│   │   ├── +layout.svelte            (Layout utama: navbar, footer)
│   │   ├── portofolio/
│   │   │   ├── +page.svelte          (Daftar Portofolio)
│   │   │   └── [slug]/
│   │   │       └── +page.svelte      (Detail Proyek)
│   │   └── kontak/
│   │       └── +page.svelte          (Halaman Kontak)
│   ├── lib/
│   │   ├── components/
│   │   │   ├── Hero.svelte
│   │   │   ├── Navbar.svelte
│   │   │   ├── Footer.svelte
│   │   │   ├── ProjectCard.svelte
│   │   │   ├── Testimonial.svelte
│   │   │   └── WhatsAppButton.svelte
│   │   └── data/
│   │       └── projects.json         (Data portofolio)
│   ├── app.html
│   └── app.css
├── static/
│   ├── images/
│   └── CNAME                          (berisi: dita.citapen.com)
├── .github/
│   └── workflows/
│       └── deploy.yml                 (GitHub Actions untuk auto-deploy)
├── svelte.config.js                   (adapter-static config)
├── package.json
└── README.md
```

### 6.3 Konfigurasi Deployment

- `svelte.config.js` menggunakan `@sveltejs/adapter-static` dengan `fallback: null` untuk hasil build full-static
- File `static/CNAME` berisi domain kustom agar GitHub Pages mengarahkan ke dita.citapen.com
- Workflow GitHub Actions menjalankan `npm run build` lalu mem-publish folder `build/` ke branch `gh-pages`
- Konfigurasi DNS di citapen.com: tambahkan CNAME record mengarah ke `<username>.github.io`

---

## 7. Sitemap & Navigasi

```
dita.citapen.com/
├── /                    (Beranda: Hero, Kenapa Berbeda, Perjalanan Karier, Ringkasan Portofolio, Testimoni, CTA)
├── /portofolio          (Daftar Lengkap Proyek + Filter Kategori)
├── /portofolio/[slug]   (Detail Proyek: Galeri Foto, Deskripsi, Durasi Pengerjaan)
└── /kontak              (Formulir Kontak, WhatsApp, Peta Lokasi)
```

---

## 8. Spesifikasi Responsif

| Breakpoint | Lebar Layar | Perilaku Layout |
|---|---|---|
| Mobile | < 640px | Navigasi hamburger, kolom tunggal, tombol WhatsApp melayang di bawah |
| Tablet | 640px - 1024px | Grid 2 kolom untuk portofolio dan kartu diferensiator |
| Desktop | > 1024px | Grid 3 kolom, navbar horizontal penuh, hero dua kolom |

Seluruh komponen wajib diuji pada masing-masing breakpoint sebelum deployment, termasuk pengujian pada perangkat nyata (bukan hanya emulator browser).

---

## 9. User Flow Utama

1. Pengunjung menemukan tautan (dibagikan lewat WhatsApp/media sosial) atau memindai kode QR
2. Mendarat di halaman Beranda, membaca profil dan value proposition
3. Menelusuri bagian "Kenapa Berbeda" dan ringkasan portofolio
4. Mengklik "Lihat Semua Proyek" untuk menuju halaman Portofolio lengkap
5. Membuka detail salah satu proyek untuk melihat galeri foto lengkap
6. Kembali ke Beranda atau langsung menuju halaman Kontak
7. Mengklik tombol WhatsApp untuk memulai percakapan dengan Dita

---

## 10. Metrik Sukses (KPI)

| Metrik | Target |
|---|---|
| Klik tombol WhatsApp per bulan | Minimal 15 klik |
| Kunjungan ke halaman Portofolio | Minimal 40% dari total pengunjung |
| Bounce rate | Di bawah 55% |
| Skor Lighthouse (Performance) | Minimal 90 |
| Konversi chat menjadi pekerjaan nyata | Minimal 20% |

---

## 11. Timeline Pengembangan

| Fase | Aktivitas | Estimasi Waktu |
|---|---|---|
| 1 | Finalisasi konten (foto, testimoni, data proyek) | 2-3 hari |
| 2 | Setup proyek SvelteKit & struktur komponen | 1 hari |
| 3 | Development halaman Beranda, Portofolio, Kontak | 2-3 hari |
| 4 | Uji responsivitas lintas perangkat & browser | 1 hari |
| 5 | Setup GitHub Actions & deployment ke GitHub Pages | 0.5 hari |
| 6 | Konfigurasi custom domain & DNS | 0.5 hari |
| 7 | Go-live & pemasangan analitik | 0.5 hari |

---

# DESIGN SYSTEM — "Identitas Profesional Konstruksi"

## A. Konsep Visual

Tema desain menggabungkan estetika industrial/konstruksi (garis hazard, tekstur beton, warna keselamatan kerja) dengan nada profesional yang jujur dan meyakinkan. Tujuannya menampilkan Dita sebagai tenaga ahli dengan identitas visual yang kuat dan konsisten di seluruh halaman.

## B. Palet Warna

| Nama | Kode Hex | Penggunaan |
|---|---|---|
| Dasar Gelap | #0d0d0d | Latar utama, teks di atas area terang |
| Abu Arang | #1a1a1a | Latar bagian sekunder |
| Oranye Utama | #ff5722 | Tombol CTA, aksen, teks penekanan |
| Oranye Gelap | #d84315 | Efek hover, garis testimoni |
| Kuning Keselamatan | #ffd600 | Aksen garis hazard, label |
| Latar Terang | #f7f5f2 | Latar bagian dengan tema terang |
| Abu Teks | #6b6b6b | Teks deskripsi sekunder |

## C. Tipografi

- **Judul (Heading):** Bebas Neue — tegas dan kondensat, memberi kesan signage konstruksi
- **Isi (Body):** Space Grotesk — modern dan mudah dibaca, kontras dengan judul yang tebal
- **Skala Ukuran:** H1 = 3rem (mobile: 2rem) / H2 = 2rem (mobile: 1.6rem) / Body = 1rem / Kecil = 0.85rem

## D. Elemen Grafis Khas

- **Garis hazard** — pola diagonal kuning-hitam sebagai pembatas antar bagian, elemen ciri khas dari identitas visual ini
- **Sudut selotip** — elemen dekoratif menyerupai selotip di pojok foto, memberi kesan dokumentasi lapangan yang autentik
- **Teks bergerak (ticker)** — daftar keahlian yang berjalan horizontal sebagai elemen dinamis
- **Rotasi diagonal ringan** — foto profil dirotasi sedikit untuk kesan natural namun tetap rapi

## E. Komponen UI

| Komponen | Karakteristik | Perilaku Responsif |
|---|---|---|
| Tombol Utama | Oranye solid, sudut membulat 8px, efek naik saat hover | Lebar penuh di mobile, otomatis di desktop |
| Tombol Sekunder | Transparan dengan garis tepi abu gelap | Sama seperti tombol utama |
| Kartu Diferensiator | Garis atas oranye tebal, angka besar transparan sebagai latar dekoratif | Susun vertikal di mobile, grid 3 kolom di desktop |
| Item Garis Waktu | Garis vertikal oranye dengan titik kuning di tiap tahun | Tetap vertikal di semua ukuran layar |
| Kartu Testimoni | Garis kiri kuning, teks kutipan miring | Grid 1 kolom mobile, 3 kolom desktop |
| Kartu Proyek (Portofolio) | Gambar dengan overlay kategori, judul dan durasi pengerjaan | Grid 1 kolom mobile, 2 kolom tablet, 3 kolom desktop |
| Navigasi | Logo kiri, menu kanan | Menu hamburger di mobile, horizontal penuh di desktop |

## F. Prinsip Desain

- **Jujur secara visual** — mengutamakan foto asli dari lapangan, bukan foto stok generik
- **Kontras tinggi** — kombinasi latar gelap dan aksen warna cerah untuk keterbacaan dan ketegasan
- **Responsif menyeluruh** — semua komponen diuji dan dioptimalkan untuk mobile, tablet, dan desktop tanpa kompromi tampilan
- **Konsisten dengan tema konstruksi** — seluruh elemen dekoratif (garis hazard, selotip, ticker) merujuk pada dunia bangunan
- **Gerak halus dan bermakna** — animasi digunakan secukupnya (ticker, hover, scroll-reveal) agar terasa modern tanpa mengganggu pengalaman pengguna
