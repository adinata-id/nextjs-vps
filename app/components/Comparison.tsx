export default function Comparison() {
  const features = [
    { name: "Harga Mulai Dari", vpspro: "Rp 150.000/bulan", competitorA: "Rp 200.000/bulan", competitorB: "Rp 250.000/bulan" },
    { name: "CPU Cores (Paket Dasar)", vpspro: "1 Core", competitorA: "1 Core", competitorB: "1 Core" },
    { name: "RAM (Paket Dasar)", vpspro: "2 GB", competitorA: "1 GB", competitorB: "2 GB" },
    { name: "Storage (Paket Dasar)", vpspro: "40 GB NVMe SSD", competitorA: "25 GB SSD", competitorB: "30 GB SSD" },
    { name: "Bandwidth", vpspro: "Unlimited", competitorA: "1 TB/bulan", competitorB: "2 TB/bulan" },
    { name: "Uptime Guarantee", vpspro: "99.9%", competitorA: "99.5%", competitorB: "99%" },
    { name: "Backup Otomatis", vpspro: "Ya (Harian/Mingguan)", competitorA: "Opsional (Berbayar)", competitorB: "Tidak" },
    { name: "DDoS Protection", vpspro: "Ya (Semua Paket)", competitorA: "Paket Enterprise", competitorB: "Tidak" },
    { name: "SSL Certificate", vpspro: "Gratis (Paket Pro+)", competitorA: "Berbayar", competitorA: "Berbayar" },
    { name: "Support 24/7", vpspro: "Ya (Semua Paket)", competitorA: "Paket Business+", competitorB: "Paket Enterprise" },
    { name: "Control Panel", vpspro: "Gratis Dashboard", competitorA: "Berbayar", competitorB: "Berbayar" },
    { name: "Setup Time", vpspro: "Instan", competitorA: "1-24 Jam", competitorB: "6-24 Jam" },
    { name: "Money Back Guarantee", vpspro: "30 Hari", competitorA: "14 Hari", competitorB: "7 Hari" },
    { name: "Lokasi Server", vpspro: "Indonesia, Singapore, US", competitorA: "Singapore", competitorB: "US" }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Perbandingan dengan Kompetitor
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Lihat mengapa VPSPro adalah pilihan terbaik untuk kebutuhan hosting Anda
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full max-w-5xl mx-auto">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                  Fitur
                </th>
                <th className="text-center py-3 px-4 font-semibold text-blue-600">
                  VPSPro
                </th>
                <th className="text-center py-3 px-4 font-semibold text-gray-600 dark:text-gray-400">
                  Kompetitor A
                </th>
                <th className="text-center py-3 px-4 font-semibold text-gray-600 dark:text-gray-400">
                  Kompetitor B
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 text-gray-900 dark:text-white">
                    {feature.name}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="inline-flex items-center justify-center">
                      {feature.vpspro.includes("Ya") || feature.vpspro.includes("Instan") || feature.vpspro.includes("Unlimited") || feature.vpspro.includes("Gratis") ? (
                        <span className="text-green-600 font-semibold">{feature.vpspro}</span>
                      ) : (
                        <span className="text-gray-900 dark:text-white">{feature.vpspro}</span>
                      )}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400">
                    {feature.competitorA}
                  </td>
                  <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400">
                    {feature.competitorB}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Masih Ragu? Coba Gratis 7 Hari!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Rasakan sendiri performa VPSPro tanpa risiko. Tidak perlu kartu kredit.
            </p>
            <a href="#pricing" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block">
              Mulai Uji Coba Gratis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}