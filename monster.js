new Vue({
    el: '#monster-game',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        attackLog: []
    },
    methods: {
        startGame: function() {
            var vm = this

            vm.gameIsRunning = true
            vm.playerHealth = 100
            vm.monsterHealth = 100
            vm.attackLog = []
        },
        attack: function() {
            var vm = this

            vm.playerAttacks(3,10)
            vm.monsterAttacks()

            vm.checkWin()
        },
        specialAttack: function() {
            var vm = this

            vm.playerAttacks(5,15)
            vm.monsterAttacks()

            vm.checkWin()
        },
        healUp: function() {
            var vm = this

            if (vm.playerHealth == 100) {
                return alert('You So Healthy')
            } else if (vm.playerHealth >= 90) {
                vm.playerHealth = 100
                vm.attackLog.unshift({
                    text: 'Player Healed to 100',
                    heal: true
                })
            } else {
                vm.playerHealth += 10 
                vm.attackLog.unshift({
                    text: 'Player Healed up by 10',
                    heal: true
                })
            }

            vm.monsterAttacks()
        },
        giveUp: function() {
            var vm = this
            vm.gameIsRunning = false
        },
        playerAttacks: function(min, max) {
            var vm = this
            
            var monsterDamage = vm.calculateDamage(min,max)
            vm.monsterHealth -= monsterDamage
            vm.attackLog.unshift({
                player: true,
                text: 'Player Dealt '+monsterDamage+' damage.',
            })
        },
        monsterAttacks: function() {
            var vm = this

            var playerDamage = vm.calculateDamage(5,12)
            vm.playerHealth -= playerDamage
            vm.attackLog.unshift({
                monster: true,
                text: 'Monster Dealt '+playerDamage+' damage.'
            })
        },
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min)
        },
        checkWin: function(result) {
            var vm = this

            if (vm.monsterHealth <= 0) {
                confirm('You Won! Play Again?') ? this.startGame() : this.gameIsRunning = false
            } else if (vm.playerHealth <= 0) {
                confirm('You Lost! Play Again?') ? this.startGame() : this.gameIsRunning = false
            }
            
        },

    }
})