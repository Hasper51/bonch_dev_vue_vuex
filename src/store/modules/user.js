export default {
    state: {
        users: []
    },
    mutations: {
        
        updateUsers(state, users){
            state.users = users
        }
    },
    actions: {
        
        async fetchUsers(ctx){
            const res = await fetch('http://jsonplaceholder.typicode.com/users')
            const users = await res.json()

            ctx.commit("updateUsers", users)
        }
    },
    getters: {
        
        // userPosts(state){
        //     return this.state.posts.filter(p=> {
        //         return p.userId == 1
        //     })

        // },
        allUsers(state){
            return state.users
        }
        
    },
}