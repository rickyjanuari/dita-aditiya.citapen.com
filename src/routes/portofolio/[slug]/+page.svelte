<script>
  import { page } from '$app/stores';
  import projects from '$lib/data/projects.json';
  import ProjectCard from '$lib/components/ProjectCard.svelte';

  const project = $derived(projects.find(p => p.slug === $page.params.slug));

  const otherProjects = $derived(
    projects.filter(p => p.slug !== $page.params.slug).slice(0, 3)
  );

  const whatsappUrl = 'https://wa.me/6281234567890?text=Halo%20Dita%2C%20saya%20mau%20tanya%20soal%20...';
</script>

<svelte:head>
  <title>{project?.title ?? 'Proyek'} — Dita Aditiya</title>
  <meta name="description" content={project?.description ?? 'Detail proyek Dita Aditiya'} />
</svelte:head>

<section class="pt-28 pb-20 bg-dark min-h-screen">
  <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    {#if project}
      <!-- Breadcrumb -->
      <a href="/portofolio" class="inline-flex items-center gap-2 text-gray-text hover:text-orange transition-colors text-sm mb-8">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5m7-7-7 7 7 7"/>
        </svg>
        Kembali ke Portofolio
      </a>

      <!-- Title -->
      <span class="inline-block bg-orange/20 text-orange text-xs font-semibold px-3 py-1 rounded-full mb-4">
        {project.category}
      </span>
      <h1 class="text-3xl sm:text-5xl text-light">{project.title}</h1>

      <!-- Meta -->
      <div class="flex flex-wrap gap-6 mt-4 text-gray-text text-sm">
        <span>⏱ {project.duration}</span>
        <span>📍 {project.location}</span>
        <span>📅 {project.year}</span>
      </div>

      <!-- Description -->
      <div class="mt-8 text-gray-text leading-relaxed max-w-3xl">
        <p>{project.description}</p>
      </div>

      <!-- Gallery -->
      <div class="mt-12">
        <h2 class="font-heading text-2xl text-light mb-6">Galeri Foto</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {#each project.gallery as img, i}
            <div class="aspect-[4/3] rounded-lg bg-charcoal flex items-center justify-center overflow-hidden">
              <div class="text-center text-gray-text">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <path d="m21 15-5-5L5 21"/>
                </svg>
                <span class="text-xs block mt-2">Foto {i + 1}</span>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-16 p-8 bg-charcoal rounded-lg border border-dark text-center">
        <h3 class="font-heading text-xl text-light">Tertarik dengan hasil seperti ini?</h3>
        <p class="text-gray-text mt-2">Ceritakan proyek Anda ke saya. Gratis konsultasi.</p>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" class="btn-primary mt-4 inline-block">
          Tanya via WhatsApp
        </a>
      </div>

      <!-- Other projects -->
      <div class="mt-20">
        <div class="hazard-stripe mb-12"></div>
        <h2 class="text-2xl text-light text-center mb-8">Proyek <span class="text-orange">Lainnya</span></h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {#each otherProjects as p}
            <ProjectCard slug={p.slug} title={p.title} category={p.category} duration={p.duration} cover={p.cover} />
          {/each}
        </div>
      </div>
    {:else}
      <!-- Not found -->
      <div class="text-center py-20">
        <h1 class="text-3xl text-light">Proyek Tidak Ditemukan</h1>
        <p class="text-gray-text mt-3">Proyek dengan slug "{($page.params.slug)}" tidak tersedia.</p>
        <a href="/portofolio" class="btn-primary mt-6 inline-block">Kembali ke Portofolio</a>
      </div>
    {/if}
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
    transition: background 0.2s, transform 0.2s;
  }
  .btn-primary:hover {
    background: var(--color-orange-dark);
    transform: translateY(-2px);
  }
</style>