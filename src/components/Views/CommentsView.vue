<script setup>
import Comments from "@/components/Comments.vue";
import AddComment from "@/components/AddComment.vue";
</script>

<template>
    <main>
        <h1>
            Comments
        </h1>
        <p>
            This is the comments page.
        </p>
        <p>
            <i>
                It uses <code>Pinia</code> to manage an array of comments.
            </i>
        </p>
        <Comments/>
        <AddComment/>
    </main>
</template>
