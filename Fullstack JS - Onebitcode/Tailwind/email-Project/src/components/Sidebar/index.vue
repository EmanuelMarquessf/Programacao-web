<script setup>
  import WriteButton from './WriteButton.vue'
  import Button from './Button.vue'

  const inlineIcon= "inline mr-2 mb-1"
</script>
<template>
  <aside class="hidden md:flex flex-col items-start gap-2 grow-0 shrink basis-48">
    <WriteButton><i class='bx bxs-edit-alt' :class="inlineIcon"></i>Escrever</WriteButton>
    <Button><i class='bx bxs-inbox' :class="inlineIcon"></i>Caixa de Entrada</Button>
    <Button><i class='bx bx-send' :class="inlineIcon"></i>Enviados</Button>
    <Button><i class='bx bx-note' :class="inlineIcon"></i>Rascunhos</button>
    <Button><i class='bx bx-cabinet' :class="inlineIcon"></i>Arquivados</button>
    <Button><i class='bx bx-error-circle' :class="inlineIcon"></i>Spam</button>
    <Button><i class='bx bx-trash' :class="inlineIcon"></i>Lixeira</button>
  </aside>
</template>