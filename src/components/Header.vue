<template>
  <header>
    <nav class="">
      <ul>
        <li id="home"><a href="#home">Home</a></li>
        <li><a href="#profile">Profile</a></li>
        <li><a href="#article">Article</a></li>
        <li><a href="/paper-survey">TechBlog</a></li>
        <li><a href="#skill">Skill</a></li>
        <li><a href="#work">Work</a></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header{
  nav{
    margin-left: 15%;
    margin-right: 5%;
    ul{
      list-style-type: none;
      display: inline-flex;
      width: 50%;
      margin-top: 20px;
      float: right;
      a{
        color: white;
        text-decoration: none;
      }
      li{
        width: 25%;
      }
    }
  }
}
@media screen and (max-width: 764px){
  header{
    nav{
      margin-left: 5%;
      ul{
        list-style-type: none;
        display: inline-flex;
        width: 100%;
        margin-top: 20px;
        float: right;
        a{
          color: white;
          text-decoration: none;
        }
        li{
          width: 25%;
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: 'Header'
}
</script>
