export default function GifCard({ gif }) {
  const imageUrl = gif.images.fixed_height.url;
  const title = gif.title || "GIF Tanpa Judul";

  return (
    // PERBAIKAN: Ubah background kartu menjadi kondisional
    <div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer 
                    transition-all duration-300 ease-in-out 
                    hover:shadow-2xl hover:scale-[1.03] hover:ring-2 hover:ring-accent-teal/60">
      {/* Gambar GIF */}
      <div className="relative w-full aspect-square md:aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition duration-500 group-hover:opacity-90"
          loading="lazy"
        />
      </div>

      {/* Teks Overlay/Footer */}
      <div
        className="absolute inset-x-0 bottom-0 p-3 
                      bg-gradient-to-t from-gray-200/90 to-transparent 
                      dark:from-gray-900/90 dark:to-transparent">
        <p className="text-sm font-light text-gray-800 dark:text-gray-100 truncate">
          {title}
        </p>
      </div>
    </div>
  );
}
