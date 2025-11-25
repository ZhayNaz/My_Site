<template>
  <v-container fluid class="pa-6 bg-grey-lighten-4">
    <!-- Header -->
    <v-row>
      <v-col cols="12" class="text-center mb-10">
        <h1 class="display-1 font-weight-bold text-dark mb-4">
          Contact Us
        </h1>
        <p class="subtitle-1 text-dark mx-auto" style="max-width: 800px;">
          Reach out to us for consultations, project inquiries, or support. We are here to help your business grow with innovative computer engineering solutions.
        </p>
      </v-col>
    </v-row>

    <v-row dense>
      <!-- Contact Form -->
      <v-col cols="12" md="6">
        <v-card elevation="4" class="pa-6 rounded-lg hoverable">
          <h3 class="headline mb-4 text-dark">Send a Message</h3>

          <v-form ref="contactForm" v-model="valid">
            <v-text-field
              label="Full Name"
              v-model="form.name"
              :rules="[v => !!v || 'Name is required']"
              required
            ></v-text-field>

            <v-text-field
              label="Email"
              v-model="form.email"
              :rules="[v => !!v || 'Email is required', v => /.+@.+/.test(v) || 'Email must be valid']"
              required
            ></v-text-field>

            <v-text-field
              label="Subject"
              v-model="form.subject"
              required
            ></v-text-field>

            <v-textarea
              label="Message"
              v-model="form.message"
              :rules="[v => !!v || 'Message is required']"
              rows="5"
              required
            ></v-textarea>

            <v-btn
              color="deep-purple accent-4"
              rounded
              large
              class="mt-4"
              @click="submitForm"
            >
              Send Message
            </v-btn>
          </v-form>
        </v-card>
      </v-col>

      <!-- Company Info -->
      <v-col cols="12" md="6">
        <v-card elevation="4" class="pa-6 rounded-lg hoverable">
          <h3 class="headline mb-4 text-dark">Our Information</h3>

          <v-list dense>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="deep-purple accent-4">mdi-map-marker</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>123 Tech Street, City, Country</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="deep-purple accent-4">mdi-phone</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>+63 912 345 6789</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="deep-purple accent-4">mdi-email</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>info@zhaytech.com</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <!-- Map Placeholder -->
          <div class="mt-6" style="height: 200px; background-color: #e0e0e0; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
            <span class="text-dark">[ Map Placeholder ]</span>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      valid: false,
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.contactForm.validate()) {
        alert(`Message sent!\nName: ${this.form.name}\nEmail: ${this.form.email}`);
        // Reset form
        this.form.name = "";
        this.form.email = "";
        this.form.subject = "";
        this.form.message = "";
      }
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
  transition: transform 0.3s, box-shadow 0.3s;
}

.hoverable:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}
</style>
