export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Rp 150.000",
      period: "/bulan",
      description: "Cocok untuk website personal atau proyek kecil",
      features: [
        "1 vCPU Core",
        "2 GB RAM",
        "40 GB NVMe SSD",
        "Unlimited Bandwidth",
        "1 IP Address",
        "Backup Mingguan",
        "Basic Support"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "Rp 350.000",
      period: "/bulan",
      description: "Ideal untuk aplikasi web dan bisnis kecil",
      features: [
        "2 vCPU Cores",
        "4 GB RAM",
        "80 GB NVMe SSD",
        "Unlimited Bandwidth",
        "1 IP Address",
        "Backup Harian",
        "Priority Support",
        "SSL Certificate"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Rp 750.000",
      period: "/bulan",
      description: "Untuk aplikasi enterprise dan traffic tinggi",
      features: [
        "4 vCPU Cores",
        "8 GB RAM",
        "160 GB NVMe SSD",
        "Unlimited Bandwidth",
        "2 IP Addresses",
        "Backup Real-time",
        "24/7 Dedicated Support",
        "SSL Certificate",
        "DDoS Protection"
      ],
      highlighted: false
    },
    {
      name: "Ultimate",
      price: "Rp 1.500.000",
      period: "/bulan",
      description: "Solusi lengkap untuk enterprise besar",
      features: [
        "8 vCPU Cores",
        "16 GB RAM",
        "320 GB NVMe SSD",
        "Unlimited Bandwidth",
        "5 IP Addresses",
        "Backup Real-time",
        "24/7 Dedicated Support",
        "SSL Certificate",
        "DDoS Protection",
        "Managed Services"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Paket Harga VPS
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan Anda. Upgrade atau downgrade kapan saja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow ${
                plan.highlighted ? 'ring-2 ring-blue-600 transform scale-105' : ''
              }`}
            >
              {plan.highlighted && (
                <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                  POPULER
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {plan.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button 
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.highlighted 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
                  }`}
                >
                  {plan.highlighted ? 'Pilih Paket Ini' : 'Pilih Paket'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Butuh Paket Kustom?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Kami menyediakan solusi VPS kustom sesuai dengan kebutuhan spesifik Anda. Hubungi tim kami untuk konsultasi gratis.
          </p>
          <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block">
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}