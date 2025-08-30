<script lang="ts">
  import Link from '$lib/components/core/Link.svelte';
  import Card from '$lib/components/core/Card.svelte';
  import usa from '$lib/assets/usa.svg';
  import NextThreeElectionsCard from '$lib/components/cards/NextThreeElectionsCard.svelte';
  import ProjectIndependenceCard from '$lib/components/cards/ProjectIndependenceCard.svelte';
  import UnrigAmericaCard from '$lib/components/cards/UnrigAmericaCard.svelte';
  import RealFreedomCard from '$lib/components/cards/RealFreedomCard.svelte';
  import { issues, type HomepageIssue } from './issues';
  import Button from '$lib/components/core/Button.svelte';

  const explanation = `Upside down US Flag. The flag code states that the flag should never be displayed upside down except as a signal of "extreme danger to life or property". While its original use was to signal distress at sea by sailors, its meaning has expanded over time and been adopted by both the political right and left to express dissent on various issues, including the results of the 2020 election and the overturning of Roe v. Wade, as well as protests against gun violence or the Vietnam War.`;

  let issueList = $state(issues);
  let slice = $state(3);

  $effect(() => {
    issueList = issues.sort(() => Math.random() - 0.5);
  });
</script>

<svelte:head>
  <title>Pro-Human: Building political power for we, the people</title>
</svelte:head>

<Card fill="gray">
  <div>
    <img
      class="w-24 rotate-x-180"
      src={usa}
      alt={explanation}
      title={explanation}
    />
    <h1 class="ph-header mt-3">You should be furious.</h1>
  </div>
  <p><br />For 80 years, America has been rigged to benefit elites.</p>
  <Link icon="add_circle" label="Explore our hidden history" href="/timeline" />
</Card>

<Card>
  <h2 class="ph-header">Together, we can fight back.</h2>
  <p>
    <br /><span class="font-medium">It starts with a simple question:</span> what
    issues matter to you and your neighbors?
  </p>
  <div>
    <ol class="flex flex-col gap-4">
      {#each issueList.slice(0, slice) as issue (issue.title)}
        <li>
          <details class="rounded-4xl bg-zinc-100 p-4">
            <summary class="cursor-pointer"
              >{issue.title} ({issue.agree}% agree)</summary
            >
            <p class="ph-body-small mt-2">
              {@html issue.story}{' '}<a
                href={issue.poll}
                target="_blank"
                class="underline opacity-60 hover:opacity-100 active:opacity-100"
                rel="nofollow">Source</a
              >.
            </p>
          </details>
        </li>
      {/each}
    </ol>
  </div>
  {#if slice < issueList.length}
    <div class="px-4">
      <Button
        icon="expand_circle_down"
        label="Show more…"
        type="button"
        onclick={() => {
          slice += 3;
        }}
      />
    </div>
  {/if}
</Card>

<NextThreeElectionsCard />
<ProjectIndependenceCard />
<UnrigAmericaCard />
<RealFreedomCard />
