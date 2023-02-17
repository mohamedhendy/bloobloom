<template>
  <div>
    <div v-if="error.statusCode === 404" class="notfound__page">
      <div class="notfound">
        <h2>404 - Page not found</h2>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  layout: "notfound",
  props: ["error"],
};
</script>
  <style lang="css">
.notfound__page {
  position: relative;
  height: 100vh;
  background-color: var(--gray_color) !important;
}
.notfound__page .notfound {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.notfound {
  max-width: 710px;
  width: 100%;
  line-height: 1.4;
}
.notfound .notfound-404 {
  position: absolute;
  left: 0;
  top: 0;
  width: 150px;
  height: 150px;
}
.notfound .notfound-404 h1 {
  font-family: "Passion One", cursive;
  color: #00b5c3;
  font-size: 150px;
  letter-spacing: 15.5px;
  margin: 0px;
  font-weight: 900;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.notfound h2 {
  font-family: "Raleway", sans-serif;
  color: var(--data_text_color);
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  margin-top: 0;
}
.notfound p {
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 15px;
  color: var(--data_text_color);
}
.notfound a {
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  background: var(--default_color);
  display: inline-block;
  padding: 15px 30px;
  border-radius: 40px;
  color: #000;
  font-weight: 700;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}
.notfound a:hover {
  color: #000;
  background-color: #4c52bb;
}
@media only screen and (max-width: 480px) {
  .notfound {
    text-align: center;
  }
  .notfound .notfound-404 {
    position: relative;
    width: 100%;
    margin-bottom: 15px;
  }
  .notfound {
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>
  