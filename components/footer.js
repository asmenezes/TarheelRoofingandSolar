class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback(){
    this.innerHTML = `
    <footer>
  <h1 class="fquote">Secure your home from mother nature and the power bill</h1>

  <div class="fsocials">
  <span></span>
  <a href=""> <img src="./assets/InstaLogo.png" class = "soc" alt="instagram"/> </a>
  <a href=""> <img src="./assets/yelp-icon.png" class = "soc" alt="yelp"/> </a>
  <a href=""> <img src="./assets/Nextdoor.png" class = "soc" alt="Nextdoor"/> </a>
  <span></span>
  </div>

  <br>
  <p class="ftext">info@tarheelroofingandsolar.com</p>
  <br>
  <p class="ftext">1-919-245-7766</p>
  <br>
  <p class="ftext">TAR HEEL ROOFING AND SOLAR LLC</p>
    </footer>
    `
  }
}

customElements.define('footer-component', Footer);
