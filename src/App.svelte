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

<main class="flex w-full justify-center items-center overflow-x-hidden">
  <div class="logo-animation -500:w-full -500:scale-[3] overflow-hidden flex justify-center items-center"></div>
</main>

<style>
</style>
