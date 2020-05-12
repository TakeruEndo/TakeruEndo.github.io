<template>
  <div class="home">
    <Title></Title>
    <Account></Account>
    <Skill></Skill>
    <Article></Article>
    <Exp></Exp>
    <Work></Work>
  </div>
</template>

<script>
import Skill from '../components/skill.vue'
import Account from '../components/account.vue'
import Article from '../components/article.vue'
import Exp from '../components/experience.vue'
import Title from '../components/title.vue'
import Work from '../components/work.vue'

export default {
  components: {
    Skill,
    Account,
    Article,
    Title,
    Exp,
    Work
  }
}
</script>

<style lang="scss">
.home{
  background-color: #eee;
}
*{
  font-family: 游ゴシック体, 'Yu Gothic', YuGothic, 'ヒラギノ角ゴシック Pro', 'Hiragino Kaku Gothic Pro', メイリオ, Meiryo, Osaka, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
}
@media screen and (min-width: 768px){
  body{
    min-width: 1200px;
    .widthSet{
      width: 70%;
      margin-left: 15%;
    }
  }
}
@media screen and (max-width: 769px){
  body{
    min-width: none;
  }
}
</style>
