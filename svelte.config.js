import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: undefined,
      pages: 'build',
      assets: 'build',
      precompress: true,
      strict: true
    }),
    prerender: {
      handleHttpError({ path, message }) {
        // Placeholder project images may not exist yet during build
        if (path.startsWith('/images/projects/')) {
          console.warn(`[prerender] Missing asset (skipped): ${path}`);
          return;
        }
        throw new Error(message);
      },
      handleMissingId: 'warn'
    }
  }
};

export default config;
