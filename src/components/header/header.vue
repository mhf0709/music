<template lang="html">
    <div>
  <div class="wrapper">
    <div class="intr">
        <div class="timer">
            <img src="../../public/icons/dengji.png" alt="">
            <span @click="intrshow">66分钟</span>
        </div>
        <div class="avatar" @click="intrshow">
            <img src="../../components/m-header/logo@2x.png" alt="">
            <!-- <transition name="fold">
                <div class="intr1" v-show="intrShow">
                    <h1>毛海锋</h1>
                    <h2>求职意向 :</h2>
                    <p>web前端工程师</p>
                    <h2>个人信息 ：</h2>
                    <p>杭州电子科技大学<br/><br/>软件工程(2018年毕业)<br/><br/>15907094249<br/><br/>916356730@qq.com</p>
                    <br/><br/>
                    <h2>技术栈 :</h2>
                    <h3>【前端】 :</h3>
                    <p class="get">HTML / HTML5 &nbsp&nbsp&nbsp CSS &nbsp&nbsp&nbsp SASS &nbsp&nbsp&nbsp AJAX</p>
                    <p class="get">JavaScript(ES6,ES5) &nbsp&nbsp&nbsp jQuery &nbsp&nbsp&nbsp Babel</p>
                    <p class="get">Vue.JS &nbsp&nbsp&nbsp 微信小程序</p>
                    <h3>【后端】 :</h3>
                    <p class="get1">Node.js (express)</p>
                    <h3>【自动化构建】 :</h3>
                    <p class="get1">Webpack</p>
                </div>
            </transition> -->
        </div>
        <div class="vip">
            <img src="../../public/icons/vvip.png" alt="">
            <span @click="intrshow">开通</span>
        </div>
    </div>
    <p class="username" @click="intrshow">{{username}}</p>
    <div class="intr-songs">
        <div class="t-intr-songs">
            <div class="t-intr-songs1">
                <router-link to="/total">
                <img src="../../public/icons/yinfu.png" alt="">
                <p>全部歌曲</p>
                </router-link> 
            </div>
            <div class="t-intr-songs1">
                <router-link to="/download">
                <img src="../../public/icons/download.png" alt="">
                <p>下载歌曲</p>
                </router-link>
            </div>
            <div class="t-intr-songs1">
                <router-link to="/musiclist">
                <img src="../../public/icons/zuijin.png" alt="">
                <p>最近播放</p>
                </router-link>
            </div>       
        </div>
        <div class="b-intr-songs">
            <div class="b-intr-songs1">
                <img src="../../public/icons/heart.png" alt="">
                <p>我喜欢</p>
                <small></small>
            </div>
            <div class="b-intr-songs1">
                <img src="../../public/icons/mv.png" alt="">
                <p>下载MV</p>
            </div>
            <div class="b-intr-songs1">
                <img src="../../public/icons/cd.png" alt="">
                <p>已购音乐</p>
            </div>
        </div>
    </div>
    <div class="blank"></div>
  </div>
  <div class="radio">
      <div class="radio1">
        <img src="../../public/icons/run.jpg" alt="">
        <!--<img src="" alt="">-->
        <div class="title">
        <p>个性电台</p>
        <small>听 Seve 的人也喜欢听这些歌曲</small>
        </div>
      </div>
      <div class="radio2">
        <img src="../../public/icons/run1.jpg" alt="">
        <!--<img src="" alt="">-->
        <div class="title2">
        <p>NIKE跑步电台</p>
        <small>新增万首中文跑步歌曲,点燃你的2017</small>
        </div>
      </div>
  </div>
  <div class="blank1"></div>
  <div class="songlist">
      <p class="title">我 的 歌 单</p>
  </div>
  <router-link to="/like">
  <div class="list" >
      <img src="../../public/icons/jay1.jpg" alt="">
      <div class="number">
          <p>2015年特别纪念</p>
          <small></small>
      </div>
  </div>
  </router-link>
  <div class="blank2">
      
  </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
    data () {
        return {
            intrShow : false,
            username : ''
        }
    },
    methods: {
      intrshow () {
         this.intrShow = !this.intrShow
      }
    }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  *{
    margin:0;
    padding:0;
 }
  .wrapper
        overflow-y: scroll;
  .intr
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  .intr-songs
        display:flex
  .timer, .vip{
    border: 1px solid #C7C7C7;
    padding: 0.1rem;
    border-radius: 20rem; 
    img{
        width: 0.8rem;
        height: 0.8rem;
    }
    span{
        font-size: 0.8rem;
        color: $color-text-l
    }
}
.avatar{
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-left: 3rem;
        margin-right: 3rem;
    }
}
.username{
    text-align: center;
    font-size: 1.5rem;
    margin-top: 0.5rem;
    color: $color-text-l   
}
.intr-songs{
        margin-top: -1.5rem;
        display: block;
    img{
        width: 2rem;
        height: 2rem;
    }
    p{
        margin :20px 0
        font-size: 1rem;
    }
    small{
        font-size: 1.6rem;
        color:#C7C7C7;
    }
}
.t-intr-songs{
    display: flex;
    text-align: center;
    margin-top: 3rem;
    a{
        text-decoration: none;
        color:#000000;
    }
    
}
.t-intr-songs1{    
    flex:1;
}
.t-intr-songs2{
    flex:1;
}
.t-intr-songs3{
    flex:1;
}

.b-intr-songs{
    display: flex;
    text-align: center;
    margin-top: 2rem;
     p{
        font-size: 1rem;
        color:$color-text-ll;
    }    
}
.b-intr-songs1{   
    flex:1;
}
.b-intr-songs2{
    flex:1;
}
.b-intr-songs3{
    flex:1;
}
.blank{
    width: 100%;
    height: 0.5rem;
    background-color: #EBEBEB;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
.radio1{
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 0.05rem solid #CACACA;
    padding-bottom: 0.25rem;
    .title{
        margin-left: 1rem;
        p{
            font-size: 1rem;
            font-weight: 400;
             color:$color-text-ll;
            // font-family:NSimSun;
        }
        small{
            font-size: 1rem;
            font-weight: 100;
            color:#CACACA;
        }
    }
    img{
        width: 8rem;
        height: 8rem;
    }
}
.radio2{
    margin-top: .5rem;
    display: flex;
    align-items: center;
    border-bottom: 0.05rem solid #CACACA;
    padding-bottom: 0.25rem;
    .title2{
        margin-left: 1rem;
        p{
            font-size: 1rem;
            font-weight: 400;
            color:$color-text-ll;
            // font-family:SSimSun;
        }
        small{
            font-size: 1rem;
            font-weight: 100;
            color:$color-text-d;
        }
    }
    img{
        width: 8rem;
        height: 8rem;
    }
}
.songlist{
    width: 100%;
    margin-top: 1rem;
    border-bottom: 0.05rem solid #CACACA;
    padding-bottom: 1rem;
    .title{
        text-align: center;
        font-size: 2rem;
        color:$color-text-ll;
    }
}
.blank1{
    width: 100%;
    height: 0.5rem;
    background-color: #EBEBEB;
    margin-bottom: 1rem;
}
.list{
    color: #000000;
    display: flex;
    align-items: center;
    img{
       width: 8rem;
       height: 8rem;
       vertical-align: middle;
    }
    .number{
        margin-left: 1rem;
        p{
            font-size: 1rem;
            font-weight: 400;
        }
        small{
            font-size: 1rem;
            font-weight: 100;
            color:#CACACA;
        }
    }
}
.blank2{
    width: 100%;
    height: 1rem;
    background-color: #EBEBEB;
}
</style>