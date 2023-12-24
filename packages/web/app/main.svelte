<script>
  import Navbar from '../components/nav-bar.svelte';
  import IndexPage from './pages/index.svelte';
  import MockPage from './pages/mock.svelte';
  import AstPage from './pages/ast.svelte';
  import {PAGE_HASH} from './constants/index';

  let routeIndex = PAGE_HASH.INDEX_PAGE;

  function onRouteChange (event) {
    routeIndex = event.detail.route || 0;
  }

</script>

<Navbar current={routeIndex} on:change={onRouteChange} />

<div>
  {#if routeIndex === PAGE_HASH.MOCK_PAGE}
    <MockPage />
  {:else if routeIndex === PAGE_HASH.AST_PAGE}
    <AstPage />
  {:else}
    <IndexPage />
  {/if}
</div>

<style>
  :root {
    --black: #111;
    --white: #eee;
    --blue: #1890ff;
    --gray: #f0f1f2;
    --dark-gray: #5c5c5c;
  }
  :global(.dark) {
    background-color: var(--black);
    color: var(--white);
  }
  :global(body,html)  {
    font-family: Sans-Serif;
    margin: 0;
  }
  :global(h1,h2) {
    margin: 16px 8px;
  }
  :global(h3) {
    margin: 5px 8px;
    line-height: 30px;
  }
  :global(.col) {
    height: 100%;
    width: calc(50% - 16px);
    float: left;
    margin: 0 8px;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  :global(.editor) {
    height: 100%;
    width: calc(40% - 16px);
    float: left;
    margin: 0 8px;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  :global(textarea,pre) {
    border: 1px solid var(--gray);
    border-radius: 4px;
  }
  :global(.dark textarea,pre) {
    background-color: var(--black);
    color: var(--white);
  }
  :global(#container) {
    height: calc(100vh - 83px);
    padding-top: 20px;
  }
  :global(.error) {
    color: red;
    display: none;
  }
  :global(.selector) {
    width: 20%;
    float: left;
    height: calc(100vh - 83px);
    overflow: scroll;
    background-color: white;
  }
  :global(.header) {
    height: 63px;
    margin: auto;
    padding: 0 60px;
    box-shadow: 0 2px 8px var(--gray);
  }
  :global(.dark .header) {
    box-shadow: 0 2px 8px var(--dark-gray);
  }
  :global(.header a) {
    font-size: 18px;
    line-height: 63px;
    height: 63px;
    padding: 10px;
    text-decoration: none;
    color: var(--black);
  }
  :global(.dark .header a) {
    color: var(--white);
  }
  :global(.header a:hover) {
    color: var(--blue);
  }
  :global(.header .active) {
    color: var(--blue);
    border-bottom: 3px solid var(--blue);
  }
  :global(.method-item) {
    color: var(--blue);
    border: 2px solid var(--blue);
    border-radius: 8px;
    padding: 5px;
    margin: 5px;
    cursor: pointer;
    list-style-type: none;
  }
  :global(.method-item:hover) {
    background-color: var(--blue);
    color: var(--white);
  }
  :global(.github-link) {
    float: right;
    padding: 0 !important;
  }
  :global(.type-selector) {
    height: 30px;
    margin: 5px 0;
    width: 150px;
  }
  :global(.tool-bar) {
    display: flex;
    flex-direction: row;
  }
  :global(textarea) {
    flex: 1;
  }
  :global(.rightcorner) {
    position: absolute;
    right: 0;
    top: 40px;
    border-bottom-left-radius: 10px;
    padding: 5px 10px;
  }
  :global(.button) {
    color: var(--blue);
    border-left: 2px solid var(--blue);
    border-bottom: 2px solid var(--blue);
    cursor: pointer;
  }
  :global(.warning) {
    color: red;
    border-left: 2px solid red;
    border-bottom: 2px solid red;
  }
</style>
