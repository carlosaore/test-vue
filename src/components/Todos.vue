<script setup>
import {computed, reactive, ref} from "vue";

const visible = ref(true);
const visibleCheckbox = ref(true);
const makeVisible = () => {
	visible.value = true;
};

const makeInvisible = () => {
	visible.value = false;
};

const toggleVisible = () => {
	visible.value = !visible.value;
};

const counter = reactive({
	count: 0
});
const refCounter = ref(0);
const todos = ref([
	{
		id: 1,
		title: "Todo 1",
		completed: false
	},
	{
		id: 2,
		title: "Todo 2",
		completed: false
	},
	{
		id: 3,
		title: "Todo 3",
		completed: false
	}
]);

const incrementCount = () => {
	counter.count = counter.count + 1;
	refCounter.value = refCounter.value + 1;
}

const doubleCount = computed(() => {
	return refCounter.value * 2;
});

const addTodo = (e) => {
	const newId = todos.value.length + 1;
	const newTodo = {
		id: newId,
		title: e.target[0].value,
		completed: false
	};
	todos.value.push(newTodo);
	e.target[0].value = "";
}

</script>

<template>
    <hr/>
    <section>
        <h2>Counter</h2>
        <p>RefCounter: {{ refCounter }}</p>
        <p>Reactive {{ counter.count }}</p>
        <p>Computed {{ doubleCount }}</p>
        <button
                @click="incrementCount"
        >
            Increment
        </button>
    </section>
    <section>
        <h2>Todo list</h2>
        <ol>
            <li v-for="todo in todos" :key="todo.id">
                <input :id="todo.id" v-model="todo.completed" type="checkbox">
                <label
                        :class="{ checked: todo.completed }"
                        :for="todo.id"
                >
                    {{ todo.title }}
                </label>
            </li>
        </ol>
        <form
                @submit.prevent="addTodo"
        >
            <label for="todo">Add Todo</label>
            <input type="text"/>
            <button type="submit">Add</button>
        </form>
    </section>
    <section>
        <h2>Conditional rendering</h2>
        <p
                v-if="visible && visibleCheckbox"
        >
            Peekaboo
        </p>
        <p
                v-else-if="!visibleCheckbox"
        >
            now you can't see me even if <code>visible</code> is true because of the <code>visibleCheckbox</code> value
        </p>
        <p>
            <strong>
                Visible value: {{ visible }}
            </strong>
        </p>
        <p>
            <strong>
                Visible checkbox value: {{ visibleCheckbox }}
            </strong>
        </p>
        <button
                @click="makeVisible"
        >
            Make Visible
        </button>
        <button
                @click="makeInvisible"
        >
            Make Invisible
        </button>
        <button
                @click="toggleVisible"
        >
            Toggle Visible
        </button>
        <label>
            override visible
            <input
                    v-model="visibleCheckbox"
                    type="checkbox"
            />
        </label>
    </section>
</template>

<style scoped>
.checked {
    text-decoration: line-through;
}
</style>