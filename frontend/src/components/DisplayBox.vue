<!-- 视频展示盒 -->

<template>
  <div class="display-box">
    <header>
      <div>
        <h5>{{ headerTip }}</h5>
        <a v-if="type === 'latest'" href>More ></a>
        <button
          v-if="type === 'random'" 
          class="btn btn-switch"
          v-on:click="flushRandom"
        >
          <i class="fa fa-random"></i>
          换一批
        </button>
      </div>
    </header>
    <div class="row">
      <DisplayBoxItem
        v-for="videoItem in videoItems"
        v-bind:key="videoItem.id"
        v-bind:id="videoItem.id"
        v-bind:name="videoItem.name"
        v-bind:imgaddr="videoItem.imgaddr"
        v-bind:actors="videoItem.actors"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DisplayBoxItem from '@/components/DisplayBoxItem'

export default {
  name: "DisplayBox",

  props: {
    type: String,
    headerTip: String,
    videoItems: {
      type: Array,
      default: function() {
        return []
      }
    }
  },

  components: {
    DisplayBoxItem
  },

  methods: {
    flushRandom() {
      this.$emit('flush-random');
    }
  }
};
</script>

<style>
.display-box .row {
  padding-bottom: 0.75rem;
  margin-bottom: 1.2rem;
}

.display-box header {
  padding: 0rem 0.375rem;
}

.display-box header div {
  border-bottom: solid 1px #CDCDCD;
  padding: 0.4rem 0rem;
}

.display-box header div h5 {
  margin: 0px;
  font-size: 1.2rem;
  color: #414141;
  font-weight: 400;
  line-height: 0.8rem;
  display: inline-block;
  user-select: none;
}

.display-box header div a {
  float: right;
  color:#555;
  font-size: 0.7rem;
  line-height: 1.2rem;
  margin-right: 0.5rem;
}
.display-box header div a:hover {
  color: var(--sub-color);
}
</style>