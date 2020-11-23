const app = new Vue ({

    el: '#app-container',
    data: {
        emails: [],
    },
    created() {

        for (let i=0; i < 10; i++ ) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response);
                this.emails.push(response.data.response);
            })
            .catch((error) => {
                console.log(error);
            })
        }     
    },

    methods: {

        
    }
});