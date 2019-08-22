<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers @showServer="serverEdit = $event" :servers="servers"></servers>
            <app-server-details :server="serverEdit" :statusFn="changeStatus"></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        data: function() {
            return {
                serverEdit: {},
                servers: [
                    {id: 1, status: 'normal'},
                    {id: 2, status: 'sketchy'},
                    {id: 3, status: 'nice'},
                    {id: 4, status: 'alright'},
                    {id: 5, status: 'perfect'},
                ]
            }
        },
        components: {
            appHeader: Header,
            Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        },
        
        methods: {
            changeStatus: function(param) {
                this.serverEdit.status = 'FIXED'
            }
        }
    }
</script>

<style>

</style>
