<template>
    <div class="spinner">
        <div class="spinner__circle"></div>
        <div class="spinner__circle"></div>
        <div class="spinner__circle"></div>
    </div>
</template>

<style scoped>
.spinner {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}

.spinner__circle {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid;
    border-radius: 50%;
    animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
}

.spinner__circle:nth-child(1) {
    animation-delay: -0.45s;
}

.spinner__circle:nth-child(2) {
    animation-delay: -0.3s;
}

.spinner__circle:nth-child(3) {
    animation-delay: -0.15s;
}

@keyframes spinner {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>