<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="80"></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">Welcome to {{$config.appName}}</h1>
        <p
          class="subheading font-weight-regular"
        >Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
      </v-flex>

      <v-flex xs12 mb-5>
        <h2 class="headline font-weight-bold mb-3">Links</h2>

        <v-layout justify-center>
          <a
            v-for="(link, i) in links"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >{{ link.text }}</a>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        text: "Google",
        href: "https://www.google.it"
      },
      {
        text: "Documentation",
        href: "https://vuetifyjs.com"
      }
    ]
  })
};
</script>
