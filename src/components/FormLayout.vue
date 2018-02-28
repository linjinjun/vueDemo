<template>
  <div style="width:100%;height:100%;">
      <div class="tool-bar">
           <el-button-group>
            <el-button   type="primary" round>保存</el-button>
            <el-button   type="primary" round>提交</el-button>
            <el-button   type="primary" round>计算</el-button>
           </el-button-group>
      </div>
      <div class="page-contents" >       
        <el-form :inline="true" :model="form" label-width="80px">
          <el-row>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试" ></el-input></el-form-item>          
            </el-col>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试"></el-input></el-form-item>          
            </el-col>
          </el-row>
            <el-row>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试" ></el-input></el-form-item>          
            </el-col>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试"></el-input></el-form-item>          
            </el-col>
          </el-row>
            <el-row>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试" ></el-input></el-form-item>          
            </el-col>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试"></el-input></el-form-item>          
            </el-col>
          </el-row>
            <el-row>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试" ></el-input></el-form-item>          
            </el-col>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试"></el-input></el-form-item>          
            </el-col>
          </el-row>
            <el-row>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试" ></el-input></el-form-item>          
            </el-col>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试"></el-input></el-form-item>          
            </el-col>
          </el-row>
            <el-row>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试" ></el-input></el-form-item>          
            </el-col>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试"></el-input></el-form-item>          
            </el-col>
          </el-row>
            <el-row>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试" ></el-input></el-form-item>          
            </el-col>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试"></el-input></el-form-item>          
            </el-col>
          </el-row>
            <el-row>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试" ></el-input></el-form-item>          
            </el-col>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试"></el-input></el-form-item>          
            </el-col>
          </el-row>
            <el-row>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试" ></el-input></el-form-item>          
            </el-col>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试"></el-input></el-form-item>          
            </el-col>
          </el-row>
            <el-row>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试" ></el-input></el-form-item>          
            </el-col>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试"></el-input></el-form-item>          
            </el-col>
          </el-row>
            <el-row>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试" ></el-input></el-form-item>          
            </el-col>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试"></el-input></el-form-item>          
            </el-col>
          </el-row>
            <el-row>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试" ></el-input></el-form-item>          
            </el-col>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试"></el-input></el-form-item>          
            </el-col>
          </el-row>
            <el-row>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试" ></el-input></el-form-item>          
            </el-col>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试"></el-input></el-form-item>          
            </el-col>
          </el-row>
            <el-row>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试" ></el-input></el-form-item>          
            </el-col>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试"></el-input></el-form-item>          
            </el-col>
          </el-row>
            <el-row>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试" ></el-input></el-form-item>          
            </el-col>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试"></el-input></el-form-item>          
            </el-col>
          </el-row>
            <el-row>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试" ></el-input></el-form-item>          
            </el-col>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试"></el-input></el-form-item>          
            </el-col>
          </el-row>
            <el-row>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试" ></el-input></el-form-item>          
            </el-col>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试"></el-input></el-form-item>          
            </el-col>
          </el-row>
            <el-row>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试" ></el-input></el-form-item>          
            </el-col>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试"></el-input></el-form-item>          
            </el-col>
          </el-row>
            <el-row>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试" ></el-input></el-form-item>          
            </el-col>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试"></el-input></el-form-item>          
            </el-col>
          </el-row>
            <el-row>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试" ></el-input></el-form-item>          
            </el-col>
            <el-col :span="10">
              <el-form-item label="测试"><el-input v-model="form.name" placeholder="测试"></el-input></el-form-item>          
            </el-col>
          </el-row>
        </el-form>
        
      </div>
  </div>
</template>

<script>
export default {
  name: 'FormLayout',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  }
}
</script>
<style scoped>
.el-row {
  margin-bottom: 0px;
}
.el-col {
  border-radius: 4px;
  background: #99a9bf;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-form-item{
  margin-bottom: 10px;
}
.tool-bar {
  height: 10%;
  max-height: 30px;
  padding-left: 20px;
}
.page-contents {
  height: 90%;
  overflow: auto;
}
</style>
