<template>
<div>
    <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Job</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="person in people">
            <th>{{ person.id }}</th>
            <td>{{ person.name }}</td>
            <td>{{ person.age }}</td>
            <td>{{ person.job }}</td>
        </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    name: "IndexComponent",

    data(){
        return {
            people: null,
        }
    },

    methods: {
        getPerson(){
            axios.get('/api/people')
            .then(res => {
                this.people = res.data;
            })
        },
    },

    mounted() {
        this.getPerson()
    },

    computed:{
        //
    },
}
</script>

<style scoped>

</style>
