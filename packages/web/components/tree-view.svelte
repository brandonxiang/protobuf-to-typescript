<script>
  import { onMount } from 'svelte';

  onMount(() => {
    var toggler = document.getElementsByClassName('caret');
    var i;

    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener('click', function () {
        this.parentElement.querySelector('.nested').classList.toggle('active');
        this.classList.toggle('caret-down');
      });
    }
  });
</script>

<ul id="myUL">
  <li>
    <span class="caret">Beverages</span>
    <ul class="nested">
      <li>Water</li>
      <li>Coffee</li>
      <li>
        <span class="caret">Tea</span>
        <ul class="nested">
          <li>Black Tea</li>
          <li>White Tea</li>
          <li>
            <span class="caret">Green Tea</span>
            <ul class="nested">
              <li>Sencha</li>
              <li>Gyokuro</li>
              <li>Matcha</li>
              <li>Pi Lo Chun</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<style>
  ul,
  #myUL {
    list-style-type: none;
  }

  #myUL {
    margin: 0;
    padding: 0;
  }

  .caret {
    cursor: pointer;
    user-select: none;
  }

  .caret::before {
    content: '\25B6';
    color: black;
    display: inline-block;
    margin-right: 6px;
  }

  .caret-down::before {
    transform: rotate(90deg);
  }

  .nested {
    display: none;
  }

  .active {
    display: block;
  }
</style>
