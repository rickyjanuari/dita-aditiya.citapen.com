<script>
  import { reveal } from '$lib/actions/reveal.js';
</script>

<section class="section-block bg-concrete" use:reveal>
  <div class="container-app">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div class="stack">
        <div class="flex items-start gap-5">
          <div class="about-photo-mobile">
            <img src="/images/dita.jpg" alt="Dita Aditiya" width="80" height="80" />
          </div>
          <div class="section-header section-header--left" style="margin-bottom: 0">
            <h2 class="section-title">Bukan Sekadar <span class="text-orange">Tukang Bangunan</span></h2>
          </div>
        </div>

        <p class="text-muted-fg leading-relaxed">
          Nama saya Dita Aditiya, tukang bangunan yang fokus pada kualitas dan kejujuran.
          Saya tidak hanya mengerjakan bangunan. Saya bantu pemilik rumah memahami
          apa yang dibutuhkan, berapa biaya sesungguhnya, dan bagaimana hasil terbaik bisa dicapai
          tanpa membengkakkan anggaran.
        </p>
        <p class="text-muted-fg leading-relaxed">
          Dari pondasi hingga finishing, saya tangani sendiri bersama tim kecil yang solid.
          Tidak pakai mandor perantara. Komunikasi langsung, hasil akuntabel.
        </p>

        <div class="stat-tiles">
          <div class="stat-tile">
            <span class="stat-tile__value">8+</span>
            <span class="stat-tile__label">Tahun Pengalaman</span>
          </div>
          <div class="stat-tile">
            <span class="stat-tile__value">50+</span>
            <span class="stat-tile__label">Proyek Selesai</span>
          </div>
          <div class="stat-tile">
            <span class="stat-tile__value">15+</span>
            <span class="stat-tile__label">Klien Aktif</span>
          </div>
        </div>
      </div>

      <div class="hidden lg:flex justify-center">
        <div class="tape-corner photo-frame w-80 aspect-square -rotate-1">
          <img src="/images/dita.jpg" alt="Dita Aditiya" width="320" height="320" />
        </div>
      </div>
    </div>
  </div>
</section>
