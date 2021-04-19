<template>
    <div>
        <h2>Home Page</h2>
        <PostForm/>
        
        <div class="post" v-for="post in validPosts" :key="post.id">
            <div class="post__user" @click="$router.push({ path: `/user/${post.userId}` })">
                <div class="post__user__name" v-for="user in allUsers" :key="user.id"><p v-if="user.id===post.userId">{{user.name}}</p></div>
            </div>
            <hr>
            <h2>{{post.title}}</h2>
            <p class="post__body">{{post.body}}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import PostForm from "../components/PostForm"
export default {
  
  
  components: {PostForm},
  computed: {
      ...mapGetters(['validPosts', 'allUsers']),  
      
  },   
  methods: {
      ...mapActions(['fetchPosts', 'fetchUsers']),
       
  },
  async mounted(){
    //this.$store.dispatch('fetchPosts')
    this.fetchPosts()
    this.fetchUsers()
  }
}
</script>

<style>

.post__user {
    cursor: pointer;
    padding-left: 10px;
    height: auto;
    display: flex;
    justify-content: flex-start;
    
    

}
</style>