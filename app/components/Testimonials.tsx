export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahmad Pratama",
      position: "Full Stack Developer",
      company: "TechStart Indonesia",
      avatar: "AP",
      content: "VPSPro memberikan performa luar biasa untuk aplikasi web saya. Uptime 99.9% benar-benar terbukti, dan tim support sangat responsif saat saya mengalami kendala teknis.",
      rating: 5
    },
    {
      name: "Sarah Wijaya",
      position: "CEO",
      company: "E-Commerce Solutions",
      avatar: "SW",
      content: "Setelah mencoba beberapa provider VPS, VPSPro adalah yang terbaik. Kecepatan loading website kami meningkat drastis dan konversi penjualan pun ikut naik.",
      rating: 5
    },
    {
      name: "Budi Santoso",
      position: "System Administrator",
      company: "Digital Agency",
      avatar: "BS",
      content: "Fitur backup otomatis dan keamanan tingkat tinggi membuat pekerjaan saya lebih mudah. Harga yang ditawarkan juga sangat kompetitif untuk kualitas yang didapatkan.",
      rating: 5
    },
    {
      name: "Maya Putri",
      position: "Product Manager",
      company: "StartupTech",
      avatar: "MP",
      content: "Kami menggunakan VPSPro untuk hosting aplikasi mobile backend kami. Performanya stabil dan skalabilitasnya memudahkan kami saat traffic meningkat pesat.",
      rating: 5
    },
    {
      name: "Rizki Hakim",
      position: "DevOps Engineer",
      company: "FinTech Company",
      avatar: "RH",
      content: "Dokumentasi yang lengkap dan API yang mudah digunakan membuat integrasi dengan sistem kami berjalan lancar. Highly recommended untuk developer!",
      rating: 5
    },
    {
      name: "Lisa Permata",
      position: "Digital Marketer",
      company: "Creative Agency",
      avatar: "LP",
      content: "Website klien kami yang menggunakan VPSPro memiliki loading time yang jauh lebih baik. Ini sangat penting untuk SEO dan user experience.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Apa Kata Pelanggan Kami
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ribuan pelanggan telah mempercayai VPSPro untuk kebutuhan hosting mereka
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Bergabung dengan Ribuan Pelanggan Puas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <p className="text-3xl font-bold text-blue-600">5000+</p>
                <p className="text-gray-600 dark:text-gray-400">Pelanggan Aktif</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">99.9%</p>
                <p className="text-gray-600 dark:text-gray-400">Uptime</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">24/7</p>
                <p className="text-gray-600 dark:text-gray-400">Support</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">4.9/5</p>
                <p className="text-gray-600 dark:text-gray-400">Rating</p>
              </div>
            </div>
            <a href="#pricing" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block">
              Mulai Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}