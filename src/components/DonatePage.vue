<template>
  <v-container fluid class="pa-8 bg-grey-lighten-4">
    <v-row>
      <v-col cols="12" class="text-center mb-10">
        <h1 class="display-1 font-weight-bold text-dark">Support Our Mission</h1>
        <p class="subtitle-1 text-dark mx-auto" style="max-width: 780px;">
          Your donation helps us continue providing innovative computer engineering
          solutions, community tech support, and educational services. Every contribution counts!
        </p>
      </v-col>
    </v-row>

    <v-row class="justify-center mb-8">
      <v-col cols="12" md="6">
        <v-card class="pa-6 rounded-xl hoverable" elevation="4">
          <h2 class="headline font-weight-bold text-dark mb-4">Choose an Amount</h2>

          <v-btn-toggle
            v-model="selectedAmount"
            mandatory
            class="d-flex flex-wrap justify-center"
          >
            <v-btn
              v-for="amount in presets"
              :key="amount"
              class="ma-2 px-6 py-4"
              color="deep-purple accent-4"
              rounded
            >
              ₱{{ amount }}
            </v-btn>
          </v-btn-toggle>

          <v-text-field
            v-model="customAmount"
            label="Or Enter Custom Amount"
            type="number"
            class="mt-4"
            min="1"
          ></v-text-field>

          <v-text-field
            v-model="name"
            label="Your Name (Optional)"
            class="mt-4"
          ></v-text-field>

          <v-btn
            color="deep-purple accent-4"
            rounded
            large
            block
            class="mt-6"
            @click="donate"
          >
            Donate Now
          </v-btn>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="text-center mt-10">
        <p class="subtitle-2 text-dark">
          We appreciate your generosity! Together, we build smarter technology and a smarter community.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "DonatePage",
  data() {
    return {
      selectedAmount: null,
      customAmount: "",
      name: "",
      presets: [50, 100, 200, 500, 1000],
    };
  },
  methods: {
    donate() {
      let amount = this.customAmount
        ? parseFloat(this.customAmount)
        : this.selectedAmount;

      if (!amount || amount <= 0) {
        Swal.fire({
          title: "Invalid Donation",
          text: "Please select or enter a valid amount.",
          icon: "error",
          confirmButtonColor: "#673ab7",
        });
        return;
      }

      Swal.fire({
        title: "Thank You!",
        html: `
          <p>Your donation of <b>₱${amount}</b> has been received.</p>
          ${
            this.name
              ? `<p>We appreciate your support, <b>${this.name}</b>!</p>`
              : `<p>We appreciate your generosity!</p>`
          }
        `,
        icon: "success",
        confirmButtonColor: "#673ab7",
      });

      this.selectedAmount = null;
      this.customAmount = "";
      this.name = "";
    },
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
  transition: 0.3s ease;
}

.hoverable:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.15);
}
</style>
