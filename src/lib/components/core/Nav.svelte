<script lang="ts">
  import { page } from '$app/state';

  let navDialog: HTMLDialogElement;

  const openDialog = (e: MouseEvent) => {
    navDialog.showModal();
  };

  const closeDialog = (e: MouseEvent) => {
    navDialog.close();
  };
</script>

{#snippet navButton(
  onclick: (e: MouseEvent) => void,
  icon: string,
  label: string,
  dark: boolean = true,
  beta: boolean = false
)}
  <button
    class="flex items-center gap-2 rounded-4xl p-4 text-zinc-50 print:hidden"
    class:bg-zinc-900={dark}
    class:bg-zinc-50={!dark}
    class:text-zinc-50={dark}
    class:text-zinc-900={!dark}
    {onclick}
  >
    <span class="material-symbols-outlined">{icon}</span>
    <span class="ph-body-small">{label}</span>
    {#if beta}
      <span class="ph-eyebrow mt-1 self-center">BETA</span>
    {/if}
  </button>
{/snippet}

{#snippet navLink(
  href: string,
  label: string,
  color?: 'blue' | 'yellow' | 'green'
)}
  <a
    {href}
    onclick={() => {
      navDialog.close();
    }}
    class:text-ph-blue={color === 'blue'}
    class:text-ph-yellow={color === 'yellow'}
    class:text-ph-green={color === 'green'}
  >
    {#if page.url.pathname === href}•{' '}
    {/if}
    {label}
  </a>
{/snippet}

<nav class="sticky top-4 z-10">
  {@render navButton(openDialog, 'menu', 'Pro-Human', true, true)}
  <dialog
    bind:this={navDialog}
    class="fixed top-0 left-0 m-0 h-full min-h-screen w-full max-w-none bg-zinc-900 p-4 text-zinc-50 md:w-fit md:rounded-tr-3xl md:rounded-br-3xl"
  >
    <div class="flex flex-col gap-12">
      <div class="flex flex-col gap-8">
        <div>{@render navButton(closeDialog, 'cancel', 'Close', false)}</div>
        {@render navLink('/', 'Homepage')}
      </div>
      <div class="flex flex-col gap-2">
        <h2 class="ph-eyebrow">Get Informed:</h2>
        <div class="flex flex-col gap-5">
          {@render navLink('/timeline', 'How Elites Rigged Everything')}
          {@render navLink('/plan', `Pro-Human's Plan to Win`)}
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <h2 class="ph-eyebrow">Get Involved:</h2>
        <div class="flex flex-col gap-5">
          {@render navLink(
            '/projects/project-independence',
            `Project Independence`,
            'blue'
          )}
          {@render navLink(
            `/projects/unrig-america`,
            `Unrig America`,
            'yellow'
          )}
          {@render navLink(`/projects/real-freedom`, `Real Freedom`, 'green')}
        </div>
      </div>
    </div>
  </dialog>
</nav>
