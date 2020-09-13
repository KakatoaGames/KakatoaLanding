<template>
  <nav class="page_nav">
    <ul class="mainmenu">
      <li class="lavel-1 slide--megamenu">
        <n-link to="#" v-scroll-to="'#home'">
          <span>Home</span>
        </n-link>
      </li>
      <li class="lavel-1 slide--megamenu">
        <n-link to="#" v-scroll-to="'#tentang'">
          <span>Event</span>
        </n-link>
      </li>
      <li class="lavel-1 slide--megamenu">
        <n-link to="#" v-scroll-to="'#fitur'">
          <span>Fitur</span>
        </n-link>
      </li>
      <li class="lavel-1 slide--megamenu">
        <n-link to="#" v-scroll-to="'#cara-bermain'">
          <span>Cara Bermain</span>
        </n-link>
      </li>
      <li class="lavel-1 slide--megamenu">
        <n-link to="#" v-scroll-to="'#kontak'">
          <span>Kontak</span>
        </n-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.page_nav {
  padding-right: 10em;
}
.mega__list {
  display: flex;

  li {
    flex-basis: 25%;
  }
}
</style>
