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

<footer class="bg-charcoal border-t border-charcoal">
  <!-- Hazard stripe -->
  <div class="hazard-stripe"></div>

  <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <!-- Brand -->
      <div>
        <span class="font-heading text-3xl text-orange">DITA ADITIYA</span>
        <p class="mt-3 text-gray-text text-sm leading-relaxed">
          Tukang bangunan profesional — spesialis renovasi dan pembangunan skala kecil-menengah.
          Melayani area Bogor dan sekitarnya.
        </p>
      </div>

      <!-- Quick links -->
      <div>
        <h4 class="font-heading text-lg text-light mb-4">Navigasi</h4>
        <ul class="space-y-2">
          <li><a href="/" class="text-gray-text hover:text-orange transition-colors text-sm">Beranda</a></li>
          <li><a href="/portofolio" class="text-gray-text hover:text-orange transition-colors text-sm">Portofolio</a></li>
          <li><a href="/kontak" class="text-gray-text hover:text-orange transition-colors text-sm">Kontak</a></li>
        </ul>
      </div>

      <!-- Skills -->
      <div>
        <h4 class="font-heading text-lg text-light mb-4">Keahlian</h4>
        <div class="flex flex-wrap gap-2">
          {#each skills as skill}
            <span class="bg-dark text-gray-text text-xs px-3 py-1 rounded-full border border-charcoal">
              {skill}
            </span>
          {/each}
        </div>
      </div>
    </div>

    <div class="mt-12 pt-6 border-t border-dark text-center text-gray-text text-xs">
      &copy; {new Date().getFullYear()} Dita Aditiya. Dibuat oleh Ricky Januari.
    </div>
  </div>
</footer>