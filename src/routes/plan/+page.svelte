<script lang="ts">
  import ProjectIndependenceCard from '$lib/components/cards/ProjectIndependenceCard.svelte';
  import RealFreedomCard from '$lib/components/cards/RealFreedomCard.svelte';
  import UnrigAmericaCard from '$lib/components/cards/UnrigAmericaCard.svelte';
  import Card from '$lib/components/core/Card.svelte';
  import Link from '$lib/components/core/Link.svelte';
</script>

<Card fill="gray">
  <div>
    <p class="ph-eyebrow">Get Informed</p>
    <h1 class="ph-header">Pro-Human's Plan to Win</h1>
  </div>
  <p>
    <br />Meet Pro-Human, a movement to build political power for we, the
    people.
  </p>
  <Link href="#plan" label="Dive in" icon="expand_circle_down" />
</Card>

<Card id="plan" border>
  <h2 class="ph-header">AI. Layoffs. Healthcare that doesn’t work.</h2>
  <p>
    <br />Corporate practices are out of control. We have sky-high debt that’s
    only getting worse: interest payments are forecast to hit $1 trillion per
    year starting in 2026.
  </p>
  <p>
    And the government has… done nothing. In some ways, it’s made it worse. So
    we need change, and we need it now.
  </p>
</Card>

<Card fill="black">
  <h2 class="ph-header">
    Pro-Human is a movement to build power for we, the people.
  </h2>
  <p>
    <br />The establishment has failed us: it gave us Donald Trump and his
    economy-wrecking tariffs twice. An adjudicated rapist, in the White House,
    making $3 billion while leaving America open to attack.
  </p>
  <p>
    MAGA is working to usher in the end-times while corporate Democrats cozy up
    to foreign governments. Who’s working for us?
  </p>
  <p>Enough is enough.</p>
</Card>

<Card>
  <h2 class="ph-header">We can build bipartisan power by 2030. Here’s how:</h2>
</Card>

<ProjectIndependenceCard />
<UnrigAmericaCard />
<RealFreedomCard />

<Card>
  <div>
    <p class="ph-eyebrow">In short:</p>
    <h2 class="ph-header">Elect humans accountable to we, the people.</h2>
  </div>
  <p><br />It's that simple.</p>
</Card>
