<template>
    <div class="row w-50 mt-4">
        <div class="col-md-8">
            <div class="card" v-if="person">
                <div class="card-header">Create Person</div>

                <div class="card-body">
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" v-model="person.name" class="form-control" id="name" placeholder="name">
                    </div>
                    <div class="mb-3">
                        <label for="age" class="form-label">Age</label>
                        <input type="number" v-model="person.age" class="form-control" id="age" placeholder="age">
                    </div>
                    <div class="mb-3">
                        <label for="job" class="form-label">Job</label>
                        <input type="text" v-model="person.job" class="form-control" id="job" placeholder="job">
                    </div>
                    <button :disabled="!isDisabled" type="submit" class="btn btn-primary" @click.prevent="$store.dispatch('createPerson', person)">Create</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from "../../router";

export default {
    name: "CreateComponent",

    data() {
        return {
            //
        }
    },

    methods: {
        //
    },

    mounted() {

    },

    computed: {
        isDisabled() {
            return this.person.name && this.person.age && this.person.job
        },

        person() {
            return {
                name: null,
                age: null,
                job: null,
            };
        }
    },
}
</script>

<style scoped>

</style>
