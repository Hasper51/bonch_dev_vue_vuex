export default {
    state: {
        posts: [],
        
    },
    mutations: {
        updatePosts(state, posts){
            state.posts = posts
        },
        createPost(state, newPost){
            state.posts.unshift(newPost)
        }
        
    },
    actions: {
        async fetchPosts(ctx){
            const res = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=30')
            const posts = await res.json()
            
            ctx.commit('updatePosts', posts)
        },
        
    },
    getters: {
        allPosts(state){
            return state.posts
        },
        
        userPosts: (state) => (userId) => {
            return state.posts.filter(p => p.userId === userId+1)
        },
        validPosts(state) {
            return state.posts.filter(p => {
              return p.title && p.body
            })
        },
        
    },
}