<script>
  import { onMount } from 'svelte/internal';
  import pbToTypescript from 'pbts/core';
  import ClipboardJS from 'clipboard';
  import CodeMirror from "svelte-codemirror-editor";
  import { javascript } from "@codemirror/lang-javascript";

  let src = ` 
syntax = "proto3";

service Greeter {
  rpc SayHello (HelloRequest) returns (HelloReply) {}
}

message HelloRequest {
  string name = 1;
}

message Teacher {
  string name = 1;
}

message HelloReply {
  string message = 1;
  number test = 2;
  Teacher teacher = 3;
}
`;
  let dest;

  let isWarning = false;

  let methodNames = [];

  function onProtobuf() {
    const methods = pbToTypescript.getAllMethods('syntax = "proto3";' + src);
    methodNames = Object.keys(methods);
    isWarning = false;

    setTimeout(() => {
      if(methodNames.length > 0) {
        getMockResponse(methodNames[0]);
      }
    }, 0)

  }

  /**
   * 
   * @param {string} innerText 
   */
  function getMockResponse(innerText) {
    var ts = pbToTypescript.mockResponse(
      'syntax = "proto3";' + src,
      innerText
    );
    dest = JSON.stringify(ts, null, 4);
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
  <div class="editor">
    <h3>Protocol buffer</h3>
    <CodeMirror bind:value={src} lang={javascript()} on:change={onProtobuf}/>
    {#if isWarning}
      <span class="rightcorner warning">Invalid Protobuf</span>
    {/if}
  </div>
  <div class="selector">
    <h3>Methods</h3>
    <ul>
      {#each methodNames as methodName}
        <li class="method-item">
          <button on:click={(e) => getMockResponse(e.target.innerText)}>{methodName}</button>
        </li>
      {/each}
    </ul>
  </div>
  <div class="editor">
    <h3>Response Mock Result</h3>
    <CodeMirror bind:value={dest} lang={javascript()} readonly/>
    <span class="rightcorner button" data-clipboard-text={dest}>Copy to clipboard</span>
  </div>
</div>

<style>
  button {
    background: transparent;
    border: 0;
    width: 100%;
  }

  ul {
    height: calc(100vh - 133px);;
    background: white;
    overflow-y: auto;
    padding: 0;
    margin: 0;
    border-radius: 10px;
  }
</style>
