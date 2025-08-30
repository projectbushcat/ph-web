<script lang="ts">
  import '../app.css';
  import favicon from '$lib/assets/favicon.svg';
  import Nav from '$lib/components/core/Nav.svelte';
  import FooterCard from '$lib/components/cards/FooterCard.svelte';
  import { page } from '$app/state';

  let { children } = $props();

  $effect(() => {
    document.body.style.backgroundColor = `var(--color-${page.data.fill || 'white'})`;
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Nav />

<main>
  {@render children?.()}
</main>

<FooterCard />
