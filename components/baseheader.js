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
    <li> <div class="navdropdown">
      <a href="./about/what-we-do.html">
      ABOUT
      </a>
      <div class="navdropdowncont">
        <a href="./about/what-we-do.html">WHAT WE DO</a>
        <a href="./about/services.html">SERVICES</a>
        <a href="./about/testimonials.html">TESTIMONIALS</a>
      </div>
      </div>

    </li>
    <li><a href="#">LOCATION</a></li>
    <li><a href="#">RESOURCES</a></li>
    <li><a href="#">SOCIAL</a></li>
    <li><a href="./contact.html">CONTACT US</a></li>
  </ul>
  </nav>


    </header>
    `
  }
}

customElements.define('base-header-component', BaseHeader);
