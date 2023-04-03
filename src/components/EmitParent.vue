<script setup>
import {ref} from "vue";
import EmitChild from "@/components/EmitChild.vue";
import EmitChildWithWatchEffect from "@/components/EmitChildWithWatchEffect.vue";

const nameFromEmit = ref("No name yet");
const nameFromEmitWithWatchEffect = ref("No name yet");
</script>

<template>
    <hr/>
    <section>
        <h2>
            EmitParent component
        </h2>
        <p>
            <i>
                This component contains a ref that is updated by an event emitted from a child component.
            </i>
        </p>
        <p>
            <i>
                The child component is imported and used in the template.
            </i>
        </p>
        <p>
            Name from emit sans watch effect:
            <code>
                {{ nameFromEmit }}
            </code>
        </p>
        <p>
            Name from emit with watch effect:
            <code>
                {{ nameFromEmitWithWatchEffect }}
            </code>
        </p>
        <EmitChild
                type="@updateName='nameFromEmit = $event'"
                @updateName="nameFromEmit = $event"
                @reset-name-with-args="nameFromEmit = $event"
                @reset-name-sans-args="nameFromEmit = 'Name reset from emit sans args'"
        />
        <EmitChildWithWatchEffect @updateName="nameFromEmitWithWatchEffect = $event"/>
        <!--<EmitChild @updateName="(name) => nameFromEmit = name" type="@updateName='(name) => nameFromEmit = name'"/>-->
    </section>
</template>