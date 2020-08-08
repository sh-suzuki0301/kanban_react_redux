import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return(
    <div>
      <header>
        <div>Sho board</div>

        <input placeholder="Filter"/>
      </header>

      <div>
        <section>
          <h3>TODO</h3>

          <article>朝食</article>
          <article>昼食</article>
          <article>夕食</article>
        </section>

        <section>
          <h3>Doing</h3>

          <article>洗顔</article>
          <article>歯磨き</article>
        </section>

        <section>
          <h3>Wating</h3>
        </section>

        <section>
          <h3>Done</h3>

          <article>起きる</article>
        </section>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
