<script setup>
import Header from "@/components/Header.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
    </div>
  </header>
  <main>
      <Header />
      <router-view v-slot="{ Component }">
          <transition name="page-opacity" mode="out-in">
              <component :is="Component"></component>
          </transition>
      </router-view>
  </main>
</template>

<style scoped>
  .page-opacity-enter-active,
  .page-opacity-leave-active {
    transition: 0.3s ease-in-out all;
  }

  .page-opacity-enter-from,
  .page-opacity-leave-to {
    opacity: 0;
    translate: 50vw;
  }
</style>
