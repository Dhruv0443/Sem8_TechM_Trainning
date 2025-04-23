import PostList from "./components/PostList";
import withDataFetch from "./hoc/withDataFetch";

const PostsWithFetch = withDataFetch(PostList,'https://jsonplaceholder.typicode.com/posts');
function App() {
  return (
    <div className="App">
      <h1>HOC Data Fetching Example</h1>
      <PostsWithFetch/>
    </div>
  );
}

export default App;
