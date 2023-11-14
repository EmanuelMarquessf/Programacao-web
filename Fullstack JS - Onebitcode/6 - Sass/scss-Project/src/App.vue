<script setup>
import TextInput from "../src/components/textInput.vue";
import PersonalCheckbox from "../src/components//personalCheckbox.vue";
import MainButton from "../src/components/MainButton.vue";
import SocialNetworkIcons from "../src/components/socialNetworkIcons.vue";


import {defineProps} from "vue";


</script>

<template>
  <div class="mainContent">
    <div class="loginContent">
      <img
        src="https://3.bp.blogspot.com/-a3IpkFiVEJo/X4wrX4PelRI/AAAAAAAAEIs/jaLMXBYW5JwxJDkqAYl_NNJkw8gODCKvACNcBGAsYHQ/w919/lol-wild-rift-singed-surfer-uhdpaper.com-4K-8.544-wp.thumbnail.jpg"
        alt=""
      />
      <div class="loginInfos">
        <span class="title">Registration / Login</span>
        <TextInput :placeholder="'Enter your Email'" :type="'text'">Email</TextInput>
        <TextInput :placeholder="''" :type="'passoword'">Senha</TextInput>
        <div>
          <PersonalCheckbox>
            I am 18 years old and i have read and accept <a href=""> Terms and Conditions </a> and <a href=""> Privacy Policy</a>. 
          </PersonalCheckbox>
          <PersonalCheckbox>
            I would like to receive emails about betting and promotions from loot bet.
          </PersonalCheckbox>
        </div>
        <MainButton>Registration</MainButton>
        <span>Or via solial network</span>
        <SocialNetworkIcons></SocialNetworkIcons>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
$primaryColor : #141124;
$secondaryColor: #2b2845;
$terciaryColor: #19afd0;

$textPrimary: #ebf0fd;
$textSecondary: #8186a3;

.mainContent{
  background-color: $secondaryColor;
  height: 100vh;
  width: 100%;
  .loginContent {
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    padding: 100px 250px;
    .loginInfos {
      background-color: $primaryColor;
      color: $textPrimary;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 80px 50px;
      width: 30%;
      .title{
        font-size: 25px;
        text-transform: uppercase;
        font-family:Arial, Helvetica, sans-serif;
        font-weight: 700;
      }
    }
    img {
      height: calc(100vh - 200px);
      width: 70%;
    }
  }

}
</style>
