<template>
  <form @submit.prevent="submit">
    
    <input type="text" placeholder="title" v-model="title">
    <input type="text" placeholder="body" v-model="body">
    <button type="submit">Create Post</button>
    <hr>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      userId: 1,
      title: "",
      body: ""
    };
  },
  methods: {
    ...mapMutations(["createPost"]),
    submit() {
      this.createPost({
        userId: this.userId,
        title: this.title,
        body: this.body,
        id: Date.now()
      });
      this.title = this.body = "";
    }
  }
};
</script>


<style scoped>
input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>

