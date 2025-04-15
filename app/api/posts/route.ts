import { NextRequest, NextResponse } from "next/server";

// Dati di esempio per i post
const allPosts = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  titolo: `Post ${i + 1}: ${
    ["Cloud Native", "Microservizi", "DevOps", "Frontend", "Backend"][i % 5]
  } - Parte ${Math.floor(i / 5) + 1}`,
  data: new Date(2023, 11 - (i % 12), 1 + (i % 28)).toLocaleDateString(
    "it-IT",
    { day: "numeric", month: "long", year: "numeric" }
  ),
  breve: `Questo è un breve riassunto del post numero ${
    i + 1
  }. Contiene informazioni interessanti su tecnologie e sviluppo.`,
  categoria: ["Cloud", "Architettura", "DevOps", "Frontend", "Backend"][i % 5],
  immagine: "/placeholder.jpg",
}));

export async function GET(request: NextRequest) {
  // Ottieni i parametri di query
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "1");
  const pageSize = parseInt(searchParams.get("pageSize") || "6");

  // Calcola l'offset e il limite
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  // Ritarda la risposta per simulare un caricamento realistico
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Ottieni i post per la pagina corrente
  const posts = allPosts.slice(start, end);

  // Determina se ci sono altre pagine
  const hasMore = end < allPosts.length;

  return NextResponse.json({
    posts,
    hasMore,
    totalPosts: allPosts.length,
  });
}
