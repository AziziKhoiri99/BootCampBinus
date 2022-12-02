Vue.component('trim', {
    template: '#trim-template',
    data() {
        return {
            a: [],
            b: '',
            c: [],
            d: '',
            seen: false,
            bruh: false
        }
    },
})

new Vue({
    el: '#app',
    data: {
        currentView: '',
    }
})
