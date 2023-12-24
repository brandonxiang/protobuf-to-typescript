<script>
  import { createEventDispatcher } from "svelte";
  import { PAGE_HASH } from "../app/constants";

  export let current = 0;

  const dispatch = createEventDispatcher();

  /**
   * 
   * @param {number} route
   */
  function routerChange(route) {
		dispatch('change', {
			route
		});
	}
</script>


<header class="header">
  <a href="/#" class={current === 0 ? "active": ""} on:click={() => routerChange(PAGE_HASH.INDEX_PAGE)}>Convert</a>
  <a href="/#mock" class={current === 1 ? "active": ""} on:click={() => routerChange(PAGE_HASH.MOCK_PAGE)}>Mock</a>
  <a href="/#ast" class={current === 2 ? "active": ""} on:click={() => routerChange(PAGE_HASH.AST_PAGE)}>AST</a>
  <a href="http://www.jsontots.com/" target="_blank">JSON Converter</a>
  <a class="github-link" href="https://github.com/brandonxiang/pb-to-typescript">Github</a>
</header>