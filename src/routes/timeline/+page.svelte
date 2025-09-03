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
  <title>Timeline of American Corruption | Pro-Human</title>
</svelte:head>

<Card fill="gray">
  <div>
    <p class="ph-eyebrow">Get Informed</p>
    <h1 class="ph-header">Timeline of American Corruption</h1>
  </div>
  <p>
    <br /><strong
      >This is the story of how elites bent the rules, and we, the people,
      pushed back.</strong
    > American democracy was never guaranteed: from the pulpit to the classroom to
    the ballot box, powerful interests found ways to tilt the field in their favor
    — while ordinary Americans organized to reclaim their voice.
  </p>
  <p>
    <strong>These aren't isolated incidents.</strong> They're part of a pattern that
    stretches across decades, connecting corporate boardrooms to political strategy
    and grassroots resistance. Understanding these connections shows us both how
    we got here and how we can build something better.
  </p>
  <div class="flex flex-col flex-wrap gap-4 md:flex-row">
    <span>Dive in:</span>
    <Link
      icon="expand_circle_down"
      label="Religion"
      href={`#${timeline[0].eyebrow}`}
    />
    <Link
      icon="expand_circle_down"
      label="Education"
      href={`#${timeline[1].eyebrow}`}
    />
    <Link
      icon="expand_circle_down"
      label="Elections"
      href={`#${timeline[2].eyebrow}`}
    />
  </div>
</Card>

{#each timeline as era}
  <article
    class="m-auto my-8 flex max-w-prose flex-col gap-8 md:px-18"
    id={era.eyebrow}
  >
    <section class="flex flex-col gap-8 pt-32">
      <div>
        <p class="ph-eyebrow normal-case!">{era.eyebrow}</p>
        <h2 class="ph-header">{era.title}</h2>
      </div>
      <p><br />{@html era.intro}</p>
    </section>
    <ol class="flex flex-col gap-4">
      {#each era.items as item}
        <li>
          <details
            class="rounded-4xl bg-zinc-100 p-4"
            class:border-2={item.highlight}
            class:border-rose-300={item.highlight}
            open={item.highlight || undefined}
          >
            <summary class="cursor-pointer">{item.title}</summary>
            <div class="ph-body-small flex flex-col gap-6 pt-4">
              {#if item.economic_context}
                <p>
                  <span class="ph-eyebrow">ECONOMIC CONTEXT:</span><br />
                  {item.economic_context}
                </p>
              {/if}
              <p>
                <span class="ph-eyebrow">WHAT HAPPENED:</span><br />
                {@html item.story}
              </p>
              {#if item.key_statistic}
                <p>
                  <span class="ph-eyebrow">KEY STAT:</span><br
                  />{item.key_statistic}
                </p>
              {/if}
              <p>
                <span class="ph-eyebrow">FURTHER READING:</span><br
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
            </div>
          </details>
        </li>
      {/each}
    </ol>
    <p>{@html era.outro}</p>
  </article>
{/each}

<!-- <NextThreeElectionsCard fill="white" />
<ProjectIndependenceCard />
<UnrigAmericaCard />
<RealFreedomCard /> -->
