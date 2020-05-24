<template>
  <div class="experience">
    <p class='under_black'>Experience</p>
    <table>
      <tr>
        <td class="line">2018/03~</td>
        <td>web系ベンチャーインターン</td>
      </tr>
      <tr>
        <td class="line">2018/08</td>
        <td>水泳全国国公立大学選手権(山口)出場</td>
      </tr>
      <tr>
        <td class="line">2019/07~</td>
        <td>AIベンチャーインターン</td>
      </tr>                           
    </table>
  </div>
</template>

<style lang="scss">
.experience{
  margin-top: 15vh;
  width: 95%;
  margin-left: 5vw;  
  height: 400px;
  // 画像の場合
  // background: url(../assets/52476.jpg) left top no-repeat;
  background: white;/* fallback for old browsers */
  padding-top: 10vh;
  padding-left: 10vw;
  p{
  color: black;
  font-size: 40px;
  }
  table{
    margin-top: 5%;
    font-size: 20px;
    .line{
      // text-align: right;
      padding-right: 25px;
    }
  }
}
@media screen and (max-width: 764px){
  .experience{ 
    height: 50vh;
    p{
    font-size: 30px;
    }
    table{
      font-size: 15px;
      .line{
        padding-right: 25px;
      }
    }
  }
}
</style>

<script>
export default {
}
</script>
