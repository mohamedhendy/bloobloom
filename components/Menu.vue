
<template>
  <div class="bloobloom-header" data-v-deeed64e="">
    <div
      class="bloobloom-side-menu"
      @mouseleave="openMenu = false"
      @mouseover="openMenu = true"
      @click="openMenu = true"
      :class="openMenu ? 'bloobloom-side-menu-open' : ''"
    >
      <div class="sidemenu-main">
        <div
          class="sidemenu-main-tab"
          @mouseleave="openSideMenu = false"
          @mouseover="
            openSideMenu = true;
            selectedLink = 'spectacles';
          "
          @click="
            openSideMenu = true;
            selectedLink = 'spectacles';
          "
        >
          <span class="sidemenu-tab-title">Spectacles</span>
          <svg
            width="11"
            height="16"
            viewBox="0 0 11 16"
            fill="none"
            class="sidemenu-tab-icon"
          >
            <path
              d="M1 1L9 8.2L1 15.4"
              stroke="black"
              stroke-opacity="0.85"
              stroke-width="1.5"
            ></path>
          </svg>
          <div
            class="bloobloom-side-menu bloobloom-side-menu-plus border"
            style="border-color: #000 !important"
            @mouseleave="openMenu = false"
            @mouseover="openMenu = true"
            @click="openMenu = true"
          >
            <div class="sidemenu-main">
              <NuxtLink
                :to="'/collections/' + selectedLink + '-women'"
                class="sidemenu-main-tab"
                style="text-decoration: none"
              >
                <span class="sidemenu-tab-title">
                  <span
                    :to="'/collections/' + selectedLink + '-women'"
                    class="sidemenu-main-tab"
                  >
                    <span class="sidemenu-tab-title mx-0">Women</span>
                  </span>
                </span>
              </NuxtLink>
              <NuxtLink
                :to="'/collections/' + selectedLink + '-men'"
                class="sidemenu-main-tab"
                style="text-decoration: none"
              >
                <span class="sidemenu-tab-title">
                  <span class="sidemenu-main-tab">
                    <span class="sidemenu-tab-title mx-0">men</span>
                  </span>
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div
          class="sidemenu-main-tab"
          @mouseleave="openSideMenu = false"
          @mouseover="
            openSideMenu = true;
            selectedLink = 'sunglasses';
          "
          @click="
            openSideMenu = true;
            selectedLink = 'sunglasses';
          "
        >
          <span class="sidemenu-tab-title">Sunglasses</span>
          <svg
            width="11"
            height="16"
            viewBox="0 0 11 16"
            fill="none"
            class="sidemenu-tab-icon"
          >
            <path
              d="M1 1L9 8.2L1 15.4"
              stroke="black"
              stroke-opacity="0.85"
              stroke-width="1.5"
            ></path>
          </svg>
          <div
            class="bloobloom-side-menu bloobloom-side-menu-plus border"
            style="border-color: #000 !important"
            @mouseleave="openMenu = false"
            @mouseover="openMenu = true"
            @click="openMenu = true"
          >
            <div class="sidemenu-main">
              <NuxtLink
                :to="'/collections/' + selectedLink + '-women'"
                class="sidemenu-main-tab"
                style="text-decoration: none"
              >
                <span class="sidemenu-tab-title">
                  <span
                    :to="'/collections/' + selectedLink + '-women'"
                    class="sidemenu-main-tab"
                  >
                    <span class="sidemenu-tab-title mx-0">Women</span>
                  </span>
                </span>
              </NuxtLink>
              <NuxtLink
                :to="'/collections/' + selectedLink + '-men'"
                class="sidemenu-main-tab"
                style="text-decoration: none"
              >
                <span class="sidemenu-tab-title">
                  <span class="sidemenu-main-tab">
                    <span class="sidemenu-tab-title mx-0">men</span>
                  </span>
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>
        <a href="/" class="sidemenu-main-tab"
          ><span class="sidemenu-tab-title">Home Try On</span></a
        >
        <a href="/" class="sidemenu-main-tab"
          ><span class="sidemenu-tab-title">Pair for Pair</span></a
        >
      </div>
    </div>

    <div class="bloobloom-header-btns border-0">
      <a
        style="text-decoration: none"
        class="bloobloom-header-button menu-button border-0"
        @mouseover="openMenu = true"
        @click="openMenu = !openMenu"
        @mouseleave="openMenu = false"
        ><span class="">MENU</span></a
      >
      <div
        @mouseover="openMenu = true"
        @click="openMenu = !openMenu"
        @mouseleave="openMenu = false"
        class="bloobloom-header-button menu-button-small border-0"
      >
        <span>MENU</span>
      </div>
    </div>
    <a href="/" class="bloobloom-header-logo">
      <img style="width: 30px" src="~assets/images/logo.png" alt="" />
    </a>
    <div style="width: 144px"></div>
  </div>
</template>
<script setup>
  import { ref } from "vue";
  const openMenu = ref(null);
  const openSideMenu = ref(null);
  const selectedLink = ref(null);
</script>
<style>
.stop-transitions * {
  transition: none !important;
}
.btn-border-right {
  border-right: 1px solid #000;
}
.special-underline {
  text-decoration: underline;
}
.bloobloom-header-button:hover {
  text-decoration: underline;
}
.menu-button-small {
  text-decoration: none !important;
}
@media all and (min-width: 1366px) {
  .bloobloom-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 10010;
    top: 0;
    width: 100%;
    height: 50px;
    border: 1px solid #000;
    background-color: #fff;
    box-sizing: border-box;
  }
  .bloobloom-header .bloobloom-header-btns {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .bloobloom-header .bloobloom-header-btns .bloobloom-header-button {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 100%;
    border-right: 1px solid #000;
    width: 160px;
    color: #000 !important;
    font-family: "Acumin Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 2px;
  }
  .bloobloom-header
    .bloobloom-header-btns
    .bloobloom-header-button:first-of-type {
    height: calc(100% + 1px);
  }
  .bloobloom-header
    .bloobloom-header-btns:last-child
    .bloobloom-header-button:first-child {
    border-left: 1px solid #000;
  }
  .bloobloom-header
    .bloobloom-header-btns:last-child
    .bloobloom-header-button:last-child {
    border-right: none;
  }
  .bloobloom-header .bloobloom-header-btns .menu-button-small {
    display: none;
  }
  .bloobloom-header .bloobloom-header-logo {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .bloobloom-header .bloobloom-header-logo svg {
    width: 138px;
    height: 22px;
  }

  .bloobloom-header .bloobloom-side-menu {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 200px;
    background: #fff;
    height: calc(100vh - 50px);
    top: 50px;
    left: -200px;
    transition: all 400ms ease;
  }

  .bloobloom-header .bloobloom-side-menu .sidemenu-main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .bloobloom-header .bloobloom-side-menu .sidemenu-main .sidemenu-main-tab {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid #000;
    cursor: pointer;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab
    .sidemenu-tab-title {
    font-family: "Acumin Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    color: #000;
    text-transform: uppercase;
    margin-left: 18px;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab
    .sidemenu-tab-icon {
    margin-right: 18px;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab:hover {
    background: #000;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab:hover
    .sidemenu-tab-title {
    color: #fff;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab:hover
    svg
    path {
    stroke: #fff;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab-back {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid #000;
    cursor: pointer;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab-back
    .sidemenu-tab-title {
    font-family: "Acumin Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    color: #000;
    text-transform: uppercase;
    margin-right: 18px;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab-back
    .sidemenu-tab-icon {
    margin-left: 18px;
  }
  .bloobloom-header .bloobloom-side-menu .sidemenu-main .sidemenu-main-links {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 5px;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-links
    .sidemenu-main-link {
    margin-left: 18px;
    width: fit-content;
    cursor: pointer;
    color: #000 !important;
    font-family: "Acumin Pro";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 42px;
    display: flex;
    align-items: center;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-links
    .sidemenu-main-link:hover {
    text-decoration: underline;
  }
  .bloobloom-header .bloobloom-side-menu .sidemenu-footer {
    position: relative;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-items: center;
    width: 480px;
    height: 60px;
    border-top: 1px solid #000;
  }
  .bloobloom-header .bloobloom-side-menu .sidemenu-footer .sidemenu-footer-btn {
    display: flex;
    width: 50%;
    height: 100%;
    cursor: pointer;
    text-transform: uppercase;
    color: #000 !important;
    font-family: "Acumin Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 1px;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-footer
    .sidemenu-footer-btn:first-child {
    border-right: 1px solid #000;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-footer
    .sidemenu-footer-btn:hover {
    background: #000;
    color: #fff !important;
  }
  .bloobloom-header .bloobloom-side-menu .bloobloom-side-menu-women {
    z-index: 10000;
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 200px;
    background: #fff;
    height: calc(100vh - 50px);
    top: 50px;
    left: -200px;
    transition: all 400ms ease;
  }
  .bloobloom-header .bloobloom-side-menu .bloobloom-side-menu-women-open {
    border: 1px solid #000;
    border-top: none;
    border-bottom: none;
    left: 0;
  }
  .bloobloom-header .bloobloom-side-menu .bloobloom-side-menu-men {
    z-index: 10000;
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 200px;
    background: #fff;
    height: calc(100vh - 50px);
    top: 50px;
    left: -200px;
    transition: all 400ms ease;
  }
  .bloobloom-header .bloobloom-side-menu .bloobloom-side-menu-men-open {
    border: 1px solid #000;
    border-top: none;
    border-bottom: none;
    left: 0;
  }
  .bloobloom-header .bloobloom-side-menu-open {
    border: 1px solid #000;
    border-top: none;
    border-bottom: none;
    left: 0;
  }
}
@media all and (max-width: 1365.9px) and (min-width: 957px) {
  .bloobloom-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 10010;
    top: 0;
    width: 100%;
    height: 50px;
    border: 1px solid #000;
    background-color: #fff;
    box-sizing: border-box;
  }
  .bloobloom-header .bloobloom-header-btns {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .bloobloom-header .bloobloom-header-btns .bloobloom-header-button {
    cursor: pointer;
    display: none;
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 100%;

    width: 144px;
    color: #000 !important;
    font-family: "Acumin Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 2px;
  }
  .bloobloom-header
    .bloobloom-header-btns
    .bloobloom-header-button:first-of-type {
    height: calc(100% + 1px);
  }
  .bloobloom-header .bloobloom-header-btns .menu-button-small {
    display: none;
  }
  .bloobloom-header .bloobloom-header-btns .menu-button {
    display: flex;
    border-left: none;
    height: calc(100% + 1px);
  }
  .bloobloom-header .bloobloom-header-btns .bag-button {
    display: flex;
    border-left: 1px solid #000;
    border-right: none;
  }
  .bloobloom-header .bloobloom-header-logo {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .bloobloom-header .bloobloom-header-logo svg {
    width: 107.56px;
    height: 16.68px;
  }
  .bloobloom-header .bloobloom-side-menu {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 200px;
    background: #fff;
    border-right: solid 1px #000;
    height: calc(100vh - 40px);
    top: 50px;
    left: -200px;
    transition: all 400ms ease;
  }
  .bloobloom-header .bloobloom-side-menu .sidemenu-main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .bloobloom-header .bloobloom-side-menu .sidemenu-main .sidemenu-main-tab {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #000;
    cursor: pointer;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab
    .sidemenu-tab-title {
    font-family: "Acumin Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    color: #000;
    text-transform: uppercase;
    margin-left: 18px;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab
    .sidemenu-tab-icon {
    margin-right: 18px;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab:hover {
    background: #000;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab:hover
    .sidemenu-tab-title {
    color: #fff;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab:hover
    svg
    path {
    stroke: #fff;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab-back {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #000;
    cursor: pointer;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab-back
    .sidemenu-tab-title {
    font-family: "Acumin Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    color: #000;
    text-transform: uppercase;
    margin-right: 18px;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab-back
    .sidemenu-tab-icon {
    margin-left: 18px;
  }
  .bloobloom-header .bloobloom-side-menu .sidemenu-main .sidemenu-main-links {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 5px;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-links
    .sidemenu-main-link {
    margin-left: 18px;
    width: fit-content;
    cursor: pointer;
    color: #000 !important;
    font-family: "Acumin Pro";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 39px;
    display: flex;
    align-items: center;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-links
    .sidemenu-main-link:hover {
    text-decoration: underline;
  }
  .bloobloom-header .bloobloom-side-menu .sidemenu-footer {
    position: relative;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-items: center;
    width: 480px;
    height: 50px;
    border-top: 1px solid #000;
  }
  .bloobloom-header .bloobloom-side-menu .sidemenu-footer .sidemenu-footer-btn {
    display: flex;
    width: 50%;
    height: 100%;
    cursor: pointer;
    text-transform: uppercase;
    color: #000 !important;
    font-family: "Acumin Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 1px;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-footer
    .sidemenu-footer-btn:first-child {
    border-right: 1px solid #000;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-footer
    .sidemenu-footer-btn:hover {
    background: #000;
    color: #fff !important;
  }
  .bloobloom-header .bloobloom-side-menu .bloobloom-side-menu-women {
    z-index: 10000;
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 200px;
    background: #fff;
    height: calc(100vh - 40px);
    top: 40px;
    left: -200px;
    transition: all 400ms ease;
  }
  .bloobloom-header .bloobloom-side-menu .bloobloom-side-menu-women-open {
    border: 1px solid #000;
    border-top: none;
    border-bottom: none;
    left: 0;
  }
  .bloobloom-header .bloobloom-side-menu .bloobloom-side-menu-men {
    z-index: 10000;
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 200px;
    background: #fff;
    height: calc(100vh - 40px);
    top: 40px;
    left: -200px;
    transition: all 400ms ease;
  }
  .bloobloom-header .bloobloom-side-menu .bloobloom-side-menu-men-open {
    border: 1px solid #000;
    border-top: none;
    border-bottom: none;
    left: 0;
  }
  .bloobloom-header .bloobloom-side-menu-open {
    border: 1px solid #000;
    border-top: none;
    border-bottom: none;
    left: 0;
  }
}
@media all and (max-width: 956.9px) and (min-width: 500px) {
  .bloobloom-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 10010;
    top: 0;
    width: 100%;
    height: 40px;
    border: 1px solid #000;
    background-color: #fff;
    box-sizing: border-box;
  }
  .bloobloom-header .bloobloom-header-btns {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .bloobloom-header .bloobloom-header-btns .bloobloom-header-button {
    cursor: pointer;
    display: none;
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 100%;
    border-right: 1px solid #000;
    width: 144px;
    color: #000 !important;
    font-family: "Acumin Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 2px;
  }
  .bloobloom-header
    .bloobloom-header-btns
    .bloobloom-header-button:first-of-type {
    height: calc(100% + 1px);
  }
  .bloobloom-header .bloobloom-header-btns .menu-button-small {
    display: none;
  }
  .bloobloom-header .bloobloom-header-btns .menu-button {
    display: flex;
    border-left: none;
    height: calc(100% + 1px);
  }
  .bloobloom-header .bloobloom-header-btns .bag-button {
    display: flex;
    border-left: 1px solid #000;
    border-right: none;
  }
  .bloobloom-header .bloobloom-header-logo {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .bloobloom-header .bloobloom-header-logo svg {
    width: 107.56px;
    height: 16.68px;
  }
  .bloobloom-header .bloobloom-side-menu {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 200px;
    background: #fff;
    border-right: solid 1px #000;
    height: calc(100vh - 40px);
    top: 40px;
    left: -200px;
    transition: all 400ms ease;
  }
  .bloobloom-header .bloobloom-side-menu .sidemenu-main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .bloobloom-header .bloobloom-side-menu .sidemenu-main .sidemenu-main-tab {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #000;
    cursor: pointer;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab
    .sidemenu-tab-title {
    font-family: "Acumin Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    color: #000;
    text-transform: uppercase;
    margin-left: 18px;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab
    .sidemenu-tab-icon {
    margin-right: 18px;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab:hover {
    background: #000;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab:hover
    .sidemenu-tab-title {
    color: #fff;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab:hover
    svg
    path {
    stroke: #fff;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab-back {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #000;
    cursor: pointer;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab-back
    .sidemenu-tab-title {
    font-family: "Acumin Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    color: #000;
    text-transform: uppercase;
    margin-right: 18px;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab-back
    .sidemenu-tab-icon {
    margin-left: 18px;
  }
  .bloobloom-header .bloobloom-side-menu .sidemenu-main .sidemenu-main-links {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 5px;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-links
    .sidemenu-main-link {
    margin-left: 18px;
    width: fit-content;
    cursor: pointer;
    color: #000 !important;
    font-family: "Acumin Pro";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 39px;
    display: flex;
    align-items: center;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-links
    .sidemenu-main-link:hover {
    text-decoration: underline;
  }
  .bloobloom-header .bloobloom-side-menu .sidemenu-footer {
    position: relative;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-items: center;
    width: calc(200px - 1px);
    height: 50px;
    border-top: 1px solid #000;
  }
  .bloobloom-header .bloobloom-side-menu .sidemenu-footer .sidemenu-footer-btn {
    display: flex;
    width: 50%;
    height: 100%;
    cursor: pointer;
    text-transform: uppercase;
    color: #000 !important;
    font-family: "Acumin Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 1px;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-footer
    .sidemenu-footer-btn:first-child {
    border-right: 1px solid #000;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-footer
    .sidemenu-footer-btn:hover {
    background: #000;
    color: #fff !important;
  }
  .bloobloom-header .bloobloom-side-menu .bloobloom-side-menu-women {
    z-index: 10000;
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 200px;
    background: #fff;
    height: calc(100vh - 40px);
    top: 40px;
    left: -200px;
    transition: all 400ms ease;
  }
  .bloobloom-header .bloobloom-side-menu .bloobloom-side-menu-women-open {
    border: 1px solid #000;
    border-top: none;
    border-bottom: none;
    left: 0;
  }
  .bloobloom-header .bloobloom-side-menu .bloobloom-side-menu-men {
    z-index: 10000;
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 200px;
    background: #fff;
    height: calc(100vh - 40px);
    top: 40px;
    left: -200px;
    transition: all 400ms ease;
  }
  .bloobloom-header .bloobloom-side-menu .bloobloom-side-menu-men-open {
    border: 1px solid #000;
    border-top: none;
    border-bottom: none;
    left: 0;
  }
  .bloobloom-header .bloobloom-side-menu-open {
    border: 1px solid #000;
    border-top: none;
    border-bottom: none;
    left: 0;
  }
}
@media all and (max-width: 499.9px) and (min-width: 375px) {
  .bloobloom-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 10010;
    top: 0;
    width: 100%;
    height: 52px;
    border: 1px solid #000;
    background-color: #fff;
    box-sizing: border-box;
  }
  .bloobloom-header .bloobloom-header-btns {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .bloobloom-header .bloobloom-header-btns .bloobloom-header-button {
    cursor: pointer;
    display: none;
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 100%;
    border-right: 1px solid #000;
    width: 90px;
    color: #000 !important;
    font-family: "Acumin Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 2px;
  }
  .bloobloom-header
    .bloobloom-header-btns
    .bloobloom-header-button:first-of-type {
    height: calc(100% + 1px);
  }
  .bloobloom-header .bloobloom-header-btns .menu-button {
    display: none;
    border-left: none;
  }
  .bloobloom-header .bloobloom-header-btns .menu-button-small {
    display: flex;
    border-left: none;
    align-items: center;
    justify-content: center;
  }
  .bloobloom-header .bloobloom-header-btns .bag-button {
    display: flex;
    border-left: 1px solid #000;
    border-right: none;
  }
  .bloobloom-header .bloobloom-header-logo {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  .bloobloom-header .bloobloom-header-logo svg {
    width: 107.56px;
    height: 16.68px;
  }
  .bloobloom-header .bloobloom-side-menu {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    background: #fff;
    border-right: solid 1px #000;
    height: calc(100vh - 40px);
    top: 40px;
    left: -100%;
    transition: all 400ms ease;
  }
  .bloobloom-header .bloobloom-side-menu .sidemenu-main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .bloobloom-header .bloobloom-side-menu .sidemenu-main .sidemenu-main-tab {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #000;
    cursor: pointer;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab
    .sidemenu-tab-title {
    font-family: "Acumin Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    color: #000;
    text-transform: uppercase;
    margin-left: 18px;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab
    .sidemenu-tab-icon {
    margin-right: 18px;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab:hover {
    background: #000;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab:hover
    .sidemenu-tab-title {
    color: #fff;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab:hover
    svg
    path {
    stroke: #fff;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab-back {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #000;
    cursor: pointer;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab-back
    .sidemenu-tab-title {
    font-family: "Acumin Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    color: #000;
    text-transform: uppercase;
    margin-right: 18px;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab-back
    .sidemenu-tab-icon {
    margin-left: 18px;
  }
  .bloobloom-header .bloobloom-side-menu .sidemenu-main .sidemenu-main-links {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 5px;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-links
    .sidemenu-main-link {
    margin-left: 18px;
    width: fit-content;
    cursor: pointer;
    color: #000 !important;
    font-family: "Acumin Pro";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 39px;
    display: flex;
    align-items: center;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-links
    .sidemenu-main-link:hover {
    text-decoration: underline;
  }
  .bloobloom-header .bloobloom-side-menu .sidemenu-footer {
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-items: center;
    width: 100%;
    height: 50px;
    border-top: 1px solid #000;
  }
  .bloobloom-header .bloobloom-side-menu .sidemenu-footer .sidemenu-footer-btn {
    display: flex;
    width: 50%;
    height: 100%;
    cursor: pointer;
    text-transform: uppercase;
    color: #000 !important;
    font-family: "Acumin Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 1px;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-footer
    .sidemenu-footer-btn:first-child {
    border-right: 1px solid #000;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-footer
    .sidemenu-footer-btn:hover {
    background: #000;
    color: #fff !important;
  }
  .bloobloom-header .bloobloom-side-menu .bloobloom-side-menu-women {
    z-index: 10000;
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    background: #fff;
    height: calc(100vh - 40px);
    top: 40px;
    left: -100vw;
    transition: all 400ms ease;
  }
  .bloobloom-header .bloobloom-side-menu .bloobloom-side-menu-women-open {
    border: 1px solid #000;
    border-top: none;
    border-bottom: none;
    left: 0;
  }
  .bloobloom-header .bloobloom-side-menu .bloobloom-side-menu-men {
    z-index: 10000;
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    background: #fff;
    height: calc(100vh - 40px);
    top: 40px;
    left: -100vw;
    transition: all 400ms ease;
  }
  .bloobloom-header .bloobloom-side-menu .bloobloom-side-menu-men-open {
    border: 1px solid #000;
    border-top: none;
    border-bottom: none;
    left: 0;
  }
  .bloobloom-header .bloobloom-side-menu-open {
    border: 1px solid #000;
    border-top: none;
    border-bottom: none;
    left: 0;
  }
}
@media all and (max-width: 374.9px) {
  .bloobloom-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 10010;
    top: 0;
    width: 100%;
    height: 40px;
    border: 1px solid #000;
    background-color: #fff;
    box-sizing: border-box;
  }
  .bloobloom-header .bloobloom-header-btns {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .bloobloom-header .bloobloom-header-btns .bloobloom-header-button {
    cursor: pointer;
    display: none;
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 100%;
    border-right: 1px solid #000;
    width: 90px;
    color: #000 !important;
    font-family: "Acumin Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 2px;
  }
  .bloobloom-header
    .bloobloom-header-btns
    .bloobloom-header-button:first-of-type {
    height: calc(100% + 1px);
  }
  .bloobloom-header .bloobloom-header-btns .menu-button {
    display: none;
    border-left: none;
  }
  .bloobloom-header .bloobloom-header-btns .menu-button-small {
    display: flex;
    border-left: none;
    align-items: center;
    justify-content: center;
  }
  .bloobloom-header .bloobloom-header-btns .bag-button {
    display: flex;
    border-left: 1px solid #000;
    border-right: none;
  }
  .bloobloom-header .bloobloom-header-logo {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  .bloobloom-header .bloobloom-header-logo svg {
    width: 107.56px;
    height: 16.68px;
  }
  .bloobloom-header .bloobloom-side-menu {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    background: #fff;
    border-right: solid 1px #000;
    height: calc(100vh - 40px);
    top: 40px;
    left: -100%;
    transition: all 400ms ease;
  }
  .bloobloom-header .bloobloom-side-menu .sidemenu-main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .bloobloom-header .bloobloom-side-menu .sidemenu-main .sidemenu-main-tab {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #000;
    cursor: pointer;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab
    .sidemenu-tab-title {
    font-family: "Acumin Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    color: #000;
    text-transform: uppercase;
    margin-left: 18px;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab
    .sidemenu-tab-icon {
    margin-right: 18px;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab:hover {
    background: #000;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab:hover
    .sidemenu-tab-title {
    color: #fff;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab:hover
    svg
    path {
    stroke: #fff;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab-back {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #000;
    cursor: pointer;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab-back
    .sidemenu-tab-title {
    font-family: "Acumin Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    color: #000;
    text-transform: uppercase;
    margin-right: 18px;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-tab-back
    .sidemenu-tab-icon {
    margin-left: 18px;
  }
  .bloobloom-header .bloobloom-side-menu .sidemenu-main .sidemenu-main-links {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 5px;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-links
    .sidemenu-main-link {
    margin-left: 18px;
    width: fit-content;
    cursor: pointer;
    color: #000 !important;
    font-family: "Acumin Pro";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 39px;
    display: flex;
    align-items: center;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-main
    .sidemenu-main-links
    .sidemenu-main-link:hover {
    text-decoration: underline;
  }
  .bloobloom-header .bloobloom-side-menu .sidemenu-footer {
    position: relative;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-items: center;
    width: 100%;
    height: 50px;
    border-top: 1px solid #000;
  }
  .bloobloom-header .bloobloom-side-menu .sidemenu-footer .sidemenu-footer-btn {
    display: flex;
    width: 50%;
    height: 100%;
    cursor: pointer;
    text-transform: uppercase;
    color: #000 !important;
    font-family: "Acumin Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 1px;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-footer
    .sidemenu-footer-btn:first-child {
    border-right: 1px solid #000;
  }
  .bloobloom-header
    .bloobloom-side-menu
    .sidemenu-footer
    .sidemenu-footer-btn:hover {
    background: #000;
    color: #fff !important;
  }
  .bloobloom-header .bloobloom-side-menu .bloobloom-side-menu-women {
    z-index: 10000;
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    background: #fff;
    height: calc(100vh - 40px);
    top: 40px;
    left: -100vw;
    transition: all 400ms ease;
  }
  .bloobloom-header .bloobloom-side-menu .bloobloom-side-menu-women-open {
    border: 1px solid #000;
    border-top: none;
    border-bottom: none;
    left: 0;
  }
  .bloobloom-header .bloobloom-side-menu .bloobloom-side-menu-men {
    z-index: 10000;
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    background: #fff;
    height: calc(100vh - 40px);
    top: 40px;
    left: -100vw;
    transition: all 400ms ease;
  }
  .bloobloom-header .bloobloom-side-menu .bloobloom-side-menu-men-open {
    border: 1px solid #000;
    border-top: none;
    border-bottom: none;
    left: 0;
  }
  .bloobloom-header .bloobloom-side-menu-open {
    border: 1px solid #000;
    border-top: none;
    border-bottom: none;
    left: 0;
  }
}
.bloobloom-header .bloobloom-side-menu-plus {
  left: 200px;
  width: 200px;
}

@media (max-width: 499.9px) and (min-width: 375px) {
  .bloobloom-header .bloobloom-side-menu {
    width: 200px;
    top: 52px;
  }
  .bloobloom-header .bloobloom-side-menu-plus {
    left: 200px;
    width: 150px;
  }
  .sidemenu-tab-title {
    font-size: 13px !important;
  }
}
.bloobloom-side-menu-plus {
  display: none !important;
}
.sidemenu-main-tab:hover .bloobloom-side-menu-plus,
.sidemenu-main-tab:hover .bloobloom-side-menu-plus .sidemenu-tab-title {
  display: flex !important;
  color: #000 !important;
}
.sidemenu-main-tab:hover
  .bloobloom-side-menu-plus
  .sidemenu-main-tab:hover
  .sidemenu-tab-title {
  color: #fff !important;
}
</style>



