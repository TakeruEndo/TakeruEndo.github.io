<template>
  <div id="skill">
    <p class='under'>Skill</p>
    <ul>
      <li>Python</li>
      <li>Deep Learning(主にpytorch)</li>
      <li>Flutter</li>
      <li>Ruby on Rails</li>
      <li>Vue.js</li>
    </ul>
  </div>
</template>

<style lang="scss">
#skill{
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
  #skill{
    width: 95%;
    height: 60vh;
    p{
    font-size: 30px;
    }
    ul{
      font-size: 20px;
    }
  }
}
</style>

<script>
export default {
}
</script>
