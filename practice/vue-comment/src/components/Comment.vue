<template>
    <div class="comment">
        <comment-form></comment-form>
        <comment-list></comment-list>
        <pagination></pagination>
    </div>
</template>
<script>
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import Pagination from './Pagination'

export default {
  data () {
      currentPage: 1;
      totalCount: 0;
      pageSize: 3;
      totalData: [];
      List: []
  },
  components: {
      CommentForm,
      CommentList,
      Pagination
  }
}
</script>
<style>
    * {
        margin: 0;
        padding: 0;
    }
</style>



