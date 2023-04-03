<script setup>
defineProps({
	textToDisplay: {
		type: String,
		default: "Hello World"
	}
})
</script>

<template>
    <hr/>
    <section>
        <h2>Child component with default props</h2>
        <p>
            <i>
                This is a child component with default props. If no text is passed in, it will display "Hello World".
            </i>
        </p>
        <code>{{ textToDisplay }}</code>
    </section>
</template>