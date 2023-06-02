import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCcw5jd8XSjcz1SXTWdUnEeUat8kNUePeM",
  authDomain: "rmafr-22482.firebaseapp.com",
  databaseURL: "https://rmafr-22482-default-rtdb.firebaseio.com",
  projectId: "rmafr-22482",
  storageBucket: "rmafr-22482.appspot.com",
  messagingSenderId: "575367101291",
  appId: "1:575367101291:web:6cbee6e5e6dc52773f6a2e",
  measurementId: "G-HF0KQF0L8R",
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://rmafr-22482-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

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
                name: 'Bagel Chipsz',
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