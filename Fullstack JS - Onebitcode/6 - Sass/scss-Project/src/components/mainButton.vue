<template>
  <button>
    <slot></slot>
  </button>
</template>

<style lang="scss">
  $primaryColor : #141124;
  $secondaryColor: #2b2845;
  $terciaryColor: #19afd0;

  $textPrimary: #ebf0fd;
  $textSecondary: #8186a3;

  button{
    background-color: $terciaryColor;
    border: 0px;
    border-radius: 1px;
    color: $textPrimary;
    font-size: 25px;
    text-transform: uppercase;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: 600;
    padding: 14px 0px;
  }
</style>