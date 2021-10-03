<template>
    <div class="container mx-auto w-1/4 mt-6">
        <h2  class="text-lg mb-2">Log in</h2>
        <form @submit.prevent="onSubmit">
            <div class="mb-3 pt-0">
                <input type="text" placeholder="Placeholder" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white-100 bg-white-100 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
            </div>
            <button type="submit" class="inline-block text-sm px-4 py-2 leading-none border rounded text-primary-500 border-primary-500 hover:border-transparent hover:text-primary-500 hover:bg-primary-100 mt-4 lg:mt-0">
                Login
            </button> <br> <br>
            <nuxt-link class="text-gray-600" to="/">Bo back </nuxt-link>
        </form>
    </div>
</template>

<script>
export default {
    layout: 'auth',
    methods: {
        onSubmit() {
            this.$store.dispatch('login')
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>