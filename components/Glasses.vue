<template>
  <div class="container-fluid px-0">
    <div>
      <Filter @customFilterQueries="getCustomQueries" :Title="slugParams" />
      <div class="row ">
        <div class="col-lg-4 border px-0" v-for="(item, index) in Glasses" :key="index">
          <CardGlasses :items="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import API from "~/services/urls.js";
import { useParamsStore } from "@/stores/params";
const store = useParamsStore();
const props = defineProps({
  title: {
    type: String,
  },
});

const router = useRouter();
const route = useRoute();
let dynamicFilterParams = ref("");
let Glasses = ref("");
let urlQueries = ref("");
let path = ref("");
const slugParams = ref(route.params.slug[0]);
const fixedQueries = ref([
  {
    name: "filters[lens_variant_prescriptions][]",
    value: "fashion",
  },
  {
    name: "filters[lens_variant_types][]",
    value: "classic",
  },
]);
const CustomQueries = ref([
  {
    name: "sort[type]",
    value: route.query["sort[type]"]
      ? route.query["sort[type]"]
      : "collection_relations_position",
  },
  {
    name: "sort[order]",
    value: route.query["sort[order]"] ? route.query["sort[order]"] : "asc",
  },
  {
    name: "page[limit]",
    value: route.query["page[limit]"] ? route.query["page[limit]"] : "12",
  },
  {
    name: "page[number]",
    value: route.query["page[number]"] ? route.query["page[number]"] : "1",
  },
  {
    name: "filters[frame_variant_home_trial_available]",
    value: route.query["filters[frame_variant_home_trial_available]"]
      ? route.query["filters[frame_variant_home_trial_available]"]
      : "false",
  },
]);

function getCustomQueries(data) {
  data = store.paramsValue;
  let path = ref("");
  let queryColor = ref(route.query.color);
  let queryShape = ref(route.query.shape);

  /* - - - */
  dynamicFilterParams.value = data;
  const color = data.filter((res) => res.type == "color");
  const shape = data.filter((res) => res.type == "shape");
  queryColor.value = color.map((res) => res.value);
  queryShape.value = shape.map((res) => res.value);
  router.push({
    query: {
      color: queryColor.value.join("~"),
      shape: queryShape.value.join("~"),
    },
  });
  /* - - - */

  for (let i = 0; i < fixedQueries.value.length; i++) {
    path.value += `${fixedQueries.value[i].name}=${fixedQueries.value[i].value}&`;
  }
  for (let i = 0; i < CustomQueries.value.length; i++) {
    path.value += `${CustomQueries.value[i].name}=${CustomQueries.value[i].value}&`;
  }
  for (let i = 0; i < dynamicFilterParams.value.length; i++) {
    path.value += `${dynamicFilterParams.value[i].name}=${dynamicFilterParams.value[i].value}&`;
  }
  urlQueries.value = path.value;

  const requestUrl =
    API.GET_SUNGLASSES_COLLECTIONS +
    `${route.params.slug[0]}/glasses?${urlQueries.value}`;
  const reqGlasses = async () => {
    const reqData = await fetch(requestUrl).then((response) => response.json()).then((data) => Glasses.value = data.glasses);
  };
  reqGlasses()
   
}
const data = ref(store.paramsValue);
setTimeout(() => {
  getCustomQueries(store.paramsValue);
}, 500);
</script>

<style>
</style>