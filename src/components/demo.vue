<template>
  <div>
    <div class="bar-tool" style="text-align:left;" >
         <span slot="footer" class="dialog-footer" >
           <el-button type="primary" size="mini" @click="saveAstCfgInfPo">保 存</el-button>
           <el-button type="primary" size="mini" @click="calculationAstCfgInfPo">试 算</el-button>
           <el-button type="primary" size="mini" @click="submitAstCfgInfPo">提 交</el-button>
           <el-button type="warning" size="mini" @click="resetAstCfgInfPo('astCfgInfPo')">重 置</el-button>
         </span>
      </div>
    <div class="page-contents" style="margin-top:20px;border:1px;">
      <div class="bar-tool">
        <el-form :model="astCfgInfPo"  ref="astCfgBsc"  :rules="astMessageValid"  label-width="200px" size="mini">
          <el-row >
            <el-col :span="10">
              <el-form-item label="理财产品账户名称：" prop="chmtpdAccnm" >
                <el-select v-model="tempchmtpdAccnm" prefix-icon="el-icon-search" filterable remote reserve-keyword placeholder="请输入关键词"
                            :remote-method="queryChmtpAccOption" :loading="loading" style="width: 200px;"  @change="queryAccnoNum" clearable >
                  <el-option v-for="item in chmtpdAccOption" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
                <el-button type="primary" @click="loadsaveForm">复制已保存交易</el-button>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="交易对手：" prop="cntrprtNm">
                <template>
                  <el-select v-model="tempcntrprtNm" prefix-icon="el-icon-search"
                             filterable remote reserve-keyword placeholder="请输入关键词"
                             :remote-method="queryCntprAccInfo" :loading="loading"  style="width: 200px;" @change="queryCntrprtAccnoNum" clearable>
                    <el-option v-for="item in cntprIdDescs" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row >
            <el-col :span="10">
              <el-form-item label="资金账户户名：" prop="thsinstFndAccnm" >
                <el-select v-model="astCfgInfPo.thsinstFndAccnm" placeholder="请选择" style="width: 200px;" @change="queryAccnobyfndAccno" >
                  <el-option v-for="item in thsinstFndAccnmOption" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="资金账户户名：" prop="cntrprtFndAccnm" >
                <el-select v-model="astCfgInfPo.cntrprtFndAccnm" placeholder="请选择" style="width: 200px;" @change="queryCntprAccnobyfndAccno" >
                  <el-option v-for="item in cntrprtFndAccnmOption" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row >
            <el-col :span="10">
              <el-form-item label="资金账户：" prop="thsinstFndAccno">
                <el-input v-model="astCfgInfPo.thsinstFndAccno" placeholder="资金账户" style="width: 200px;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="资金账户：" prop="cntrprtFndAccno">
                <el-input v-model="astCfgInfPo.cntrprtFndAccno" placeholder="资金账户" style="width: 200px;"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row >
            <el-col :span="10">
              <el-form-item label="资金开户行：" prop="thspdDepbnkNo">
                <el-input v-model="astCfgInfPo.thspdDepbnkNo" placeholder="资金开户行" style="width: 200px;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="资金开户行：" prop="cntrprtDepbnkNo">
                <el-input v-model="astCfgInfPo.cntrprtDepbnkNo" placeholder="资金开户行" style="width: 200px;"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row >
            <el-col :span="10">
              <el-form-item label="支付系统行号：" prop="thsinstPstbkNo">
                <el-input v-model="astCfgInfPo.thsinstPstbkNo" placeholder="支付系统行号" style="width: 200px;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="支付系统行号：" prop="cntrprtPstbkNo">
                <el-input v-model="astCfgInfPo.cntrprtPstbkNo" placeholder="支付系统行号" style="width: 200px;"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row >
            <el-col :span="10">
              <el-form-item label="托管账户户名：" prop="thspdTsAccnm">
                <el-input v-model="astCfgInfPo.thspdTsAccnm" placeholder="托管账户户名" style="width: 200px;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="托管账户户名：" prop="cntrprtTsAccnm">
                <el-input v-model="astCfgInfPo.cntrprtTsAccnm" placeholder="托管账户户名" style="width: 200px;"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row >
            <el-col :span="10">
              <el-form-item label="托管机构：" prop="thspdTsInstnm">
                <el-input v-model="astCfgInfPo.thspdTsInstnm" placeholder="托管机构" style="width: 200px;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="托管机构：" prop="cntrprtTsInstnm">
                <el-input v-model="astCfgInfPo.cntrprtTsInstnm" placeholder="托管机构" style="width: 200px;"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row >
            <el-col :span="10">
              <el-form-item label="托管账号：" prop="thspdTsAccno">
                <el-input v-model="astCfgInfPo.thspdTsAccno" placeholder="托管账号" style="width: 200px;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="托管账号：" prop="cntrprtTsAccno">
                <el-input v-model="astCfgInfPo.cntrprtTsAccno" placeholder="托管账号" style="width: 200px;"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>

      <page-title title="交易信息"/>
      <div class="bar-tool">
        <el-form :model="astCfgInfPo" ref="txnInf" :rules="txnMessageValid" label-width="200px" size="mini">
          <el-row>
            <el-col :span="10">
              <el-form-item label="会计分类：" prop="acgClcd">
                <el-select v-model="astCfgInfPo.acgClcd" placeholder="请选择" style="width: 200px;">
                  <el-option v-for="item in acgCLCdOption" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="关联批号：" prop="rltvBtchNo">
                <el-input v-model="astCfgInfPo.rltvBtchNo" placeholder="关联批号" style="width: 200px;"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item label="交易类型：" prop="txnTpcd">
                <el-select v-model="astCfgInfPo.txnTpcd" placeholder="请选择" style="width: 200px;">
                  <el-option label="普通资产转仓资产出" value="03"></el-option>
                  <el-option label="转管理人资产出" value="04"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="资产名称：" prop="astNm">
                <el-input v-model="astCfgInfPo.astNm" placeholder="资产名称" style="width: 200px;" :disabled="true" ></el-input>
                <el-button type="primary" @click="loadtransferForm">选择待转出资产</el-button>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item label="交易日：" prop="txnDay">
                <el-date-picker v-model="astCfgInfPo.txnDay" type="date" placeholder="交易日" style="width: 200px;">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="资产代码：" prop="astCd">
                <el-input v-model="astCfgInfPo.astCd" placeholder="资产代码" style="width: 200px;" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item label="净价：" prop="netprc">
                <el-input v-model="astCfgInfPo.netprc" placeholder="净价" style="width: 200px;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="结算日：" prop="setlDay">
                <el-date-picker v-model="astCfgInfPo.setlDay" type="date" placeholder="结算日" style="width: 200px;">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item label="全价：" prop="fullprc">
                <el-input v-model="astCfgInfPo.fullprc" placeholder="全价" style="width: 200px;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="数量或份额：" prop="lotOrNum">
                <el-input v-model="astCfgInfPo.lotOrNum" placeholder="数量或份额" style="width: 200px;"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item label="结算金额：" prop="setamt">
                <el-input v-model="astCfgInfPo.setamt" placeholder="结算金额" style="width: 200px;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="应收利息总额：" prop="recintTamt">
                <el-input v-model="astCfgInfPo.recintTamt" placeholder="应收利息总额" style="width: 200px;"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item label="预付费用：" prop="prpyEps">
                <el-input v-model="astCfgInfPo.prpyEps" placeholder="预付费用" style="width: 200px;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="费用是否计入成本：" prop="feeWthrInclCost">
                <el-select v-model="astCfgInfPo.feeWthrInclCost" placeholder="请选择" style="width: 200px;">
                  <el-option label="是" value="1"></el-option>
                  <el-option label="否" value="0"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item label="税金：" prop="tax">
                <el-input v-model="astCfgInfPo.tax" placeholder="税金" style="width: 200px;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="预收利息：" prop="itrvinav">
                <el-input v-model="astCfgInfPo.itrvinav" placeholder="预收利息" style="width: 200px;"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item label="到期收益率：" prop="expYldrto">
                <el-input v-model="astCfgInfPo.expYldrto" placeholder="到期收益率" style="width: 200px;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="手续费：" prop="handCrg">
                <el-input v-model="astCfgInfPo.handCrg" placeholder="手续费" style="width: 200px;"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item label="应付费用：" prop="pblEps">
                <el-input v-model="astCfgInfPo.pblEps" placeholder="应付费用" style="width: 200px;"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <page-title title="自动返售信息"/>
      <div class="bar-tool">
        <el-form :model="astCfgInfPo" ref="autoRsl" label-width="200px" size="mini">
          <el-row>
            <el-col :span="10">
              <el-form-item label="是否返售：" prop="wthrRsl">
                <template>
                  <el-radio-group v-model="wthrRsl" @change="showRsl" >
                    <el-radio :label="1">是</el-radio>
                    <el-radio :label="0">否</el-radio>
                  </el-radio-group>
                </template>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="返售日期：" prop="rslDt">
                <el-date-picker v-model="astCfgInfPo.rslDt" type="date" placeholder="返售日期" :disabled="showrsl" style="width: 200px;">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item label="净价：" prop="rslNetprc">
                <el-input v-model="astCfgInfPo.rslNetprc" placeholder="净价" :disabled="showrsl" style="width: 200px;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="全价：" prop="rslFullprc">
                <el-input v-model="astCfgInfPo.rslFullprc" placeholder="全价" :disabled="showrsl" style="width: 200px;"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item label="结算金额：" prop="rslSetamt">
                <el-input v-model="astCfgInfPo.rslSetamt" placeholder="结算金额" :disabled="showrsl" style="width: 200px;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="收益率：" prop="rslYldrto">
                <el-input v-model="astCfgInfPo.rslYldrto" placeholder="收益率" :disabled="showrsl" style="width: 200px;"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>

      <div class="bar-tool">
        <el-form :model="astCfgInfPo" ref="astCfgBsc" label-width="200px" size="mini">
          <el-row>
            <el-col :span="20">
              <el-form-item label="备注：" prop="rmrk">
                <el-input type="textarea" :rows="3" placeholder="备注" v-model="astCfgInfPo.rmrk"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
    <!--已保存交易列表查询页面-->
    <el-dialog title="查询条件"
               :visible.sync="saveDialogVisible"
               width="960px"
               :before-close="closeDialog"
    >
      <!--对话框内容-->
      <el-form :model="queryForm" ref="queryForm" label-width="100px" size="mini">

        <el-row>
          <el-col :span="8">
            <el-form-item label="理财产品账户名称" prop="chmtpdAccnm">
              <el-input v-model="queryForm.chmtpdAccnm" placeholder="请输入理财产品账户名称" style="width: 120px;"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="交易对手" prop="cntrprtNm">
              <el-input v-model="queryForm.cntrprtNm" placeholder="请输入交易对手" style="width: 120px;"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16">
            <el-form-item label="交易类型" prop="txnTpcd">
              <el-select v-model="queryForm.txnTpcd" placeholder="请选择" style="width: 120px;">
                <el-option label="所有" value=""></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>

      <el-row type="flex" justify="center">
        <el-button type="primary" size="mini">查 询</el-button>
        <el-button type="warning" size="mini" @click="resetAstForm('queryForm')">重 置</el-button>
      </el-row>

      <el-table ref="saveTable" :data="saveTableData" border stripe tooltip-effect="dark" style="width: 100%"
                @selection-change="getsaveSelection">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column prop="chmtpdAccnm" label="理财产品名称" width="100">
        </el-table-column>
        <el-table-column prop="cntrprtNm" label="交易对手名称" width="100">
        </el-table-column>
        <el-table-column prop="acgClcd" label="会计分类" width="100">
        </el-table-column>
        <el-table-column prop="txnTpcd" label="交易类型" width="100">
        </el-table-column>
        <el-table-column prop="astNm" label="资产名称" width="100">
        </el-table-column>
        <el-table-column prop="astCd" label="资产代码" width="100">
        </el-table-column>
        <el-table-column prop="txnDay" label="交易日" width="100">
        </el-table-column>
        <el-table-column prop="setlDay" label="结算日" width="100">
        </el-table-column>
        <el-table-column prop="lotOrNum" label="数量或份额" width="100">
        </el-table-column>
        <el-table-column prop="netprc" label="净价" width="100">
        </el-table-column>
        <el-table-column prop="fullprc" label="全价" width="100">
        </el-table-column>
        <el-table-column prop="recintTamt" label="应收利息总额" width="100">
        </el-table-column>
        <el-table-column prop="feeWthrInclCost" label="费用是否计入成本" width="100">
        </el-table-column>
        <el-table-column prop="pblEps" label="应付费用" width="100">
        </el-table-column>
        <el-table-column prop="setamt" label="结算金额" width="100">
        </el-table-column>
        <el-table-column prop="expYldrto" label="到期收益率" width="100">
        </el-table-column>
        <el-table-column prop="prpyEps" label="预付费用" width="100">
        </el-table-column>
        <el-table-column prop="tax" label="税金" width="100">
        </el-table-column>
        <el-table-column prop="handCrg" label="手续费" width="100">
        </el-table-column>
        <el-table-column prop="wthrRsl" label="是否返售" width="100">
        </el-table-column>
        <el-table-column prop="rslDt" label="返售日期" width="100">
        </el-table-column>
        <el-table-column prop="rslNetprc" label="净价" width="100">
        </el-table-column>
        <el-table-column prop="rslFullprc" label="全价" width="100">
        </el-table-column>
        <el-table-column prop="rslSetamt" label="结算金额" width="100">
        </el-table-column>
        <el-table-column prop="rslYldrto" label="收益率" width="100">
        </el-table-column>
        <el-table-column prop="rmrk" label="备注" width="100">
        </el-table-column>
        <el-table-column fixed="right" label="" width="160">
        </el-table-column>
      </el-table>
      <div class="bar-paging" style="margin-top: 5px">
        <div class="fr">
          <el-pagination
            @size-change="savehandleSizeChange"
            @current-change="savehandleCurrentChange"
            :current-page="queryForm.pageNum"
            :page-sizes="[20, 50, 100, 200]"
            :page-size="queryForm.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="savetotal">
          </el-pagination>
        </div>
      </div>
      <el-row type="flex" justify="center">
        <el-button type="primary" size="mini" >确 认</el-button>
      </el-row>
    </el-dialog>

    <!--待转出资产查询页面-->
    <el-dialog title="查询条件"
               :visible.sync="transferDialogVisible"
               width="960px"
               :before-close="closeDialog"
    >
      <!--对话框内容-->
      <el-form :model="queryForm" ref="queryForm" label-width="100px" size="mini">

        <el-row>
          <el-col :span="8">
            <el-form-item label="资产名称" prop="astNm">
              <el-input v-model="queryForm.astNm" placeholder="请输入资产名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="资产到期日" prop="astNm">
              <el-date-picker v-model="queryForm.rslDt" type="date" placeholder="请输入资产到期日" style="width: 200px;">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>

      <el-row type="flex" justify="center">
        <el-button type="primary" size ='mini'>查 询</el-button>
        <el-button type="warning" size ='mini' @click="resetAstForm('queryForm')">重 置</el-button>
      </el-row>

      <el-table ref="transferTable" :data="transferTableData" border stripe tooltip-effect="dark" style="width: 100%"
                @selection-change="gettransferSelection">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column prop="astCd" label="理财产品" width="100">
        </el-table-column>
        <el-table-column prop="astNm" label="资产名称" width="100">
        </el-table-column>
        <el-table-column prop="AstCgy" label="资产类别(大类)" width="100">
        </el-table-column>
        <el-table-column prop="AstCgySbdvsn" label="资产类别(中类)" width="100">
        </el-table-column>
        <el-table-column prop="exstPstns" label="资产收益率" width="100">
        </el-table-column>
        <el-table-column prop="exstPstns" label="资产到期日" width="100">
        </el-table-column>
        <el-table-column prop="cost" label="现有仓位" width="100">
        </el-table-column>
        <el-table-column prop="astRskGrd" label="审批仓位" width="100">
        </el-table-column>
        <el-table-column prop="view" label="" width="200">
          <el-button type="primary">查看资产详细信息</el-button>
        </el-table-column>
      </el-table>
      <div class="bar-paging" style="margin-top: 5px">
        <div class="fr">
          <el-pagination
            @size-change="transferhandleSizeChange"
            @current-change="transferhandleCurrentChange"
            :current-page="queryForm.pageNum"
            :page-sizes="[20, 50, 100, 200]"
            :page-size="queryForm.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="transfertotal">
          </el-pagination>
        </div>
      </div>
      <el-row type="flex" justify="center">
        <el-button type="primary">转 出</el-button>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
export default {
  created () {
    this.loadAssetInfo()
    // 初始化加载下拉列表数据
    this.initPage()
    this.showRsl()
  },
  data () {
    return {
      wthrRsl: '',
      tempchmtpdAccnm: '', // 显示的理财账户名称
      tempcntrprtNm: '', // 显示的交易对手名称
      loading: false,
      saveDialogVisible: false, // 已保存
      transferDialogVisible: false, // 待转出资产
      showrsl: false, // 是否返售显示
      saveTableData: [], // 已保存列表
      selectsaveTableData: [], // 选中的已保存列表
      transferTableData: [], // 待转出的
      selecttransferTableData: [], // 选中的待转出的

      acgCLCdOption: [], // 会计分类列表
      chmtpdAccOption: [],
      cntprIdDescs: [],
      thsinstFndAccnmOption: [], // 资金账户列表
      cntrprtFndAccnmOption: [],
      savetotal: 0,
      transfertotal: 0,
      // 基本信息
      astCfgInfPo: {
        rcrdId: '',
        chmtpdAccnm: '', // 理财产品账户名称
        chmtpdAccno: '', // 理财产品账户编号
        thsinstFndAccnm: '', // 本机构资金账户名称
        thsinstFndAccno: '', // 本机构资金账号
        thsinstPstbkNo: '', // 本机构支付系统行号
        thspdDepbnkNo: '', // 本产品资金开户行
        thspdTsAccnm: '', // 本产品托管账户户名
        thspdTsInstnm: '', // 本产品托管机构名称
        thspdTsAccno: '', // 本产品托管账号
        cntrprtNm: '', // 交易对手名称
        cntrprtId: '', // 交易对手名称
        cntrprtFndAccnm: '', // 交易对手资金账户名称
        cntrprtFndAccno: '', // 交易对手资金账号
        cntrprtDepbnkNo: '', // 交易对手资金开户行
        cntrprtPstbkNo: '', // 交易对手支付系统行号
        cntrprtTsAccnm: '', // 交易对手托管账户名称
        cntrprtTsInstnm: '', // 交易对手托管机构名称
        cntrprtTsAccno: '', // 交易对手托管账号
        txnTpcd: '', // 交易类型
        astNm: '', // 资产名称
        astCd: '', // 资产代码
        acgClcd: '', // 会计分类
        txnDay: '', // 交易日
        setlDay: '', // 结算日
        lotOrNum: '', // 数量或份额
        valtMtdcd: '', // 估值方式
        netprc: '', // 净价
        fullprc: '', // 全价
        txnamt: '', // 交易金额
        recintTamt: '', // 应收利息总额
        feeWthrInclCost: '', // 费用是否计入成本
        setamt: '', // 结算金额
        expYldrto: '', // 到期收益率
        setlFee: '0', // 结算费
        handCrg: '', // 手续费
        tax: '', // 税金
        ccycd: '', // 币种
        itrvinav: '',
        pblEps: '',
        prpyEps: '',
        wthrRsl: '', // 是否返售
        rslDt: '', // 返售日期
        rslNetprc: '', // 返售净价
        rslFullprc: '', // 返售全价
        rslSetamt: '', // 返售结算金额
        rslYldrto: '', // 返售收益率
        rmrk: '', // 备注
        rltvBtchNo: '', // 关联编号
        astmgBsnTpcd: '02', // 资管业务类型为 资产转仓
        dclInsid: '', // 申报机构编号
        dclInstNm: '', // 机构名称
        dclEmpid: '', // 申请人编号
        dclEmpeNm: '' // 申请人姓名
      },

      queryForm: {
        astNm: '', // 资产名称
        astExDt: '', // 资产到期日
        chmtpdAccnm: '', // 理财产品名称
        chmtpdAccno: '', // 理财产品账户编号
        cntrprtNm: '', // 交易对手
        txnTpcd: '', // 交易类型
        // 当前页
        pageNum: 1,
        // 每页显示 条目
        pageSize: 10
      },
      astMessageValid: {
        cntrprtNm: [
          { required: true, message: '请选择交易对手', trigger: 'blur' }
        ]
      },
      txnMessageValid: {
        txnTpcd: [
          { required: true, message: '请选择交易类型', trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    'page-title': 'test'
  },
  methods: {
    initPage () {},
    // 根据资金账户户名查找账号信息
    queryAccnobyfndAccno () {},

    // 根据资金账户户名查找账号信息
    queryCntprAccnobyfndAccno () {},
    // 查找理财产品账户
    queryChmtpAccOption (query) {},
    // 复制已保存列表
    querySaveTableData () {},
    // 交易对手信息理财账户 对应的资金账号信息
    queryCntrprtAccnoNum () {},
    // 查找交易对手信息理财账户
    queryCntprAccInfo (query) {},
    // 查找理财产品账户户名列表
    queryAccnoNum () {},
    // 加载查询页面
    loadtransferForm: function () {
      this.transferDialogVisible = true
    },
    loadsaveForm: function () {
      this.saveDialogVisible = true
      this.querySaveTableData()
      this.resetAstForm()
    },
    showRsl () {
      let vm = this
      vm.astCfgInfPo.wthrRsl = vm.wthrRsl
      if (vm.astCfgInfPo.wthrRsl === 1) {
        vm.showrsl = false
      } else if (vm.astCfgInfPo.wthrRsl === 0) {
        vm.showrsl = true
        vm.astCfgInfPo.rslDt = ''
        vm.astCfgInfPo.rslFullprc = ''
        vm.astCfgInfPo.rslNetprc = ''
        vm.astCfgInfPo.rslSetamt = ''
        vm.astCfgInfPo.rslYldrto = ''
      }
    },
    // 选中的已保存交易
    getsaveSelection (selection) {
      this.selectsaveTableData = selection
    },
    // 选中的待转出
    gettransferSelection (selection) {
      this.selecttransferTableData = selection
    },
    // 修改时加载基本信息
    loadAssetInfo () {},
    // 关闭并重置
    closeDialog (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          // this.resetAstForm('queryForm')
          done()
        })
        .catch(_ => {})
    },
    // 重置表单
    resetAstForm (name) {
      this.queryForm = {
        astNm: '', // 资产名称
        astExDt: '', // 资产到期日
        chmtpdAccnm: '', // 理财产品名称
        cntrprtNm: '', // 交易对手
        txnTpcd: '', // 交易类型
        // 当前页
        pageNum: 1,
        // 每页显示 条目
        pageSize: 10
      }
    },
    // 保存
    saveAstCfgInfPo () {},
    // 试算
    calculationAstCfgInfPo () {
      // aaa
    },
    // 提交
    submitAstCfgInfPo () {
      // aaa
    },
    // 显示页数跳转
    savehandleSizeChange (val) {
      this.queryForm.pageSize = val
      //  this.queryBuyAstForm('queryForm')
    },
    // 页码跳转
    savehandleCurrentChange (val) {
      this.queryForm.pageNum = val
      //  this.queryBuyAstForm('queryForm')
    },
    // 显示页数跳转
    transferhandleSizeChange (val) {
      this.queryForm.pageSize = val
      //  this.queryBuyAstForm('queryForm')
    },
    // 页码跳转
    transferhandleCurrentChange (val) {
      this.queryForm.pageNum = val
      //  this.queryBuyAstForm('queryForm')
    },
    // 重置
    resetAstCfgInfPo () {
      this.astCfgInfPo = {
        rcrdId: '',
        chmtpdAccnm: '', // 理财产品账户名称
        thsinstFndAccnm: '', // 本机构资金账户名称
        thsinstFndAccno: '', // 本机构资金账号
        thsinstPstbkNo: '', // 本机构支付系统行号
        thspdDepbnkNo: '', // 本产品资金开户行
        thspdTsAccnm: '', // 本产品托管账户户名
        thspdTsInstnm: '', // 本产品托管机构名称
        thspdTsAccno: '', // 本产品托管账号
        cntrprtNm: '', // 交易对手名称
        cntrprtFndAccnm: '', // 交易对手资金账户名称
        cntrprtFndAccno: '', // 交易对手资金账号
        cntrprtDepbnkNo: '', // 交易对手资金开户行
        cntrprtPstbkNo: '', // 交易对手支付系统行号
        cntrprtTsAccnm: '', // 交易对手托管账户名称
        cntrprtTsInstnm: '', // 交易对手托管机构名称
        cntrprtTsAccno: '', // 交易对手托管账号
        txnTpcd: '', // 交易类型
        astNm: '', // 资产名称
        astCd: '', // 资产代码
        acgClcd: '', // 会计分类
        txnDay: '', // 交易日
        setlDay: '', // 结算日
        lotOrNum: '', // 数量或份额
        valtMtdcd: '', // 估值方式
        netprc: '', // 净价
        fullprc: '', // 全价
        txnamt: '', // 交易金额
        recintTamt: '', // 应收利息总额
        feeWthrInclCost: '', // 费用是否计入成本
        setamt: '', // 结算金额
        expYldrto: '', // 到期收益率
        setlFee: '0', // 结算费
        handCrg: '', // 手续费
        tax: '', // 税金
        ccycd: '', // 币种
        itrvinav: '',
        pblEps: '',
        prpyEps: '',
        wthrRsl: '', // 是否返售
        rslDt: '', // 返售日期
        rslNetprc: '', // 返售净价
        rslFullprc: '', // 返售全价
        rslSetamt: '', // 返售结算金额
        rslYldrto: '', // 返售收益率
        rmrk: '', // 备注
        rltvBtchNo: '', // 关联编号
        astmgBsnTpcd: '02', // 资管业务类型为 资产转仓
        dclInsid: '', // 申报机构编号
        dclInstNm: '', // 机构名称
        dclEmpid: '', // 申请人编号
        dclEmpeNm: '' // 申请人姓名
      }
    }
  }
}
</script>

<style scoped>

</style>
