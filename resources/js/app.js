import Vue from 'vue'
import ExampleComponent from "./components/ExampleComponent";
import PostComponent from "./components/PostComponent";

require('./bootstrap');

const app = new Vue({
    el: '#app',

    components: {
        ExampleComponent,
        PostComponent,
    }
})
