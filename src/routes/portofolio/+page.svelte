<script>
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import projects from '$lib/data/projects.json';

  let activeCategory = $state('Semua');

  const categories = ['Semua', ...new Set(projects.map(p => p.category))];

  const filteredProjects = $derived(
    activeCategory === 'Semua'
      ? projects
      : projects.filter(p => p.category === activeCategory)
  );
</script>

<svelte:head>
  <title>Portofolio — Dita Aditiya</title>
  <meta name="description" content="Portofolio proyek renovasi dan pembangunan oleh Dita Aditiya, tukang bangunan profesional area Bogor." />
</svelte:head>

<section class="pt-28 pb-20 bg-dark min-h-screen">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="text-center mb-12">
      <span class="text-orange text-sm font-semibold uppercase tracking-widest">Portofolio</span>
      <h1 class="text-3xl sm:text-5xl text-light mt-2">Semua <span class="text-orange">Proyek</span></h1>
      <p class="text-gray-text mt-3 max-w-xl mx-auto">
        Dokumentasi hasil kerja dari berbagai proyek yang sudah saya selesaikan.
        Dari renovasi kecil hingga pembangunan penuh.
      </p>
    </div>

    <!-- Filter -->
    <div class="flex flex-wrap justify-center gap-3 mb-12">
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

    <!-- Projects grid -->
    {#if filteredProjects.length > 0}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <div class="text-center py-20">
        <p class="text-gray-text text-lg">Belum ada proyek dalam kategori ini.</p>
      </div>
    {/if}
  </div>
</section>

<style>
  .filter-btn {
    display: inline-block;
    padding: 0.5rem 1.25rem;
    border-radius: 9999px;
    border: 1px solid var(--color-charcoal);
    color: var(--color-gray-text);
    font-family: var(--font-body);
    font-size: 0.85rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: all 0.2s;
    cursor: pointer;
    background: transparent;
  }
  .filter-btn:hover {
    border-color: var(--color-orange);
    color: var(--color-orange);
  }
  .filter-btn.active {
    background: var(--color-orange);
    border-color: var(--color-orange);
    color: #fff;
  }
</style>