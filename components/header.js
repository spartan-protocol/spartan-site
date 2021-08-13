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
                                <div class="my-auto nav-menu-item nav-menu-item-active">Home</div>
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
    }
}

customElements.define('header-component', Header);