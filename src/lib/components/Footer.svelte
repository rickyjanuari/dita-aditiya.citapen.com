<script>
  const skills = [
    'Pondasi & Struktur',
    'Pemasangan Bata Ringan',
    'Plafon Gypsum & GRC',
    'Keramik Lantai & Dinding',
    'Pengecatan Interior',
    'Instalasi Pipa & Air',
    'Pagar Besi & Kanopi',
    'Atap Baja Ringan',
    'Waterproofing',
    'Finishing & Rapi'
  ];
</script>

<footer class="bg-concrete border-t border-border pb-4 md:pb-0">
  <div class="hazard-stripe hazard-stripe--footer"></div>

  <div class="container-app py-14 sm:py-20">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
      <div class="sm:col-span-2 md:col-span-1">
        <span class="font-heading text-2xl sm:text-3xl text-orange">DITA ADITIYA</span>
        <p class="mt-4 text-muted-fg text-sm leading-relaxed max-w-sm">
          Tukang bangunan profesional — spesialis renovasi dan pembangunan skala kecil-menengah.
          Melayani area Bogor dan sekitarnya.
        </p>
      </div>

      <div>
        <h4 class="font-heading text-base sm:text-lg text-fg mb-4">Navigasi</h4>
        <ul class="space-y-3">
          <li><a href="/" class="text-muted-fg hover:text-orange transition-colors text-sm py-0.5 inline-block">Beranda</a></li>
          <li><a href="/portofolio" class="text-muted-fg hover:text-orange transition-colors text-sm py-0.5 inline-block">Portofolio</a></li>
          <li><a href="/kontak" class="text-muted-fg hover:text-orange transition-colors text-sm py-0.5 inline-block">Kontak</a></li>
        </ul>
      </div>

      <div class="sm:col-span-2 md:col-span-1">
        <h4 class="font-heading text-base sm:text-lg text-fg mb-4">Keahlian</h4>
        <div class="flex flex-wrap gap-2">
          {#each skills as skill}
            <span class="bg-raised text-muted-fg text-xs px-3 py-1.5 rounded-full border border-border">
              {skill}
            </span>
          {/each}
        </div>
      </div>
    </div>

    <div class="mt-12 sm:mt-14 pt-6 border-t border-border text-center text-muted-fg text-xs">
      &copy; {new Date().getFullYear()} Dita Aditiya. Dibuat oleh Ricky Januari.
    </div>
  </div>
</footer>
