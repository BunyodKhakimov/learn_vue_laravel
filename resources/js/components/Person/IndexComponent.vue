<template>
    <div class="w-75 mt-4">
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Job</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="person in people">
                <tr>
                    <th>{{ person.id }}</th>
                    <td>{{ person.name }}</td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.job }}</td>
                    <td>
                        <router-link class="btn btn-success" :to="{ name: 'people.edit', params: {id: person.id}}">
                            Edit
                        </router-link>
                        <a href="#" class="btn btn-danger" @click.prevent="destroy(person.id)">Delete</a>
                    </td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import ShowComponent from "./ShowComponent";
import EditComponent from "./EditComponent";
import router from "../../router";

export default {
    name: "IndexComponent",

    components: {EditComponent, ShowComponent},

    data() {
        return {
            people: null,
        }
    },

    methods: {
        getPerson() {
            axios.get('/api/people')
                .then(res => {
                    this.people = res.data.data
                })
        },
        isEditPerson(id) {
            return id === this.editPersonId
        },
        destroy(id) {
            axios.delete(`/api/people/${id}`)
                .then(res => {
                    this.getPerson()
                })
        },
    },

    mounted() {
        this.getPerson()
    },

    computed: {
        //
    },
}
</script>

<style scoped>

</style>
