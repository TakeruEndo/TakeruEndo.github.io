<template>
  <div class="title">
    <div id="profile">
    <p class='under'>Profile</p>
    <table>
      <tr>
        <td class="line">Name:</td>
        <td>遠藤丈(Takeru Endo)</td>
      </tr>
      <tr>
        <td class="line">Birth:</td>
        <td>1997/11/18</td>
      </tr>
      <tr>
        <td class="line">University:</td>
        <td>電気通信大学大学院(University of Electro Communication)/M1</td>
      </tr>
      <tr>
        <td class="line">Field</td>
        <td>Deep Learning, Soft robotics</td>
      </tr>
      <tr>
        <td class="line">Hobby:</td>
        <td>Scuba diving, Swimming, Art appreciation</td>
      </tr>
    </table>
    </div>
  </div>
</template>

<style lang="scss">
.under {
  border-bottom: solid 3px white;
}
.title{
  width: 95%;
  height: 700px;
  // 画像の場合
  // background: url(../assets/52476.jpg) left top no-repeat;
  background: black;/* fallback for old browsers */
  #profile{
    padding-top: 15vh;
    margin-left: 15vw;
    p{
    color: white;
    font-size: 40px;
    }
    table{
      color: white;
      margin-top: 5%;
      font-size: 20px;
      .line{
        text-align: right;
        padding-right: 25px;
      }
    }
  }
}
@media screen and (max-width: 764px){
  .title{
    width: 95%;
    height: 70vh;
    background: black;/* fallback for old browsers */
    #profile{
      p{
      font-size: 30px;
      }
      table{
        margin-top: 5%;
        font-size: 15px;
      }
    }
  }
}
</style>

<script>
export default {
}
</script>
