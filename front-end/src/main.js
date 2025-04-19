import './style.css'
import javascriptLogo from '/javascript.svg'
import htmlLogo from '/html-5.svg'
import cssLogo from '/css-3.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Welcome to my Front End Refresher Library!</h1>
    <a href="#" target="_blank">
      <img src="${htmlLogo}" class="logo" alt="HTML logo" />
    </a>
    <a href="#" target="_blank">
      <img src="${cssLogo}" class="logo css" alt="CSS logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo vite" alt="CSS logo" />
    </a>
    <h2>Click a language to get started!</h2>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
