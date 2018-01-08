<template>
  <div class="comment">
      <!-- @addComment 是个自定义组件 -->
      <comment-form @addComment="addComment"></comment-form>
      <comment-list :List="List"/>
      <!-- 分页组件 -->
      <pagination @transferPage="getPage" :totalCount="totalCount" :currentPage="currentPage"/>
  </div>
</template>
<script>
import CommentForm from "./CommentForm.vue";
import CommentList from "./CommentList.vue";
import Pagination from "./Pagination.vue";

export default {
    data () {
        return {
            totalCount: 0,
            currentPage: 1,
            pagesize: 3,
            totalData:[],
            List: []
        }
    },
    methods: {
        addComment(msg) {
            console.log(msg);
            this.totalData.push({text:msg});
            this.totalCount = this.totalData.length;
            if(this.totalCount <= this.pagesize) {
                this.List = this.totalData;
            } else {
                this.List = this.totalData.slice(this.totalCount - this.pagesize);
            }
            this.currentPage = 1;
            this.List.reverse();
            // 数据驱动界面 
            // 单向数据绑定  v-bind:(数据) = ""  数据由data -> template
            // 双向数据绑定 input 时 与data绑定起来 界面改变时 数据也会改变 数据由data <=> template 性能差些 不能随便使用
        },
        getPage (curr, size) {
            this.currentPage = curr;
            if(this.totalCount <= this.pagesize) {
                this.List = thid.totalData;
            } else {
                let pages = Math.ceil(this.totalCount / this.pagesize)
                let res = this.totalCount % this.pagesize;
                let start = this.totalCount - this.currentPage * this.pagesize;
                if(start < 0) 
                    start = 0;
                this.List = this.totalData.slice(start, start + this.pagesize)
            }
            this.List.reverse();
        }

    },
    components: {
        Pagination,
        CommentList,
        CommentForm
    }
}
</script>
<style>

</style>
