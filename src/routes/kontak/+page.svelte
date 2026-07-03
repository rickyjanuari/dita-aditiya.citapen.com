<script>
  const whatsappUrl = 'https://wa.me/6281234567890?text=Halo%20Dita%2C%20saya%20mau%20tanya%20soal%20renovasi%20...';
  const phoneNumber = '0812-3456-7890';
  const email = 'dita@citapen.com';
</script>

<svelte:head>
  <title>Kontak — Dita Aditiya</title>
  <meta name="description" content="Hubungi Dita Aditiya untuk konsultasi renovasi dan pembangunan. Area Bogor, Citapen, dan sekitarnya." />
</svelte:head>

<section class="pt-28 pb-20 bg-dark min-h-screen">
  <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <span class="text-orange text-sm font-semibold uppercase tracking-widest">Kontak</span>
      <h1 class="text-3xl sm:text-5xl text-light mt-2">Mari <span class="text-orange">Ngobrol</span></h1>
      <p class="text-gray-text mt-3 max-w-xl mx-auto">
        Ceritakan kebutuhan renovasi atau pembangunan Anda. Saya siap bantu — tanpa tekanan, tanpa biaya konsultasi.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Left: Contact methods -->
      <div>
        <h2 class="font-heading text-2xl text-light mb-8">Cara Menghubungi</h2>

        <!-- WhatsApp -->
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" class="contact-card group">
          <div class="contact-icon bg-green-600/20 text-green-500">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="font-heading text-lg text-light group-hover:text-orange transition-colors">WhatsApp</h3>
            <p class="text-gray-text text-sm">{phoneNumber}</p>
            <span class="text-orange text-xs mt-1 block">Klik untuk chat langsung →</span>
          </div>
        </a>

        <!-- Phone -->
        <div class="contact-card">
          <div class="contact-icon bg-orange/20 text-orange">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
          </div>
          <div>
            <h3 class="font-heading text-lg text-light">Telepon</h3>
            <p class="text-gray-text text-sm">{phoneNumber}</p>
            <span class="text-gray-text text-xs mt-1 block">Senin - Sabtu, 08:00 - 17:00</span>
          </div>
        </div>

        <!-- Email -->
        <div class="contact-card">
          <div class="contact-icon bg-safety-yellow/20 text-safety-yellow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>
          <div>
            <h3 class="font-heading text-lg text-light">Email</h3>
            <p class="text-gray-text text-sm">{email}</p>
          </div>
        </div>
      </div>

      <!-- Right: Service area + map -->
      <div>
        <h2 class="font-heading text-2xl text-light mb-8">Area Layanan</h2>

        <div class="bg-charcoal p-6 rounded-lg border border-dark mb-8">
          <h3 class="font-heading text-lg text-light flex items-center gap-2">
            <span class="text-orange">📍</span> Area Prioritas
          </h3>
          <div class="flex flex-wrap gap-2 mt-4">
            <span class="area-tag">Citapen</span>
            <span class="area-tag">Bogor Timur</span>
            <span class="area-tag">Cibinong</span>
            <span class="area-tag">Sukaraja</span>
            <span class="area-tag">Babakan Madang</span>
            <span class="area-tag">Sentul</span>
          </div>
        </div>

        <div class="bg-charcoal p-6 rounded-lg border border-dark">
          <h3 class="font-heading text-lg text-light flex items-center gap-2">
            <span class="text-safety-yellow">ℹ️</span> Area Tambahan
          </h3>
          <p class="text-gray-text text-sm mt-2">
            Area di luar prioritas tetap bisa dijangkau dengan penyesuaian biaya transportasi. 
            Hubungi saya untuk diskusi lebih lanjut.
          </p>
          <p class="text-gray-text text-sm mt-2">
            Estimasi survei lokasi gratis untuk area Prioritas.
          </p>
        </div>

        <!-- Sitemap note -->
        <div class="mt-12 pt-8 border-t border-charcoal">
          <div class="flex flex-wrap gap-4 text-sm text-gray-text">
            <a href="/" class="hover:text-orange transition-colors">Beranda</a>
            <span class="text-charcoal">|</span>
            <a href="/portofolio" class="hover:text-orange transition-colors">Portofolio</a>
            <span class="text-charcoal">|</span>
            <a href="/kontak" class="hover:text-orange transition-colors">Kontak</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .contact-card {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    background: var(--color-charcoal);
    padding: 1.25rem;
    border-radius: 8px;
    border: 1px solid var(--color-dark);
    margin-bottom: 1rem;
    text-decoration: none;
    transition: border-color 0.2s;
  }
  .contact-card:hover {
    border-color: var(--color-orange);
  }
  .contact-icon {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .area-tag {
    display: inline-block;
    padding: 0.35rem 0.9rem;
    border-radius: 9999px;
    background: var(--color-dark);
    color: var(--color-light);
    font-size: 0.8rem;
    border: 1px solid var(--color-charcoal);
  }
</style>