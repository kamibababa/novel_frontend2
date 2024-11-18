<template>
    <RouterLink :to="{ name: 'book' }">返回小说列表</RouterLink>
  <div style="margin-top: 20px;display: flex; justify-content: start;">
    <div style="display: flex; justify-content: center;">
        <img :src="'data:image/jpeg;base64,' + chapter.image">
    </div>
    <div  style="margin-left: 24px; display: flex; flex-direction: column; justify-content:space-around;">
        <div>
          <el-text tag="b" size="large">{{ chapter.title }}</el-text>
        </div>
        <div>{{ chapter.intro }}</div>
    </div>
  </div>


    <ul style="list-style-type: none;">
      <li v-for="c in chapter.chapters" :key="c.chapid">
        <RouterLink :to="{ name: 'content', params: { cid: c.chapid } }">{{ c.title }}</RouterLink>
      </li>
    </ul>
</template>
<script setup lang="ts">
import { get_book_chapters } from "@/api";
import { Chapter } from "@/model";
import { ref } from "vue"
import { useRoute } from "vue-router"
const route = useRoute();
const chapter = ref<Chapter>({
  title: "",
  author: "",
  intro: "",
  image: "",
  chapters: []
});
get_book_chapters(route.params.bid as string).then(res => {
  chapter.value = res.data
})
</script>
<style scoped></style>
