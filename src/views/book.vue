<template>
  <el-row>
    <el-col :span="3" v-for="book in books" :key="book.nvlid">
      <RouterLink :to="{name:'chapter',params:{bid:book.nvlid}}">
        <img :src="'data:image/jpeg;base64,' + book.nvlpic">
        <div>{{ book.title }}</div>
      </RouterLink>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import { get_books } from "@/api";
import { Book } from "@/model";
import { ref } from "vue"
const books = ref<Book[]>([]);
get_books().then(res=>{
  books.value = res.data
})
</script>
<style scoped>
.el-row {
  display: flex;
  justify-content: start;
}
.el-col {
  width: 20%;
  margin: 20px;
}
</style>
