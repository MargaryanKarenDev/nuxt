<template>
  <section v-if="user">
    <h1>{{user.name}}</h1>

    <hr>

    <h3>{{user.email}}</h3>
  </section>
</template>

<script>
export default {
  data() {
      return {
          user: null
      }
  },
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
  async created() {
    const user = await this.$axios.$get('https://jsonplaceholder.typicode.com/users/' + this.$route.params.id)
    this.user = user
  }
}
</script>