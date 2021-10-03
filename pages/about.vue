<template>
    <div>
        <p>About</p>
        <vc-date-picker 
            :value="null"
            color="red"
            is-dark
            is-range
        />
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'About the app',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Test nuxt about page'
                }
            ]
        }
    }
}
</script>

<style>

</style>