const { createApp } = Vue

  createApp({
    data() {
      return {
        vendOrMart: 'Vending',
        title: 'RMA FROZEN SHEET',
        isToggled: true,
        admin: false,
        items: [
            {
                name: 'Yogurt',
                in: true,
                value: 0
            },
            {
                name: 'Panino',
                in: true,
                value: 0
            },
            {
                name: 'Eggs',
                in: false,
                value: 0
            },
            {
                name: 'Bagel Chips',
                in: true,
                value: 0
            }
        ]
      }
    },
    methods: {
      incItem() {
        return
      },
      asToggle() {
        this.isToggled = !this.isToggled
      }
    }
  }).mount('#app')