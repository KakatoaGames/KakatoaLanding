<template>
  <div class="main-container">
    <Header/>

    <OffCanvasMobileMenu/>

    <HeroStartUp/>

    <Tentang/>

    <Event/>

    <Fitur/>

    <CurveShape>
      <template v-slot:bgcolor>
        <path
          style="fill: #f7f7f7;
                    stroke-miterlimit:10;"
          d="M3360.5,97.739c-242,0-480-48.375-480-48.375
                        S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
                        S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"
        />
      </template>
    </CurveShape>
    <Bermain/>
    <Footer/>
  </div>
</template>

<script>

export default {
  components: {
    HeroStartUp: () => import('@/components/HeroStartUp'),
    Tentang: () => import('@/components/Tentang'),
    Event: () => import('@/components/Event'),
    Fitur: () => import('~/components/sections/Fitur'),
    Header: () => import('@/components/Header'),
    OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
    CurveShape: () => import('@/components/CurveShape'),
    Footer: () => import('@/components/Footer'),
    Bermain: () => import('@/components/Bermain')
  },

  mounted () {
    document.body.classList.add('template-color-1', 'template-font-2')
  },

  head () {
    return {
      title: 'KGC - Kakatoa Games Community'
    }
  }
}
</script>
