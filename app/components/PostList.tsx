"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Modal from "./Modal";
import PostDetail from "./PostDetail";
import Image from "next/image";

type Post = {
  id: number;
  titolo: string;
  data: string;
  breve: string;
  contenuto: string;
  categoria: string[] | string;
  immagine: string;
};

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const { ref, inView } = useInView();

  // Utilizza useEffect per pulire lo stato al mount del componente
  useEffect(() => {
    // Reset completo dello stato
    setPosts([]);
    setPage(1);
    setHasMore(true);
    setLoading(false);

    // La chiave di questo effetto è che si esegue solo una volta al mount
  }, []); // Dipendenze vuote = esegui solo al mount

  // Funzione per caricare i post
  const loadPosts = async () => {
    // Se il caricamento è già in corso o non ci sono più post, interrompi
    if (loading || !hasMore) return;

    try {
      setLoading(true);

      // Nota: includiamo timestamp per evitare caching del browser
      const timestamp = new Date().getTime();
      const res = await fetch(
        `/api/posts?page=${page}&pageSize=6&t=${timestamp}`
      );

      if (!res.ok) {
        throw new Error("Errore nel caricamento dei post");
      }

      const data = await res.json();

      // Imposta i post solo se il componente è ancora montato e non ci sono post duplicati
      setPosts((prevPosts) => {
        // Filtra per rimuovere eventuali duplicati
        const newPosts = data.posts.filter(
          (newPost: Post) =>
            !prevPosts.some((existingPost) => existingPost.id === newPost.id)
        );

        return [...prevPosts, ...newPosts];
      });

      setHasMore(data.hasMore);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Errore nel caricamento dei post:", error);
    } finally {
      setLoading(false);
    }
  };

  // Carica i post iniziali dopo che il componente è montato e lo stato è resettato
  useEffect(() => {
    // Carica solo se non ci sono post e non stiamo già caricando
    if (posts.length === 0 && !loading && page === 1) {
      loadPosts();
    }
  }, [posts.length, loading, page]);

  // Carica più post quando l'elemento di osservazione è visibile
  useEffect(() => {
    if (inView && !loading) {
      loadPosts();
    }
  }, [inView]);

  // Gestione apertura/chiusura della modale
  const openPostDetail = (post: Post) => {
    setSelectedPost(post);
  };

  const closePostDetail = () => {
    setSelectedPost(null);
  };

  return (
    <>
      <div className="py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={`post-${post.id}-${page}`}
              className="rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02] cursor-pointer"
              style={{ backgroundColor: "var(--card-bg)" }}
              onClick={() => openPostDetail(post)}
            >
              <div className="h-48 relative overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={post.immagine}
                    alt={post.titolo}
                    fill
                    style={{ objectFit: "cover" }}
                    onError={(e) => {
                      // Fallback per immagini che non possono essere caricate
                      return (
                        <div
                          className="w-full h-full flex items-center justify-center fallback-image hidden"
                          style={{ backgroundColor: "var(--navbar-bg)" }}
                        >
                          <span
                            className="text-lg font-semibold"
                            style={{ color: "var(--text-dark)" }}
                          >
                            Immagine Articolo
                          </span>
                        </div>
                      );
                    }}
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(post.categoria) ? (
                      post.categoria.map((cat, index) => (
                        <span
                          key={`tag-${post.id}-${index}`}
                          className="text-xs font-semibold px-2.5 py-0.5 rounded"
                          style={{
                            backgroundColor: "var(--navbar-bg)",
                            color: "var(--text-dark)",
                          }}
                        >
                          {cat}
                        </span>
                      ))
                    ) : (
                      <span
                        className="text-xs font-semibold px-2.5 py-0.5 rounded"
                        style={{
                          backgroundColor: "var(--navbar-bg)",
                          color: "var(--text-dark)",
                        }}
                      >
                        {post.categoria}
                      </span>
                    )}
                  </div>
                  <span
                    className="text-sm"
                    style={{ color: "var(--text-dark)" }}
                  >
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
                <div className="w-4 h-4 rounded-full bg-gray-300 animate-pulse"></div>
                <div
                  className="w-4 h-4 rounded-full bg-gray-300 animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-4 h-4 rounded-full bg-gray-300 animate-pulse"
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

      {/* Modale per il dettaglio del post */}
      <Modal
        isOpen={!!selectedPost}
        onClose={closePostDetail}
        title={selectedPost?.titolo}
      >
        {selectedPost && <PostDetail {...selectedPost} />}
      </Modal>
    </>
  );
}
