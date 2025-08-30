<script lang="ts">
  import Card from '../core/Card.svelte';
  import type { Fill } from '../core/Fill';
  import Link from '../core/Link.svelte';

  let { fill = 'gray' }: { fill?: Fill } = $props();
</script>

<Card {fill}>
  <div>
    <p class="ph-eyebrow">Introducing…</p>
    <h2 class="ph-header">
      A people-powered roadmap for the next three elections.
    </h2>
  </div>
  <Link href="/plan" icon="add_circle" label="Pro-Human's Plan to Win" />
</Card>
