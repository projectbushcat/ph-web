<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    fill?: 'white' | 'gray';
    children?: Snippet;
    id?: string;
    compact?: boolean;
  }

  let props: Props = $props();
</script>

<section
  class="m-auto my-8 flex max-w-prose flex-col gap-8 rounded-4xl px-4 py-32"
  class:py-8!={props.compact}
  class:bg-zinc-100={props.fill === 'gray'}
  class:bg-white={props.fill === 'white'}
  id={props.id || ''}
>
  {@render props.children?.()}
</section>
