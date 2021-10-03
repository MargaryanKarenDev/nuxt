export default ({ app }) => {
    app.router.afterEach((to, from) => {
        console.log('route changed')
    })
 }