<template>
    <div class="container">
        <div class="row justify-content-center">
            <CreateComponent></CreateComponent>
            <IndexComponent ref="index"></IndexComponent>
        </div>
    </div>
</template>

<script>
import CreateComponent from "./CreateComponent";
import IndexComponent from "./IndexComponent";
    export default {
        name: "PostComponent",

        components: {
            CreateComponent, IndexComponent
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
