<script>
  const whatsappUrl = 'https://wa.me/6281234567890?text=Halo%20Dita%2C%20saya%20mau%20tanya%20soal%20renovasi%20...';
</script>

<section class="page-hero relative flex items-center overflow-hidden bg-blueprint">
  <div class="absolute inset-0 pointer-events-none opacity-40">
    <div class="absolute -top-16 -left-20 w-80 h-80 bg-orange/30 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-safety-yellow/25 rounded-full blur-3xl"></div>
  </div>

  <div class="container-app relative w-full">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div class="stack stack--hero order-2 lg:order-1">
        <span class="site-badge">Renovasi & Bangun Rumah</span>

        <h1 class="section-title--lg text-fg leading-[1.05]">
          Bangun <span class="text-orange">Rumah Impian</span> Tanpa Pusing
        </h1>

        <p class="text-muted-fg text-base sm:text-lg leading-relaxed max-w-[36ch]">
          Renovasi dan bangun rumah yang jujur, rapi, dan sesuai target. Melayani area Bogor.
        </p>

        <div class="btn-group content-gap--lg">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" class="btn-primary">
            Chat WhatsApp
          </a>
          <a href="/portofolio" class="btn-secondary">
            Lihat Portofolio
          </a>
        </div>
      </div>

      <div class="relative flex justify-center lg:justify-end order-1 lg:order-2">
        <div class="tape-corner photo-frame photo-frame--hero rotate-2">
          <img
            src="/images/dita.jpg"
            alt="Dita Aditiya, tukang bangunan profesional"
            width="440"
            height="550"
          />
        </div>
      </div>
    </div>
  </div>
</section>
