var Now = {
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
        this.load().then((result) => { 
            this.weather = result.data
            console.log(this.weather)
        })
    },
    methods: {
        async load() {
            try {
                return await axios.get('/api/now')
            } catch (err) {
                console.log(err)
            }
        }
    }
}