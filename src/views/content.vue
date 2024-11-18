<template>
  <el-card>
    <RouterLink :to="{ name: 'chapter', params: { bid: content.catalogue || 0 } }">返回章节列表</RouterLink>
  </el-card>
  <el-card>
    <div>{{ content.title }}</div>
  </el-card>
  <el-card>
    <div>{{ content.content }}</div>
  </el-card>
  <el-card>
    <RouterLink :to="{ name: 'chapter', params: { bid: content.catalogue || 0 } }">返回章节列表</RouterLink>
  </el-card>
</template>
<script setup lang="ts">
import { get_book_content } from "@/api";
import { Content } from "@/model";
import { ref } from "vue"
import { useRoute } from "vue-router"
const route = useRoute();
const content = ref<Content>({
  title: "",
  catalogue: "",
  content: ""
});
get_book_content(route.params.cid as string).then(res => {
  content.value = res.data
})
</script>
<style scoped></style>
