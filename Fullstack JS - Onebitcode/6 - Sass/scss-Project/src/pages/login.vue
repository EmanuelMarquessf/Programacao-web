<script setup>
  import TextInput from "../components/textInput.vue";
  import PersonalCheckbox from "../components/personalCheckbox.vue";
  import MainButton from "../components/mainButton.vue";
  import SocialNetworkIcons from "../components/socialNetworkIcons.vue";
</script>

<template>
  <div class="mainContent">
    <div class="loginContent">
      <div class="divImg"
        src="https://3.bp.blogspot.com/-a3IpkFiVEJo/X4wrX4PelRI/AAAAAAAAEIs/jaLMXBYW5JwxJDkqAYl_NNJkw8gODCKvACNcBGAsYHQ/w919/lol-wild-rift-singed-surfer-uhdpaper.com-4K-8.544-wp.thumbnail.jpg"
        alt=""
      />
      <div class="loginInfos">
        <span class="title"><a href class="registerTitle">Register</a> / <a href class="loginTitle">Login</a></span>
        <TextInput :placeholder="'Enter your Email'" :type="'text'">Email</TextInput>
        <TextInput :placeholder="'Enter your Password'" :type="'passoword'">Password</TextInput>
        <div class="checkbox">
          <PersonalCheckbox>
            I am 18 years old and i have read and accept <a href="" class="linkCheck"> Terms and Conditions </a> and <a href=""  class="linkCheck"> Privacy Policy</a>. 
          </PersonalCheckbox>
          <PersonalCheckbox>
            I would like to receive emails about betting and promotions from loot bet.
          </PersonalCheckbox>
        </div>
        <MainButton>Registration</MainButton>
        <span class="spanSocial">Or via social network</span>
        <SocialNetworkIcons></SocialNetworkIcons>
        <span class="spanLogin">Have an account? <a href="" class="linkCheck">Login</a></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mainContent{
  background-color: $secondaryColor;
  height: 100vh;
  width: 100%;
  .loginContent {
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    padding: 6rem 15rem;
    height: 100vh;
    .loginInfos {
      background-color: $primaryColor;
      border-radius: 0px 10px 10px 0px;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
      color: $textPrimary;
      display: flex;
      font-family: 'Roboto', sans-serif;
      flex-direction: column;
      justify-content: space-between;
      padding: 4rem 3rem;
      width: 30%;
      .checkbox{
        display: flex;
        flex-direction: column;
        gap:1rem;
      }
      .title{
        @include text-style($textPrimary, 25px,'Roboto', 500, uppercase);
        margin-bottom: 1rem;
      }
      .registerTitle{
        @include link-style($textPrimary, none);
      }
      .loginTitle{
        @include link-style($textSecondary, none);
      }
      .spanSocial{
        font-size: 18px;
        text-align: center;
      }
      .spanLogin{
        text-align: center;
        font-size: 14px;
      }
    }
    img {
      height: calc(100vh - 200px);
      width: 70%;
      border-radius: 25px  0px 0px 25px;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
      z-index: 0;
    }
    .divImg{
      background-image: url(https://3.bp.blogspot.com/-a3IpkFiVEJo/X4wrX4PelRI/AAAAAAAAEIs/jaLMXBYW5JwxJDkqAYl_NNJkw8gODCKvACNcBGAsYHQ/w919/lol-wild-rift-singed-surfer-uhdpaper.com-4K-8.544-wp.thumbnail.jpg);
      background-position: center;
      background-size: cover;
      height: calc(100vh - 12.2rem);
      width: 70%;
      border-radius: 25px  0px 0px 25px;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
      z-index: 0;
      margin: 1px 0px;
    }
    .linkCheck{
      color: $tertiaryColor;
    }
  }

}
</style>