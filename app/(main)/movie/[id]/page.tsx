import { Header } from "@/app/components/header";
import { BackButton, MovieDetails } from "@/app/components/movies/MoviePage";
import { getMovieById } from "@/app/lib/api/omdb";
import { Footer } from "@/app/components/footer";

interface MoviePageProps {
  params: {
    id: string;
  };
}

export default async function MoviePage({ params }: MoviePageProps) {
  const movie = await getMovieById(params.id);
  if (!movie) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col">
        <BackButton />
        <div className="max-w-4xl mx-auto text-center py-20 flex-1">
          <h1 className="text-2xl font-bold mb-4">Movie not found</h1>
          <p className="text-gray-400">
            Please try searching for another movie
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-1">
        <BackButton className="mb-6" />
        <MovieDetails movie={movie} />
      </div>
      <Footer />
    </div>
  );
}
