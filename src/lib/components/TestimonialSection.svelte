<script>
  import { reveal } from '$lib/actions/reveal.js';
</script>

<section class="section-block bg-concrete" use:reveal>
  <div class="container-app">
    <div class="section-header section-header--left" style="max-width: 36rem">
      <span class="section-label">Testimoni</span>
      <h2 class="section-title">Apa Kata <span class="text-orange">Mereka</span></h2>
    </div>

    <article class="testimonial-featured">
      <p class="testimonial-featured__quote">
        “Dita ngerjain renovasi dapur saya: rapi, tepat waktu, dan gak banyak alasan.
        Harga sesuai yang disepakati di awal. Saya udah rekomendasiin ke tetangga.”
      </p>
      <div class="testimonial-featured__footer">
        <span class="text-orange font-semibold text-sm">Bu Rina</span>
        <span class="text-muted-fg text-xs block mt-1">Pemilik Rumah, Citapen</span>
      </div>
    </article>

    <div class="testimonial-compact-grid">
      <article class="testimonial-compact">
        <p class="testimonial-compact__quote">
          “Kontraktor sering pakai tenaga Dita buat finishing. Datang tepat waktu, kerja bersih, hasil konsisten.”
        </p>
        <div class="testimonial-compact__footer">
          <span class="text-orange font-semibold text-sm">Pak Hendra</span>
          <span class="text-muted-fg text-xs block mt-1">Kontraktor, Bogor Timur</span>
        </div>
      </article>

      <article class="testimonial-compact">
        <p class="testimonial-compact__quote">
          “Awalnya ragu pakai tukang lepas. Setelah liat hasil keramik dan plafon, langsung percaya. Komunikasi lancar.”
        </p>
        <div class="testimonial-compact__footer">
          <span class="text-orange font-semibold text-sm">Pak Sofyan</span>
          <span class="text-muted-fg text-xs block mt-1">Pemilik Rumah, Bogor Selatan</span>
        </div>
      </article>
    </div>
  </div>
</section>
