<script>
  import lottie from "lottie-web";
  import logo from "./assets/final2.json";
  import { onMount } from "svelte";

  let logoAnim;

  onMount(() => {
    // LOTTIE ANIMATION
    logoAnim = lottie.loadAnimation({
      container: document.querySelector(".logo-animation"),
      animationData: logo,
      loop: true,
      autoplay: true,
    });
  });
</script>

<main>
  <div class="logo-animation"></div>
</main>

<style>
</style>
