class Header extends HTMLElement {
    constructor() {
        super();
    }
  
    connectedCallback() {
        this.innerHTML = `
            <div class="header pe-3 mx-auto">
                <a href="./index.html" class='link-no-format'>
                    <img class='header-logo' src='./assets/Icons/SVG/Logo_SpartanProtocol_Red.svg' />
                    <div class='d-none d-md-block header-title'>Spartan Protocol</div>
                </a>
                <div class="header-menu">
                    <input class="burger-check" id="burger-check" type="checkbox">
                        <label for="burger-check" class="burger mx-4 d-inline-block d-lg-none"></label>
                    </input>
                    <div class='header-right'>
                        <a href="./pools.html" class='link-no-format'>
                            <div class="my-auto d-none d-lg-flex menu-item zoomsm">Pools</div>
                        </a>
                        <a href="./dao.html" class='link-no-format'>
                            <div class="my-auto d-none d-lg-flex menu-item zoomsm">DAO</div>
                        </a>
                        <a href="./synths.html" class='link-no-format'>
                            <div class="my-auto d-none d-lg-flex menu-item zoomsm">Synths</div>
                        </a>
                        <a href="./lending.html" class='link-no-format'>
                            <div class="my-auto d-none d-lg-flex menu-item zoomsm">Lending</div>
                        </a>
                        <a href="./faq.html" class='link-no-format'>
                            <div class="my-auto d-none d-lg-flex menu-item zoomsm">FAQ</div>
                        </a>
                        <a href="https://dapp.spartanprotocol.org/" class='link-no-format' target="_blank">
                            <div class="btn-sm bg-red mx-1 mt-auto mb-auto zoomsm">
                                <img class="button-icon me-1"
                                    src="./assets/Icons/SVG/Icon_SpartanProtocol.svg" /><span>DAppV2</span>
                            </div>
                        </a>
                    </div>
                    <nav id="navigation1" class="navigation">
                        <div class="navi-custom d-flex justify-content-around bg-grey">
                            <a href="./index.html" class='link-no-format'>
                                <div class="my-auto nav-menu-item">Home</div>
                            </a>
                            <a href="./pools.html" class='link-no-format'>
                                <div class="my-auto nav-menu-item">Pools</div>
                            </a>
                            <a href="./dao.html" class='link-no-format'>
                                <div class="my-auto nav-menu-item">DAO</div>
                            </a>
                            <a href="./synths.html" class='link-no-format'>
                                <div class="my-auto nav-menu-item">Synths</div>
                            </a>
                            <a href="./lending.html" class='link-no-format'>
                                <div class="my-auto nav-menu-item">Lending</div>
                            </a>
                            <a href="./faq.html" class='link-no-format'>
                                <div class="my-auto nav-menu-item">FAQ</div>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        `;

        var current = window.location.pathname.split('/');
        current = current[current.length - 1];
        if (current === "") return;
        var menuItems = document.querySelectorAll('div.header-menu a');
        for (var i = 0, len = menuItems.length; i < len; i++) {
            if (menuItems[i].getAttribute("href").toLowerCase().indexOf(current.toLowerCase()) > -1) {
                var count = menuItems[i].querySelectorAll('div.menu-item');
                if (count.length > 0) {
                    count[0].className += " menu-item-active";
                }
                count = menuItems[i].querySelectorAll('div.nav-menu-item');
                if (count.length > 0) {
                    count[0].className += " nav-menu-item-active";
                }
            }
        }
    }
}

customElements.define('header-component', Header);