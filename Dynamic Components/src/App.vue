<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary">Load Blue Template</button>
                <button class="btn btn-success">Load Green Template</button>
                <button class="btn btn-danger">Load Red Template</button>
                <hr>
                <component :is="chosen">
                    
                </component>
                
                
                
                
                <!-- <app-blue>
                    <p slot="gangstas">WHAT UP GANSTAS</p>
                    <button slot="buttoned">I'm a button</button>
                </app-blue>
                <app-green></app-green>
                <app-red></app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
            return {
                chosen: 'app-blue'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
