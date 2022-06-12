<template>
    <div class="container">
        <div class="row justify-content-center">
            <CreateComponent></CreateComponent>
            <IndexComponent ref="index"></IndexComponent>
        </div>
    </div>
</template>

<script>
import SinglePostComponent from "./SinglePostComponent";
import CreateComponent from "./CreateComponent";
import IndexComponent from "./IndexComponent";
    export default {
        name: "PostComponent",

        components: {
            SinglePostComponent, CreateComponent, IndexComponent
        },

        data() {
            return {
                //
            }
        },

        methods: {
            //
        },

        mounted() {
            //
        },

        computed: {
            //
        }
    }
</script>

<style scoped>

</style>
