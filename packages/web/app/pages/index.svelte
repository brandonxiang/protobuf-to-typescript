<script>
  import { onMount } from 'svelte';
  import pbToTypescript from 'pbts/core';
  import ClipboardJS from 'clipboard';

  let src = `
syntax = "proto3";

service MyService {
    // This is a comment.
    rpc MyMethod (MyRequest) returns (MyResponse);
}

message MyRequest {
    // path is a required field.
    string path = 1;
}

message MyResponse {
    int32 status = 1;
}
  `;

  let dest = '';

  let selectedDefinition = '0';

  let isWarning = false;

  function onProtobuf() {
    const isDefinition = selectedDefinition === '1';
    const isJsdoc = selectedDefinition === '2';
    dest = pbToTypescript.parseProto('syntax = "proto3";' + src, {
      isDefinition,
      isJsdoc,
    });
    isWarning = false;
  }

  onMount(() => {
    window.onerror = () => {
      isWarning = true;
    };
    onProtobuf();
    new ClipboardJS('.button');
  });
</script>

<div id="container">
  <div class="col">
    <h3>Protocol buffer</h3>
<textarea name="" bind:value={src} on:input={onProtobuf}></textarea>
 {#if isWarning}
    <span class="rightcorner warning">Invalid Protobuf</span>
 {/if}
  </div>
  <div class="col">
    <div class="tool-bar">
      <select bind:value={selectedDefinition} on:change={onProtobuf} on:blur={onProtobuf} class="type-selector">
        <option value="1">Typescript d.ts</option>
        <option value="0">Typescript File</option>
        <option value="2">Jsdoc</option>
      </select>
    </div>
    <textarea name="" id="typescript" bind:value={dest}></textarea>
    <span class="rightcorner button" data-clipboard-target="#typescript">Copy to clipboard</span>
  </div>
</div>

<style>

</style>