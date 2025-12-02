import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-slide-in-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Server VPS <span className="text-blue-600">Tinggi</span> untuk Kebutuhan <span className="text-blue-600">Anda</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Dapatkan performa maksimal dengan Virtual Private Server kami. Dirancang khusus untuk developer dan bisnis yang membutuhkan keandalan tinggi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#pricing" className="btn-hover bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors text-center">
                Mulai Sekarang
              </Link>
              <Link href="#features" className="btn-hover border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors text-center dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-800">
                Lihat Fitur
              </Link>
            </div>
            <div className="mt-10 flex items-center space-x-8">
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">99.9%</p>
                <p className="text-gray-600 dark:text-gray-400">Uptime Guarantee</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">24/7</p>
                <p className="text-gray-600 dark:text-gray-400">Support</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">30</p>
                <p className="text-gray-600 dark:text-gray-400">Hari Garansi</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12 animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-200 rounded-lg transform rotate-6 dark:bg-blue-900"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded p-4 font-mono text-sm">
                    <p className="text-green-600 dark:text-green-400">$ ssh root@vpspro.example.com</p>
                    <p className="text-gray-600 dark:text-gray-400">Welcome to VPSPro Server!</p>
                    <p className="text-gray-600 dark:text-gray-400">Last login: Mon Dec 3 02:15:32 2025</p>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">CPU Usage</span>
                      <span className="text-sm">24%</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2 dark:bg-gray-600">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '24%' }}></div>
                    </div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Memory Usage</span>
                      <span className="text-sm">67%</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2 dark:bg-gray-600">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '67%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}