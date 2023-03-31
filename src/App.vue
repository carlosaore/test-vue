<script setup>
import Todos from "@/components/Todos.vue";
import Child from "@/components/Child.vue";
import ChildWithDefaultProps from "@/components/ChildWithDefaultProps.vue";
import EmitParent from "@/components/EmitParent.vue";
</script>

<template>
  <header>
    <div class="wrapper">
    </div>
  </header>
  <main>
      <Todos />
      <Child />
      <Child parentName="Papasote" />
      <ChildWithDefaultProps text-to-display="I'm passing props"/>
      <ChildWithDefaultProps />
      <EmitParent />
  </main>
</template>
