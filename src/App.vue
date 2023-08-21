<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<template>
  <div>
    <AppHeader/>
    <router-view/>
  </div>
</template>



