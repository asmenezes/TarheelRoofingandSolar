class NestedHero extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <header class = "heroheader ${
      this.getAttribute("class") ? this.getAttribute("class").toString() : ""
    }" style='background-image:url(${this.getAttribute("image").toString()})' >
    <div style = 'background-color: rgba(0,0,0,0.5); height: 100%;'>
      <!--Navigation-->
  <nav id="topnav">
    <a href="../index.html">
  <img class = "logo" src="../assets/WhiteLogo.png" alt="logo"/>
  </a>
  <div class="space"></div>
  <ul class="navlist">
      <li onclick="menuSwap()"> <img src="../assets/menu.svg" alt="menu" class="menu"> </li>
    <li><a href="../index.html">HOME</a></li>
    <li><div class="navdropdown">
      <a href="../under-construction.html">
      ABOUT
      </a>
      <div class="navdropdowncont">
        <a href="../under-construction.html">OWNERS</a>
        <a href="../about/business.html">BUSINESS PHILOSOPHY</a>
      </div>
      </div></li>
        <li><a href="../services.html">SERVICES</a></li>
        <li><a href="../testimonials.html">TESTIMONIALS</a></li>
      <li><div class="navdropdown">
        <a href="../contact.html">
        CONTACT US
        </a>
        <div class="navdropdowncont">
          <a href="../careers.html">CAREERS</a>
        </div>
        </div></li>
          <li><a href="../under-construction.html" class="circled"> ASAP-FIX</a></li>
  </ul>
  </nav>

</div>
    </header>
    `;
  }
}

customElements.define("nested-hero-component", NestedHero);
