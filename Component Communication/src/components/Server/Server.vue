<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Server Details are currently not updated</p>
        <p v-else>Server #{{server.id}} has a status of {{server.status}}.</p>
        <br>
        <button v-if="server" @click="changeStatus">Change Status</button>
    </div>

</template>

<script>
import { eventBus } from '../../main'

export default {
    data: function() {
        return {
            server: null
        }
    },
    methods: {
        changeStatus() {
            this.server.status = 'FIXED'
        }
    },
    created() {
        eventBus.$on('serverToEdit', (server) => {
            this.server = server
        }) 
    }
}
</script>

<style>

</style>