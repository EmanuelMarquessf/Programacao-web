<template>
  <button>
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>

  button{
    background-color: $tertiaryColor;
    border: 0px;
    border-radius: 1px;
    text-transform: uppercase;
    margin: 1rem 0rem;
    padding: 14px 0px;
    @include text-style($textPrimary, 25px,'Roboto', 600, uppercase);
  }
</style>