<script setup>
import SlotParent from "@/components/SlotParent.vue";
import EmitParent from "@/components/EmitParent.vue";
import Fetcher from "@/components/Fetcher.vue";
</script>

<template>
    <main>
        <h1>
            View Two
        </h1>
        <EmitParent/>
        <SlotParent/>
        <Fetcher/>
    </main>
</template>