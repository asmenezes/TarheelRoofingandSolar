class BaseHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback(){
    this.innerHTML = `
    <header class = "baseheader" >
      <!--Navigation-->
  <nav id="topnav">
    <a href="./index.html">
  <img class = "logo" src="./assets/WhiteLogo.png" alt="logo"/>
  </a>
  <div class="space"></div>
  <ul class="navlist">
      <li onclick="menuSwap()"> <img src="./assets/menu.svg" alt="menu" class="menu"> </li>
    <li><a href="./index.html">HOME</a></li>
    <li><div class="navdropdown">
      <a href="./about/what-we-do.html">
      ABOUT
      </a>
      <div class="navdropdowncont">
        <a href="">OWNERS</a>
        <a href="">BUSINESS PHILOSOPHY</a>
        <a href="">INTEGRITY</a>
      </div>
      </div></li>
      <li><div class="navdropdown">
        <a href="#">
        OPERATIONS
        </a>
        <div class="navdropdowncont">
          <a href="">ASPHALT ROOFING</a>
          <a href="">METAL ROOFING</a>
          <a href="">SOLAR</a>
          <a href="">SIDING</a>
          <a href="">GUTTERS</a>
          <a href="">INTERIOR/EXTERIOR PAINTING</a>
        </div>
        </div></li>
      <li><a href="./about/testimonials.html"> TESTIMONIALS</a></li>
      <li><div class="navdropdown">
        <a href="./contact.html">
        CONTACT US
        </a>
        <div class="navdropdowncont">
          <a href="">CAREERS</a>
        </div>
        </div></li>
        <li><a href="./about/testimonials.html" class="circled"> ASAP-FIX</a></li>
  </ul>
  </nav>


    </header>
    `
  }
}

customElements.define('base-header-component', BaseHeader);
