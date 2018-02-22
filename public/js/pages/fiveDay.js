var FiveDay = {
    template: `
    <main-layout>
        <div class="box">
                <article class="media">
                    <div class="media-left">
                    <figure class="image is-64x64">
                        <img :src="weather.icon" alt="Image">
                    </figure>
                    </div>
                    <div class="media-content">
                    <div class="content">
                        <p>
                        <strong>{{ weather.name }}</strong> <small>{{ weather.temp }}C / {{ weather.temp }}F</small>
                        <br>
                        {{ weather.description }}
                        </p>
                    </div>
                    <nav class="level is-mobile">
                        <div class="level-left">
                        <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-reply"></i></span>
                        </a>
                        <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                        </a>
                        <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-heart"></i></span>
                        </a>
                        </div>
                    </nav>
                    </div>
                </article>
            </div>
    </main-layout>
     `,
    data() {
        return {
            weather: ''
        }
    },
    created() {
        this.setup()
    },
    methods: {
        setup() {
            var that = this;
            var interval = 1000 * 60; // 1 minutes

            that.load().then((result) => {
                that.weather = result.data
            })

            setInterval(function () {
                that.load().then((result) => {
                    that.weather = result.data
                })
                console.log('updated')
            }, interval);
        },
        async load() {
            try {
                return await axios.get('/api/daily')
            } catch (err) {
                console.log(err)
            }
        }
    }
}