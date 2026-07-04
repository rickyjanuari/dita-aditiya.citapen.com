<script>
  import { page } from '$app/stores';

  let mobileOpen = $state(false);

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/portofolio', label: 'Portofolio' },
    { href: '/kontak', label: 'Kontak' }
  ];

  const currentPath = $derived($page.url.pathname);

  function closeMenu() {
    mobileOpen = false;
  }

  function isActive(href) {
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  }
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && closeMenu()} />

<header class="fixed top-0 left-0 w-full z-50 bg-raised/95 backdrop-blur-md border-b-2 border-ink">
  <div class="container-app">
    <div class="flex h-16 items-center justify-between">
      <a href="/" class="flex items-center gap-1.5 sm:gap-2" onclick={closeMenu}>
        <span class="font-heading text-xl sm:text-2xl text-orange tracking-tight">DITA</span>
        <span class="font-heading text-xl sm:text-2xl text-fg tracking-tight">ADITIYA</span>
      </a>

      <nav class="hidden md:flex items-center gap-8">
        {#each navLinks as link}
          <a
            href={link.href}
            class="font-body text-sm uppercase tracking-widest transition-colors hover:text-orange"
            class:text-orange={isActive(link.href)}
            class:text-muted-fg={!isActive(link.href)}
          >
            {link.label}
          </a>
        {/each}
        <a
          href="https://wa.me/6281234567890?text=Halo%20Dita%2C%20saya%20mau%20tanya%20soal%20renovasi%20..."
          target="_blank"
          rel="noopener noreferrer"
          class="nav-cta"
        >
          Chat WhatsApp
        </a>
      </nav>

      <button
        class="md:hidden flex flex-col justify-center gap-1.5 p-2.5 -mr-1 rounded active:bg-muted transition-colors"
        onclick={() => mobileOpen = !mobileOpen}
        aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
        aria-expanded={mobileOpen}
      >
        <span
          class="block h-0.5 w-6 bg-fg transition-transform origin-center"
          class:rotate-45={mobileOpen}
          class:translate-y-2={mobileOpen}
        ></span>
        <span
          class="block h-0.5 w-6 bg-fg transition-opacity"
          class:opacity-0={mobileOpen}
        ></span>
        <span
          class="block h-0.5 w-6 bg-fg transition-transform origin-center"
          class:-rotate-45={mobileOpen}
          class:-translate-y-2={mobileOpen}
        ></span>
      </button>
    </div>
  </div>

  {#if mobileOpen}
    <button class="mobile-menu-overlay md:hidden" aria-label="Tutup menu" onclick={closeMenu}></button>
    <div class="mobile-menu-panel md:hidden">
      {#each navLinks as link}
        <a
          href={link.href}
          class="mobile-menu-link"
          class:mobile-menu-link--active={isActive(link.href)}
          onclick={closeMenu}
        >
          {link.label}
        </a>
      {/each}
      <a
        href="https://wa.me/6281234567890?text=Halo%20Dita%2C%20saya%20mau%20tanya%20soal%20renovasi%20..."
        target="_blank"
        rel="noopener noreferrer"
        class="nav-cta w-full mt-4"
        onclick={closeMenu}
      >
        Chat WhatsApp
      </a>
    </div>
  {/if}
  <div class="nav-hazard"></div>
</header>
