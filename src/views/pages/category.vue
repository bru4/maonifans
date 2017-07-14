<template>
  <div class="category" id="category">
    <el-tree v-if="categories" :data="categories" :props="defaultProps" node-key="id" default-expand-all :expand-on-click-node="false" :render-content="renderContent">
    </el-tree>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
let id = 1000;

export default {
  name: "category",

  data: function data() {
    return {
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    }
  },

  computed: {
    ...mapState({
      categories: state => state.category.categories
    })
  },

  mounted: function () {
    this.getCategories()
  },

  methods: {
    ...mapActions([
      'getCategories'
    ]),

    handleNodeClick(data) {
      console.log(data);
    },

    append(store, data) {
      store.append({ id: id++, name: 'testtest', children: [] }, data);
    },

    remove(store, data) {
      store.remove(data);
    },

    renderContent(h, { node, data, store }) {
      return (
        <span>
          <span>
            <span>{node.label}</span>
          </span>
          <span style="float: right; margin-right: 20px">
            <el-button size="mini" on-click={() => this.append(store, data)}>Append</el-button>
            <el-button size="mini" on-click={() => this.remove(store, data)}>Delete</el-button>
          </span>
        </span>
      );
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
