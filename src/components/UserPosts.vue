<template>
    <div>
        <router-link to="/">Home</router-link>  
        <p></p>
        <!-- <h2 v-for="user in allUsers" :key="user.id"><p v-if="user.id===userId+1">{{user.name}}</p></h2> -->
        <!-- <h2>{{ allUsers[userId].username }} Posts</h2> -->
        <button @click="$router.push({path: `/user/${userId+1}`})">
            Back
        </button>
        <p></p>
        
        <div class="post" v-for="post in userPosts(userId)" :key="post.id">
            
            <h3>{{post.title}}</h3>
            <p>{{post.body}}</p>
            
            
        </div>
        
    </div>    
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
  name: 'app',
  
  computed: {
    ...mapGetters(['allPosts', 'allUsers', 'userPosts']),
    userId() {
        return parseInt(this.$route.params.id-1)
    },
  },
  methods: mapActions(['fetchPosts', 'fetchUsers']),
  async mounted(){
    this.fetchPosts()
    this.fetchUsers()
    console.log(parseInt(this.$route.params.id-1))

  }
}
</script>
