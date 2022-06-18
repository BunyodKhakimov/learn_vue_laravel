<template>
    <div class="row w-50 mt-4">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Create Person</div>

                <div class="card-body">
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" v-model="name" class="form-control" id="name" placeholder="name">
                    </div>
                    <div class="mb-3">
                        <label for="age" class="form-label">Age</label>
                        <input type="number" v-model="age" class="form-control" id="age" placeholder="age">
                    </div>
                    <div class="mb-3">
                        <label for="job" class="form-label">Job</label>
                        <input type="text" v-model="job" class="form-control" id="job" placeholder="job">
                    </div>
                    <button type="submit" class="btn btn-primary" @click.prevent="update()">Update</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from "../../router";

export default {
    name: "EditComponent",

    data() {
        return {
            name: null,
            age: null,
            job: null,
        }
    },

    methods: {
        update() {
            axios.patch(`/api/people/${this.$route.params.id}`, {
                name: this.name,
                age: this.age,
                job: this.job,
            })
                .then(res => {
                    router.push({ name: 'people.show', params: { id: res.data.id, } });
                })
        },

        getPerson() {
            axios.get(`/api/people/${this.$route.params.id}`)
                .then(res => {
                    this.name = res.data.name
                    this.age = res.data.age
                    this.job = res.data.job
                })
        }
    },

    mounted() {
        this.getPerson();
    },

    computed: {
        //
    },
}
</script>

<style scoped>

</style>
