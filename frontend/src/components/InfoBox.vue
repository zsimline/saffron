<!-- 视频信息盒组件 -->

<template>
  <div class="info-box row">
    <!-- 视频图片展示 -->
    <div class="info-box-img col-sm-4 col-md-2 col-lg-2">
      <a 
        v-bind:style="{ backgroundImage:
        handleBackgroudImage(videoInfo.imgaddr)}">
      </a>
    </div>

    <!-- 只在小型/中型设备上显示 -->
    <div class="info-box-detail col-sm-8 col-md-10 hidden-lg">
      <h2>{{ videoInfo.name }}</h2>
      <div>
        <span class="info-tip">导演：</span>
        <span class="info-content">
         <router-link
            v-for="director in splitString(videoInfo.director)" 
            v-bind:key="director.key"
            v-bind:to="`/find/bydirector/${director}`">{{ director }}
          </router-link>
        </span>
      </div>
      <div>
        <span class="info-tip">主演：</span>
        <span class="info-content">
         <router-link
            v-for="actor in splitString(videoInfo.actors)" 
            v-bind:key="actor.key"
            v-bind:to="`/find/byactor/${actor}`">{{ actor }}
          </router-link>
        </span>
      </div>
      <div>
        <span class="info-tip">分类：</span>
        <span class="info-content">
          <a href>{{ videoInfo.type }} | </a>
          <a href>{{ videoInfo.area }} | </a>
          <a href>{{ videoInfo.year }}</a>
        </span>
      </div>
    </div>
    
    <!-- 视频信息详情 -->
    <div class="info-box-detail col-sm-12 col-md-12 col-lg-10">
      <!-- 名字 -->
      <h2 class="hidden-sm hidden-md">{{ videoInfo.name }}</h2>
      <!-- 导演 -->
      <div class="hidden-sm hidden-md">
        <span class="info-tip">导演：</span>
        <span class="info-content">
          <router-link
            v-for="director in splitString(videoInfo.director)" 
            v-bind:key="director.key"
            v-bind:to="`/find/bydirector/${director}`">{{ director }}
          </router-link>
        </span>
      </div>
      <!-- 演员 -->
      <div class="hidden-sm hidden-md">
        <span class="info-tip">主演：</span>
        <span class="info-content">
         <router-link
            v-for="actor in splitString(videoInfo.actors)" 
            v-bind:key="actor.key"
            v-bind:to="`/find/byactor/${actor}`">{{ actor }}
          </router-link>
        </span>
      </div>
      <!-- 视频源信息 -->
      <div class="row hidden-sm hidden-md">
        <!-- 视频类型 -->
        <div class="col-sm-4 col-md-3 col-lg-2">
          <span class="info-tip">类型：</span>
          <span class="info-content">
            <a href>{{ videoInfo.type }}</a>
          </span>
        </div>
        <!-- 视频年代 -->
        <div class="col-sm-4 col-md-4 col-lg-2">
          <span class="info-tip">年代：</span>
          <span class="info-content">
            <a href>{{ videoInfo.year }}</a>
          </span>
        </div>
        <!-- 视频地区 -->
        <div class="col-sm-4 col-md-4 col-lg-2">
          <span class="info-tip">地区：</span>
          <span class="info-content">
            <a href>{{ videoInfo.area }}</a>
          </span>
        </div>
        <!-- 视频语言 -->
        <div class="col-sm-4 col-md-4 col-lg-2">
          <span class="info-tip">语言：</span>
          <span class="info-content">{{ videoInfo.lang }}</span>
        </div>
        <!-- 视频总播放量 -->
        <div class="col-sm-4 col-md-4 col-lg-2">
          <span class="info-tip">总播放量：</span>
          <span class="info-content">{{ videoInfo.volume }}</span>
        </div>
      </div>

      <!-- 视频简介 -->
      <div class="row summary hidden-sm">
        <div class="col-sm-11 col-md-11 col-lg-11">
          <span class="info-tip">简介：</span>
          <span class="info-content" 
                v-bind:class="{wrap: showSummaryDetaile}">{{ videoInfo.summary }}
          </span>
        </div>
        <i class="fa fa-angle-down col-sm-1 col-md-1 col-lg-1"
           title="详情" v-on:click="switchShowSummaryDetaile">
        </i>
      </div>

      <!-- 更新日期 -->
      <div class="row hidden-sm hidden-md">
        <div class="col-sm-12 col-md-12 col-lg-3">
          <span class="info-tip">更新日期：</span>
          <span class="info-content">{{ videoInfo.update | formatDate }}</span>
        </div>
      </div>

      <!-- 按钮组 -->
      <div class="row">
        <button class="btn btn-play" v-on:click="playImmediately">
          <i class="fa fa-play"></i>
          <span>立即播放</span>
        </button>
        <button class="btn btn-download">
          <i class="fa fa-download" aria-hidden="true"></i>
          <span>下载</span>
        </button>
        <button class="btn btn-collect">
          <i class="fa fa-star"></i>
          <span>收藏</span>
        </button>
        <button class="btn btn-score hidden-sm hidden-md" v-on:click="handleLove">
          <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
          <span>顶({{ videoInfo.love }})</span>
        </button>
        <button class="btn btn-score hidden-sm hidden-md" v-on:click="handleHate">
          <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
          <span>踩({{ videoInfo.hate }})</span>
        </button>
        <button class="btn btn-share" v-on:click="openShareModal">
          <i class="fa fa-share-alt" aria-hidden="true"></i>
          <span>分享</span>
        </button>
      </div>
    </div>

    <!-- 分享模态框 -->
    <Modal ref="shareModal"
           v-bind:modalTip="modalTip">
      <Share
        v-bind:name="videoInfo.name"
        v-bind:href="href"
        v-bind:summary="videoInfo.summary"
        v-bind:imgaddr="videoInfo.imgaddr"
      ></Share>
    </Modal>
  </div>
</template>

<script>
import axios from 'axios'
import Share from "@/components/Share.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: 'InfoBox',
  
  props: {
    videoInfo: Object
  },

  data() {
    return {
      href: 'https://zizaixian.top/info/movie/18724/',
      modalTip: "喜欢就分享给好友吧",
      showSummaryDetaile: false,
      hasLoved: false,
      hasHated: false,
    };
  },

  filters: {
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    }
  },

  methods: {
    openShareModal() {
      this.$refs.shareModal.openModal();
    },
    
    switchShowSummaryDetaile() {
      this.showSummaryDetaile = !this.showSummaryDetaile;
    },

    splitString(str) {
      return str.split(',').map(value => {return value + ' '})
    },

    handleBackgroudImage(imgaddr) {
      return `url(http://zizaixian.top${imgaddr}),
              url(http://zizaixian.top/img/sys/404/bg404.gif)`
    },

    // 立即播放视频
    playImmediately() {
      let i = 1;
      for(; i <= 6; i++) {
        if (this.videoInfo[`tatal${i}`] !== 0) break;
      }

      this.$router.push({ 
        name: 'play',
        params: {
          vid: this.videoInfo.id,
          addr: i,
          episode: 1,
        }
      })
    },

    // 处理点赞
    handleLove() {
      if (this.hasLoved) {
        this.$message('warning', '不可重复点赞');
        return ;
      }
      axios.post(`/v2/util/love`, {vid: this.videoInfo.id})
        .then(response => {
          if (response.data.code === 0) {
            this.$message('success', '点赞成功');
            ++this.videoInfo.love;
            this.hasLoved = true;
          } else {
            this.$message('error', '点赞失败');
          }
        })
        .catch(err => {
          // console.log(err);
        })
    },

    // 处理吐糟
    handleHate() {
      if (this.hasHated) {
        this.$message('warning', '不可重复吐槽');
        return ;
      }
      axios.post(`/v2/util/hate`, {vid: this.videoInfo.id})
        .then(response => {
          if (response.data.code === 0) {
            this.$message('success', '吐槽成功');
            ++this.videoInfo.hate;
            this.hasHated = true;
          } else {
            this.$message('error', '吐槽失败');
          }
        })
        .catch(err => {
          // console.log(err);
        })
    }
  },

  components: {
    Share,
    Modal,
  }
};
</script>

<style scoped>
.info-box {
  width: 100%;
  padding: 0rem;
  box-sizing: border-box;
  background: linear-gradient(
    to bottom, 
    var(--nav-color),
    var(--nav-color), 2.5rem,
    var(--nav-color), 2.5rem,
    #ffffff);
}
@media (max-width: 1119px) {
  .info-box {
    background: linear-gradient(
      to bottom, 
      var(--nav-color),
      var(--nav-color), 2.5rem,
      var(--nav-color), 2.5rem,
      #ffffff);
  }
}

/* 左侧侧视频图片 */
.info-box-img a {
  display: block;
  width: 100%;
  height: 0px;
  padding-bottom: 140%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

/* 右侧视频信息 */
.info-box-detail {
  overflow: hidden;
  padding: 0rem 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media (max-width: 1119px) {
  .info-box-detail {
    padding: 0rem;
  }
  .info-box-detail.hidden-lg {
    padding: 0rem 0.5rem;
  }
}

.info-box-detail h2 {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0.6rem 0rem;
}

.info-box-detail > div {
  padding: 0.3rem 0rem;
}

@media (max-width: 1119px) {
  .info-box-detail > div {
    padding: 0.1rem 0rem;
  }
}

.summary > div {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.wrap {
  white-space: normal;
}

.summary > i {
  color: #444;
  font-size: 0.8rem;
  line-height: 1.2rem;
  cursor: pointer;
}
.summary > i:hover {
  color: var(--sub-color);
}

.info-tip {
  font-size: 0.8rem;
  color: #666;
}

.info-content,
.info-content a {
  font-size: 0.8rem;
  color: rgb(51, 51, 51);
}

.info-content a:hover {
  color: #f50000;
  text-decoration: underline;
}
</style>