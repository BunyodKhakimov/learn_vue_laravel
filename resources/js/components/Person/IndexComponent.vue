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
                <ShowComponent :person="person" :ref="`show_${person.id}`"></ShowComponent>
                <EditComponent :person="person" :ref="`edit_${person.id}`"></EditComponent>
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
            people: null,
            editPersonId: null,
            name: null,
            age: null,
            job: null,
        }
    },

    methods: {
        getPerson() {
            axios.get('/api/people')
                .then(res => {
                    this.people = res.data
                })
        },
        editPerson(id, name, age, job) {
            this.editPersonId = id
            let editName = `edit_${id}`
            let fullEditName = this.$refs[editName][0]

            fullEditName.name = name
            fullEditName.age = age
            fullEditName.job = job
        },
        isEditPerson(id) {
            return id === this.editPersonId
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
