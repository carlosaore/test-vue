<script setup>
import Comment from "@/components/Comment.vue";
import {useCommentsStore} from "@/stores/CommentsStore";

const commentStore = useCommentsStore();
</script>


<template>
    <TransitionGroup
        class="comments"
        name="comments"
        tag="div"
    >
        <Comment
            v-for="comment in commentStore.comments"
            :id="comment.id"
            :key="comment.id"
            :author="comment.author"
            :comment="comment.comment"
            :date="comment.date"
            :dislikes="comment.dislikes"
            :likes="comment.likes"
        />
    </TransitionGroup>
</template>

<style scoped>
.comments {
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 1rem;
}

.comments-enter-active,
.comments-leave-active {
    transition: all 0.5s ease;
}

.comments-enter-from,
.comments-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
