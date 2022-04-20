class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="footer px-3">
            <div class='footer-text d-none d-md-flex my-auto'>
                <a href="https://vercel.com/?utm_source=spartan-team&utm_campaign=oss" class='link-no-format'>
                    <img class="footer-icon" src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" />
                </a>
                <a href="https://www.netlify.com">
                    <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" height="40" alt="Deploys by Netlify" />
                </a>
            </div>
            <div class='w-100 d-flex'>
                <div class="footer-right me-auto me-md-0 py-1">
                    <div class="tooltipbtm zoom">
                        <a href="https://docs.spartanprotocol.org/" class='link-no-format'>
                            <img class="footer-icon" src="./assets/Icons/SVG/gitbook-icon.svg" />
                            <span class="tooltiptext">Docs</span>
                        </a>
                    </div>
                    <div class="tooltipbtm zoom">
                        <a href="https://twitter.com/SpartanProtocol"
                            class='link-no-format'>
                            <img class="footer-icon" src="./assets/Icons/SVG/ic_twitter.svg" />
                            <span class="tooltiptext">Twitter</span>
                        </a>
                    </div>
                    <div class="tooltipbtm zoom">
                        <a href="https://github.com/spartan-protocol" class='link-no-format'>
                            <img class="footer-icon" src="./assets/Icons/SVG/ic_github.svg" />
                            <span class="tooltiptext">Github</span>
                        </a>
                    </div>
                    <div class="tooltipbtm zoom">
                        <a href="https://spartanprotocol.medium.com/" class='link-no-format'>
                            <img class="footer-icon" src="./assets/Icons/SVG/ic_medium.svg" />
                            <span class="tooltiptext">Medium</span>
                        </a>
                    </div>
                    <div class="tooltipbtm zoom">
                        <a href="https://t.me/SpartanProtocolOrg" class='link-no-format'>
                            <img class="footer-icon" src="./assets/Icons/SVG/ic_telegram.svg" />
                            <span class="tooltiptext">Telegram</span>
                        </a>
                    </div>
                    <div class="tooltipbtm zoom">
                        <a href="https://www.reddit.com/r/SpartanProtocol/" class='link-no-format'>
                            <img class="footer-icon" src="./assets/Icons/SVG/ic_reddit.svg" />
                            <span class="tooltiptext">Reddit</span>
                        </a>
                    </div>
                    <div class="tooltipbtm zoom">
                        <a href="https://discord.gg/wQggvntnGk" class='link-no-format'>
                            <img class="footer-icon" src="./assets/Icons/SVG/ic_discord.svg" />
                            <span class="tooltiptext">Discord</span>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    `;
    }
}

customElements.define("footer-component", Footer);
