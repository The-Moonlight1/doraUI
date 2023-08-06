<script setup lang="ts">
  const entityIcons = [
    { name: 'check' },
    { name: 'star' },
    { name: 'delete' },
    { name: 'danxian' },
    { name: 'shuangxian' },
    { name: 'shangchuan' },
    { name: 'xiazai' },
    { name: 'shangsheng' },
    { name: 'xiajiang' },
    { name: 'zhuzhuangtu' },
    { name: 'zhexiantu' },
    { name: 'anquan' },
    { name: 'bianji_2' },
    { name: 'edit' },
    { name: 'bifen' },
    { name: 'biaoqian' },
    { name: 'biaoji' },
    { name: 'bianjiqi' },
    { name: 'caidan_2' },
    { name: 'dengji' },
    { name: 'cunkuan' },
    { name: 'biaoqing' },
    { name: 'caidan_1' },
    { name: 'dianzan' },
    { name: 'fasong' },
    { name: 'erweima' },
    { name: 'fenxiang' },
    { name: 'fuzhi' },
    { name: 'jiesuo' },
    { name: 'geren' },
    { name: 'jinggao1' },
    { name: 'jiangbei' },
    { name: 'hongbao' },
    { name: 'lajitong' },
    { name: 'kefu' },
    { name: 'liwu' },
    { name: 'paizhao' },
    { name: 'lianjie' },
    { name: 'qianbao' },
    { name: 'qiandao' },
    { name: 'qingli' },
    { name: 'quanping' },
    { name: 'riqi' },
    { name: 'qunzu' },
    { name: 'remen' },
    { name: 'shaixuan' },
    { name: 'shengyin' },
    { name: 'search' },
    { name: 'tupian' },
    { name: 'suoding' },
    { name: 'shoucang' },
    { name: 'tishi1' },
    { name: 'tongzhi-1' },
    { name: 'tongzhi' },
    { name: 'file_search' },
    { name: 'xihuan' },
    { name: 'xuanzhong' },
    { name: 'xiaoxi_2' },
    { name: 'xiaoxi_1' },
    { name: 'yidong' },
    { name: 'youjian' },
    { name: 'yuechi' },
    { name: 'zhiding' },
    { name: 'Home' },
    { name: 'zhizhen' },
    { name: 'ID' },
    { name: 'shang' },
    { name: 'xia' },
    { name: 'zuo' },
    { name: 'you' },
    { name: 'dingbu' },
    { name: 'dibu' },
    { name: 'shang1' },
    { name: 'xia1' },
    { name: 'you1' },
    { name: 'zuo1' },
    { name: 'zuo2' },
    { name: 'shangxia' },
    { name: 'you2' },
    { name: 'zuoyou' },
    { name: 'fangda' },
    { name: 'zhankai' },
    { name: 'suoxiao' },
    { name: 'shouqi' },
    { name: 'shang3' },
    { name: 'zuo4' },
    { name: 'you4' },
    { name: 'xia3' },
    { name: 'bohao' },
    { name: 'lanya' },
    { name: 'saoyisao' },
    { name: 'shipin' },
    { name: 'shouji' },
    { name: 'zhendong' },
    { name: 'WiFi' },
    { name: 'ios' },
    { name: 'anzhuo' },
    { name: 'guan' },
    { name: 'kai' },
    { name: 'guanbi' },
    { name: 'jianshao' },
    { name: 'jinggao' },
    { name: 'queren' },
    { name: 'kaishi' },
    { name: 'quxiao' },
    { name: 'zanting' },
    { name: 'tianjia' },
    { name: 'tuichu' },
    { name: 'tishi' },
    { name: 'zhengchang' },
    { name: 'dengdai' },
    { name: 'tuichu' },
    { name: 'tuichu' },
    { name: 'tuichu' },
    { name: 'tuichu' },
    { name: 'tuichu' }
  ];

  const copyIcon = (iconName: string) => {
    navigator.clipboard.writeText(iconName).then(
      () => {
        console.log('复制成功');
      },
      () => {
        console.log('复制失败');
      }
    );
  };
</script>

<template>
  <ul class="demo-icon-list">
    <li class="demo-icon-item" v-for="icon in entityIcons" :key="icon.name" @click="copyIcon(icon.name)">
      <DoraIcon :name="icon.name"></DoraIcon>
      <span>{{ icon.name }}</span>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    li {
      flex-basis: 110px;
      height: 90px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      border: 1px solid #eee;
      span {
        font-size: 16px;
        margin-top: 10px;
      }
    }
  }
  .vp-doc li + li {
    margin: 0;
  }
</style>
