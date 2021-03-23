class NestedHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback(){
    this.innerHTML = `
    <header class = "baseheader" >
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
        <a href="../under-construction.html">BUSINESS PHILOSOPHY</a>
        <a href="../under-construction.html">INTEGRITY</a>
      </div>
      </div></li>
      <li><div class="navdropdown">
        <a href="../under-construction.html">
        OPERATIONS
        </a>
        <div class="navdropdowncont">
          <a href="../under-construction.html">ASPHALT ROOFING</a>
          <a href="../under-construction.html">METAL ROOFING</a>
          <a href="../under-construction.html">SOLAR</a>
          <a href="../under-construction.html">SIDING</a>
          <a href="../under-construction.html">GUTTERS</a>
          <a href="../under-construction.html">INTERIOR/EXTERIOR PAINTING</a>
        </div>
        </div></li>
        <li><a href="../testimonials.html"> TESTIMONIALS</a></li>
      <li><div class="navdropdown">
        <a href="../contact.html">
        CONTACT US
        </a>
        <div class="navdropdowncont">
          <a href="../under-construction.html">CAREERS</a>
        </div>
        </div></li>
          <li><a href="../under-construction.html" class="circled"> ASAP-FIX</a></li>
  </ul>
  </nav>


    </header>
    `
  }
}

customElements.define('nested-header-component', NestedHeader);
