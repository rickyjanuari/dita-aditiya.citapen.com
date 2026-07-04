<script>
  let { slug, title, category, duration, cover, featured = false } = $props();
</script>

<a href="/portofolio/{slug}" class="project-card group block h-full">
  <div class="project-card__image">
    {#if cover}
      <img src={cover} alt={title} loading="lazy" />
    {:else}
      <div class="w-full h-full flex items-center justify-center bg-muted text-muted-fg p-6">
        <div class="text-center">
          <svg class="mx-auto mb-2" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <path d="m21 15-5-5L5 21"/>
          </svg>
          <span class="text-xs">Foto Proyek</span>
        </div>
      </div>
    {/if}

    <span class="site-badge site-badge--sm site-badge--category">
      {category}
    </span>
  </div>

  <div class="project-card__body">
    <h3
      class="font-heading text-fg group-hover:text-orange transition-colors leading-tight"
      class:text-xl={featured}
      class:sm:text-2xl={featured}
      class:text-base={!featured}
      class:sm:text-lg={!featured}
    >
      {title}
    </h3>
    <span class="text-muted-fg text-sm mt-1.5 block">{duration}</span>
  </div>
</a>
