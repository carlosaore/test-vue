<script setup>
import {reactive, ref} from "vue";

defineProps({
	parentName: String,
})

const obj = reactive({
	name: "John",
	age: 30
});

const nameInput = ref("");
const ageInput = ref(0);

const changeName = () => {
	obj.name = nameInput.value;
	nameInput.value = "";
};

const changeAge = () => {
	obj.age = ageInput.value;
	ageInput.value = 0;
};

</script>

<template>
    <hr/>
    <section>
        <h2>Child component</h2>
        <p>
            <i>
                This is a child component with props, an object in state and a form to update it.
            </i>
        </p>
        <p>
            <i>
                If <code>parentName</code> is passed in, it will be displayed. Otherwise, it will be unknown.
            </i>
        </p>
        <p>My name is {{ obj.name }} and I am {{ obj.age }} years old.</p>
        <p v-if="parentName">My parent's name is {{ parentName }}.</p>
        <p v-else>My parent's name is unknown.</p>
        <form>
            <label for="name">
                Name
                <input type="text" id="name" v-model="nameInput">
            </label>
            <button type="button" @click="changeName">Change Name</button>
            <br/>
            <label for="age">
                Age
                <input type="number" id="age" v-model="ageInput" step="1">
            </label>
            <button type="button" @click="changeAge">Change Age</button>
        </form>
    </section>
</template>