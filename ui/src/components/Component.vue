<script>
import { Notify, QBtn  } from 'quasar'


export default {
    name: 'MyComponent',
    components: {
        QBtn,
    },
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        increment(event) {
            console.log("+");
            this.counter = this.counter + 1;
            Notify.create("+");

        },
        decrement(event) {
            console.log("-");
            this.counter = this.counter - 1;
            Notify.create("-");
        }
    }
}

</script>

<template>
    <div :class="$style.counter">
        <div :class="$style.display">
            <div>Счетчик: </div>
            <div>{{ counter }}</div>
        </div>

        <div :class="$style.controllers">
            <QBtn color="green" text-color="black" label="+" @click="increment"/>
            <QBtn color="red" text-color="black" label="-"  @click="decrement"/>
        </div>
    </div>
</template>

<style module>
.counter {
    width: 200px;

    margin: 10px;
    padding: 10px;
    border: 1px dashed red;
}

.display {
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
}

.display>div:first-child {
    margin-right: 20px;
    font-weight: bold;
}

.controllers {
    display: flex;
    justify-content: space-between;
}
</style>