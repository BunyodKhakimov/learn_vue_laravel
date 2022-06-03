<template>
<div>
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
            <tr :class="isEditPerson(person.id) ? 'd-none' : ''">
                <th>{{ person.id }}</th>
                <td>{{ person.name }}</td>
                <td>{{ person.age }}</td>
                <td>{{ person.job }}</td>
                <td><a href="#" class="btn btn-success" @click.prevent="editPerson(person.id)">Edit</a></td>
            </tr>

            <tr :class="isEditPerson(person.id) ? '' : 'd-none'">
                <th>{{ person.id }}</th>
                <td><input type="text" v-model="name" class="form-control" id="name"></td>
                <td><input type="number" v-model="age" class="form-control" id="age"></td>
                <td><input type="text" v-model="job" class="form-control" id="job"></td>
                <td><a href="#" class="btn btn-success" @click.prevent="updatePerson(person.id)">Save</a></td>
            </tr>
        </template>
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
            editPersonId: null,
            name: null,
            age: null,
            job: null,
        }
    },

    methods: {
        getPerson(){
            axios.get('/api/people')
            .then(res => {
                this.people = res.data
            })
        },
        editPerson(id){
            this.editPersonId = id
            console.log(id);
        },
        isEditPerson(id){
            return id === this.editPersonId
        },
        updatePerson(id){
            axios.put('api/people/' + id, {
                name: this.name,
                age: this.age,
                job: this.job,
            })
            .then(res => {
                console.log(res.data);
                this.editPersonId = null
                this.getPerson()
            })
        }
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
