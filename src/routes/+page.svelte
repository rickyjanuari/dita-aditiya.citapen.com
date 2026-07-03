<script>
  import Hero from '$lib/components/Hero.svelte';
  import TickerSection from '$lib/components/TickerSection.svelte';
  import AboutSection from '$lib/components/AboutSection.svelte';
  import DifferentiatorSection from '$lib/components/DifferentiatorSection.svelte';
  import TimelineSection from '$lib/components/TimelineSection.svelte';
  import TestimonialSection from '$lib/components/TestimonialSection.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import projects from '$lib/data/projects.json';

  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  const whatsappUrl = 'https://wa.me/6281234567890?text=Halo%20Dita%2C%20saya%20mau%20tanya%20soal%20renovasi%20...';
</script>

<Hero />

<TickerSection />

<AboutSection />

<DifferentiatorSection />

<TimelineSection />

<section class="section-block bg-raised">
  <div class="container-app">
    <div class="section-divider"></div>
    <div class="hazard-stripe"></div>

    <div class="section-header">
      <span class="section-label">Portofolio</span>
      <h2 class="section-title">Proyek <span class="text-orange">Unggulan</span></h2>
      <p class="section-desc">Beberapa proyek yang sudah saya selesaikan. Klik untuk melihat detail lengkap.</p>
    </div>

    <p class="scroll-hint">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
      Geser untuk lihat proyek lainnya
    </p>

    <div class="card-carousel card-carousel--3">
      {#each featuredProjects as project}
        <ProjectCard
          slug={project.slug}
          title={project.title}
          category={project.category}
          duration={project.duration}
          cover={project.cover}
        />
      {/each}
    </div>

    <div class="flex justify-center content-gap--lg">
      <a href="/portofolio" class="btn-secondary w-full sm:w-auto max-w-sm">
        Lihat Semua Proyek
      </a>
    </div>
  </div>
</section>

<TestimonialSection />

<section class="section-block bg-blueprint border-t border-border">
  <div class="container-app container-app--narrow text-center">
    <div class="section-divider"></div>
    <div class="hazard-stripe"></div>

    <div class="stack items-center">
      <h2 class="section-title section-title--lg">
        Siap Renovasi atau <span class="text-orange">Bangun Rumah</span> Impian Anda?
      </h2>
      <p class="section-desc">
        Konsultasi gratis, tanpa biaya. Saya dengarkan dulu kebutuhan Anda, baru kita buat rencana.
      </p>
      <div class="btn-group btn-group--center w-full max-w-md">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" class="btn-primary">
          Chat WhatsApp Sekarang
        </a>
        <a href="/kontak" class="btn-secondary">
          Lihat Info Kontak
        </a>
      </div>
    </div>
  </div>
</section>
