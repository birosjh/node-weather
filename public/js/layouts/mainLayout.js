var mainLayout = {
    template: `
        <div class="container">
            <nav class="navbar is-transparent">
            <div class="navbar-brand">
                <a class="navbar-item">
                <img src="https://www.metaweather.com/static/img/weather/c.svg" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
                </a>
                <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                <span></span>
                <span></span>
                <span></span>
                </div>
            </div>
            <div id="navbarExampleTransparentExample" class="navbar-menu">
                <div class="navbar-start">
                    <vue-link class="navbar-item" href="/">
                        Now
                    </vue-link>
                    <vue-link class="navbar-item" href="/day">
                        Today
                    </vue-link>
                    <vue-link class="navbar-item" href="/week">
                        Weekly
                    </vue-link>
                </div>
            </div>
            </nav>
            <section class="section">
                <div class="container">
                    <h1 class="title">
                        Weather App
                    </h1>
                    <p class="subtitle">
                        <slot></slot>
                    </p>
                </div>
            </section>
        </div>
    `
}