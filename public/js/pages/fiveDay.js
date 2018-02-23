var FiveDay = {
    template: `
    <main-layout>
        <div v-for="day in weather" class="box">
                <article class="media">
                    <div class="media-left">
                    <figure class="image is-64x64">
                        <img :src="day.icon" alt="Image">
                    </figure>
                    </div>
                    <div class="media-content">
                    <div class="content">
                        <p>
                        <strong>{{ day.date }}</strong> <small>{{ day.temp }}C / {{ day.temp }}F</small>
                        <br>
                        {{ day.description }}
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
                console.log(result.data)
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
                return await axios.get('/api/five-day')
            } catch (err) {
                console.log(err)
            }
        }
    }
}