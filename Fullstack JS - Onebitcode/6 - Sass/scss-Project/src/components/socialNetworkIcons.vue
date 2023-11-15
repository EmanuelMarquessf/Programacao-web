<template>
  <div>
    <box-icon name='gmail' type='logo' color='#ebf0fd' ></box-icon>
    <box-icon name='twitter' type='logo' color='#ebf0fd' ></box-icon>
    <box-icon name='facebook' type='logo' color='#ebf0fd' ></box-icon>
    <box-icon name='discord-alt' type='logo' color='#ebf0fd' ></box-icon>
  </div>
</template>

<style lang="scss" scoped>
$primaryColor : #141124;
$secondaryColor: #2b2845;
$tertiaryColor: #19afd0;

$textPrimary: #ebf0fd;
$textSecondary: #8186a3;
div{
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap:1rem;
}
box-icon{
  background-color: $secondaryColor;
  border-radius: 100px;
  cursor: pointer;
  height: 3.5rem;
  padding: 1rem;
  width: 3.5rem;
}

</style>