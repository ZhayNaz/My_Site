<template>
  <v-container fluid class="pa-8 bg-grey-lighten-4">

    <v-row>
      <v-col cols="12" class="text-center mb-10">
        <h1 class="display-1 font-weight-bold text-dark">Tech Blogs</h1>
        <p class="subtitle-1 text-dark">
          Explore insights, tutorials, and innovations in Computer Engineering & Technology.
        </p>
      </v-col>
    </v-row>

    <v-row class="justify-center mb-12">
      <v-col cols="12" md="10">
        <v-card class="featured-card hoverable rounded-xl" elevation="6">
          <v-img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            height="320"
            class="rounded-t-xl"
            cover
          ></v-img>

          <v-card-text class="pa-6">
            <h2 class="text-dark font-weight-bold mb-2">
              The Future of AI in Computer Engineering
            </h2>

            <p class="text-dark">
              Discover how artificial intelligence is transforming industries—from automation
              to cybersecurity and real-time optimization.
            </p>

            <v-chip class="ma-1" color="deep-purple accent-4" text-color="white" small>AI</v-chip>
            <v-chip class="ma-1" color="blue-grey darken-1" text-color="white" small>Innovation</v-chip>

            <v-btn
              color="deep-purple accent-4"
              rounded
              class="mt-4"
              @click="readMore('ai-future')"
            >
              Read More
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        md="4"
        v-for="blog in blogs"
        :key="blog.id"
      >
        <v-card class="pa-4 hoverable rounded-xl" elevation="4">

          <v-img
            :src="blog.image"
            height="180"
            class="rounded-lg mb-4"
            cover
          ></v-img>

          <h3 class="text-dark font-weight-bold mb-2">{{ blog.title }}</h3>

          <p class="text-dark" style="min-height: 70px;">
            {{ blog.description }}
          </p>

          <div class="mb-3">
            <v-chip
              v-for="tag in blog.tags"
              :key="tag"
              class="ma-1"
              small
              color="blue-grey lighten-3"
              text-color="black"
            >
              {{ tag }}
            </v-chip>
          </div>

          <v-btn
            color="deep-purple accent-4"
            rounded
            @click="readMore(blog.id)"
          >
            Read More
          </v-btn>

        </v-card>
      </v-col>
    </v-row>

    <v-btn
      class="fab-btn"
      color="deep-purple accent-4"
      size="large"
      icon
      elevation="8"
      @click="addNewPost()"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>

  </v-container>
</template>

<script src="./Scripts/BlogsPage.js"></script>

<style scoped>
.bg-grey-lighten-4 {
  background-color: #f5f5f5 !important;
}

.text-dark {
  color: #3c4043 !important;
}

.hoverable {
  transition: 0.3s ease;
}

.hoverable:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12);
}

.featured-card {
  overflow: hidden;
}

/* Floating Action Button */
.fab-btn {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 999;
  border-radius: 50%;
  transition: 0.25s ease;
}

.fab-btn:hover {
  transform: scale(1.1);
}
</style>