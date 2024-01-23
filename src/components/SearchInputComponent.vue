<template>
    <div>
        <div class="flex items-center gap-x-2  ">
            <div class="relative">
                <span class="absolute inset-y-0 inset-x-0 flex items-center px-3 pointer-events-none">
                    <font-awesome-icon :icon="icon" class="h-4 w-4 stroke-current text-gray-400" />
                </span>
                <input type="text" name="" value="" placeholder="search" class=" w-[20rem] border-none rounded-xl px-10 py-4 focus:text-white focus:outline-none" :class="inputColor">
                <button class="p-4 hover:text-white text-gray-400 rounded-xl ml-4" :class="buttonColor">
                Ajouter un livreur
                </button>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name:"SearchInput",
        props :{
            icon:String ,
            inputColor:String ,
            buttonColor : String,      
        }

    }
</script>