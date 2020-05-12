<template>
  <div class="account">
    <p class='under_black'>Account</p>
    <ul>
      <li><a href="https://twitter.com/taken88825719?s=09">Twitter</a></li>
      <li><a href="https://qiita.com/Pingot">Qiita</a></li>
      <li><a href="https://takeru-study.hatenablog.com/">HatenaBlog</a></li>
      <li><a href="https://www.kaggle.com/jooott">Kaggle</a></li>
    </ul>
  </div>
</template>

<style lang="scss">
.under_black {
  border-bottom: solid 3px black;
}
.account{
  margin-top: 10vh;
  width: 95%;
  padding-left: 10vw;
  height: 500px;
  background: white;/* fallback for old browsers */
  padding-top: 10vh;
  margin-left: 5vw;
  p{
  color: black;
  font-size: 40px;
  }
  ul{
    color: black;
    font-size: 25px;
    a{
      color: black;
    }
  }
}
@media screen and (max-width: 764px){
  .account{
    padding-left: 10vw;
    height: 60vh;
    p{
    font-size: 30px;
    }
    ul{
      color: black;
      font-size: 20px;
    }
  }
}
</style>

<script>
export default {
}
</script>
