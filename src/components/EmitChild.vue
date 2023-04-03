<script setup>

defineProps({
	type: String,
});

const emit = defineEmits(["updateName", "resetNameWithArgs", "resetNameSansArgs"]);
emit("updateName", 'Emitted from EmitChild.vue');

</script>

<template>
    <h3>
        EmitChild component
    </h3>
    <p>
        Used with this in the parent component:
        <code>
            {{ type }}
        </code>
    </p>
    <p>
        Also, you can emit from an event like this:
    </p>
    <button
            type="button"
            @click="emit('updateName', 'BOOOM!')"
    >
        Emit BOOOM!
    </button>
    <p>
        Or like this:
    </p>
    <button
            type="button"
            @click="$emit('resetNameWithArgs', 'Name reset from emit args')"
    >
        Reset name with args
    </button>
    <button
            type="button"
            @click="$emit('resetNameSansArgs')"
    >
        Reset name sans args
    </button>
</template>