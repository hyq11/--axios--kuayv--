<template>
    <div class="login">
        <h1>人机对话</h1>
        <div class="same">
            <div>
                <span class="hawcons-icon-6-cloud-moon-rain"></span>
            </div>
            <div>
                <input type="text" placeholder="username" v-model="text">
            </div>
        </div>
        <div class="same">
           <div>
                <span class="hawcons-icon-75-document-file-key"></span>
           </div>
           <div>
               <input type="pwd" placeholder="password" v-model="pwd">
           </div>
        </div> 
        <button @click="set" class="dl">登录</button>
        <p class="or">or</p>
        <button @click="reg" class="reg">注册</button>
    </div>
</template>

<script>
import { login } from "../../api/api";
import { mapState, mapMutations } from "vuex";
import qs from "qs";
export default {
  data() {
    return {
      text: "",
      pwd: ""
    };
  },
  computed: {
    ...mapState(["token"])
  },
  methods: {
    async set() {
      // 这里向后台传送数据为json格式
      let list = {
        name: this.text,
        pwd: this.pwd
      };
      if (this.text == "" || this.pwd == "") {
        return;
      } else {
        let res = await login(list);
        if (!res) {
          console.log("网络异常");
        } else if (res.status === 200 && res.data!="") {
          this.changToken("56134753123"); // 这里面设置token值
          this.$router.push(`/#`);
        }
        console.log(res);
        console.log(res.data);
      }
    },
    reg(){console.log(1)},
    // set(){
    //     this.$http.get('/api/denglu/a.php').then((res)=>{
    //         console.log(res);
    //     })
    // }
    ...mapMutations(["changToken"])
  }
};
</script>

<style lang="less" scoped>
@rem: 75rem;
.login {
  height: 100%;
  width: 100%;
  background: -webkit-radial-gradient(50% 30%, circle, #513f71, #22122d);
}
.login:before {
  content: "";
  display: table;
}
h1 {
  margin: 194 / @rem 0 134 / @rem;
  text-align: center;
  color: white;
  font-size: 60 / @rem;
}
.same{
    width:635/@rem;
    height:111/@rem;
    background: #2e1e43;
    margin:0 auto 16/@rem;
    display:flex;
    display: -webkit-flex;
    border-radius: 12/@rem;
    box-shadow:0 -3px 9px 1px #22122d
}
.same>div:first-child{
    width:147/@rem;
    text-align: center;
    line-height:140/@rem;
}
.same>div:nth-child(2){
    flex:1;
}
.same>div span{
    font-size:46/@rem;
    color:white;
}
.same>div:nth-child(2)>input{
    border:none;
    background:#2e1e43;
    height:100%;
    color:white;
    caret-color:white;        // 改变光标的颜色
    font-size:30/@rem;

}
button{
    display:block;
    width:616/@rem;
    height:115/@rem;
    border:none;
    border-radius: 14/@rem;
    font-size:46/@rem;
    margin:0 auto;
    color:white;
}
button.dl{
    background:#1fad73;
    margin:156/@rem auto 0;
}
button.reg{
    background:#385688;
}
.or{
    text-align: center;
    height:71/@rem;
    line-height:71/@rem;
}
</style>
