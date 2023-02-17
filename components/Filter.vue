<script setup>
import { ref, reactive, watch, defineEmits } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useParamsStore } from '@/stores/params'
const store = useParamsStore();
const router = useRouter();
const route = useRoute();
const props = defineProps({
  Title: {
    type: String,
  },
});
let colorArray = ref([]);
let shapeArray = ref([]);
let colorQueryArray = ref([]);
let shapeQueryArray = ref([]);
let defaultColorQueryArray = ref(route.query.color ? route.query.color : []);
let defaultShapeQueryArray = ref(route.query.shape ? route.query.shape : []);
let filterQueries = ref([]);
const hideColor = ref(true);
const hideShape = ref(true);
const Shape = reactive(["Square", "Rectangle", "Round", "Cat-eye"]);
const color = reactive([
  {
    color: "Black",
    img: "https://d1cqebbq86e0g6.cloudfront.net/assets/filters_black_01.png",
  },
  {
    color: "Tortoise",
    img: "https://d1cqebbq86e0g6.cloudfront.net/assets/filters_tortoise_02.png",
  },
  {
    color: "Coloured",
    img: "https://d1cqebbq86e0g6.cloudfront.net/assets/filters_coloured_03.png",
  },
  {
    color: "Crystal",
    img: "https://d1cqebbq86e0g6.cloudfront.net/assets/filters_crystal_04.png",
  },
  {
    color: "Dark",
    img: "https://d1cqebbq86e0g6.cloudfront.net/assets/filters_dark_05.png",
  },
  {
    color: "Bright",
    img: "https://d1cqebbq86e0g6.cloudfront.net/assets/filters_bright_06.png",
  },
]);
const emit = defineEmits(["customFilterQueries"]);
addValueToFilterType(colorArray, defaultColorQueryArray);
addValueToFilterType(shapeArray, defaultShapeQueryArray);
allToQueriesArray(colorArray, colorQueryArray);
allToQueriesArray(shapeArray, shapeQueryArray);
/* Watch  -------------------- */
watch(
  () => [...colorArray.value],
  () => {
    allToQueriesArray(colorArray, colorQueryArray);
    emit("customFilterQueries", filterQueries.value);
  }
);
watch(
  () => [...shapeArray.value],
  () => {
    allToQueriesArray(shapeArray, shapeQueryArray);
    emit("customFilterQueries", filterQueries.value);
  }
);
/* ---------------------------- */
function addValueToFilterType(type, array) {
  if (array.value.length > 0) {
    for (let i = 0; i < array.value.split("~").length; i++) {
      type.value.push(array.value.split("~")[i]);
    }
    array == defaultColorQueryArray
      ? (hideColor.value = false)
      : (hideShape.value = false);
  }
}
function allToQueriesArray(typeArray, QueryArray) {
  QueryArray.value = [];
  if (typeArray.value.length > 0) {
    for (let i = 0; i < typeArray.value.length; i++) {
      QueryArray.value.push({
        name:
          QueryArray == colorQueryArray
            ? "filters[glass_variant_frame_variant_colour_tag_configuration_names][]"
            : "filters[glass_variant_frame_variant_frame_tag_configuration_names][]",
        value: typeArray.value[i],
        type: QueryArray == colorQueryArray ? "color" : "shape",
      });
    }
  }
  filterQueries.value = [...colorQueryArray.value, ...shapeQueryArray.value];
//   store.params = filterQueries.value
  store.SetParamsValue(filterQueries.value)

}

function addToColorArray(color) {
  if (colorArray.value.includes(color)) {
    colorArray.value = colorArray.value.filter((res) => res != color);
  } else {
    colorArray.value.push(color);
  }
}
function deleteColorName(color) {
  colorArray.value = colorArray.value.filter((res) => res != color);
}

function addToShapeArray(shape) {
  if (shapeArray.value.includes(shape)) {
    shapeArray.value = shapeArray.value.filter((res) => res != shape);
  } else {
    shapeArray.value.push(shape);
  }
}
function deleteShapeName(color) {
  shapeArray.value = shapeArray.value.filter((res) => res != color);
}
function clearFilter() {
  colorArray.value = [];
  shapeArray.value = [];
  filterQueries.value = [];
}
</script>
<template>
  <div>
    <div class="row w-100">
      <div class="border-top-0 border-bl col-lg-4 px-0"></div>
      <div
        class="border-top-0 border-bl border-end-0 border-start-0 col-lg-4 px-0"
      >
        <h2 class="title mb-0">{{ Title }}</h2>
      </div>
      <div
        class="filter-btn px-0 text-start border-top-0 border-bl col-lg-4 px-0"
      >
        <button @click="hideColor = !hideColor">Color</button>
        <button @click="hideShape = !hideShape">Shape</button>
      </div>
    </div>
    <div class="text-start">
      <div
        class="px-lg-5 px-2 filter-option pt-3"
        :class="hideColor ? 'd-none' : ''"
      >
        <div class="d-flex align-items-center justify-content-between">
          <h5 class="fw-bold text-uppercase f-15">Color</h5>
          <span @click="hideColor = true" class="hide-color"
            ><i class="fa-solid fa-minus"></i
          ></span>
        </div>
        <ul class="list-unstyled py-2 mb-0">
          <li
            class="d-inline-block me-5 filter-color filter-data"
            v-for="(item, index) in color"
            :key="index"
            @click="addToColorArray(item.color)"
          >
            <img
              class="def-brn"
              :class="colorArray.includes(item.color) ? 'color-brd' : ''"
              :src="item.img"
              :alt="item.color"
            />
            {{ item.color }}
          </li>
        </ul>
      </div>
      <div
        class="px-lg-5 px-2 py-2 filter-option pt-3"
        :class="hideShape ? 'd-none' : ''"
      >
        <div class="d-flex align-items-center justify-content-between">
          <h5 class="fw-bold text-uppercase f-15">Shape</h5>
          <span @click="hideShape = true" class="hide-color"
            ><i class="fa-solid fa-minus"></i
          ></span>
        </div>
        <ul class="list-unstyled py-2 mb-0">
          <li
            @click="addToShapeArray(item)"
            class="d-inline-block me-5 filter-color filter-data"
            v-for="(item, index) in Shape"
            :key="index"
          >
            <span
              class="def-under"
              :class="shapeArray.includes(item) ? 'color-under' : ''"
              >{{ item }}</span
            >
          </li>
        </ul>
      </div>
      <div
        v-if="colorArray.length > 0 || shapeArray.length > 0"
        class="container-fluid py-0 px-5 py-3 filter-option"
      >
        <div class="">
          <div class="row align-items-center">
            <div class="col-lg-4">
              <span
                class="me-4 filter-option-selected"
                v-for="(item, index) in colorArray"
                :key="index"
              >
                {{ item }}
                <svg
                  @click="deleteColorName(item)"
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                >
                  <path
                    d="M5.70499 5.49998L9.34999 1.65248C9.4319 1.55151 9.4747 1.42164 9.46984 1.28881C9.46498 1.15598 9.41282 1.02998 9.32377 0.935984C9.23472 0.841989 9.11535 0.786925 8.98951 0.781794C8.86368 0.776663 8.74064 0.821845 8.64499 0.908309L4.99999 4.75581L1.35499 0.903031C1.25934 0.816567 1.1363 0.771386 1.01046 0.776517C0.884622 0.781647 0.765253 0.836711 0.676205 0.930706C0.587158 1.0247 0.534992 1.1507 0.530131 1.28353C0.52527 1.41636 0.568074 1.54623 0.649987 1.6472L4.29499 5.49998L0.644987 9.34748C0.592646 9.39479 0.550136 9.45301 0.520124 9.51849C0.490112 9.58397 0.473247 9.65529 0.470587 9.72797C0.467928 9.80066 0.479531 9.87314 0.504668 9.94087C0.529805 10.0086 0.567934 10.0701 0.616662 10.1215C0.665389 10.173 0.723663 10.2132 0.787825 10.2398C0.851988 10.2663 0.920654 10.2785 0.989514 10.2757C1.05837 10.2729 1.12594 10.2551 1.18797 10.2234C1.25 10.1918 1.30516 10.1469 1.34999 10.0916L4.99999 6.24414L8.64499 10.0916C8.74064 10.1781 8.86368 10.2233 8.98951 10.2182C9.11535 10.213 9.23472 10.158 9.32377 10.064C9.41282 9.96997 9.46498 9.84397 9.46984 9.71114C9.4747 9.57831 9.4319 9.44844 9.34999 9.34748L5.70499 5.49998Z"
                    fill="black"
                  ></path>
                </svg>
              </span>
              <span
                class="me-4 filter-option-selected"
                v-for="(item, index) in shapeArray"
                :key="index"
              >
                {{ item }}
                <svg
                  @click="deleteShapeName(item)"
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                >
                  <path
                    d="M5.70499 5.49998L9.34999 1.65248C9.4319 1.55151 9.4747 1.42164 9.46984 1.28881C9.46498 1.15598 9.41282 1.02998 9.32377 0.935984C9.23472 0.841989 9.11535 0.786925 8.98951 0.781794C8.86368 0.776663 8.74064 0.821845 8.64499 0.908309L4.99999 4.75581L1.35499 0.903031C1.25934 0.816567 1.1363 0.771386 1.01046 0.776517C0.884622 0.781647 0.765253 0.836711 0.676205 0.930706C0.587158 1.0247 0.534992 1.1507 0.530131 1.28353C0.52527 1.41636 0.568074 1.54623 0.649987 1.6472L4.29499 5.49998L0.644987 9.34748C0.592646 9.39479 0.550136 9.45301 0.520124 9.51849C0.490112 9.58397 0.473247 9.65529 0.470587 9.72797C0.467928 9.80066 0.479531 9.87314 0.504668 9.94087C0.529805 10.0086 0.567934 10.0701 0.616662 10.1215C0.665389 10.173 0.723663 10.2132 0.787825 10.2398C0.851988 10.2663 0.920654 10.2785 0.989514 10.2757C1.05837 10.2729 1.12594 10.2551 1.18797 10.2234C1.25 10.1918 1.30516 10.1469 1.34999 10.0916L4.99999 6.24414L8.64499 10.0916C8.74064 10.1781 8.86368 10.2233 8.98951 10.2182C9.11535 10.213 9.23472 10.158 9.32377 10.064C9.41282 9.96997 9.46498 9.84397 9.46984 9.71114C9.4747 9.57831 9.4319 9.44844 9.34999 9.34748L5.70499 5.49998Z"
                    fill="black"
                  ></path>
                </svg>
              </span>
            </div>
            <div class="col-lg-4"></div>
            <div class="col-lg-4 text-end">
              <span
                @click="clearFilter"
                class="text-uppercase fw-bold f-13 clear-btn"
                >clear Filters</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.filter-btn button {
  background-color: transparent;
  border: 0;
  border-right: 1px solid #000;
  height: 100%;
  padding: 5px 24px;
  font-size: 16px;
}
.title {
  position: relative;
  font-family: "Acumin Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 60px;
  text-align: center;
  text-transform: uppercase;
  color: #000;
}
.border-bl {
  border: 1px solid #000;
  position: relative;
  left: 12px;
  font-family: "Acumin Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  text-transform: uppercase;
  color: #000;
}
.filter-color {
  font-size: 15px;
  cursor: pointer;
}
.filter-color img {
  height: 16px;
  width: 16px;
  border-radius: 100%;
}
.hide-color {
  font-size: 20px;
  color: #b3b3b3;
  cursor: pointer;
}
.filter-option {
  border: 1px solid #000;
  border-top: 0;
}
.filter-option-selected {
  font-size: 13px;
  text-transform: uppercase;
  white-space: nowrap;
  word-break: keep-all;
}
.filter-option-selected svg {
  margin-left: 3px;
  cursor: pointer;
}
.f-13 {
  font-size: 13px;
}
.clear-btn {
  cursor: pointer;
}
.f-15 {
  font-size: 15px;
}
.filter-data {
  min-width: 75px;
  margin-bottom: 10px;
}
.def-brn {
  border: 1px solid transparent;
  padding: 1px;
}
.color-brd {
  border: 1px solid #3484cb;
}
.def-under {
  border-bottom: 1px solid transparent;
  padding: 1px;
}
.color-under {
  border-bottom: 1px solid #000;
}
</style>