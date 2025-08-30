<script lang="ts">
  import { page } from '$app/state';

  let navDialog: HTMLDialogElement;
  let accountDialog: HTMLDialogElement;

  const openNav = (e: MouseEvent) => {
    navDialog.showModal();
  };

  const closeNav = (e: MouseEvent) => {
    navDialog.close();
  };

  const openAccount = (e: MouseEvent) => {
    accountDialog.showModal();
  };

  const closeAccount = (e: MouseEvent) => {
    accountDialog.close();
  };

  const outsideClick = (e: MouseEvent) => {
    let target = e.target as HTMLDialogElement;

    if (target && target.nodeName === 'DIALOG') target.close();
  };
</script>

{#snippet navButton(
  onclick: (e: MouseEvent) => void,
  icon: string,
  label: string,
  dark: boolean = true,
  beta: boolean = false,
  square: boolean = false
)}
  <button
    class="flex items-center gap-1 rounded-4xl p-4 text-zinc-50 print:hidden"
    class:bg-zinc-900={dark}
    class:bg-zinc-50={!dark}
    class:text-zinc-50={dark}
    class:text-zinc-900={!dark}
    {onclick}
  >
    <span class="material-symbols-outlined w-[30px]">{icon}</span>
    <span class="ph-body-small" class:sr-only={square}>{label}</span>
    {#if beta}
      <span class="ph-eyebrow mt-1 self-center">BETA</span>
    {/if}
  </button>
{/snippet}

{#snippet navLink(
  dialog: HTMLDialogElement,
  href: string,
  label: string,
  color?: 'blue' | 'yellow' | 'green'
)}
  <a
    {href}
    onclick={() => {
      dialog.close();
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
  <div class="flex justify-between">
    {@render navButton(openNav, 'menu', 'Pro-Human', true, true)}
    {#if page.data.stytch_user_id}
      {@render navButton(
        openAccount,
        'account_circle',
        'Account',
        true,
        false,
        true
      )}
    {/if}
  </div>

  <dialog
    bind:this={navDialog}
    onclick={outsideClick}
    class="fixed top-0 left-0 m-0 flex h-full min-h-screen w-full max-w-none flex-col items-start bg-black/10"
  >
    <div
      class="max-w-prose grow bg-zinc-900 p-4 text-zinc-50 md:w-fit md:rounded-tr-3xl md:rounded-br-3xl"
    >
      <div class="flex flex-col gap-12">
        <div class="flex flex-col gap-8">
          <div>{@render navButton(closeNav, 'cancel', 'Close', false)}</div>
          {@render navLink(navDialog, '/', 'Homepage')}
        </div>
        <div class="flex flex-col gap-2">
          <h2 class="ph-eyebrow">Get Informed:</h2>
          <div class="flex flex-col gap-5">
            {@render navLink(
              navDialog,
              '/timeline',
              'How Elites Rigged Everything'
            )}
            {@render navLink(navDialog, '/plan', `Pro-Human's Plan to Win`)}
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h2 class="ph-eyebrow">Get Involved:</h2>
          <div class="flex flex-col gap-5">
            {@render navLink(
              navDialog,
              '/projects/project-independence',
              `Project Independence`,
              'blue'
            )}
            {@render navLink(
              navDialog,
              `/projects/unrig-america`,
              `Unrig America`,
              'yellow'
            )}
            {@render navLink(
              navDialog,
              `/projects/real-freedom`,
              `Real Freedom`,
              'green'
            )}
          </div>
        </div>
      </div>
    </div>
  </dialog>

  <dialog
    bind:this={accountDialog}
    onclick={outsideClick}
    class="fixed top-0 left-0 m-0 flex h-full min-h-screen w-full max-w-none flex-col items-end bg-black/10"
  >
    <div
      class="max-w-prose grow bg-zinc-900 p-4 text-zinc-50 md:w-fit md:rounded-tl-3xl md:rounded-bl-3xl"
    >
      <div class="flex flex-col gap-12">
        <div class="flex flex-col gap-8">
          <div>{@render navButton(closeAccount, 'cancel', 'Close', false)}</div>
          {@render navLink(accountDialog, '/signout', 'Sign out')}
        </div>
      </div>
    </div>
  </dialog>
</nav>
