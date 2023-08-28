<script setup>
  import {ref, computed} from 'vue'
  import Button from './Button.vue'

  const inlineIcon= "inline sm:mr-2 mb-1"
  const smOnlyText= "hidden sm:inline"

  const menu = ref(false);
  const menuIcon = computed(() =>{
    return menu.value ? "bx bx-x" : "bx bx-menu"
  })

</script>
<template>
  <div class="w-full flex gap-2 md:hidden items-center relative">
    <Button><i class='bx bxs-edit-alt' :class="inlineIcon"></i><span :class="smOnlyText">Escrever</span></Button>
    <Button><i class='bx bxs-inbox' :class="inlineIcon"></i><span :class="smOnlyText">Caixa de Entrada</span></Button>
    <Button><i class='bx bx-send' :class="inlineIcon"></i><span :class="smOnlyText">Enviados</span></Button>
    <Button @click="menu = !menu"><i :class='menuIcon'></i><span :class="smOnlyText">Mais</span></button>
    <div v-if="menu" class="absolute right-0 bottom-12 flex flex-col gap-2 w-40">
      <Button><i class='bx bx-note inline mr-2 mb-1' ></i>Rascunhos</button>
      <Button><i class='bx bx-cabinet inline mr-2 mb-1'></i>Arquivados</button>
      <Button><i class='bx bx-error-circle inline mr-2 mb-1'></i>Spam</button>
      <Button><i class='bx bx-trash inline mr-2 mb-1'></i>Lixeira</button>
    </div>
  </div>
</template>