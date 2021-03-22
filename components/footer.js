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
  <a href="https://www.instagram.com/tarheelroofingandsolar/" target="_blank"><img src="${this.getAttribute('nested')? '.':''}./assets/InstaLogo.png" class = "soc" alt="instagram"/></a>
  <a href="https://www.facebook.com/Tar-Heel-Roofing-and-Solar-LLC-103183615200630" target="_blank"><img src="${this.getAttribute('nested')? '.':''}./assets/facebookIcon.png" class = "soc" alt="yelp"/> </a>
  <a href="https://nextdoor.com/pages/tar-heel-roofing-and-solar-chapel-hill-nc/" target="_blank"><img src="${this.getAttribute('nested')? '.':''}./assets/Nextdoor.png" class = "soc" alt="Nextdoor"/></a>
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
