<template>
    <div class="multifunction-table" id="multifunctionTable">
        <div style="margin-bottom: 20px">
            <el-button @click="toggleSelection(tableData4)">全选</el-button>
            <el-button @click="toggleSelection()">清空选择</el-button>

            <!-- 新建 start -->
            <el-button type="primary" icon="plus" @click="dialogFormVisible = true">新建</el-button>
            <el-dialog size="small" title="新建" :visible.sync="dialogFormVisible">
                <slot name="newForm"></slot>
            </el-dialog>
            <!-- 新建 end -->

        </div>
        <el-table :data="tableData4" border style="width: 100%" max-height="200" ref="multipleTable" border tooltip-effect="dark" @selection-change="handleSelectionChange" :default-sort="{prop: 'date', order: 'descending'}">
            <el-table-column fixed type="selection" width="55">
            </el-table-column>
            <el-table-column prop="date" label="日期" width="150" sortable>
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120" sortable>
            </el-table-column>
            <el-table-column prop="province" label="省份" width="120" sortable>
            </el-table-column>
            <el-table-column prop="city" label="市区" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址" width="300">
            </el-table-column>
            <el-table-column prop="zip" label="邮编" width="120">
            </el-table-column>
            <el-table-column label="操作" width="200">
                <template scope="scope">
                    <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">
                        编辑
                    </el-button>

                    <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">
                        移除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
export default {
    name: 'multifunctionTable',

    data() {
        return {
            dialogFormVisible: false,
            tableData4: [{
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-04',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-01',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-08',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-06',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-08',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-06',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }]
        }
    },

    methods: {
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },

        handleSelectionChange(val) {
            this.multipleSelection = val;
        },

        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.multifunction-table {}
</style>
