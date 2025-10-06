import { useState, useEffect } from "react";
import GifCard from "./components/GifCard";

const GIPHY_API_KEY =
  import.meta.env.VITE_GIPHY_API_KEY || "YOUR_GIPHY_API_KEY";

export default function App() {
  const [query, setQuery] = useState("");
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Ubah default mode menjadi true (Dark Mode-first, sesuai desain awal)
  const [isDarkMode, setIsDarkMode] = useState(true);

  // LOGIKA DARK MODE
  useEffect(() => {
    // Terapkan class 'dark' pada elemen HTML root
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  // LOGIKA FETCH GIFS (Dipertahankan)
  const fetchGifs = async (searchQuery) => {
    // ... (Logika fetchGifs sama seperti sebelumnya) ...
    if (!searchQuery.trim()) {
      setGifs([]);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${encodeURIComponent(
          searchQuery
        )}&limit=20`
      );
      const data = await res.json();
      setGifs(data.data);
    } catch (error) {
      console.error("Error fetching GIFs:", error);
      setGifs([]);
    } finally {
      setLoading(false);
    }
  };

  // LOGIKA TRENDING GIFS (Dipertahankan)
  useEffect(() => {
    const fetchTrending = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}&limit=20`
        );
        const data = await res.json();
        setGifs(data.data);
      } catch (error) {
        console.error("Error fetching trending GIFs:", error);
      } finally {
        setLoading(false);
      }
    };
    if (!query) {
      // Hanya fetch trending jika query kosong
      fetchTrending();
    }
  }, [query]); // Tambahkan query sebagai dependency untuk memuat ulang saat query dikosongkan

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchGifs(query);
  };

  const handleTrendingClick = () => {
    setQuery("");
  };

  return (
    // PERBAIKAN: Gunakan warna default (terang) dan override dengan dark:
    <div
      className="min-h-screen bg-gray-100 text-gray-900 
                    dark:bg-gray-900 dark:text-gray-100 
                    py-12 px-4 font-sans antialiased transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Header dan Toggle Mode */}
        <header className="flex justify-between items-center mb-10">
          <div className="flex items-center space-x-4">
            <img
              src="/src/assets/gif-oasis-logo.png" // Ganti dengan path (alamat) gambar logo yang sebenarnya
              alt="Logo GIF Oasis"
              className="h-20 w-20 md:h-14 md:w-14" // Atur ukuran logo
            />
            <h1 className="text-4xl font-extrabold text-accent-teal tracking-tighter">
              GIF Oasis : Search App
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            {/* Tombol Dark/Light Mode */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              // PERBAIKAN: Ubah warna tombol agar kondisional
              className="p-2 rounded-full bg-gray-200 text-gray-800
                               dark:bg-gray-800 dark:text-gray-200 
                               hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300"
              title={
                isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
              }>
              <span className="text-xl"> {isDarkMode ? "☀️" : "🌙"}</span>
            </button>
          </div>
        </header>

        {/* Form Pencarian */}
        <form
          onSubmit={handleSubmit}
          className="mb-12 shadow-xl rounded-2xl overflow-hidden">
          <div className="flex">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari GIF yang menarik..."
              // PERBAIKAN: Ubah gaya input agar kondisional
              className="flex-1 px-6 py-4 text-lg border-none focus:outline-none focus:ring-4 focus:ring-accent-teal/50 
                         bg-white text-gray-900 placeholder-gray-500
                         dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400
                         transition duration-300"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-accent-teal text-gray-900 font-bold text-lg 
                         hover:bg-accent-hover transition duration-300 transform active:scale-95">
              Cari
            </button>
          </div>
        </form>

        {/* Area Status & Hasil */}
        <div className="mb-8">
          <button
            onClick={handleTrendingClick}
            className="text-sm font-semibold text-accent-teal hover:underline">
            {query ? "Lihat Trending Sekarang" : "GIF Trending"}
          </button>
        </div>

        {loading && (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-4 border-t-accent-teal border-gray-700 mx-auto mb-4"></div>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Mengambil GIF terbaik...
            </p>
          </div>
        )}

        {/* ... (Error dan No Result sama seperti sebelumnya) ... */}

        {/* Grid Hasil GIF */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {gifs.map((gif) => (
            <GifCard key={gif.id} gif={gif} />
          ))}
        </div>

        <footer className="text-center mt-20 text-gray-500 text-sm dark:text-gray-600">
          <p>
            Powered by GIPHY API | Didesain dengan React & Tailwind CSS oleh{" "}
            <a href="https://www.linkedin.com/in/mwahyusp/">
              Mohammad Wahyu Sanusi Putra
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}
