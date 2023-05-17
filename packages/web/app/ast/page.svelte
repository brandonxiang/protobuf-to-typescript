<script>
  import { onMount } from 'svelte';
  import protobufjs from 'protobufjs';
  import Navbar from '../../components/nav-bar.svelte';

  let src = `
syntax = "proto3";

service MyService {
    rpc MyMethod (MyRequest) returns (MyResponse);
}

message MyRequest {
    string path = 1;
}

message MyResponse {
    int32 status = 1;
}
  `;

  let dest = '';

  let isWarning = false;

  function onProtobuf() {
    const res = protobufjs.parse(src, {
      alternateCommentMode: true,
      preferTrailingComment: true,
      keepCase: true,
    });
    dest = JSON.stringify(res.root, null, 2);
    isWarning = false;
  }

  onMount(() => {
    window.onerror = () => {
      isWarning = true;
    };
    onProtobuf();
  });
</script>

<Navbar current={2}/>
<div id="container">
  <div class="col">
    <h3>Protocol buffer</h3>
<textarea name="" bind:value={src} on:input={onProtobuf}></textarea>
 {#if isWarning}
    <span class="rightcorner warning">Invald Protobuf</span>
 {/if}
  </div>
  <div class="col">
    <div class="tool-bar" style="height: 40px">
    </div>
    <textarea name="" id="typescript" bind:value={dest}></textarea>
  </div>
</div>
