'use client';

import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Apa itu VPS dan bagaimana cara kerjanya?",
      answer: "VPS (Virtual Private Server) adalah server virtual yang berjalan pada server fisik. Setiap VPS memiliki resource (CPU, RAM, Storage) yang terpisah dan dapat dikonfigurasi secara independen, memberikan Anda kontrol penuh seperti server dedicated namun dengan harga lebih terjangkau."
    },
    {
      question: "Apa perbedaan antara VPS, Shared Hosting, dan Dedicated Server?",
      answer: "Shared Hosting berbagi resource dengan banyak pengguna lain, VPS memberikan resource terjamin yang terpisah dari pengguna lain, sedangkan Dedicated Server memberikan akses penuh ke server fisik. VPS adalah solusi tengah yang menawarkan keseimbangan antara performa dan biaya."
    },
    {
      question: "Bagaimana cara mengelola VPS saya?",
      answer: "Anda dapat mengelola VPS melalui SSH dengan command line, menggunakan control panel seperti cPanel/Plesk (tersedia di paket tertentu), atau melalui dashboard kami yang user-friendly untuk operasi dasar seperti reboot, reinstall OS, dan monitoring resource."
    },
    {
      question: "Sistem operasi apa yang tersedia?",
      answer: "Kami menyediakan berbagai pilihan OS termasuk Ubuntu, CentOS, Debian, Fedora, dan Windows Server. Anda dapat menginstal ulang OS kapan saja melalui dashboard kami tanpa perlu menghubungi support."
    },
    {
      question: "Apakah data saya aman di VPSPro?",
      answer: "Ya, keamanan adalah prioritas kami. Kami menyediakan DDoS protection, firewall, backup otomatis, dan opsi SSL certificate. Data center kami juga memiliki keamanan fisik berlapis dan sertifikasi keamanan internasional."
    },
    {
      question: "Bagaimana proses backup dan restore?",
      answer: "Kami menyediakan backup otomatis harian atau mingguan tergantung paket Anda. Anda dapat melakukan restore dengan mudah melalui dashboard kami. Untuk paket Enterprise, kami juga menyediakan backup real-time."
    },
    {
      question: "Bisakah saya upgrade atau downgrade paket saya?",
      answer: "Tentu saja! Anda dapat upgrade atau downgrade paket kapan saja melalui dashboard kami. Proses upgrade biasanya instan, sedangkan downgrade mungkin memerlukan beberapa saat untuk migrasi data."
    },
    {
      question: "Apakah ada jaminan uptime?",
      answer: "Ya, kami memberikan jaminan uptime 99.9%. Jika uptime tidak tercapai, kami akan memberikan kompensasi berupa kredit untuk bulan berikutnya sesuai dengan SLA kami."
    },
    {
      question: "Bagaimana dengan dukungan teknis?",
      answer: "Kami menyediakan dukungan teknis 24/7 melalui tiket, live chat, dan telepon. Paket Professional dan Enterprise mendapatkan prioritas support dengan response time lebih cepat."
    },
    {
      question: "Apakah ada biaya tersembunyi?",
      answer: "Tidak, kami transparan dengan harga. Yang Anda lihat di halaman pricing adalah yang Anda bayar. Tidak ada biaya setup atau biaya tersembunyi lainnya."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Pertanyaan yang sering diajukan tentang layanan VPS kami
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleQuestion(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-blue-50 dark:bg-gray-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Masih memiliki pertanyaan?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Tim support kami siap membantu menjawab semua pertanyaan Anda
            </p>
            <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block">
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}