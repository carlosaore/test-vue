<script setup>
import ChildWithDefaultProps from "@/components/ChildWithDefaultProps.vue";
import Todos from "@/components/Todos.vue";
import Child from "@/components/Child.vue";
</script>

<template>
    <main>
        <h1>
            View One
        </h1>
        <Todos/>
        <Child/>
        <Child parentName="Papasote"/>
        <ChildWithDefaultProps text-to-display="I'm a passed prop!"/>
        <ChildWithDefaultProps/>
    </main>
</template>
