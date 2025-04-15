import PostList from "../components/PostList";

export default function PostPage() {
  return (
    <div className="py-8">
      <h1
        className="text-3xl font-bold mb-8"
        style={{ color: "var(--text-dark)" }}
      >
        Blog e Articoli
      </h1>
      <PostList />
    </div>
  );
}
