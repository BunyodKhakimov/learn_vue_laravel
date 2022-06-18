<template>
    <div>
        <ul v-if="person" class="list-group w-25 mt-4 mb-4">
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Name</div>
                    {{ person.name }}
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Age</div>
                    {{ person.age }}
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Job</div>
                    {{ person.job }}
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <router-link class="btn btn-success" :to="{ name: 'people.edit', params: {id: person.id}}">
                        Edit
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

import router from "../../router";

export default {
    name: "ShowComponent",

    methods: {
        delete(id) {
            axios.delete(`/api/people/${id}`)
                .then(res => {
                    console.log(res.data);
                    this.$parent.getPerson()
                })
        },
    },

    mounted() {
        this.$store.dispatch('getPerson', this.$route.params.id);
    },

    computed: {
        person() {
            return this.$store.getters.person
        },
    },
}
</script>

<style scoped>

</style>
