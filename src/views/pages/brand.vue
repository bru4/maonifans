<template>
<div id="brand">
  <el-dialog title="新建品牌" :visible.sync="dialogNewForm">
    <el-form :model="form" :rules="rules" ref="form">
      <el-form-item label="品牌名称" prop="name">
        <el-input v-model="form.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="联系地址" prop="address">
        <el-input v-model="form.address" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="tel">
        <el-input v-model="form.tel" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

  <div style="margin-bottom: 20px">
    <el-button @click="toggleSelection(brands)">全选</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
    <el-button type="primary" icon="edit" @click="dialogNewForm = !dialogNewForm">添加</el-button>
  </div>

  <el-table ref="brandTable" :data="brands" :default-sort="{prop: 'id', order: 'descending'}" stripe border>
    <el-table-column type="selection">
    </el-table-column>
    <el-table-column sortable prop="id" label="编号">
    </el-table-column>
    <el-table-column sortable prop="name" label="品牌名称">
    </el-table-column>
    <el-table-column sortable prop="address" label="地址">
    </el-table-column>
    <el-table-column sortable prop="tel" label="联系电话">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template scope="scope">
        <el-button type="text" size="small" @click.native.prevent="editRow(scope.$index)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import '@/assets/styles/brand.scss'
import {
  mapActions,
  mapState
} from 'vuex'

export default {
  name: "brand",
  data: function data() {
    return {
      multipleSelection: [],
      dialogNewForm: false,
      form: {
        name: '',
        address: '',
        tel: ''
      },
      rules: {
        name: [{
          type: 'string',
          required: true,
          message: '请输入品牌名称',
          trigger: 'blur'
        }, ],
        address: [{
          type: 'string',
          required: true,
          message: '请输入联系地址',
          trigger: 'blur'
        }],
        tel: [{
          type: 'string',
          required: true,
          pattern: /^1(3|4|5|7|8)\d{9}$/,
          message: '请填写正确的手机号',
          trigger: 'blur'
        }]
      }
    }
  },
  computed: {
    ...mapState('brand', {
      brands: state => state.brands,
    })
  },
  mounted() {
    this.brandList()
  },
  methods: {
    ...mapActions('brand', [
      'brandList'
    ]),
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.brandTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.brandTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    submitForm(formName) {
      var _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch('brand/new', _this.form).then(() => {
            console.log(_this.brands);
            console.log('new_store', this.$store.state)
            this.dialogNewForm = false
          })
          console.log(_this.brands);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    editRow(index) {
      this.$store.dispatch('brand/delete', index)
    }
  }
}
</script>
