<template lang="">
    <div>
        <div class="p-2 rounded-full h-10 w-10 flex items-center justify-center" :class="buttonColor">
            <font-awesome-icon :icon="icon"  :class="iconColor" class="text-lg stroke-current"/>
            <slot></slot>
        </div>
    </div>
</template>
<script>


    export default {
        name:"CircularIconButton",
        props:{
            icon: String,
            iconColor:String,
            buttonColor:String ,
        }
    }
</script>