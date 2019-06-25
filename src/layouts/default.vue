<template lang="pug">
v-app
    v-toolbar(app color="primary")
        
        v-toolbar-title.white--text SiteLogo
        v-spacer
        v-toolbar-items
            v-btn(flat dark to="/" nuxt) home
            v-btn(flat dark to="/inspire" nuxt) Inspiration
            v-btn(flat dark) about    
    v-content
        nuxt
</template>
