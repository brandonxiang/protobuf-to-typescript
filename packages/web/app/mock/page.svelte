<script>
  import { onMount } from 'svelte/internal';
  import pbToTypescript from 'pbts/core';
  import ClipboardJS from 'clipboard';
  import Navbar from '../../components/nav-bar.svelte';

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
  }

  function getMockResponse(e) {
    var ts = pbToTypescript.mockResponse(
    'syntax = "proto3";' + src,
    e.target.innerText
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

<Navbar current={1}/>
<div id="container">
  <div class="editor">
    <h3>Protocol buffer</h3>
    <textarea name="" bind:value={src} on:input={onProtobuf}/>
    {#if isWarning}
      <span class="rightcorner warning">Invald Protobuf</span>
    {/if}
    
  </div>
  <div class="selector">
    <h3>Methods</h3>
    <ul>
      {#each methodNames as methodName }
        <li class="method-item" on:click={getMockResponse}>{methodName}</li>
      {/each}
    </ul>
  </div>
  <div class="editor">
    <h3>Response Mock Result</h3>
    <textarea name="" id="typescript" bind:value={dest}/>
    <span class="rightcorner button" data-clipboard-target="#typescript">Copy to clipboard</span>
  </div>
</div>