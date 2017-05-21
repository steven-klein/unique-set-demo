<template>
  <div id="app">
    <main>
      <article>
        <h1>Unique Set</h1>
        <p>
          Create a unique set...
        </p>
        <section>
          <h1>Tests</h1>
          <tests></tests>
        </section>
        <section>
          <h1>Summary</h1>
          <about></about>
        </section>
      </article>
    </main>
  </div>
</template>

<script>
import Tests from './components/Tests'
import About from './components/About'

export default {
  name: 'app',
  components: {
    Tests,
    About
  }
}
</script>

<style src="./css/app.css"></style>
