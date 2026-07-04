<script>
  import Hero from '$lib/components/Hero.svelte';
  import TickerSection from '$lib/components/TickerSection.svelte';
  import AboutSection from '$lib/components/AboutSection.svelte';
  import DifferentiatorSection from '$lib/components/DifferentiatorSection.svelte';
  import TimelineSection from '$lib/components/TimelineSection.svelte';
  import TestimonialSection from '$lib/components/TestimonialSection.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import projects from '$lib/data/projects.json';
  import { reveal } from '$lib/actions/reveal.js';

  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  const leadProject = featuredProjects[0];
  const sideProjects = featuredProjects.slice(1);
  const whatsappUrl = 'https://wa.me/6281234567890?text=Halo%20Dita%2C%20saya%20mau%20tanya%20soal%20renovasi%20...';
</script>

<Hero />

<TickerSection />

<AboutSection />

<DifferentiatorSection />

<TimelineSection />

<section class="section-block bg-raised" use:reveal>
  <div class="container-app">
    <div class="hazard-stripe hazard-stripe--always"></div>

    <div class="section-header section-header--left" style="max-width: 36rem">
      <span class="section-label">Portofolio</span>
      <h2 class="section-title">Proyek <span class="text-orange">Unggulan</span></h2>
      <p class="section-desc section-desc--left">
        Beberapa proyek yang sudah saya selesaikan. Klik untuk melihat detail lengkap.
      </p>
    </div>

    <div class="portfolio-featured">
      {#if leadProject}
        <div class="portfolio-featured__lead">
          <ProjectCard
            slug={leadProject.slug}
            title={leadProject.title}
            category={leadProject.category}
            duration={leadProject.duration}
            cover={leadProject.cover}
            featured={true}
          />
        </div>
      {/if}

      {#each sideProjects as project}
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

<section class="cta-band" use:reveal>
  <div class="container-app container-app--narrow text-center">
    <div class="stack items-center">
      <h2 class="section-title section-title--lg">
        Siap Renovasi atau <span class="text-orange">Bangun Rumah</span> Impian Anda?
      </h2>
      <p class="section-desc">
        Konsultasi gratis, tanpa biaya. Saya dengarkan dulu kebutuhan Anda, baru kita buat rencana.
      </p>
      <div class="btn-group btn-group--center w-full max-w-md">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" class="btn-primary btn-primary--on-orange">
          Chat WhatsApp
        </a>
        <a href="/kontak" class="btn-secondary btn-secondary--on-orange">
          Info Kontak
        </a>
      </div>
    </div>
  </div>
</section>
