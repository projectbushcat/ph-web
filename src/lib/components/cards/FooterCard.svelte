<script lang="ts">
  import Card from '../core/Card.svelte';
  import usa from '$lib/assets/usa.svg';
</script>

<footer>
  <Card fill="white" border>
    <div>
      <img src={usa} alt="US Flag" class="w-24" />
      <h2 class="ph-header">Pro-Human</h2>
      <p>Building political power for we, the people.</p>
    </div>
    <div>
      <p></p>
      <p class="text-zinc-400">
        A project by <a href="https://mainstreetdx.com" class="underline"
          >Main Street DX</a
        >.<br />&copy; 2025 – &rsquo;til we don&lsquo;t need it.
      </p>
    </div>
  </Card>
</footer>
