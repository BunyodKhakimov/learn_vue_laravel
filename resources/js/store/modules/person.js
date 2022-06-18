const state = {
    person: null,
}

const actions = {
    getPerson({commit}, id) {
        console.log(1111111);
        axios.get(`/api/people/${id}`)
            .then(res => {
                console.log(22222222222);
                commit('setPerson', res.data.data)
            })
    }
}

const mutations = {
    setPerson(state, person) {
        state.person = person
    },
}

const getters = {
    person: state =>  state.person,
}

export default {
    state, actions, getters, mutations,
}
