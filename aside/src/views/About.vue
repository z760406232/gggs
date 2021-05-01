<template>
  <div class="about">
    <div class="top"></div>
    <div
      class="aside"
      @click="close"
      :class="current == false ? 'activeitem' : ''"
    >
      <div class="tollge">
        <div class="icon">
          <img src="../assets/img/1.png" alt="" />
        </div>
      </div>
      <div class="tableft" :class="current == false ? 'activeitem' : ''">
        <ul
          :class="currentId == index ? 'isShow' : 'hidden'"
          v-for="(item, index) in lists"
          :key="index"
        >
          <li
            :class="currentID2 == index ? 'active1' : ' '"
            v-for="(itemc, index) in item.tabchild"
            :key="itemc.id"
            @click="handleChild(index)"
          >
            <div>
              <div class="img">
                <img src="../assets/img/2.png" alt="" />
              </div>
              {{ itemc.tagname }}
            </div>
            <div class="imgicon">
              <img src="../assets/img/4.png" alt="" />
            </div>
          </li>
        </ul>
      </div>
      <!-- tabcont -->
      <!--子级内容-->
      <div
        class="tabcont"
        :class="currentID2 == index ? 'isShow' : 'hidden'"
        v-for="(item, index) in lists"
        :key="index"
      >
        <div
          class="tabcontent"
          :id="index"
          :class="currentID2 == index ? 'isShow' : ''"
          v-for="(itemc, index) in item.tabchild"
          :key="itemc.id"
        >
          {{ itemc.tabcont }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      current: false,
      currentId: 0,
      currentID2: 0,
      lists: [
        {
          id: 1,
          tabname: 'tab1',
          tabchild: [
            {
              id: 1,
              tagname: 'tab1'
            },
            {
              id: 2,
              tagname: 'tab1'
            },
            {
              id: 3,
              tagname: 'tab1'
            },
            {
              id: 4,
              tagname: 'tab1'
            },
            {
              id: 5,
              tagname: 'tab1'
            },
            {
              id: 6,
              tagname: 'tab1'
            },
            {
              id: 7,
              tagname: 'tab1'
            },
            {
              id: 8,
              tagname: 'tab1'
            },
            {
              id: 9,
              tagname: 'tab1'
            }
          ]
        }
      ]
    }
  },
  methods: {
    close () {
      this.current = !this.current
    },
    handle: function (index) {
      this.currentId = index
    },
    handleChild: function (index) {
      this.currentID2 = index
    }
  }
}
</script>

<style scoped>
.top {
  width: 100%;
  height: 80px;
  background-color: #397bc5;
}
.aside {
  width: 240px;
  height: 100%;
  float: left;
  background-color: #2c3e50;
}
.tollge .icon {
  margin-left: 10px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
}
.tollge .icon:hover {
  background-color: #fff;
}
.tollge img {
  width: 48px;
  height: 48px;
}
.tabul {
  width: 100%;
  margin: 0 auto;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
.tabul ul {
  list-style: none;
  background-color: rgb(57, 57, 219);
}
.tabul ul li {
  display: inline-block;
  padding: 0 20px;
  height: 65px;
  line-height: 65px;
  color: #ffffff;
  cursor: pointer;
}
.tabul ul li:hover {
  background-color: darkblue;
}
.active {
  background-color: darkblue;
}
.active1 {
  background-color: #2c3e50;
}
.tableft {
  width: 240px;
  position: fixed;
  bottom: 0;
  top: 128px;
  left: 0;
  background-color: #2c3e50;
  z-index: 99;
}
.tableft ul {
  list-style: none;
  overflow-y: auto;
  padding: 0;
}
.tableft ul li {
  height: 60px;
  line-height: 60px;
  text-align: left;
  padding: 0 15px;
  color: #ffffff;
}
.tableft ul li span {
  display: block;
}
.isShow {
  display: block;
}
.hidden {
  display: none;
}
li:hover {
  background-color: #ccc;
}
.img img {
  width: 30px;
  height: 30px;
  margin-right: 50px;
}
li div {
  float: left;
}
.img {
  height: 60px;
  line-height: 75px;
}
.imgicon {
  position: absolute;
  right: 10px;
}
.imgicon img {
  width: 16px;
  height: 16px;
}
.activeitem {
  width: 60px;
}
</style>
