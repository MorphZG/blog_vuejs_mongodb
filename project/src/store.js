import { reactive } from "vue";

const store = reactive({
  posts: [
    {
      id: 1,
      title: "Cudnovati naslov",
      description: "This is the description of a blog post",
      date: new Date()
    },
    {
      id: 2,
      title: "Alisa u zemlji cudesa",
      description: "This is the description of a blog post",
      date: new Date()
    },
    {
      id: 3,
      title: "Zagreb grad",
      description: "This is the description of a blog post",
      date: new Date()
    }
  ]
});

export default store;
