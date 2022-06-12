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
                <td>
                    <a href="#" class="btn btn-success"
                       @click.prevent="editPerson(person.id, person.name, person.age, person.job)">Edit</a>
                    <a href="#" class="btn btn-danger" @click.prevent="deletePerson(person.id)">Delete</a>
                </td>
            </tr>
            <EditComponent :person="person" :ref="`edit_${person.id}`"></EditComponent>
        </template>
        </tbody>
    </table>
</div>
</template>

<script>
import EditComponent from "./EditComponent";
export default {
    name: "IndexComponent",
    components: {EditComponent},
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
        editPerson(id, name, age, job){
            this.editPersonId = id
            let editName = `edit_${id}`
            let fullEditName = this.$refs[editName][0]

            fullEditName.name = name
            fullEditName.age = age
            fullEditName.job = job
        },
        isEditPerson(id){
            return id === this.editPersonId
        },
        deletePerson(id){
          axios.delete(`api/people/$id`)
          .then(res => {
              console.log(res.data);
              this.getPerson()
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
