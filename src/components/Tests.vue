<template>
  <div class="tests">
    <p>{{ orderedSet }}</p>
  </div>
</template>

<script>

import orderedSet from './../../data/ordered.json'
import largeSet from './../../data/large.json'

export default {
  name: 'tests',
  data () {
    return {
      orderedSet,
      largeSet
    }
  }
}
</script>
