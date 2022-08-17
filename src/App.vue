<style lang="scss">
//@import "@/assets/base.css";
//@import "vue-directive-primer-tooltip/index.scss";

#app {
  padding: 2rem;
  font-weight: normal;
  width: 100%;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }
}
.root {
  position: relative;
  padding: 2em 0;
  margin-top: 2em;
  margin-bottom: 2em;
  border-bottom: 1px solid #ccc;
}
.root::before {
  content: "";
  position: absolute;
  top: 0;
  left: 18px;
  height: 100%;
  width: 2px;
  background: #d7e4ed;
}

@media (min-width: 992px) {
  .bd-sidebar {
    position: -webkit-sticky;
    position: sticky;
    top: 5rem;
    display: block !important;
    height: calc(100vh - 6rem);
    padding-left: 0.25rem;
    margin-left: -0.25rem;
    overflow-y: auto;
  }
}

@media (min-width: 992px) {
  .bd-layout {
    display: grid;
    grid-template-areas: "sidebar main";
    grid-template-columns: 1fr 4fr;
    gap: 0.5rem;
  }
}

@media (max-width: 991.98px) {
  .bd-main {
    max-width: 760px;
    margin-inline: auto;
  }
}

@media (min-width: 768px) {
  .bd-main {
    display: grid;
    grid-template-areas: "intro" "content";
    grid-template-rows: auto auto 1fr;
    gap: inherit;
  }
}

@media (min-width: 992px) {
  .bd-main {
    grid-template-areas: "intro" "content";
    grid-template-rows: auto 1fr;
  }
}
</style>
<template>
  <div class="container">
    <div style="height: 100px">1</div>

    <button
      type="button"
      class="btn btn-secondary"
      v-tooltip.top="'Tooltip on top'"
    >
      Tooltip on top
    </button>
    <button
      type="button"
      class="btn btn-secondary"
      v-tooltip.right="'Tooltip on right'"
    >
      Tooltip on right
    </button>
    <button
      type="button"
      class="btn btn-secondary"
      v-tooltip.bottom="'Tooltip on bottom'"
    >
      Tooltip on bottom
    </button>
    <button
      type="button"
      class="btn btn-secondary"
      v-tooltip.left="'Tooltip on left'"
    >
      Tooltip on left
    </button>
    <button
      type="button"
      class="btn btn-secondary"
      v-tooltip.html="'<em>Tooltip</em> <u>with</u> <b>HTML</b>'"
    >
      Tooltip with HTML
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
};
</script>
