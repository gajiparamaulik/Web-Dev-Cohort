const app = Vue.createApp({    // Vue is a Global object available in vue instance
    data() {
        return {
            headingTitle: 'Finish the course and Learn VueJS..!',
            vueLink: 'https://vuejs.org/guide/quick-start.html'
        };
    }
});

app.mount('#user-goal');