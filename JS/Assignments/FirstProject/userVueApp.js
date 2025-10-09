Vue.createApp({
    data() {
        return {
            allCollections: [],
            enteredInput: ''
        };
    },
    methods: {
        addData() {
            this.allCollections.push(this.enteredInput);
            this.enteredInput = '';
        }
    }
}).mount('#app');