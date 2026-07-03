<section class="py-20 bg-dark">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <!-- Hazard stripe -->
    <div class="hazard-stripe mb-16"></div>

    <div class="text-center max-w-2xl mx-auto mb-14">
      <span class="text-safety-yellow text-sm font-semibold uppercase tracking-widest">Kenapa Saya</span>
      <h2 class="text-3xl sm:text-4xl text-light mt-2">Beda dari <span class="text-orange">Tukang Lain</span></h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Card 1 -->
      <div class="diff-card">
        <span class="diff-number">01</span>
        <h3 class="font-heading text-xl text-light mt-4">Komunikasi Langsung</h3>
        <p class="text-gray-text mt-2 text-sm leading-relaxed">
          Tidak ada mandor perantara. Anda ngobrol langsung dengan saya yang mengerjakan. 
          Perubahan, pertanyaan, atau kekhawatiran disampaikan langsung tanpa salah tafsir.
        </p>
      </div>

      <!-- Card 2 -->
      <div class="diff-card">
        <span class="diff-number">02</span>
        <h3 class="font-heading text-xl text-light mt-4">Harga Transparan</h3>
        <p class="text-gray-text mt-2 text-sm leading-relaxed">
          Rincian biaya material dan jasa saya jabarkan terbuka. Tidak ada biaya sembunyi, 
          tidak ada markup diam-diam. Anda tahu persis untuk apa uang Anda.
        </p>
      </div>

      <!-- Card 3 -->
      <div class="diff-card">
        <span class="diff-number">03</span>
        <h3 class="font-heading text-xl text-light mt-4">Tanggung Jawab Penuh</h3>
        <p class="text-gray-text mt-2 text-sm leading-relaxed">
          Saya pantau setiap tahap sampai selesai. Kalau ada yang kurang, saya perbaiki tanpa biaya tambahan — 
          selama dalam masa garansi pengerjaan.
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .diff-card {
    position: relative;
    background: var(--color-charcoal);
    border-top: 3px solid var(--color-orange);
    padding: 2rem;
    border-radius: 0 0 8px 8px;
    transition: transform 0.2s;
  }
  .diff-card:hover {
    transform: translateY(-4px);
  }
  .diff-number {
    font-family: var(--font-heading);
    font-size: 5rem;
    color: var(--color-charcoal);
    -webkit-text-stroke: 2px var(--color-orange);
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    opacity: 0.7;
    line-height: 1;
  }
</style>