<script setup>
import {RouterLink} from "vue-router";
</script>

<template>
    <header>
        <nav>
            <img alt="Vue logo" src="https://vuejs.org/images/logo.png" width="50"/>
            <ul>
                <RouterLink to="/">
                    <li>
                        Home
                    </li>
                </RouterLink>
                <RouterLink to="routeone">
                    <li>
                        Route 1
                    </li>
                </RouterLink>
                <RouterLink to="routetwo">
                    <li>
                        Route 2
                    </li>
                </RouterLink>
                <RouterLink to="comments">
                    <li>
                        Comments
                    </li>
                </RouterLink>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
header {
    background-color: #3b82f6;
    color: #fff;
    padding: 1rem;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

ul {
    display: flex;
    list-style: none;
    padding: 0;
}

a {
    margin-left: 1rem;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 0.5rem 1rem;
}

a:hover {
    background-color: rgba(255, 255, 255, 0.2);
}

a {
    color: #fff;
    text-decoration: none;
}
</style>

