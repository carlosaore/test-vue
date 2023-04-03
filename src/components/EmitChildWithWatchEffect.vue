<script setup>
import {defineEmits, ref, watchEffect} from "vue";

const text = ref("Hello");

const resetText = () => {
	text.value = "Hello";
};

const emit = defineEmits(["updateName"]);

watchEffect(() => {
	emit("updateName", text.value);
});

</script>

<template>
    <h3>
        EmitChildWithWatchEffect component
    </h3>
    <p>
        <i>
            This component contains a ref that is updated by an event emitted from a child component.
        </i>
    </p>
    <input v-model="text" type="text">
    <button type="button" @click="resetText">Reset</button>
</template>