<template>
    <div>
        <div class="rounded-lg p-2 flex justify-center items-center gap-x-2 border-2" :class="calculatedClasses">
            <div class="rounded-full p-1 h-2 w-2" :class="bubbleColor">   
            </div>
            <span :class="textColor" class="font-bold"> {{ text }}</span>
        </div>
    </div>
</template>
<script>
    export default {
        name: "StatusLabel",
        props:{
            labelColor:String,
            text:String,
            bubbleColor:String,
            borderColor:String,
            textColor:String ,
        },
        computed: {
    calculatedClasses() {
      return {
        [this.labelColor]: true,
        [this.borderColor]: true
      };
    }
  }
    }
</script>