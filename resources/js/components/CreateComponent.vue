<template>
<div class="w-25">
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
    <button type="submit" class="btn btn-primary" @click.prevent="createPerson()">Create</button>
</div>
</template>

<script>
export default {
    name: "CreateComponent",

    data(){
        return {
            name: null,
            age: null,
            job: null,
        }
    },

    methods: {
        createPerson(){
            console.log('request')
            axios.post('/api/people', {
                name: this.name,
                age: this.age,
                job: this.job
            }).then(res => {
                this.name = null
                this.age = null
                this.job = null
                console.log(res);
            })
        },
    },

    mounted() {

    },

    computed:{

    },
}
</script>

<style scoped>

</style>
