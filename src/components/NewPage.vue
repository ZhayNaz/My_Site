<template>
  <v-container class="pa-8 d-flex justify-center">
    <v-card class="create-blog-card rounded-xl pa-6" elevation="8">
      <h1 class="text-h4 font-weight-bold mb-6 text-center">Create New Blog</h1>

      <v-text-field
        v-model="title"
        label="Blog Title"
        variant="outlined"
        class="mb-4"
        dense
        clearable
      />

      <v-textarea
        v-model="content"
        label="Blog Content"
        variant="outlined"
        rows="6"
        class="mb-4"
        auto-grow
      />

      <v-file-input
        v-model="imageFile"
        label="Upload Image"
        accept="image/*"
        outlined
        show-size
        class="mb-4"
        :multiple="false"
      />

      <!-- Preview selected image -->
      <v-img
        v-if="imagePreview"
        :src="imagePreview"
        height="200"
        class="mb-4 rounded-lg"
      ></v-img>

      <v-btn
        class="gradient-btn"
        large
        block
        @click="savePost"
      >
        Save Post
      </v-btn>
    </v-card>
  </v-container>
</template>

<script>
import { db, storage } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default {
  name: "NewPage",
  data() {
    return {
      title: "",
      content: "",
      imageFile: null,
      imagePreview: null
    };
  },
  watch: {
    imageFile(newFile) {
      if (newFile && newFile instanceof File) {
        this.imagePreview = URL.createObjectURL(newFile);
      } else {
        this.imagePreview = null;
      }
    }
  },
  methods: {
    async savePost() {
      if (!this.title || !this.content) {
        alert("Please fill in all fields!");
        return;
      }

      try {
        let imageUrl = "";

        if (this.imageFile && this.imageFile instanceof File) {
          const storageRef = ref(storage, `blog-images/${Date.now()}-${this.imageFile.name}`);
          const snapshot = await uploadBytes(storageRef, this.imageFile);
          imageUrl = await getDownloadURL(snapshot.ref);
        }

        await addDoc(collection(db, "blogs"), {
          title: this.title,
          description: this.content,
          image: imageUrl,
          tags: [],
          createdAt: serverTimestamp()
        });

        alert("Blog saved successfully!");
        this.title = "";
        this.content = "";
        this.imageFile = null;
        this.imagePreview = null;
        this.$router.push("/blogs");

      } catch (error) {
        console.error("Error saving blog:", error);
        alert("Failed to save blog. Check console for details.");
      }
    }
  }
};
</script>

<style scoped>
.create-blog-card {
  width: 100%;
  max-width: 600px;
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease;
}

.create-blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.gradient-btn {
  background: linear-gradient(135deg, #7e57c2, #673ab7);
  color: white;
  font-weight: 600;
  transition: 0.3s ease;
}

.gradient-btn:hover {
  transform: scale(1.03);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}
</style>
