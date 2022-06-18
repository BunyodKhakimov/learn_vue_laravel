import router from "../../router";

const state = {
    person: null,
    people: null,
}

const actions = {
    getPerson({commit}, id) {
        axios.get(`/api/people/${id}`)
            .then(res => {
                commit('setPerson', res.data.data)
            })
    },
    getPeople({commit}) {
        axios.get('/api/people')
            .then(res => {
                commit('setPeople', res.data.data)
            })
    },
    deletePerson({dispatch}, id) {
        axios.delete(`/api/people/${id}`)
            .then(res => {
                dispatch('getPeople');
            })
    },
    updatePerson({}, data) {
        console.log(data);
        axios.patch(`/api/people/${data.id}`, {
            name: data.name,
            age: data.age,
            job: data.job,
        })
            .then(res => {
                router.push({ name: 'people.show', params: { id: data.id, } });
            })
    },
    createPerson({}, data) {
        axios.post('/api/people', {
            name: data.name,
            age: data.age,
            job: data.job,
        }).then(res => {
            router.push({ name: 'people.show', params: { id: res.data.data.id, } });
        })
    },
}

const mutations = {
    setPerson(state, person) {
        state.person = person
    },
    setPeople(state, people) {
        state.people = people
    },
}

const getters = {
    person: state =>  state.person,
    people: state =>  state.people,
}

export default {
    state, actions, getters, mutations,
}
