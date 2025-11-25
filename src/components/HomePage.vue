<template>
  <v-container fluid class="pa-6 bg-grey-lighten-4">
    <!-- Header Section with Gradient -->
    <v-row class="mb-12">
      <v-col cols="12" class="text-center">
        <div class="header-gradient pa-12 rounded">
          <h1 class="display-1 font-weight-bold white--text mb-4">
            Welcome to Zhay's Techoprenuership
          </h1>
          <p class="subtitle-1 white--text mb-6">
            Innovative computer engineering solutions to optimize your business.
          </p>
          <v-btn
            color="deep-purple accent-4"
            large
            rounded
            elevation="4"
            @click="$router.push('/contact')"
          >
            Book a Service
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- Services Section -->
    <v-row dense class="mb-12">
      <v-col cols="12" md="4" v-for="(service, i) in services" :key="i">
        <v-card elevation="6" class="pa-6 hoverable text-center rounded-lg">
          <v-avatar size="60" class="mb-4" color="deep-purple accent-4">
            <v-icon size="36" color="white">{{ service.icon }}</v-icon>
          </v-avatar>
          <h3 class="headline mb-3 text-dark">{{ service.title }}</h3>
          <p class="text-dark mb-4">{{ service.description }}</p>
          <v-btn color="deep-purple accent-4" text @click="$router.push('/contact')">
            Request
          </v-btn>
        </v-card>
      </v-col>
    </v-row>

    <!-- Why Choose Us Section -->
    <v-row class="mb-12">
      <v-col cols="12" class="text-center mb-8">
        <h2 class="display-2 font-weight-bold text-dark">Why Choose Us?</h2>
      </v-col>

      <v-col cols="12" md="4" v-for="(reason, i) in reasons" :key="i">
        <v-card outlined class="pa-6 text-center hoverable rounded-lg">
          <v-avatar size="60" class="mb-4" color="deep-purple accent-4">
            <v-icon size="36" color="white">{{ reason.icon }}</v-icon>
          </v-avatar>
          <h3 class="headline mb-2 text-dark">{{ reason.title }}</h3>
          <p class="text-dark">{{ reason.description }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      services: [
        {
          icon: "mdi-desktop-classic",
          title: "System Development",
          description:
            "Custom software and inventory systems for businesses to manage operations efficiently.",
        },
        {
          icon: "mdi-network",
          title: "Network Solutions",
          description:
            "Secure and optimized network setup for small and medium enterprises.",
        },
        {
          icon: "mdi-security",
          title: "Cyber Security",
          description:
            "Protect your business with advanced data security solutions and monitoring.",
        },
      ],
      reasons: [
        {
          icon: "mdi-lightbulb-on-outline",
          title: "Innovative Solutions",
          description: "We create solutions tailored to your unique business needs.",
        },
        {
          icon: "mdi-timer-sand",
          title: "Fast Delivery",
          description: "We implement solutions efficiently without compromising quality.",
        },
        {
          icon: "mdi-account-group",
          title: "Expert Team",
          description: "Professional computer engineers with years of industry experience.",
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

.header-gradient {
  background: linear-gradient(135deg, #7b60aa, #130435);
  text-align: center;
  color: white;
}
</style>
