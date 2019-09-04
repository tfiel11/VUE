<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="template('app-blue')" class="btn btn-primary">Load Blue Template</button>
                <button @click="template('app-green')" class="btn btn-success">Load Green Template</button>
                <button @click="template('app-red')" class="btn btn-danger">Load Red Template</button>
                <hr>
                <keep-alive>    
                    <component :is="chosen">
                        <p>This is the {{chosen.slice(4)}} component.</p>
                    </component>
                </keep-alive>

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
                chosen: 'app-blue',
                divColor: 'Blue'
            }
        },
        components: {
            'app-blue': Blue,
            appGreen: Green,
            appRed: Red
        },
        methods: {
            template(component) {
                this.chosen = component
            }
        }
    }
</script>

<style>
</style>
