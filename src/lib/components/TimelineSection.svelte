<section class="py-20 bg-dark">
  <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-14">
      <span class="text-orange text-sm font-semibold uppercase tracking-widest">Perjalanan Karier</span>
      <h2 class="text-3xl sm:text-4xl text-light mt-2">Dari Nol Hingga <span class="text-orange">Sekarang</span></h2>
    </div>

    <div class="timeline">
      <!-- 2017 -->
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <span class="font-heading text-orange text-lg">2017</span>
          <h3 class="font-heading text-xl text-light">Awal Sebagai Kenek</h3>
          <p class="text-gray-text text-sm mt-1">
            Mulai kerja sebagai kenek bangunan di proyek perumahan. Belajar dasar-dasar konstruksi, 
            mixing material, dan pemasangan bata dari senior di lapangan.
          </p>
        </div>
      </div>

      <!-- 2019 -->
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <span class="font-heading text-orange text-lg">2019</span>
          <h3 class="font-heading text-xl text-light">Jadi Tukang Mandiri</h3>
          <p class="text-gray-text text-sm mt-1">
            Mulai terima pekerjaan sendiri — renovasi kecil, perbaikan dapur, pasang keramik. 
            Dari rekomendasi klien, proyek mulai berkembang.
          </p>
        </div>
      </div>

      <!-- 2021 -->
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <span class="font-heading text-orange text-lg">2021</span>
          <h3 class="font-heading text-xl text-light">Punya Tim Kecil</h3>
          <p class="text-gray-text text-sm mt-1">
            Membentuk tim kecil 3-5 orang. Bisa tangani proyek renovasi skala menengah — 
            bangun rumah, renovasi total, proyek komersial kecil.
          </p>
        </div>
      </div>

      <!-- 2023 -->
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <span class="font-heading text-orange text-lg">2023</span>
          <h3 class="font-heading text-xl text-light">Kerjasama dengan Kontraktor</h3>
          <p class="text-gray-text text-sm mt-1">
            Mulai dipercaya kontraktor lokal untuk proyek lepas. Ekspansi area layanan ke Bogor Timur dan Cibinong. 
            Portofolio mencakup lebih dari 30 proyek.
          </p>
        </div>
      </div>

      <!-- 2025 - Now -->
      <div class="timeline-item">
        <div class="timeline-dot active"></div>
        <div class="timeline-content">
          <span class="font-heading text-orange text-lg">2025</span>
          <h3 class="font-heading text-xl text-light">Siap Kerja Sama</h3>
          <p class="text-gray-text text-sm mt-1">
            Membuka diri untuk proyek baru — renovasi, pembangunan, dan kerjasama dengan kontraktor. 
            Siap mendengar kebutuhan Anda.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .timeline {
    position: relative;
    padding-left: 2rem;
  }
  .timeline::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--color-orange);
    border-radius: 2px;
  }
  .timeline-item {
    position: relative;
    padding-bottom: 2.5rem;
  }
  .timeline-item:last-child {
    padding-bottom: 0;
  }
  .timeline-dot {
    position: absolute;
    left: -2.35rem;
    top: 0.3rem;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--color-safety-yellow);
    border: 3px solid var(--color-dark);
  }
  .timeline-dot.active {
    background: var(--color-orange);
    box-shadow: 0 0 0 4px rgba(255, 87, 34, 0.25);
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 4px rgba(255, 87, 34, 0.25); }
    50% { box-shadow: 0 0 0 8px rgba(255, 87, 34, 0.1); }
  }
  .timeline-content {
    padding-left: 0.5rem;
  }
</style>