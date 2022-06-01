<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Post Component</div>

                    <div class="card-body">
                        I'm an post component. <br> First created here.
                        <SinglePostComponent></SinglePostComponent>
                        Name: {{ name }} <br>
                        Job: {{ getJob }} <br>
                        Age: {{ getAge }} <br>
                        <button class="btn btn-dark" @click="sayHello()">Say Hello</button>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Job</th>
                    </tr>
                    </thead>
                    <tbody v-for="person in getFilteredPersons">
                    <tr>
                        <th scope="row">{{ person.id }}</th>
                        <td>{{ person.name }}</td>
                        <td>{{ person.age }}</td>
                        <td>{{ person.job }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-md-8">
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Job</th>
                    </tr>
                    </thead>
                    <tbody v-for="person in persons" v-if="person.age > 25">
                    <tr>
                        <th scope="row">{{ person.id }}</th>
                        <td>{{ person.name }}</td>
                        <td>{{ person.age }}</td>
                        <td>{{ person.job }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import SinglePostComponent from "./SinglePostComponent";
    export default {
        name: "PostComponent",

        components: {
            SinglePostComponent,
        },

        data() {
            return {
                persons:[
                    {
                        id: 1,
                        name: 'Bob',
                        age: 43,
                        job: 'It Specialist',
                    },
                    {
                        id: 2,
                        name: 'Alice',
                        age: 32,
                        job: 'Manager',
                    },
                    {
                        id: 3,
                        name: 'John',
                        age: 28,
                        job: 'Designer',
                    },
                    {
                        id: 4,
                        name: 'Ann',
                        age: 22,
                        job: 'Traveler',
                    },
                    {
                        id: 5,
                        name: 'Billy',
                        age: 19,
                        job: 'Youtuber',
                    },
                ]
            }
        },

        methods: {
            sayHello(){
                console.log('Hello!');
            }
        },

        computed: {
            getJob(){
                return this.name + ' working as a backend developer'
            },
            getAge(){
                return this.age
            },
            getFilteredPersons(){
                return this.persons.filter(function (person){
                    return person.age < 25
                })
            },
        }
    }
</script>

<style scoped>

</style>
