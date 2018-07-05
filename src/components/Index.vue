<template>
  <div class="firstpage">
    <!-- TopBar作为共同的组建放在顶部 -->
    <TopBar class="top"></TopBar>
    <div class="cont">
        <div class="list flex" @click="enterDialog()">
          <div class="left flex" >
              <div>
                <span class="hawcons-icon-23-one-finger-double-tap"></span>
              </div>
              <div class="content">
                <p>我是小智</p>
              </div>
          </div>
          <div class="right flex">
            <p>{{dialog[dialog.length-1].time}}</p>
            <p class="num">{{dialog.length}}</p>
          </div>
        </div>
        <div v-html="item">{{item}}</div>
        <div v-text="item">{{item}}使用的v-text不能将标签过滤掉</div>
        <div v-cloak>{{item}}</div>
    </div>
  </div>
</template>

<script>
import TopBar from "./TopBar/TopBar";
import { mapState } from "vuex";
export default {
  data() {
    return {
      item:'<p>不知道怎么用的</p>',
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    TopBar
  },
  computed: {
    ...mapState(["dialog"])
  },
  methods: {
    enterDialog() {
      this.$router.push(`/dialog`);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@rem: 75rem;
// .font-dpr(@font-size) {
//   font-size: @font-size;
//   [data-dpr="2"] & {
//     font-size: @font-size*2;
//   }
//   [data-dpr="3"] & {
//     font-size: @font-size*3;
//   }
// }
.firstpage {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.firstpage > div.cont {
  position: absolute;
  top: 72 / @rem;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: auto;
}
.top {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
.flex {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
}
.list {
  height: 72 / @rem;
  border-bottom: 1 / @rem solid #ccc;
  background: rgb(246, 212, 218);
}
.left {
  align-items: center;
}

.right {
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.num {
  width: 40 / @rem;
  height: 40 / @rem;
  background: #0a0;
  border-radius: 100%;
  text-align: center;
  line-height: 40 / @rem;
  color: white;
  margin-right: 10 / @rem;
}
.left span {
  font-size: 50 / @rem;
  color: orange;
}
.left > div:first-child {
  background: white;
  border-radius: 100%;
  margin: 0 20 / @rem;
}
.content {
  font-size: 30 / @rem;
}
</style>
