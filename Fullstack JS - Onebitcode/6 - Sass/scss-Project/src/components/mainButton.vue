<template>
  <button>
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
$primaryColor : #141124;
$secondaryColor: #2b2845;
$tertiaryColor: #19afd0;

$textPrimary: #ebf0fd;
$textSecondary: #8186a3;
  button{
    background-color: $tertiaryColor;
    border: 0px;
    border-radius: 1px;
    color: $textPrimary;
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    margin: 1rem 0rem;
    padding: 14px 0px;
  }
</style>