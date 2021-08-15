const app = {
    data(){
        return ({
            test : 1
        })
    },
    mounted(){
        console.log(this.test)
    }
}

Vue.createApp(app).mount("#app")