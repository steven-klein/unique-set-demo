<template>
  <div class="tests">
    <p>{{ orderedSet }}</p>
  </div>
</template>

<script>

export default {
  name: 'tests',
  data () {
    return {
      orderedSet: window.orderedSet,
      largeSet: window.largeSet
    }
  }
}
</script>
