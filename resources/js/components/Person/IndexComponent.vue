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
                    <td>
                        <router-link :to="{ name: 'people.show', params: {id: person.id}}">
                            {{ person.name }}
                        </router-link>
                    </td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.job }}</td>
                    <td>
                        <router-link class="btn btn-success" :to="{ name: 'people.edit', params: {id: person.id}}">
                            Edit
                        </router-link>
                        <a href="#" class="btn btn-danger" @click.prevent="$store.dispatch('deletePerson', person.id)">Delete</a>
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

export default {
    name: "IndexComponent",

    components: {EditComponent, ShowComponent},

    data() {
        return {
            //
        }
    },

    methods: {
        //
    },

    mounted() {
        this.$store.dispatch('getPeople');
    },

    computed: {
        people() {
            return this.$store.getters.people;
        }
    },
}
</script>

<style scoped>

</style>
