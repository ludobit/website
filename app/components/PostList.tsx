"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type Post = {
  id: number;
  titolo: string;
  data: string;
  breve: string;
  categoria: string;
  immagine: string;
};

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const { ref, inView } = useInView();

  // Funzione per caricare i post
  const loadPosts = async () => {
    if (loading || !hasMore) return;

    try {
      setLoading(true);
      const res = await fetch(`/api/posts?page=${page}&pageSize=6`);
      const data = await res.json();

      setPosts((prevPosts) => [...prevPosts, ...data.posts]);
      setHasMore(data.hasMore);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Errore nel caricamento dei post:", error);
    } finally {
      setLoading(false);
    }
  };

  // Carica i post iniziali
  useEffect(() => {
    loadPosts();
  }, []);

  // Carica più post quando l'elemento di osservazione è visibile
  useEffect(() => {
    if (inView) {
      loadPosts();
    }
  }, [inView]);

  return (
    <div className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: "var(--card-bg)" }}
          >
            <div
              className="h-48 flex items-center justify-center"
              style={{ backgroundColor: "var(--navbar-bg)" }}
            >
              <span
                className="text-lg font-semibold"
                style={{ color: "var(--text-dark)" }}
              >
                Immagine Articolo
              </span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <span
                  className="text-xs font-semibold px-2.5 py-0.5 rounded"
                  style={{
                    backgroundColor: "var(--navbar-bg)",
                    color: "var(--text-dark)",
                  }}
                >
                  {post.categoria}
                </span>
                <span className="text-sm" style={{ color: "var(--text-dark)" }}>
                  {post.data}
                </span>
              </div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "var(--text-dark)" }}
              >
                {post.titolo}
              </h3>
              <p className="mb-4" style={{ color: "var(--text-dark)" }}>
                {post.breve}
              </p>
              <button
                className="font-medium transition-colors"
                style={{ color: "var(--text-dark)" }}
              >
                Leggi l'articolo →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Elemento di riferimento per l'osservatore di intersezione */}
      {hasMore && (
        <div ref={ref} className="flex justify-center my-8">
          {loading ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse"></div>
              <div
                className="w-4 h-4 rounded-full bg-blue-500 animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-4 h-4 rounded-full bg-blue-500 animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          ) : (
            <span style={{ color: "var(--text-dark)" }}>
              Caricamento di altri post...
            </span>
          )}
        </div>
      )}

      {!hasMore && posts.length > 0 && (
        <div className="text-center my-8">
          <span style={{ color: "var(--text-dark)" }}>
            Hai raggiunto la fine dei post disponibili
          </span>
        </div>
      )}
    </div>
  );
}
