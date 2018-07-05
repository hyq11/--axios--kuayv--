<template>
    <div>  
        <div class="bar">进入智能对话</div>
    </div>
</template>


<script>
    export default {

    }
</script>


<style scoped lang="less">
 @rem:75rem;
.font-dpr(@rem){
  font-size:@font-size;
  [data-dpr='2'] & {
    font-size:@font-size*2;
  }
  [data-dpr='3'] & {
    font-size:@font-size*3;
  }
}
.bar{
    height:72/@rem;
    background:skyblue;
    color:white;
    text-indent:60/@rem;
    line-height:72/@rem;
    font-size:30/@rem;
}
</style>