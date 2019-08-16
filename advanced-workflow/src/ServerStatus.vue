<template lang="pug">
    div
        p Server Status is {{ status }}
        hr 
        button(@click='changeStatus()') Check
</template>

<script>
export default {
    data: function() {
        return {
            status: 'critical'
        }
    },
    methods: {
        changeStatus() {
            this.status = 'normal'
        }
    }
}
</script>