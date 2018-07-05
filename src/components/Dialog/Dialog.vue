<template>
    <div class="detail">
        <div class="back">
            <img src="../../../static/img/返回.png" alt="" @click="back()">
            <img src="../../../static/img/2.jpg" alt="" class="head_pic">
        </div>
        <!-- 对话内容 -->
        <div class="talk" ref="talk">
            <div class="context" ref="con">
                <div class="wrapp" v-for="(item,index) in dialog" :key="index">
                    <div class="robot" v-show="item.role==1">
                        <img src="../../../static/img/2.jpg" alt="" class="pic" style="margin:0 10px;">
                        <div>
                          <p>{{item.msg}}</p>
                          <a :href="item.detailurl" v-for="(item,key) in item.list" :key="key" :style="objStyle" class="link">{{item.article}}</a>
                        </div>
                    </div>
                    <div class="user" v-show="item.role==2">
                        <span class="hawcons-icon-14-trophy-one"></span>
                        <div><p>{{item.msg}}</p></div>  
                    </div>
                </div>
            </div>
        </div>
        <!-- 发送对话 -->
        <div class="add_msg">
            <input type="text" v-model="value" placeholder="给出您的疑问..." @keyup.enter="addDialog()">
            <img src="../../../static/img/回车.png" alt=""  @click="addDialog()">
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { getRebotContent } from "../../api/api";
export default {
  data() {
    return {
      value: "",
      dialogData: [],
      objStyle:{
        "display":'inline-block',
        'color':"#333",
        'text-decoration':'underline'
      }
    };
  },
  computed: {
    ...mapState(["dialog"])
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    addDialog() {
      let tm = new Date();
      let hour = tm.getHours();
      let min = tm.getMinutes();
      let time = hour + ":" + min;
      let news = {
        msg: this.value,
        role: 2,
        time: time
      };
      this.add(news); // 将输入信息插入到页面上
      getRebotContent({
        key: "266b2f27361846ac86e484f1685fdee6",
        userid: "1234",
        info: this.value
      }).then(res => {
        console.log(res);
        let robotNew = {
          msg: res.data.text,
          role: 1,
          time: time,
          list:res.data.list
        };
          this.add(robotNew);     // 获取到的答案放进数组中
      });
      this.value = "";
      setTimeout(function() {
        document.querySelector(".talk").scrollTop = document.querySelector(".context").clientHeight + 800;
      }, 500);
    },
    ...mapMutations(["add"])
  },
  mounted() {
    this.$refs.talk.scrollTop = this.$refs.con.offsetHeight;
  }
};
</script>

<style scoped lang="less">
@rem: 75rem;
.font-dpr(@font-size) {
  font-size: @font-size;
  [data-dpr="2"] & {
    font-size: @font-size*2;
  }
  [data-dpr="3"] & {
    font-size: @font-size*3;
  }
}
.detail {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 72/@rem;
  background: skyblue;
  display: flex;
  display:-webkit-flex;
  align-items:center;
}
.back > img {
  width: 56/@rem;
  height: 56/@rem;
}
.add_msg {
  width: 100%;
  position: absolute;
  height: 72/@rem;
  bottom: 72/@rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
}
.add_msg > input {
  flex: 1;
  height: 50/@rem;
  border: 1px solid #333;
  border-radius: 18px;
  padding-left: 1em;
  margin: 0 14/@rem;
}
.add_msg > img {
  width: 72/@rem;
  height: 72/@rem;
  border: 1/@rem solid #ccc;
  border-top:none;
}
.talk {
  position: absolute;
  top: 72/@rem;
  left: 0;
  right: 0;
  bottom: 144/@rem;
  overflow: auto;
}
.wrapp > div {
  padding: 20px 0;
  color: white;
}
.robot {
  display: flex;
  width: 100%;
}
.robot > div {
  background: burlywood;
  border-radius: 18px;
  line-height: 56/@rem;
  padding: 0 10px;
  margin-right: 10px;
}
.robot > div p{
  font-size:30/@rem;
}
.pic {
  width: 56/@rem;
  height: 56/@rem;
  border-radius: 50%;
}
.user {
  display: flex;
  flex-direction: row-reverse;
}
.user > img {
  margin: 0 10px;
}
.user > div {
  background: #0a0;
  line-height: 56/@rem;
  border-radius: 18px;
  margin-left: 10px;
}
.user > div > p {
  padding: 0 10px;
  word-break: break-all;
  font-size:30/@rem;
}
.user>span{
  font-size:60/@rem;
  color:rgba(240, 96, 216, 0.924);
}
.link{
  font-size:35/@rem;
}
</style>
