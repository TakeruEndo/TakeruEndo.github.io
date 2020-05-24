<template>
  <div id="article">
    <p class='under_black'>Article</p>
    <div class="">
      <div class="article-box">
        <a class ="Link" href="https://www.slideshare.net/TakeruEndo/predicting-the-flu-from-instagram"></a>
        <p class="type"><span class="survey">Survey</span></p>
        <p class="content">Predicting the Flu from Instagram</p>
      </div>
      <div class="article-box">
        <a class ="Link" href="https://qiita.com/Pingot/items/97259a10463743acb486"></a>
        <p class="type"><span class="qiita">Qiita</span></p>
        <p class="content">flutterで画像を加工する</p>
      </div>
      <div class="article-box">
        <a class ="Link" href="https://takeru-study.hatenablog.com/"></a>
        <p class="type"><span class="survey">Survey</span></p>
        <p class="content">Towards Real-Time Advancement of Underwater Visual Quality with GAN</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#article{
  margin-left: 5%;
  padding-top: 10vh;
  padding-left: 10vw;
  p{
  color: black;
  font-size: 40px;
  }
  .article-box{
    background-color: #aaa;
    padding: 20px;
    margin-top: 5vh;
    height: auto;
    border: 2px solid black;
    border-radius: 20px;
    width: 80%;
    position:relative;
    a{
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .type{
        font-size: 20px;
        .qiita{
          border: 1px solid black;
          background-color: #54C600;
          padding: 10px;
        }
        .survey{
          border: 1px solid black;
          background-color: rgb(26, 146, 226);
          padding: 10px;
        }
    }
    .content{
        font-size: 30px;
    }
  }
}
@media screen and (max-width: 764px){
    #article{
      p{
      font-size: 30px;
      }
      .article-box{
        margin-top: 5vh;
        border: 1px solid black;
        width: 85%;
        position:relative;
        a{
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .type{
            font-size: 15px;
          .qiita{
            padding: 3px;
          }
          .survey{
            padding: 3px;
          }
        }
        .content{
            font-size: 20px;
        }
      }
    }
}
</style>

<script>
export default {
}
</script>
