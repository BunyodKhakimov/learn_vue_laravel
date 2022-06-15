<template>
    <tr :class="this.$parent.isEditPerson(person.id) ? '' : 'd-none'">
        <th>{{ person.id }}</th>
        <td><input type="text" v-model="name" class="form-control" id="name"></td>
        <td><input type="number" v-model="age" class="form-control" id="age"></td>
        <td><input type="text" v-model="job" class="form-control" id="job"></td>
        <td><a href="#" class="btn btn-success" @click.prevent="updatePerson(person.id)">Save</a></td>
    </tr>
</template>

<script>
export default {
    name: "EditComponent",

    props: [
        'person',
    ],

    data() {
        return {
            name: null,
            age: null,
            job: null,
        }
    },

    methods: {
        updatePerson(id) {
            axios.put(`api/people/${id}`, {
                name: this.name,
                age: this.age,
                job: this.job,
            })
                .then(res => {
                    console.log(res.data);
                    this.$parent.editPersonId = null
                    this.$parent.getPerson()
                })
        },
    },

    mounted() {
        //
    },

    computed: {
        //
    },
}
</script>

<style scoped>

</style>
