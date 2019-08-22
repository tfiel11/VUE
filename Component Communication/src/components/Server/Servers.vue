<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="server in servers"
                    @click="selectedServer(server)">
                Server #{{ server.id }}. Status: {{server.status}}
            </li>
        </ul>
    </div>
</template>

<script>
import { eventBus } from '../../main'
export default {
    props: {
        servers: Array
    },
    methods: {
        selectedServer(server) {
            eventBus.$emit('serverToEdit', server)
        }
    }
}
</script>

<style>

</style>
