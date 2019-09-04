<template>
    <div class="row">
        <app-quote v-for="(quote, index) in quotes" @click.native="quoteDeleted(index)">{{ quote }}</app-quote>
    </div>
</template>

<script>
    import Quote from './Quote.vue';

    export default {
        props: ['quotes', 'quoteDeleted'],
        components: {
            appQuote: Quote
        },
        methods: {
            deleteQuote(index) {
                this.$emit('quoteDeleted', index);
            }
        }
    }
</script>

<style>

</style>