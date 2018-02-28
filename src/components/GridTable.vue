<template>
<div style="width:100%;height:100%;border:1px" >
  <div style="width:100%;height:10%">
<el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="审批人">
    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
  </el-form-item>
  <el-form-item label="活动区域">
    <el-select v-model="formInline.region" placeholder="活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
</el-form>
</div>
<div style="width:100%;height:85%">
       <el-table   :data="tableData"  border height="100%"  :default-sort = "{prop: 'date', order: 'descending'}">
        <el-table-column class="grid-table" sortable prop="date" label="日期" width="140" >
        </el-table-column>
        <el-table-column class="grid-table" prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column  class="grid-table" prop="address" label="地址">
        </el-table-column>
         <el-table-column fixed="right"  label="操作"  width="150">
           <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small"> 移除</el-button>
          </template>
    </el-table-column>
      </el-table>
</div>
<div style="width:100%;height:5%">
 <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
</el-pagination>
</div>

</div>

</template>

<script>
export default {
  name: 'GridTable',
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item),
      currentPage: 1,
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    handleClick (row) {
      console.log(row)
    },
    deleteRow (index, rows) {
      rows.splice(index, 1)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }

  }
}
</script>
<style  scoped>
.grid-table {
  height: 20px;
}
</style>
