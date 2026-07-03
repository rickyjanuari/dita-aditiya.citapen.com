<script>
  let { currentPath = '/' } = $props();
  let mobileOpen = $state(false);

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/portofolio', label: 'Portofolio' },
    { href: '/kontak', label: 'Kontak' }
  ];
</script>

<header class="fixed top-0 left-0 w-full z-50 bg-dark/95 backdrop-blur border-b border-charcoal">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-2">
        <span class="font-heading text-2xl text-orange tracking-tight">DITA</span>
        <span class="hidden sm:inline font-heading text-2xl text-light tracking-tight">ADITIYA</span>
      </a>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-8">
        {#each navLinks as link}
          <a
            href={link.href}
            class="font-body text-sm uppercase tracking-widest transition-colors hover:text-orange"
            class:text-orange={currentPath === link.href}
            class:text-gray-text={currentPath !== link.href}
          >
            {link.label}
          </a>
        {/each}
        <a
          href="https://wa.me/6281234567890?text=Halo%20Dita%2C%20saya%20mau%20tanya%20soal%20renovasi%20..."
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary text-sm"
        >
          WhatsApp
        </a>
      </nav>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden flex flex-col gap-1.5 p-2"
        onclick={() => mobileOpen = !mobileOpen}
        aria-label="Toggle menu"
      >
        <span
          class="block h-0.5 w-6 bg-light transition-transform"
          class:rotate-45={mobileOpen}
          class:translate-y-2={mobileOpen}
        ></span>
        <span
          class="block h-0.5 w-6 bg-light transition-opacity"
          class:opacity-0={mobileOpen}
        ></span>
        <span
          class="block h-0.5 w-6 bg-light transition-transform"
          class:-rotate-45={mobileOpen}
          class:-translate-y-2={mobileOpen}
        ></span>
      </button>
    </div>

    <!-- Mobile menu -->
    {#if mobileOpen}
      <nav class="md:hidden pb-6 flex flex-col gap-4">
        {#each navLinks as link}
          <a
            href={link.href}
            class="font-body text-lg uppercase tracking-widest transition-colors hover:text-orange"
            class:text-orange={currentPath === link.href}
            class:text-gray-text={currentPath !== link.href}
            onclick={() => mobileOpen = false}
          >
            {link.label}
          </a>
        {/each}
        <a
          href="https://wa.me/6281234567890?text=Halo%20Dita%2C%20saya%20mau%20tanya%20soal%20renovasi%20..."
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary text-center"
        >
          WhatsApp
        </a>
      </nav>
    {/if}
  </div>
</header>

<style>
  .btn-primary {
    display: inline-block;
    background: var(--color-orange);
    color: #fff;
    padding: 0.5rem 1.25rem;
    border-radius: 8px;
    font-family: var(--font-body);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: background 0.2s, transform 0.2s;
  }
  .btn-primary:hover {
    background: var(--color-orange-dark);
    transform: translateY(-1px);
  }
</style>