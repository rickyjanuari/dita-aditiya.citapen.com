<script>
  import { page } from '$app/stores';
  import projects from '$lib/data/projects.json';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { reveal } from '$lib/actions/reveal.js';

  const project = $derived(projects.find(p => p.slug === $page.params.slug));

  const otherProjects = $derived(
    projects.filter(p => p.slug !== $page.params.slug).slice(0, 3)
  );

  const whatsappUrl = 'https://wa.me/6281234567890?text=Halo%20Dita%2C%20saya%20mau%20tanya%20soal%20...';
</script>

<svelte:head>
  <title>{project?.title ?? 'Proyek'} - Dita Aditiya</title>
  <meta name="description" content={project?.description ?? 'Detail proyek Dita Aditiya'} />
</svelte:head>

<section class="page-inner bg-blueprint" use:reveal>
  <div class="container-app container-app--medium">
    {#if project}
      <a href="/portofolio" class="inline-flex items-center gap-2 text-muted-fg hover:text-orange transition-colors text-sm mb-8 py-1">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5m7-7-7 7 7 7"/>
        </svg>
        Kembali ke Portofolio
      </a>

      <div class="stack">
        <div>
          <span class="site-badge site-badge--sm mb-5">{project.category}</span>
          <h1 class="section-title section-title--lg">{project.title}</h1>

          <div class="flex flex-wrap gap-x-6 gap-y-2 mt-5 text-muted-fg text-sm">
            <span>{project.duration}</span>
            <span>{project.location}</span>
            <span>{project.year}</span>
          </div>
        </div>

        <p class="text-muted-fg text-base leading-relaxed">{project.description}</p>

        <div>
          <h2 class="font-heading text-xl sm:text-2xl text-fg mb-5">Galeri Foto</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-gap">
            {#each project.gallery as img, i}
              <div class="aspect-[4/3] bg-muted border-2 border-ink shadow-plate flex items-center justify-center overflow-hidden" style="border-radius: var(--radius-card)">
                <div class="text-center text-muted-fg p-6">
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

        <div class="info-panel text-center py-8 sm:py-10">
          <h3 class="font-heading text-lg sm:text-xl text-fg">Tertarik dengan hasil seperti ini?</h3>
          <p class="text-muted-fg mt-3 text-sm sm:text-base">Ceritakan proyek Anda ke saya. Gratis konsultasi.</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" class="btn-primary mt-6 max-w-sm mx-auto">
            Chat WhatsApp
          </a>
        </div>

        <div>
          <div class="hazard-stripe hazard-stripe--always"></div>
          <h2 class="section-title">Proyek <span class="text-orange">Lainnya</span></h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-gap mt-8">
            {#each otherProjects as p}
              <ProjectCard slug={p.slug} title={p.title} category={p.category} duration={p.duration} cover={p.cover} />
            {/each}
          </div>
        </div>
      </div>
    {:else}
      <div class="text-center py-16 sm:py-24 stack items-center">
        <h1 class="section-title">Proyek Tidak Ditemukan</h1>
        <p class="text-muted-fg">Proyek dengan slug "{$page.params.slug}" tidak tersedia.</p>
        <a href="/portofolio" class="btn-primary max-w-xs">Kembali ke Portofolio</a>
      </div>
    {/if}
  </div>
</section>
