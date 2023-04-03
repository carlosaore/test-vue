<script setup>
import {ref} from "vue";
import {useCommentsStore} from "@/stores/CommentsStore";


const comment = ref("");
const author = ref("");
const {
	addComment
} = useCommentsStore()


const handleSubmit = () => {
	addComment({
		comment: comment.value,
		author: author.value
	})
	comment.value = "";
	author.value = "";
};
</script>

<template>
    <form
            @submit.prevent="handleSubmit"
    >
        <label>
            Comment:
            <input
                    v-model="comment"
                    required
                    type="text"
            />
        </label>
        <label>
            Author:
            <input
                    v-model="author"
                    required
                    type="text"
            />
        </label>
        <button type="submit">Submit</button>
    </form>
</template>