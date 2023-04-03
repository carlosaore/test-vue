<template>
    <hr/>
    <section>
        <h2>
            SlotParent component
        </h2>
        <p>
            <i>
                Will render a SlotChild component and pass in a slot, then the same component with differents slots, and
                finally the same component with no slot.
            </i>
        </p>
        <ul>
            <SlotChild>
                Look, I'm a slot!
            </SlotChild>
            <SlotChild>
                <strong>Look, I'm a slot too, and with a tag!</strong>
            </SlotChild>
            <SlotChild>
                <RandomComponent/>
            </SlotChild>
            <SlotChild/>
        </ul>
    </section>
</template>
<script setup>
import SlotChild from "@/components/SlotChild.vue";
import RandomComponent from "@/components/RandomComponent.vue";
</script>