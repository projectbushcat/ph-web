<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    fill?: 'white' | 'gray';
    children?: Snippet;
    id?: string;
  }

  let props: Props = $props();
</script>

<section
  class="m-auto my-8 flex max-w-[544px] flex-col gap-8 rounded-4xl px-4 py-32"
  class:bg-zinc-100={props.fill === 'gray'}
  class:bg-white={props.fill === 'white'}
  id={props.id || ''}
>
  {@render props.children?.()}
</section>
