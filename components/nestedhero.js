class NestedHero extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback(){
    this.innerHTML = `
    <header class = "heroheader ${this.getAttribute('class')? this.getAttribute('class').toString():''}" style='background-image:url(${this.getAttribute('image').toString()})' >
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
      <a href="../about/what-we-do.html">
      ABOUT
      </a>
      <div class="navdropdowncont">
        <a href="../about/owners.html">OWNERS</a>
        <a href="../about/business.html">BUSINESS PHILOSOPHY</a>
        <a href="../about/integrity.html">INTEGRITY</a>
      </div>
      </div></li>
      <li><div class="navdropdown">
        <a href="../operations/operations.html">
        OPERATIONS
        </a>
        <div class="navdropdowncont">
          <a href="../operations/asphalt.html">ASPHALT ROOFING</a>
          <a href="../operations/metal.html">METAL ROOFING</a>
          <a href="../operations/solar.html">SOLAR</a>
          <a href="../operations/siding.html">SIDING</a>
          <a href="../operations/gutters.html">GUTTERS</a>
          <a href="../operations/painting.html">INTERIOR/EXTERIOR PAINTING</a>
        </div>
        </div></li>
        <li><a href="../testimonials.html"> TESTIMONIALS</a></li>
      <li><div class="navdropdown">
        <a href="../contact.html">
        CONTACT US
        </a>
        <div class="navdropdowncont">
          <a href="../careers.html">CAREERS</a>
        </div>
        </div></li>
          <li><a href="../about/testimonials.html" class="circled"> ASAP-FIX</a></li>
  </ul>
  </nav>

</div>
    </header>
    `
  }
}

customElements.define('nested-hero-component', NestedHero);
