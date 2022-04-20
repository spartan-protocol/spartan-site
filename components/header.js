class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <div class="header pe-3 mx-auto">
                <a href="./index.html" class='link-no-format'>
                    <img class='header-logo' height="75px" src='./assets/Icons/SVG/spartav2.svg' />
                    <div class='d-none d-md-block header-title'>Spartan Protocol</div>
                </a>
                <div class="header-menu">
                    <input class="burger-check" id="burger-check" type="checkbox">
                        <label for="burger-check" class="burger mx-2 d-inline-block d-lg-none"></label>
                    </input>
                    <div class='header-right'>
                        <a href="#features" class='link-no-format'>
                            <div class="my-auto d-none d-lg-flex menu-item zoomsm">Features</div>
                        </a>
                        <a href="#token" class='link-no-format'>
                            <div class="my-auto d-none d-lg-flex menu-item zoomsm">Token</div>
                        </a>
                        <a href="#community" class='link-no-format'>
                            <div class="my-auto d-none d-lg-flex menu-item zoomsm me-2">Community</div>
                        </a>
                        <a href="https://www.immunefi.com/bounty/spartanprotocol" class='link-no-format'>
                        <div class="d-flex d-lg-none btn-sm bg-dark mx-1 mt-auto mb-auto zoomsm">
                            <img class="button-icon"
                            src="./assets/Icons/SVG/immunefi-mini.svg" />
                        </div>
                    </a>
                        <a href="https://www.immunefi.com/bounty/spartanprotocol" class='link-no-format'>
                            <div class="d-none d-lg-flex btn-sm bg-dark mx-1 mt-auto mb-auto zoomsm">
                                <img class="button-icon"
                                src="./assets/Icons/SVG/immunefi-wht.svg" />
                            </div>
                        </a>
                        <a href="https://dapp.spartanprotocol.org/" class='link-no-format'>
                            <div class="btn-sm bg-dark mx-1 mt-auto mb-auto zoomsm">
                                <img class="button-icon me-1"
                                    src="./assets/Icons/SVG/spartav2.svg" /><span>DApp</span>
                            </div>
                        </a>
                    </div>
                    <nav id="navigation1" class="navigation">
                        <div class="navi-custom d-flex justify-content-around bg-grey">
                            <a href="./index.html" class='link-no-format'>
                                <div class="my-auto nav-menu-item">Home</div>
                            </a>
                            <a href="#features" class='link-no-format'>
                                <div class="my-auto nav-menu-item">Features</div>
                            </a>
                            <a href="#token" class='link-no-format'>
                                <div class="my-auto nav-menu-item">Token</div>
                            </a>
                            <a href="#community" class='link-no-format'>
                                <div class="my-auto nav-menu-item">Community</div>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        `;

    var current = window.location.pathname.split("/");
    current = current[current.length - 1];
    if (current === "") return;
    var menuItems = document.querySelectorAll("div.header-menu a");
    for (var i = 0, len = menuItems.length; i < len; i++) {
      if (
        menuItems[i]
          .getAttribute("href")
          .toLowerCase()
          .indexOf(current.toLowerCase()) > -1
      ) {
        var count = menuItems[i].querySelectorAll("div.menu-item");
        if (count.length > 0) {
          count[0].className += " menu-item-active";
        }
        count = menuItems[i].querySelectorAll("div.nav-menu-item");
        if (count.length > 0) {
          count[0].className += " nav-menu-item-active";
        }
      }
    }
  }
}

customElements.define("header-component", Header);
