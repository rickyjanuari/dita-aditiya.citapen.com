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

<!-- Featured projects -->
<section class="py-20 bg-charcoal">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <!-- Hazard stripe -->
    <div class="hazard-stripe mb-16"></div>

    <div class="text-center max-w-2xl mx-auto mb-14">
      <span class="text-orange text-sm font-semibold uppercase tracking-widest">Portofolio</span>
      <h2 class="text-3xl sm:text-4xl text-light mt-2">Proyek <span class="text-orange">Unggulan</span></h2>
      <p class="text-gray-text mt-3">Beberapa proyek yang sudah saya selesaikan. Klik untuk melihat detail lengkap.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

    <div class="text-center">
      <a href="/portofolio" class="btn-secondary">
        Lihat Semua Proyek
      </a>
    </div>
  </div>
</section>

<TestimonialSection />

<!-- CTA section -->
<section class="py-20 bg-dark">
  <div class="mx-auto max-w-3xl px-4 text-center">
    <div class="hazard-stripe mb-12"></div>
    <h2 class="text-3xl sm:text-5xl text-light">Siap Renovasi atau <span class="text-orange">Bangun Rumah</span> Impian Anda?</h2>
    <p class="text-gray-text mt-4 text-lg">Konsultasi gratis, tanpa biaya. Saya dengarkan dulu kebutuhan Anda, baru kita buat rencana.</p>
    <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" class="btn-primary">
        Chat WhatsApp Sekarang
      </a>
      <a href="/kontak" class="btn-secondary">
        Lihat Info Kontak
      </a>
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