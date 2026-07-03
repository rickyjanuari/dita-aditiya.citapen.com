<script>
  const whatsappUrl = 'https://wa.me/6281234567890?text=Halo%20Dita%2C%20saya%20mau%20tanya%20soal%20renovasi%20...';
</script>

<section class="relative min-h-screen flex items-center pt-16 overflow-hidden">
  <!-- Background decorative -->
  <div class="absolute inset-0 opacity-10">
    <div class="absolute top-20 -left-10 w-72 h-72 bg-orange rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 right-10 w-96 h-96 bg-safety-yellow rounded-full blur-3xl"></div>
  </div>

  <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Text -->
      <div class="space-y-6">
        <span class="inline-block bg-orange/20 text-orange text-sm font-semibold px-4 py-1.5 rounded-full border border-orange/30">
          Tukang Bangunan Profesional
        </span>

        <h1 class="text-5xl sm:text-6xl lg:text-7xl text-light leading-none">
          Bangun <span class="text-orange">Rumah Impian</span> Tanpa Pusing
        </h1>

        <p class="text-gray-text text-base sm:text-lg max-w-lg leading-relaxed">
          Saya bantu wujudkan renovasi atau pembangunan rumah Anda — jujur, rapi, dan sesuai target. 
          Lebih dari 50 proyek selesai di area Bogor.
        </p>

        <!-- Stats -->
        <div class="flex flex-wrap gap-6 pt-2">
          <div class="text-center sm:text-left">
            <span class="block font-heading text-3xl text-orange">50+</span>
            <span class="text-gray-text text-sm">Proyek Selesai</span>
          </div>
          <div class="text-center sm:text-left">
            <span class="block font-heading text-3xl text-orange">8+</span>
            <span class="text-gray-text text-sm">Tahun Pengalaman</span>
          </div>
          <div class="text-center sm:text-left">
            <span class="block font-heading text-3xl text-orange">100%</span>
            <span class="text-gray-text text-sm">Klien Puas</span>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 pt-4">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" class="btn-primary">
            Tanya Saya via WhatsApp
          </a>
          <a href="/portofolio" class="btn-secondary">
            Lihat Portofolio
          </a>
        </div>
      </div>

      <!-- Photo -->
      <div class="relative flex justify-center lg:justify-end">
        <div class="tape-corner w-64 h-80 sm:w-80 sm:h-96 rotate-1 overflow-hidden rounded-lg border-2 border-charcoal bg-charcoal">
          <!-- Placeholder image -->
          <div class="w-full h-full flex items-center justify-center bg-charcoal text-gray-text text-sm">
            <div class="text-center">
              <svg class="mx-auto mb-2" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 20c0-4 4-7 8-7s8 3 8 7"/>
              </svg>
              <span>Foto Dita Aditiya</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .btn-primary {
    display: inline-block;
    background: var(--color-orange);
    color: #fff;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-family: var(--font-body);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-align: center;
    transition: background 0.2s, transform 0.2s;
  }
  .btn-primary:hover {
    background: var(--color-orange-dark);
    transform: translateY(-2px);
  }
  .btn-secondary {
    display: inline-block;
    background: transparent;
    color: var(--color-light);
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    border: 2px solid var(--color-charcoal);
    font-family: var(--font-body);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-align: center;
    transition: border-color 0.2s, color 0.2s;
  }
  .btn-secondary:hover {
    border-color: var(--color-orange);
    color: var(--color-orange);
  }
</style>