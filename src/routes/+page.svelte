<script lang="ts">
  import Button from '$lib/components/core/Button.svelte';
  import Card from '$lib/components/core/Card.svelte';
  import usa from '$lib/assets/usa.svg';

  const explanation = `Upside down US Flag. The flag code states that the flag should never be displayed upside down except as a signal of "extreme danger to life or property". While its original use was to signal distress at sea by sailors, its meaning has expanded over time and been adopted by both the political right and left to express dissent on various issues, including the results of the 2020 election and the overturning of Roe v. Wade, as well as protests against gun violence or the Vietnam War.`;
</script>

<svelte:head>
  <title>Pro-Human</title>
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
  <p>For 80 years, America has been rigged to benefit elites.</p>
  <Button
    icon="add_circle"
    label="How elites rigged everything"
    href="/timeline"
  />
</Card>
