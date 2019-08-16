<template lang="pug">
    div   
        app-server-status(v-for='status in 5')
</template>

<script>
    import ServerStatus from './ServerStatus.vue'
    export default {
        components: {
            'app-server-status': ServerStatus
        }
    }
</script>