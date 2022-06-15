<template>
    <tr :class="this.$parent.isEditPerson(person.id) ? 'd-none' : ''">
        <th>{{ person.id }}</th>
        <td>{{ person.name }}</td>
        <td>{{ person.age }}</td>
        <td>{{ person.job }}</td>
        <td>
            <a href="#" class="btn btn-success"
               @click.prevent="show(person.id, person.name, person.age, person.job)">Edit</a>
            <a href="#" class="btn btn-danger" @click.prevent="deletePerson(person.id)">Delete</a>
        </td>
    </tr>
</template>

<script>

export default {
    name: "ShowComponent",

    props:[
        'person',
    ],

    data() {
        return {
            //
        }
    },

    methods: {
        deletePerson(id) {
            console.log(id);
            axios.delete(`api/people/$id`)
                .then(res => {
                    console.log(res.data);
                    this.$parent.getPerson()
                })
        },
        show(id, name, age, job){
            this.$parent.editPerson(id, name, age, job)
        }
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
