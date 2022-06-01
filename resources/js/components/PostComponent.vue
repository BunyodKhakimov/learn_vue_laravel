<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Post Component</div>

                    <div class="card-body">
                        I'm an post component. <br> First created here.
                        <SinglePostComponent></SinglePostComponent>
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
        }
    }
</script>

<style scoped>

</style>
