<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <hr>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <span>{{stringOne | reverseString}}</span>
                <hr>
                
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <span>{{stringTwo | length-check}}</span>
                <hr>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <span>{{computedStringOne}}</span>
                <hr>
                <span>{{computedStringTwo}}</span>
                <hr>
                <span>{{stringThree}}</span>
                <hr>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
    import { firstMixin } from './firstMixin.js'

    export default {
        mixins: [firstMixin],
        data() {
            return {
                stringOne: 'REVERSED',
                stringTwo: 'GLOBAL',
            }
        },
        filters: {
            reverseString(value) {
                return value.split('').reverse().join('')
            },
        }
    }
</script>

<style>
</style>
