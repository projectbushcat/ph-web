<script lang="ts">
  import type { Icon } from './Icon';

  interface Props {
    icon: Icon;
    label: string;
    href?: string;
    onclick?: (e: MouseEvent) => void;
  }

  let props: Props = $props();
</script>

<a href={props.href || '#'} onclick={props.onclick} class="flex gap-2">
  <span class="inline-flex h-9 items-center">
    <span class="material-symbols-outlined">{props.icon}</span>
  </span>
  <span class="underline">{props.label}</span>
</a>
