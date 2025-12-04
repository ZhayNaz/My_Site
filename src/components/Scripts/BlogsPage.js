import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export default {
  name: "BlogsPage",

  data() {
    return {
      blogs: [],
      loading: true,
    };
  },

  async created() {
    await this.loadBlogsFromFirebase();
  },

  methods: {
    async loadBlogsFromFirebase() {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));

        this.blogs = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
      } catch (error) {
        console.error("Error loading blogs:", error);
      } finally {
        this.loading = false;
      }
    },

    readMore(id) {
      this.$router.push(`/blogs/${id}`);
    },

    addNewPost() {
      this.$router.push("/blogs/new");
    },
  },
};
