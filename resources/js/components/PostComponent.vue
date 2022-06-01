<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Post Component</div>

                    <div class="card-body">
                        I'm an post component. <br> First created here.
                        <SinglePostComponent></SinglePostComponent>
                        Name: {{ name }}
                        <button class="btn btn-dark" @click="sayHello()">Say Hello</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SinglePostComponent from "./SinglePostComponent";
    export default {
        name: "PostComponent",

        components: {
            SinglePostComponent,
        },

        data() {
            return {
                name: "Bob",
                age: 23,
            }
        },

        methods: {
            sayHello(){
                console.log('Hello!');
            }
        }
    }
</script>

<style scoped>

</style>
