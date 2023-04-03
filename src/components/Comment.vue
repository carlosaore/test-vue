<script setup>
import {computed, defineProps} from 'vue'
import {useCommentsStore} from "@/stores/CommentsStore";

const {
	likeComment,
	dislikeComment,
	removeComment
} = useCommentsStore()

// interface Comment {
//   id: number
//   comment: string
//   author: string
//   date: string
//   likes: number
//   dislikes: number
// }

const props = defineProps({
	id: String,
	comment: String,
	author: String,
	date: String,
	likes: Number,
	dislikes: Number
})

// computed date to localeDateString
const dateAsString = computed(
	() => {
		const date = new Date(props.date)
		return date.toLocaleDateString(
			"es-ES",
			{
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric"
			}
		)
	}
)

const handleLike = () => {
	likeComment(props.id);
}

const handleDislike = () => {
	dislikeComment(props.id);
}

const handleRemove = () => {
	removeComment(props.id);
}

</script>

<template>
    <div class="comment-wrapper">
        <p
            :class="{ 'comment--liked': props.comment.likes > props.comment.dislikes }"
            class="comment-text"
        >
            <strong>
                {{ props.comment }}
            </strong>
        </p>
        <p>
            <i>
                {{ props.author }}
            </i>
            <span> | </span>
            <i>
                {{ dateAsString }}
            </i>
        </p>
        <div class="comment-actions">
            <button
                :data-count="props.likes"
                class="comment-action"
                @click="handleLike"
            >
                👍
            </button>
            <button
                :data-count="props.dislikes"
                class="comment-action"
                @click="handleDislike"
            >
                👎
            </button>
            <button
                @click="handleRemove"
            >
                🗑️
            </button>
        </div>
    </div>
</template>

<style scoped>
.comment-wrapper {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 1em;
    border-radius: 1em;
    width: 100%;
}

.comment-action {
    position: relative;
}

.comment-action:before {
    content: attr(data-count);
    position: absolute;
    top: -0.5em;
    right: -0.3em;
    background-color: #3b82f6;
    color: #fff;
    width: 1em;
    height: 1em;
    line-height: 1em;
    padding: 0.5em;
    border-radius: 100%;
    font-size: 0.8em;
}
</style>