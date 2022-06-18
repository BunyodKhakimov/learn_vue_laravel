<template>
    <div v-if="this.person">
        <ul class="list-group w-25 mt-4 mb-4">
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Name</div>
                    {{ this.person.name }}
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Age</div>
                    {{ this.person.age }}
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Job</div>
                    {{ this.person.job }}
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

    data() {
        return {
            person: null,
        }
    },

    methods: {
        delete(id) {
            console.log(id);
            axios.delete(`/api/people/${id}`)
                .then(res => {
                    console.log(res.data);
                    this.$parent.getPerson()
                })
        },
        getPerson() {
            axios.get(`/api/people/${this.$route.params.id}`)
                .then(res => {
                    this.person = res.data
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
