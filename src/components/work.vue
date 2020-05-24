<template>
  <div id="work">
    <p class='under'>Work</p>
    <p>Update soon...</p>
  </div>
</template>

<style lang="scss">
#work{
  margin-top: 15vh;
  width: 95%; 
  height: 500px;
  // 画像の場合
  // background: url(../assets/52476.jpg) left top no-repeat;
  background: black;/* fallback for old browsers */
  padding-top: 10vh;
  padding-left: 15vw;
  p{
  color: white;
  font-size: 40px;
  }
  ul{
    color: white;
    font-size: 25px;
  }
}
@media screen and (max-width: 764px){
  #work{
    height: 40vh;
    p{
    font-size: 30px;
    }
  }
}
</style>

<script>
export default {
}
</script>