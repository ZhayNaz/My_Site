<template>
  <v-container fluid class="pa-6 bg-grey-lighten-4">
    <!-- Header Section -->
    <v-row>
      <v-col cols="12" class="text-center mb-10">
        <h1 class="display-1 font-weight-bold text-dark mb-4">
          About Zhay's Techoprenuership
        </h1>
        <p class="subtitle-1 text-dark mx-auto" style="max-width: 800px;">
          We are a team of passionate computer engineers and technology enthusiasts dedicated to providing innovative, reliable, and secure solutions for businesses and organizations. Our mission is to optimize operations, enhance security, and empower clients with the latest technological solutions.
        </p>
      </v-col>
    </v-row>

    <!-- Mission & Vision -->
    <v-row class="mb-12" dense>
      <v-col cols="12" md="6">
        <v-card elevation="4" class="pa-6 hoverable rounded-lg">
          <v-icon size="48" color="deep-purple accent-4">mdi-eye-outline</v-icon>
          <h3 class="headline mt-3 text-dark">Our Vision</h3>
          <p class="text-dark">
            To be a leading provider of innovative computer engineering solutions, empowering businesses to achieve operational excellence and technological advancement.
          </p>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card elevation="4" class="pa-6 hoverable rounded-lg">
          <v-icon size="48" color="deep-purple accent-4">mdi-flag-checkered</v-icon>
          <h3 class="headline mt-3 text-dark">Our Mission</h3>
          <p class="text-dark">
            Deliver high-quality, secure, and user-friendly solutions tailored to clients' needs while fostering innovation, collaboration, and excellence in every project.
          </p>
        </v-card>
      </v-col>
    </v-row>

    <!-- Team Section -->
    <v-row>
      <v-col cols="12" class="text-center mb-8">
        <h2 class="display-2 font-weight-bold text-dark">Meet Our Team</h2>
        <p class="text-dark mx-auto" style="max-width: 700px;">
          Our team is composed of experienced computer engineers specializing in software development, network security, and data management solutions.
        </p>
      </v-col>

      <!-- Developer Cards -->
      <v-col cols="12" md="4" v-for="(member, i) in team" :key="i">
        <v-card elevation="6" class="pa-6 hoverable text-center rounded-lg">
          <v-avatar size="100" class="mx-auto mb-4">
            <img :src="member.photo" alt="team photo">
          </v-avatar>
          <h3 class="headline mb-2 text-dark">{{ member.name }}</h3>
          <p class="subtitle-2 text-dark mb-3">{{ member.role }}</p>
          <p class="text-dark">{{ member.bio }}</p>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      team: [
        {
          name: "Joseph Jeremy C. Garcia",
          role: "Lead Developer & Founder",
          bio: "With over 10 years of experience in software engineering, Joseph leads the team with innovation and technical excellence.",
          photo: "https://via.placeholder.com/100", 
        },
      ],
    };
  },
};
</script>

<style scoped>
.bg-grey-lighten-4 {
  background-color: #f5f5f5 !important;
}

.text-dark {
  color: #3c4043 !important;
}

.hoverable {
  transition: transform 0.3s, box-shadow 0.3s;
}

.hoverable:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}
</style>
