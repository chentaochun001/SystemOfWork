<template>
  <div>
    <div class="header">
      <button class="button" href="#">返回主页</button>
    </div>
    <div class="body">
      <div class="title">
        <p>作业</p>
        <hr />
      </div>
      <div class="table">
        <ul class="clearfix">
          <li class="lookLi">
            <div class="titTxt">
              <p> 
                <a href="#" onclick="" title="界面设计">界面设计</a>
              </p>
              <span title="" class="pt5"><span class="fl">开始时间：</span>2018-03-30 15:11</span>
              <span title="" class="pt5"><span class="fl">截止时间：</span>2018-04-03 22:11</span>
              <span title="" class="pt5"><span class="fl">作业状态：</span><strong>待批阅</strong></span>	
            </div>
            <div class="titOper">
              <a class="Btn_blue_1 fr" href="#">
                <span title="">查看</span>
              </a>												
            </div>
            <!-- <div class="shadow"></div> -->
          </li>
          <li class="lookLi">
            <div class="titTxt">
              <p> 
                <a href="#" onclick="" title="界面设计">界面设计</a>
              </p>
              <span title="" class="pt5"><span class="fl">开始时间：</span>2018-03-30 15:11</span>
              <span title="" class="pt5"><span class="fl">截止时间：</span>2018-04-03 22:11</span>
              <span title="" class="pt5"><span class="fl">作业状态：</span><strong>待批阅</strong></span>	
            </div>
            <div class="titOper">
              <a class="Btn_blue_1 fr" href="#">
                <span title="">查看</span>
              </a>												
            </div>
            <!-- <div class="shadow"></div> -->
          </li>
          <li class="lookLi">
            <div class="titTxt">
              <p> 
                <a href="#" onclick="" title="界面设计">界面设计</a>
              </p>
              <span title="" class="pt5"><span class="fl">开始时间：</span>2018-03-30 15:11</span>
              <span title="" class="pt5"><span class="fl">截止时间：</span>2018-04-03 22:11</span>
              <span title="" class="pt5"><span class="fl">作业状态：</span><strong>待批阅</strong></span>	
            </div>
            <div class="titOper">
              <a class="Btn_blue_1 fr" href="#">
                <span title="">查看</span>
              </a>												
            </div>
            <!-- <div class="shadow"></div> -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }
  html {
    height: 1000px;
  }
  .header {
    width: 100%;
    height: 70px;
  }
  .button {
    width: 70px;
    height: 30px;
    margin: 15px;
    border-radius: 5px;
    background-color: white;
    color: black;
  }
  .button:hover {
    background: thistle;
    color: white;
  }
  .body {
    width: 100%;
    height: 100%;
  }
  .title p {
    text-align: center;
    color: black;
    margin: 15px;
  }
  .table {
    margin: 0 auto;
    width: 94%;
    height: 1000px;
  }
  .table ul {
    list-style: none;
  }
  .table li{
    float: left;
    width: 350px;
    height: 140px;
    margin: 50px 30px;
    padding: 30px 0;
    border: 1px solid #B3B3B3;
  }
  /* .table ul li .titOper p{padding-top:12px;}
  .table ul li .titOper{position:absolute;bottom:0;left:0;width:293px;}
  .table ul li .titTxt{height:195px;}
  .Btn_blue_1{height:25px;}
  .Btn_blue_1 span{line-height:24px;}
  .Btn_red_1{height:25px;font-size:14px;} */

</style>
