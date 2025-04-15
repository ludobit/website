"use client";

import PostList from "../components/PostList";
import { useLanguage } from "../context/LanguageContext";

export default function PostPage() {
  const { t, language } = useLanguage();
  return (
    <div className="py-8">
      <h1
        className="text-3xl font-bold mb-8"
        style={{ color: "var(--text-dark)" }}
      >
        {t("posts")}
      </h1>
      <PostList />
    </div>
  );
}
