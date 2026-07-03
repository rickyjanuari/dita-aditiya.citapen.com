<script>
  const whatsappUrl = 'https://wa.me/6281234567890?text=Halo%20Dita%2C%20saya%20mau%20tanya%20soal%20renovasi%20...';
</script>

<section class="page-hero relative flex items-center overflow-hidden bg-blueprint">
  <div class="absolute inset-0 opacity-[0.07] pointer-events-none">
    <div class="absolute top-20 -left-10 w-72 h-72 bg-orange rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 right-10 w-96 h-96 bg-safety-yellow rounded-full blur-3xl"></div>
  </div>

  <div class="container-app relative w-full">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div class="stack stack--hero order-2 lg:order-1">
        <span class="site-badge">Renovasi & Bangun Rumah</span>

        <h1 class="section-title--lg text-fg leading-none">
          Bangun <span class="text-orange">Rumah Impian</span> Tanpa Pusing
        </h1>

        <p class="text-muted-fg text-base sm:text-lg leading-relaxed">
          Saya bantu wujudkan renovasi atau pembangunan rumah Anda — jujur, rapi, dan sesuai target.
          Lebih dari 50 proyek selesai di area Bogor.
        </p>

        <div class="stat-grid content-gap--lg">
          <div class="stat-grid__item">
            <span class="stat-grid__value">50+</span>
            <span class="stat-grid__label">Proyek Selesai</span>
          </div>
          <div class="stat-grid__item">
            <span class="stat-grid__value">8+</span>
            <span class="stat-grid__label">Tahun Pengalaman</span>
          </div>
          <div class="stat-grid__item">
            <span class="stat-grid__value">100%</span>
            <span class="stat-grid__label">Klien Puas</span>
          </div>
        </div>

        <div class="btn-group content-gap--lg">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" class="btn-primary">
            Tanya Saya via WhatsApp
          </a>
          <a href="/portofolio" class="btn-secondary">
            Lihat Portofolio
          </a>
        </div>
      </div>

      <div class="relative flex justify-center lg:justify-end order-1 lg:order-2">
        <div class="tape-corner photo-frame w-full max-w-[280px] sm:max-w-sm lg:max-w-md aspect-[4/5] rotate-2">
          <img
            src="/images/dita.jpg"
            alt="Dita Aditiya — tukang bangunan profesional"
            width="400"
            height="500"
          />
        </div>
      </div>
    </div>
  </div>
</section>
