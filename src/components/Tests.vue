<template>
  <div class="tests">
      <div class="test" >
        <h3>Test 1: Order Is Maintained</h3>
        <transition name="fade">
          <spinner class="test-spinner" v-show="!testOrderComplete"></spinner>
        </transition>
        <div v-bind:class="{'results': true, 'show':testOrderComplete}">
          <p><strong>Input List:</strong></p>
          <p>{{ orderedSet }}</p>
          <p><strong>Expected List:</strong></p>
          <p>{{ expectedOrderedSet }}</p>
          <p><strong>Result List:</strong></p>
          <p>{{ resultOrderedSet }}</p>
          <p class="pass" v-if="testOrderStatus">&#x2714; Passed</p>
          <p class="fail" v-else>&times; Failed</p>
        </div>
      </div>
      <div class="test">
        <h3>Test 2: Efficiancy</h3>
        <transition name="fade">
          <spinner class="test-spinner" v-show="!testEfficiencyComplete"></spinner>
        </transition>
        <div v-bind:class="{'results': true, 'show':testEfficiencyComplete}">
          <p><strong>Input List Length:</strong> {{ largeSet.length }}</p>
          <p><strong>Expected List Length:</strong> {{ expectedLargeSetLength }}</p>
          <p><strong>Result List Length:</strong> {{ resultLargeSet.length }}</p>
          <p><strong>Execution Time:</strong> {{this.executionTime}} ms</p>
          <p class="pass" v-if="testEfficiencyStatus">&#x2714; Passed</p>
          <p class="fail" v-else>&times; Failed</p>
        </div>
      </div>
      <button v-bind:disabled="!tested" class="button" @click="reset">Run Again</button>
  </div>
</template>

<script>
import isEqual from 'lodash/isEqual'
import now from 'performance-now'
import Spinner from 'vue-simple-spinner'
import uniqueSet from './../../js/uniqueSet/src'

export default {
  name: 'tests',
  components: {
    Spinner
  },
  data () {
    return {
      orderedSet: window.orderedSet,
      largeSet: window.largeSet,
      expectedOrderedSet: ['angela@example.com', 'sandy@example.com', 'matthew@example.com', 'steven@example.com', 'david@example.com'],
      expectedLargeSetLength: 50000,
      resultOrderedSet: [],
      resultLargeSet: [],
      executionTime: 0,
      maxExecutionTime: 1000,
      testOrderComplete: false,
      testEfficiencyComplete: false
    }
  },
  computed: {
    tested () {
      return (this.testOrderComplete && this.testEfficiencyComplete)
    },
    testOrderStatus () {
      return isEqual(this.expectedOrderedSet, this.resultOrderedSet)
    },
    testEfficiencyStatus () {
      return (this.resultLargeSet.length === this.expectedLargeSetLength &&
        this.executionTime < this.maxExecutionTime)
    }
  },
  methods: {
    reset () {
      this.testOrderComplete = false
      this.testEfficiencyComplete = false
      setTimeout(this.runTests, 1000)
    },
    testOrder () {
      this.resultOrderedSet = uniqueSet(this.orderedSet)
      this.testOrderComplete = true
    },
    testEfficiency () {
      let start = now()
      let end = null
      this.resultLargeSet = uniqueSet(this.largeSet)
      end = now()
      this.executionTime = (end - start).toFixed(3)
      this.testEfficiencyComplete = true
    },
    runTests () {
      this.testOrder()
      this.testEfficiency()
      this.tested = true
    }
  },
  beforeMount () {
    this.reset()
  }
}
</script>
