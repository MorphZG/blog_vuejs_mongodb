import { reactive } from "vue";

const store = reactive({
  posts: [
    {
      title: "Cudnovati naslov",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: new Date(),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut enim blandit volutpat maecenas volutpat. Vel orci porta non pulvinar neque. Nulla at volutpat diam ut venenatis tellus in metus. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Amet facilisis magna etiam tempor. Fermentum odio eu feugiat pretium. Potenti nullam ac tortor vitae purus faucibus. Consequat id porta nibh venenatis cras sed. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Praesent elementum facilisis leo vel. Malesuada nunc vel risus commodo viverra."
    },
    {
      title: "Alisa u zemlji cudesa",
      description:
        "Odio ut enim blandit volutpat maecenas volutpat. Vel orci porta non pulvinar neque. Nulla at volutpat diam ut venenatis tellus in metus.",
      date: new Date(),
      content:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut enim blandit volutpat maecenas volutpat. Vel orci porta non pulvinar neque. Nulla at volutpat diam ut venenatis tellus in metus. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Amet facilisis magna etiam tempor. Fermentum odio eu feugiat pretium. Potenti nullam ac tortor vitae purus faucibus. Consequat id porta nibh venenatis cras sed. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Praesent elementum facilisis leo vel. Malesuada nunc vel risus commodo viverra. "
    },
    {
      title: "Zagreb grad",
      description:
        "Vel quam elementum pulvinar etiam non quam lacus suspendisse. Non curabitur gravida arcu ac tortor dignissim convallis aenean.",
      date: new Date(),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut enim blandit volutpat maecenas volutpat. Vel orci porta non pulvinar neque. Nulla at volutpat diam ut venenatis tellus in metus. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Amet facilisis magna etiam tempor. Fermentum odio eu feugiat pretium. Potenti nullam ac tortor vitae purus faucibus. Consequat id porta nibh venenatis cras sed. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Praesent elementum facilisis leo vel. Malesuada nunc vel risus commodo viverra."
    }
  ]
});

export default store;
