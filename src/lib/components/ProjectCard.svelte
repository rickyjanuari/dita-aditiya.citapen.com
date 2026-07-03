<script>
  let { slug, title, category, duration, cover } = $props();
</script>

<a href="/portofolio/{slug}" class="project-card group block">
  <!-- Cover image with category overlay -->
  <div class="relative aspect-[4/3] overflow-hidden rounded-lg bg-charcoal">
    <!-- Placeholder -->
    <div class="w-full h-full flex items-center justify-center bg-charcoal text-gray-text">
      <div class="text-center">
        <svg class="mx-auto mb-2" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <path d="m21 15-5-5L5 21"/>
        </svg>
        <span class="text-xs">Foto Proyek</span>
      </div>
    </div>

    <!-- Category badge -->
    <span class="absolute top-3 left-3 bg-orange text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
      {category}
    </span>
  </div>

  <!-- Info -->
  <div class="mt-4">
    <h3 class="font-heading text-lg text-light group-hover:text-orange transition-colors">
      {title}
    </h3>
    <span class="text-gray-text text-sm">⏱ {duration}</span>
  </div>
</a>