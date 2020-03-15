<template>
  <div id="app">
    <router-view />
    <p><img src="./assets/logo.png" /></p>
    <p>
      <a-button @click="handle" type="primary">
        {{ $t("message.title") }}
        {{ $t("message.content") }}
        {{ $t("message.configTheme") }}
        {{ $t("message.configAjax") }}
        {{ $t("message.vuex") }}
      </a-button>
    </p>
    <p>当前值{{ count }}</p>
    <p>
      <button @click="add">+</button>
      <button @click="js">-</button>
    </p>
    <a-locale-provider :locale="locale">
      <a-pagination
        showSizeChanger
        @showSizeChange="onShowSizeChange"
        :defaultCurrent="3"
        :total="500"
      />
    </a-locale-provider>
  </div>
</template>

<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import cn from "ant-design-vue/lib/locale-provider/en_US";
import { mapState, mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {
      pageSize: 20,
      current: 4,
      locale: zhCN,
      zhCN,
      cn
    };
  },

  computed: {
    ...mapState(["count"])
  },
  methods: {
    handle() {
      if (localStorage.lang == "zh") {
        this.locale = this.cn;
        localStorage.setItem("lang", "en");
        this.$i18n.locale = "en";
      } else {
        this.locale = this.zhCN;
        localStorage.setItem("lang", "zh");
        this.$i18n.locale = "zh";
      }
    },
    onShowSizeChange(current, pageSize) {
      console.log(current, pageSize);
    },
    ...mapActions(["add", "js"])
  },
  created() {
    if (localStorage.lang == "en") {
      this.locale = this.cn;
    } else {
      this.locale = this.zhCN;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
