<script>
  import { page } from '$app/stores';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import WhatsAppButton from '$lib/components/WhatsAppButton.svelte';
  import MobileBottomNav from '$lib/components/MobileBottomNav.svelte';
  import '../app.css';

  let { children } = $props();

  const currentPath = $derived($page.url.pathname);
</script>

<Navbar />
<main>{@render children()}</main>
<Footer />
<MobileBottomNav currentPath={currentPath} />
<WhatsAppButton />
