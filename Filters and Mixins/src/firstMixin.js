export const firstMixin = {
    data() {
        return {
            stringThree: 'CHEA BOI'
        }
    },
    computed: {
        computedStringTwo() {
            return 'Computed: '+ this.stringTwo + ' ('+this.stringTwo.length+')'
        },
        computedStringOne() {
            return 'Computed Reverse: '+ this.stringOne.split('').reverse().join('')
        }
    }
    
}