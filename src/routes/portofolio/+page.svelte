<script>
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import projects from '$lib/data/projects.json';
  import { reveal } from '$lib/actions/reveal.js';

  let activeCategory = $state('Semua');

  const categories = ['Semua', ...new Set(projects.map(p => p.category))];

  const filteredProjects = $derived(
    activeCategory === 'Semua'
      ? projects
      : projects.filter(p => p.category === activeCategory)
  );
</script>

<svelte:head>
  <title>Portofolio - Dita Aditiya</title>
  <meta name="description" content="Portofolio proyek renovasi dan pembangunan oleh Dita Aditiya, tukang bangunan profesional area Bogor." />
</svelte:head>

<section class="page-inner bg-blueprint" use:reveal>
  <div class="container-app">
    <div class="section-header section-header--left" style="max-width: 40rem">
      <h1 class="section-title section-title--lg">Semua <span class="text-orange">Proyek</span></h1>
      <p class="section-desc section-desc--left">
        Dokumentasi hasil kerja dari berbagai proyek yang sudah saya selesaikan.
        Dari renovasi kecil hingga pembangunan penuh.
      </p>
    </div>

    <div class="filter-scroll">
      {#each categories as cat}
        <button
          onclick={() => activeCategory = cat}
          class="filter-btn"
          class:active={activeCategory === cat}
        >
          {cat}
        </button>
      {/each}
    </div>

    {#if filteredProjects.length > 0}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-gap">
        {#each filteredProjects as project}
          <ProjectCard
            slug={project.slug}
            title={project.title}
            category={project.category}
            duration={project.duration}
            cover={project.cover}
          />
        {/each}
      </div>
    {:else}
      <div class="text-center py-16 sm:py-24">
        <p class="text-muted-fg text-base sm:text-lg">Belum ada proyek dalam kategori ini.</p>
      </div>
    {/if}
  </div>
</section>
