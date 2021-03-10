class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback(){
    this.innerHTML = `
    <footer>
  <h1 class="fquote">"A SUPER FANCY QUOTE FOR THE SITE"</h1>
  <div class="fsocials">

  </div>
  <br>
  <p class="ftext">THE COMPANY ADDRESS GOES HERE</p>
  <br>
  <p class="ftext">1-919-245-7766</p>
  <br>
  <p class="ftext">TAR HEEL ROOFING AND SOLAR LLC</p>
    </footer>
    `
  }
}

customElements.define('footer-component', Footer);
