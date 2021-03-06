const state = {
    userName: 'Jade'
}

const getters = {
    firstLetter: state => {
        return state.userName.charAt(0);
    }
}

const actions = {
    /**
     * state指向当前state实例
     * rootState 指向根实例
     */
    updateUserName: ({ commit, state, rootState, dispatch }, userName) => {
        console.log(JSON.stringify(userName))
        //
        commit('SET_USER_NAME', { userName });
    },
    xxx () {

    }
}

const mutations = {
    SET_USER_NAME (state, { userName }) {
        state.userName = userName;
    }
}

export default {
    // namespaced: true, // 模块使用命名空间
    state,
    actions,
    getters,
    mutations,
    // 可以在模块中使用子模块
    modules: {

    }
}
