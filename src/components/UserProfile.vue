<template>
    <div>
        <router-link to="/">Home</router-link>  
        <h2>User Page</h2>
        <div class="user__body">

            <div class="user__body__name">
                <h3>Username: {{allUsers[userId].username}}</h3>
            </div>

            
            <div class="user__body__about">
                <p>Name: {{allUsers[userId].name}}</p>
                <p>User email: {{allUsers[userId].email}}</p>
                <p>City: {{allUsers[userId].address.city}}</p>
            </div>
            
            <button @click="$router.push({path: `/user/${userId+1}/posts`})">
                User Posts
            </button>
            
        </div>   
    </div>     
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
  name: 'app',
  computed: {
    ...mapGetters(['allPosts', 'allUsers']),
    userId() {
        return parseInt(this.$route.params.id-1)
    },
  },
  methods: mapActions(['fetchPosts', 'fetchUsers']),
  async mounted(){
    console.log(parseInt(this.$route.params.id-1))
    this.fetchPosts()
    this.fetchUsers()
  }
}
</script>

<style scoped>
.user__body__about {
    flex-grow: 1;
    text-align: center;
    padding: 20px;
    font-size: 19px;
}
</style>