<template>
    <div id="users">
        <multifunction-table>
            <el-form slot="newForm" :model="form">
                <el-form-item label="活动名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </multifunction-table>
    </div>
</template>

<script>
import MultifunctionTable from '../../components/multifunctionTable'

export default {
    name: "users",
      components: {
    MultifunctionTable
  },
    data: function data() {
        return {
                form: {
      name: '',
      region: ''
    },
    formLabelWidth: '120px',
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
