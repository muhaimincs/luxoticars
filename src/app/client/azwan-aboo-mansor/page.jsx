import Image from 'next/image'

import { siteUrl } from 'app.config'
import { Footer } from '@/components/Footer'
import Img1 from './gallery/img1.jpeg'
import Img2 from './gallery/img2.jpeg'
import Img3 from './gallery/img3.jpeg'
import Img4 from './gallery/img4.jpeg'
import Img5 from './gallery/img5.jpeg'

export const metadata = {
  title: 'Azwan Aboo Mansor',
  description: 'Ini antara pelanggan saya paling lama saya mengenali beliau, tahun 2009.',
  image: `${siteUrl}/client/azwan-aboo-mansor.jpeg`,
  url: `${siteUrl}/client/azwan-aboo-mansor`,
  openGraph: {
    title: 'Client: Azwan Aboo Mansor | LUXOTICARS',
    description: 'Ini antara pelanggan saya paling lama saya mengenali beliau, tahun 2009.',
    url: `${siteUrl}/client/azwan-aboo-mansor`,
    siteName: 'Luxoticars',
    images: [
      {
        url: `${siteUrl}/client/azwan-aboo-mansor.jpeg`,
        width: 1080,
        height: 1080,
      },
    ],
    locale: 'my-MS',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client: Azwan Aboo Mansor',
    description: 'Ini antara pelanggan saya paling lama saya mengenali beliau, tahun 2009.',
    url: `${siteUrl}/client/azwan-aboo-mansor`,
    siteName: 'Luxoticars',
    images: [`${siteUrl}/client/azwan-aboo-mansor.jpeg`],
  },
  bookmarks: [
    siteUrl,
    `${siteUrl}/client/azwan-aboo-mansor`
  ],
};

export default function AzwanAbooMansorPage() {
  return (
    <>
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full opacity-50 stroke-rose-300 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-rose-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#df2c2c] opacity-30"
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight uppercase text-gray-200 sm:text-6xl">
                    Dato Azwan Aboo Mansor
                  </h1>
                  <p className="relative mt-6 text-xl leading-8 text-gray-200 sm:max-w-md lg:max-w-none">
                    Ini antara pelanggan saya paling lama saya mengenali beliau, tahun 2009.
                  </p>
                  <p className="relative mt-3 text-lg leading-2 text-gray-200 sm:max-w-md lg:max-w-none">
                    Dato Azwan adalah seorang usahawan dalam sektor perancang pengurusan kewangan dan pelaburan. Saya mengenali beliau seawal saya baru setahun jagung dalam automotif industri sewaktu saya bekerja di sekitar Jalan Genting Kelang Setapak.
                  </p>
                  <p className="relative mt-3 text-lg leading-2 text-gray-200 sm:max-w-md lg:max-w-none">
                    Pada masa saya mengenalinya, beliau belum lagi dianugerahkan pangkat Dato’. Seorang yang berwatak plegmatic
                  </p>
                  <p className="relative mt-3 leading-2 text-gray-200 sm:max-w-md lg:max-w-none">
                    Tahun 2009, pada masa perkenalan kami, beliau memandu sebuah kereta jenis Toyota Estima dan beberapa kereta model yang lain. Sepanjang tahun kami hanya berhubung berkenaan dengan isu kereta yang hendak dibeli. Tiada transaksi jual beli kereta yang berlaku antara kami sehinggalah pada tahun 2014.
                  </p>
                  <p className="relative mt-3 leading-2 text-gray-200 sm:max-w-md lg:max-w-none">
                    Tahun 2013 saya berjaya menjual sebuah kereta BMW 528i 3.0 F10 warna putih tahun 2010. Pada tahun tersebut, BMW diantara model kereta yang terbaru dan paling laris. 
                  </p>
                  <p className="relative mt-3 leading-2 text-gray-200 sm:max-w-md lg:max-w-none">
                  Saya tidak sempat untuk bergambar dengan beliau, maklumlah ketika ini media sosial belum menjadi tumpuan seperti sekarang.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <Image
                        src={Img1}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <Image
                        src={Img2}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        src={Img3}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <Image
                        src={Img4}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        src={Img5}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto -mt-12 max-w-3xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">Dunia Permotoran</h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-gray-200">
                  Dalam tahun yang sama, selang beberapa bulan saya menjual lagi pada beliau sebuah kereta jenis Mercedes Benz C250 Coupe AMG warna merah tahun 2013
                </p>
                <div className='my-5'>
                  <Image
                    src={Img1}
                    alt=""
                    className="aspect-1 rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                </div>
                <div className="mt-5 text-lg leading-7 text-gray-100">
                  <p>
                    Memandangkan beliau sangat suka tentang dunia permotoran, anak sulungnya Azim juga dihantar melanjutkan pendidikan dalam bidang permotoran.
                  </p>
                  <p className="mt-3">
                    Sejak berurusan jual beli kereta dengannya, beliau kerap datang ke showroom saya hanya semata-mata untuk berbual dan minum kopi. Kami menjadi rapat dan selalu berjumpa berbual tentang dunia kereta.
                  </p>
                  <p className="mt-3">
                    Kebetulan kami berjiran dalam satu kawasan dan selalu berselisih.
                  </p>
                  <p className="mt-3">
                    Pada tahun 2015, beliau membeli lagi dengan saya kereta jenis Mercedes Benz S400L Hybrid AMG warna hitam tahun 2013.
                  </p>
                  <p className="mt-3">
                    Beliau memilih membeli kereta ini kerana terlalu sibuk dan untuk diberikan kepada driver, kereta ini jenis panjang dan memang untuk dipandu oleh driver dan beliau duduk di kerusi belakang.
                  </p>
                  <p className="mt-3">
                    Pada ketika ini beliau telah dianugerahkan pangkat Dato’. Sentiasa segak ketika datang bersantai di showroom dengan blazer. 
                  </p>
                  <div className='grid md:grid-cols-2 md:gap-10'>
                    <div className='mt-5'>
                      <Image
                        src={Img5}
                        alt=""
                        className="aspect-2 rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                    </div>
                    <p className="mt-3">
                      Tahun 2016, ketika anak sulungnya telah tamat melanjutkan pendidikan, sekali lagi beliau menghadiahkan pada anak sulungnya sebuah kereta sport, Nissan GTR 35 warna putih tahun 2012.
                    </p>
                  </div>
                  <p className="mt-3">
                    Kereta anak muda, kereta koleksi dan idaman oleh semua golongan belia pada masa tersebut hingga kini. Orang kata, kereta bohjan lah! 
                  </p>
                  <p className="mt-3">
                    Sepanjang kami berkawan, beliau sentiasa memberi sokongansepanjang perjalanan saya sebagai seorang Salesman jalanan, dan sentiasa rekemen saya pada rakan-rakan beliau dan kejiranan membeli dan berurusan jual beli kereta dengan saya.
                  </p>
                  <p className="mt-3">
                    Jutaan terima kasih pada Dato’ Azwan kerana sentiasa memberi kepercayaan penuh pada LUXOTICARS!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="py-10 clear-both">
        <Footer />
      </div>
    </>
  )
}
