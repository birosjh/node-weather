Vue.component('main-layout', mainLayout)
Vue.component('vue-link', vueLink)

const NotFound = { template: '<main-layout><p>Page not found</p></main-layout>' }

const routes = {
    '/': Now,
    '/five-day': FiveDay,
    '/two-week': TwoWeek
}

const app = new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname,
    },
    computed: {
        ViewComponent() {
            return routes[this.currentRoute] || NotFound
        }
    },
    render(h) { return h(this.ViewComponent) }
})

window.addEventListener('popstate', () => {
    app.currentRoute = window.location.pathname
})