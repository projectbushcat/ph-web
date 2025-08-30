<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    fill?: 'white' | 'gray' | 'black' | 'blue' | 'yellow' | 'green';
    children?: Snippet;
    id?: string;
    border?: boolean;
  }

  let props: Props = $props();
</script>

<section
  class="m-auto my-8 flex max-w-prose flex-col gap-8 rounded-4xl px-4 py-32 md:px-18"
  class:bg-zinc-100={props.fill === 'gray'}
  class:bg-white={props.fill === 'white'}
  class:bg-black={props.fill === 'black'}
  class:text-white={props.fill === 'black'}
  class:bg-ph-blue={props.fill === 'blue'}
  class:bg-ph-yellow={props.fill === 'yellow'}
  class:bg-ph-green={props.fill === 'green'}
  class:border={props.border}
  id={props.id || ''}
>
  {@render props.children?.()}
</section>
