<template>
  <fixed-header>
    <header
      class="br_header header-default header-transparent pt--15 light-logo--version haeder-fixed-width headroom--sticky header-mega-menu clearfix">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="header__wrapper mr--0">
              <!-- Header Left -->
              <div class="header-left flex-20">
                <div class="logo">
                  <n-link to="/">
                    <img src="/img/logo/kakatoa.png" alt="Brook Logo">
                  </n-link>
                </div>
              </div>
              <!-- Mainmenu Wrap -->
              <div class="header-flex-right flex-80">
                <div class="mainmenu-wrapper have-not-flex d-none d-lg-block">
                  <Navigation/>
                </div>
                <!-- Header Right -->

                <div class="header-right have-not-flex pl--35 pl_md--5 pr_md--20 pl_sm--5 pr_sm--20">

                  <!-- Start Hamberger -->
                  <div class="manu-hamber popup-mobile-click d-block d-lg-none light-version d-block d-xl-none"
                       @click="mobiletoggleClass('addClass', 'show-mobile-menu')">
                    <div>
                      <i></i>
                    </div>
                  </div>
                  <!-- End Hamberger -->
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  </fixed-header>
</template>

<script>
import FixedHeader from 'vue-fixed-header'
import Navigation from '@/components/Navigation'

export default {
  components: {
    FixedHeader,
    Navigation
  },

  methods: {
    // offcanvas search
    toggleClass (addRemoveClass, className) {
      const el = document.querySelector('#search-popup')
      if (addRemoveClass === 'addClass') {
        el.classList.add(className)
      } else {
        el.classList.remove(className)
      }
    },

    // offcanvas mobilemenu open
    mobiletoggleClass (addRemoveClass, className) {
      const el = document.querySelector('#offcanvas-menu')
      if (addRemoveClass === 'addClass') {
        el.classList.add(className)
      } else {
        el.classList.remove(className)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.vue-fixed-header--isFixed {
  background-color: #333;

  .mainmenu-wrapper .page_nav ul.mainmenu li.lavel-1 {
    padding: 20px 0;
  }
}
</style>
