<script lang="ts">
  import '../app.css';
  import favicon from '$lib/assets/favicon.svg';
  import Nav from '$lib/components/core/Nav.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Nav />

<main>
  {@render children?.()}
</main>
