<template>
  <div id="profile">
    <h2>プロフィール</h2>
    <div class="box">
      <div class="parentBox"  style="background-color: #dde">
        <div class="profBox">
          <p>大学</p>
          <p>大学名：電気通信大学</p>
          <p>学科：情報通信工学</p>
          <p>学年：４年</p>
        </div>
      </div>
      <div class="parentBox" style="background-color: #acd">
        <div class="profBox">
          <p>研究テーマ</p>
          <p>GANのロボット工学への応用</p>
          <p>遺伝的アルゴリズム</p>
        </div>
      </div>
      <div class="parentBox" style="background-color: #aaa">
        <div class="profBox">
          <p>趣味</p>
          <p>スキューバダイビング</p>
          <p>水泳</p>
          <p>読書</p>
        </div>
      </div>
      <div class="parentBox" style="background-color: #aea">
        <div class="profBox">
          <p>経験</p>
          <p>2017,2018 水泳全国公出場</p>
          <p>(50Fr,400FR,800FR)</p>
          <p>2018~ 株式会社コノル</p>
          <p>(インターン)</p>
        </div>
      </div>
      <div class="parentBox" style="background-color: #adc">
        <div class="profBox">
          <p>GitHub</p>
          <a href="https://github.com/TakeruEndo"><img src="../assets/GitHub.png" alt="" class="github"></a>
        </div>
      </div>
      <div class="parentBox" style="background-color: #bfc">
        <div class="profBox">
          <p>はてなブログ</p>
          <p>主に論文のまとめを書く。</p>
          <a href="https://takeru-study.hatenablog.com/"><img src="../assets/hatena.svg" alt="" class="hatena"></a>
        </div>
      </div>
      <div class="parentBox" style="background-color: #acc">
        <div class="profBox">
          <p class="ss">Twitter</p>
          <p>ほとんど稼働していない…</p>
          <a href="https://twitter.com/tnbp66"><img src="../assets/Twitter.svg" alt="" class="twitter"></a>
        </div>
      </div>
      <div class="parentBox" style="background-color: #aee">
        <div class="profBox">
          <a href="https://www.kaggle.com/jooott"><p>kaggle</p></a>
          <p>メダルを取るために日々勉強中です</p>
        </div>
      </div>       
    </div>         
  </div>
</template>

<style lang="scss">
  #profile{
    h2{
      text-align: center;
      margin: 60px;
    }
    .box{
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .parentBox{
        width: 33.333333%;
        position: relative;
        .profBox{
          a{
            color: black;
            text-decoration: none;
          }
          text-align: center;
          margin: 30px;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          p:first-child{
            font-size: 35px;
          }
          .github{
            padding-top: 15%;
          }
          .hatena{
            width: 140px; height: auto;
          }
          .twitter{
            width: 170px; height: auto;
          }
        }
        .prof-head{
          font-size: 100px;
          font: bold;
        }
      }
      .parentBox:before{
        content:"";
        display: block;
        padding-top: 100%;
      }
    }
  }

  @media screen and (max-width: 764px){
    #profile{
      h2{
        text-align: center;
        margin: 40px;
      }
      .box{
        .parentBox{
          width: 50%;
          .profBox{
            p{
              font-size: 10px;
            }
            margin: 15%;
            p:first-child{
              font-size: 20px;
            }
            .github{
              padding-top: 23%;
              width: 60px; height: auto;
            }
            .hatena{
              padding: 0%;
              margin: 0%;
              width: 70px; height: auto;
            }
            .twitter{
              width: 80px; height: auto;
            }
          }
        }
      }
    }
  }
</style>

<script>
export default {
  name: 'Plofile'
}
</script>
