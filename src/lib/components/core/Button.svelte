<script lang="ts">
  interface Props {
    icon:
      | 'add_circle'
      | 'arrow_upload_progress'
      | 'do_not_disturb_on'
      | 'expand_circle_down'
      | 'menu';
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
