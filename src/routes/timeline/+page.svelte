<script lang="ts">
  import Link from '$lib/components/core/Link.svelte';
  import Card from '$lib/components/core/Card.svelte';
  import { timeline } from './timeline';
  import NextThreeElectionsCard from '$lib/components/cards/NextThreeElectionsCard.svelte';
  import ProjectIndependenceCard from '$lib/components/cards/ProjectIndependenceCard.svelte';
  import UnrigAmericaCard from '$lib/components/cards/UnrigAmericaCard.svelte';
  import RealFreedomCard from '$lib/components/cards/RealFreedomCard.svelte';
</script>

<svelte:head>
  <title>How Elites Rigged Everything | Pro-Human</title>
</svelte:head>

<Card fill="gray">
  <div>
    <p class="ph-eyebrow">Get Informed</p>
    <h1 class="ph-header">How Elites Rigged Everything</h1>
  </div>
  <p>
    <br />Explore America’s authoritarian history with Pro-Human’s interactive
    timeline.
  </p>
  <Link
    icon="expand_circle_down"
    label="Dive in"
    href={`#${timeline[0].dates}`}
  />
</Card>

{#each timeline as era}
  <article
    class="m-auto my-8 flex max-w-prose flex-col gap-8 md:px-18"
    id={era.dates}
  >
    <section class="flex flex-col gap-8 pt-32">
      <div>
        <p class="ph-eyebrow normal-case!">{era.dates}</p>
        <h2 class="ph-header">{era.title}</h2>
      </div>
      <p><br />{era.intro}</p>
    </section>
    <ol class="flex flex-col gap-4">
      {#each era.items as item}
        <li>
          <details
            class="bg-zinc-100 p-4"
            class:rounded-4xl={!item.highlight}
            class:bg-white!={item.highlight}
            class:border-2={item.highlight}
            class:border-rose-500={item.highlight}
            open={item.highlight || undefined}
          >
            <summary class="cursor-pointer">{item.title}</summary>
            <p class="ph-body-small mt-2">{@html item.story}</p>
            <p class="mt-8 text-base">
              Further reading:<br
              />{#each item.research_topics as research_topic, rt_index}
                <a
                  href={`https://google.com/search?q=${encodeURIComponent(research_topic)}`}
                  target="_blank"
                  rel="nofollow"
                  class="underline opacity-60 hover:opacity-100 active:opacity-100"
                  >{research_topic}</a
                >
                {#if item.research_topics[rt_index + 1]}{' • '}{/if}
              {/each}
            </p>
          </details>
        </li>
      {/each}
    </ol>
    <p>{@html era.outro}</p>
  </article>
{/each}

<NextThreeElectionsCard fill="white" />
<ProjectIndependenceCard />
<UnrigAmericaCard />
<RealFreedomCard />
