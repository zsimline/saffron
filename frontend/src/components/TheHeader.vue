<!-- 页面头部 -->

<template>
  <div id="the-header" class="row">
    <div id="logo" class="col-sm-12 col-md-6 col-lg-4">
      <router-link v-bind:to="`/`">自在仙</router-link>
      <span>浮云轻入鹤撩雾，青山深处自在仙</span>
    </div>
    <div id="search-box" class="hidden-sm col-md-6 col-lg-8">
      <input 
        name="search-content"
        type="text"
        placeholder="请输入您要搜索的内容..." 
        v-model="searchContent"
        v-on:keyup.enter="search"
      >
      <button 
        type="submit" 
        v-on:click="search"
      >搜索</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",

  data() {
    return {
      searchContent: '',
    }
  },

  methods: {
    search() {
      this.$router.push({ 
        name: 'find',
        params: {
          type: 'byname',
          content: this.searchContent
        }
      })
      .then(() => {
        this.searchContent = '';
      })
      .catch(err => {
        // console.log(err);
      });
    }
  }
}
</script>

<style scoped>
#the-header {
  height: 3.5rem;
  background-color: #34495E;
}

#logo a {
  color: white;
  font-size: 1.7rem;
  font-weight: 800;
  line-height: 3.5rem;
  margin: 0rem 0.8rem 0rem 1.2rem;
}

#logo span {
  color: #AAAAAA;
  user-select: none;
  font-size: 0.7rem;
  font-weight: 800;
}

#search-box {
  position: relative;
}

#search-box input {
  width: 50%;
  height: 2rem;
  outline: none;
  font-size: 0.6rem;
  padding-left: 0.5rem;
  float: right;
  margin-right: 5%;
  margin-top: 0.75rem;
  border: 2px solid var(--sub-color);
  border-radius: 5px;
  box-sizing: border-box;
}

#search-box button {
  width: 8%;
  height: 2rem;
  top: 0.75rem;
  right: 5%;
  position: absolute;
  color: white;
  font-weight: 800;
  float: right;
  outline: none;
  background: var(--sub-color);
  border: 2px solid var(--sub-color);
  border-radius: 0 5px 5px 0;
  box-sizing: border-box;
}

@media (min-width: 768px) and (max-width: 1119px) {
  #search-box button {
    width: 12%;
  }
}
</style>