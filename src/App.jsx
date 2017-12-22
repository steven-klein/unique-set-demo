import m from 'mithril'
// import Tests from './components/Tests'
// let tests = m(Tests)
import About from './components/About'
let about = m(About)

export default {
  view() {
    return [
        (<main>
          <article>
            <h1>A working function for removing duplicates from a list of email addresses.</h1>
            <p>In any language(s) of your choice, write a working function that removes all duplicates from an unsorted list of email addresses.  You may assume any input data structure that your like.  Do not use built-in library functions that make the problem trivial.</p>
            <h3>Requirements:</h3>
            <ul>
              <li>Leave the resulting list in the original order. (same as the input).</li>
              <li>The function should be able to handle 100,000 email addresses containing 50% randomly placed duplicates in well under 1 second on a typical modern laptop.</li>
              <li>Include a simple test suite that demonstrates the above two requirements are met.</li>
              <li>Deploy a demo live on the web somewhere.</li>
            </ul>
            <section>
              <h1>Tests</h1>
              <tests></tests>
            </section>
            <section>
              <h1>Summary</h1>
              <about></about>
            </section>
          </article>
        </main>),
      about
    ]
  }
}
