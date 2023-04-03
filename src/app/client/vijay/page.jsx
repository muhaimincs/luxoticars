import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import {
  InstagramIcon,
  YoutubeIcon,
} from '@/components/SocialIcons'
import Img1 from './gallery/img1.jpeg'
import Img2 from './gallery/img2.jpeg'
import Img3 from './gallery/img3.jpeg'
import Img4 from './gallery/img4.jpeg'
import Img5 from './gallery/img5.jpeg'
import Img6 from './gallery/img6.jpeg'
import Img7 from './gallery/img7.jpeg'

export const metadata = {
  title: 'vijay',
  description: 'Pada tahun 2009, seawal-awal saya baru setahun jagung berkecimpung dalam industri automotif, Vijay adalah antara customer saya terawal membeli kereta dengan saya iaitu kereta Toyota Caldina 2.0 ZT 2005.',
  openGraph: {
    title: 'vijay',
    description: 'Pada tahun 2009, seawal-awal saya baru setahun jagung berkecimpung dalam industri automotif, Vijay adalah antara customer saya terawal membeli kereta dengan saya iaitu kereta Toyota Caldina 2.0 ZT 2005.',
    url: 'https://luxoticars.cc/client/vijay',
    siteName: 'Luxoticars',
    images: [
      {
        url: Img1.default,
        width: 800,
        height: 600,
      },
    ],
    locale: 'my-MS',
    type: 'article',
  },
};

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium transition text-zinc-200 hover:text-red-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-200 transition group-hover:fill-red-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export default function IcahfaPage() {
  return (
    <>
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-rose-300 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
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
                    Vijay
                  </h1>
                  <p className="relative mt-6 text-xl leading-8 text-gray-200 sm:max-w-md lg:max-w-none">
                    Pada tahun 2009, seawal-awal saya baru setahun jagung berkecimpung dalam industri automotif, Vijay adalah antara customer saya terawal membeli kereta dengan saya iaitu kereta Toyota Caldina 2.0 ZT 2005.
                  </p>
                  <p className="relative mt-3 text-lg leading-2 text-gray-200 sm:max-w-md lg:max-w-none">
                    Ketika ini maklumlah saya masih baru lagi berurusniaga dengan customer, jadi pelbagai masalah saya hadapi dan saya tak boleh selesaikan dengan baik. Masa ini saya dan Vijay pun belum mendirikan rumah tangga, masing-masing darah panas. Hampir bergaduh dengannya, siapa tak marah kalau tunggu kereta sampai 3 bulan, mood pun boleh hilang untuk memiliki kereta baru.
                  </p>
                  <p className="relative mt-3 text-lg leading-2 text-gray-200 sm:max-w-md lg:max-w-none">
                    Toyota Caldina pada tahun tersebut memang sedang menjadi trend anak muda dan glamor, masa ini media sosial belum menjadi lubuk untuk ditayangkan kemewahan dan flex segala macam kereta.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <Image
                        src={Img7}
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
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">Perkenalan</h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-gray-200">
                  Vijay pada tahun ini hanya memiliki sebuah kereta Honda kalau tak silap. Bekerja dalam bidang perkapalan dan logistik. Saya mengenali beliau adalah melalui rakannya Gopi, Gopi juga membeli dengan saya Toyota Caldina 2.0 ZT.
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-gray-100">
                  <p>
                    Saya mengenali Vijay melalui Gopi yang introduce kepada saya untuk membeli kereta tersebut.
                  </p>
                  <p className="mt-3">
                    “Kau cari Abu, aku beli Caldina dengan dia sebelum ini, kereta memang elok dan cantik”- Ujar Gopi.
                  </p>
                  <p className="mt-3">
                    Setelah sekian lama menunggu kereta idaman, akhirnya berjaya. Kereta dah keluar, apa yang kami berselisih sebelum itu menjadi neutral semula, orang dah dapat kereta, daripada panas boleh bertukar menjadi sejuk. 
                  </p>
                  <p className="mt-3">
                    Senyum pun terukir bila nampak kereta baru!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values section */}
        <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">Rekemen</h2>
            <p className="mt-6 text-xl leading-8 text-gray-200">
              Vijay seorang yang terburu-buru dan sangat workaholic. Hingga ke hari ini semasa saya sedang mencoret kenangan mengenai beliau, beliau tidak putus-putus menghubungi saya dan rekemen semua rakan-rakannya membeli kereta dengan saya. 
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-200">
              Puji Syukur atas kepercayaannya pada LUXOTICARS! 
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-200">
              Pada tahun 2012, beliau membeli kereta kedua dengan saya iaitu BMW 525i SE E60 tahun 2009 warna silver kalau tak silap.
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-200">
              Perniagaan beliau semakin maju. Urusan yang mudah kerana kami sudah rapat, jadi urusan tersebut lebih santai. Macam biasa servis saya akan deliver depan pintu, saya deliver kereta tersebut di Port Klang Oldtown Coffee, malam selepas office hour. 
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-200">
              Tidak semua customer saya akan deliver depan pintu, kalau pada bulan itu saya jual banyak memang tidak sempatlah nak melayani semua. Maaf!
            </p>
          </div>
        </div>

        {/* Logo cloud */}
        <div className="relative isolate -z-10 mt-10">
          <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg className="h-[40rem] w-[80rem] flex-none stroke-gray-500" aria-hidden="true">
              <defs>
                <pattern
                  id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                  width={200}
                  height={200}
                  x="50%"
                  y="50%"
                  patternUnits="userSpaceOnUse"
                  patternTransform="translate(-100 0)"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y="50%" className="overflow-visible fill-gray-800">
                <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth={0} />
              </svg>
              <rect width="100%" height="100%" strokeWidth={0} fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" />
            </svg>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div>
                <p className="text-lg leading-8 text-gray-200">
                  Tahun 2014 kalau tidak silap, kereta ketiga. Vijay menghubungi saya
                </p>
                <p className="text-lg my-6 leading-8 text-gray-200">
                  “Bro, u have 523i F10 M-sport in hand?”
                </p>
                <p className="text-lg leading-8 text-gray-200">
                  Ada dua perkara jika customer call secara tiba-tiba samada kereta ada problem atau ingin menukar kereta. Saya jawab,
                </p>
                <p className="text-lg my-6 leading-8 text-gray-200">
                  “U are lucky man! I got 1 unit Dark Blue just arrive, come and have a look bro!”
                </p>
                <p className="hidden lg:block text-right text-gray-400 italic text-xs my-6">Bersambung disebelah kanan</p>
              </div>
              <div>
                <p className="text-lg leading-8 text-gray-200">
                  Ketika ini Vijay hendak menjual BMW E60 lamanya.
                </p>
                <p className="text-lg my-6 leading-8 text-gray-200">
                  “Wow cepatnya tukar kereta bro!”
                </p>
                <p className="text-lg leading-8 text-gray-200">
                  Kali ini urusan dengan beliau agak kelam-kabut kerana kereta lamanya E60 tidak dapat dijual. Vijay menjual pada sepupunya. Barulah BMW F10 dapat keluar. Sempat bergambar bersama bakal isterinya. Sekarang sudah menjadi isteri. 
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-start gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div>
                <p className="text-lg leading-8 text-gray-200">
                  Pada tahun 2017, setiap 2 tahun dia tukar kereta, ini kereta keempat. Vijay call lagi,
                </p>
                <p className="text-lg my-6 leading-8 text-gray-200">
                  “Bro any C-class in stock?, i don’t want black ya”
                </p>
                <p className="text-lg leading-8 text-gray-200">
                  Kali ini untuk isterinya, kereta Mercedes Benz C180 AMG 2011 W211 warna silver. Masa ini paling mudah dan cepat berurusan, kerana kami sudah betul-betul menjadi kawan. Order sahaja pasti ada, tidak pernah saya kata tiada stock.
                </p>
                <p className="text-lg leading-8 text-gray-200">
                  Number plate sempena namanya “<strong>VJ</strong>”.
                </p>
                <p className="text-lg leading-8 text-gray-200">
                  Saya kongsikan disini gambar kenangan bersama isteri tercinta. Masa ini era modern, media sosial menjadi pilihan untuk kongsikan bukti gambar delivery. 
                </p>
                <div>
                  <Image
                    src={Img5}
                    alt=""
                    className="aspect-[2/3] h-1/3 rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                </div>
                <p className="hidden lg:block text-right text-gray-400 italic text-xs my-6">Bersambung disebelah kanan</p>
              </div>
              <div>
                <p className="text-lg leading-8 text-gray-200">
                  Tidak lama kemudian. Tahun 2018. Ini unit kelima, Vijay call lagi.
                </p>
                <p className="text-lg my-6 leading-8 text-gray-200">
                  “Bro, im looking for Mercedes A-Class for my sister in-law, ada tak?”
                </p>
                <p className="text-lg my-6 leading-8 text-gray-200">
                  “Bro, kalau u call, tak pernah saya kata takde stock.. hahaha!”
                </p>
                <p className="text-lg leading-8 text-gray-200">
                  Satu family datang di showroom saya, meriah jadinya. So, kakak iparnya membeli kereta dengan saya Mercedes Benz A180 AMG 2013 warna putih. Ini sahaja sempat saya videokan di Youtube Bigbadassboysv10. Video pendek, mula-mula nak start Youtube! Saya kongsikan disini. 
                </p>
                <div className="rounded-xl overflow-hidden w-full h-full">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/4oa-Dq69fug"
                    title="Luxoticars - A 180 Delivery"
                    className="w-full aspect-video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="text-lg leading-8 text-gray-200">
                  Dalam tahun yang sama 2018, rakannya Kantha Raj yang mana satu ketika dulu pernah cuba membeli kereta dengan saya tetapi gagal atas beberapa faktor yang tidak boleh saya sebut disini.
                </p>
                <p className="text-lg leading-8 text-gray-200">
                  Saran Raj adik kepada Kantha Raj membeli dengan saya kereta Toyota Vellfire 2.5 ZG Full Specs 2016 warna putih. Saran muda lagi ketika ini, biasalah berurusan dengan orang muda semuanya tergesa-gesa nak cepat. 
                </p>
                <p className="text-lg leading-8 text-gray-200">
                  Hingga bapanya seolah-olah memahami keadaan saya melayani anaknya cukup huru-hara. Ketika deliver kereta terebut, bapanya memberi tips pada RM300,
                </p>
                <p className="text-lg my-6 leading-8 text-gray-200">
                  “Abu take this, well done! I suka deal dengan u, u orang baik, i know my son ask u so many things”. Kata bapanya.
                </p>
                <p className="text-lg leading-8 text-gray-200">
                  Kantha Raj seorang ahli perniagaan dalam bidang Medical Supplier dan memiliki Restoran Rikhsha di Bangsa, sesiapa yang terbaca di sini, boleh singgah makan tengahari. Sedap!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl lg:mx-0">
            <div className="relative float-right lg:ml-6 mb-6">
              <Image
                src={Img6}
                alt="Toyota Vellfire 2.5 Z Type Modelista 2018"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
              />
            </div>
            <p className="mt-3 text-lg leading-8 text-gray-200">
              Pada tahun ini 2023, unit keenam. Vijay call lagi. 
            </p>
            <p className="mt-3 text-lg my-6 leading-8 text-gray-200">
              “Bro, can help me to do the loan for my friends? He’s looking for Toyota Vellfire 2.5 Z Type Modelista 2018, black”
            </p>
            
            <p className="mt-3 text-lg leading-8 text-gray-200">
              Kawannya Gobinath dari Kedah Sungai Petani. Katanya loan yang dipohon oleh rakannya semua tidak berjaya. Sampai di tangan saya jadi lulus pulak. Saya study casenya, dimana yang sesuai untuk saya submit sampai lulus. 
            </p>
            <div className='float-left  mr-6 mt-6'>
              <div className="relative aspect-w-4 aspect-h-5 sm:aspect-w-16 sm:aspect-h-9 w-20 sm:w-44">
                <Image
                  src={Img7}
                  alt="Tumbler"
                  // sizes="(min-width: 1024px) 20rem, 10rem"
                  className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
              </div>
            </div>
            <p className="mt-3 text-lg leading-8 text-gray-200 p-3">
              Akhirnya impian rakanya tercapai memiliki Toyota Vellfire 2.5 Z Type Modelista 2018 warna putih. Gembira tidak terkata, katanya, pergi di dealer lain semua tidak dilayan, beli di LUXOTICARS dilayan dengan baik hingga dapat memilikinya. Saya kongsikan gambar disini. 
            </p>
            
            <p className="mt-3 text-xl leading-8 text-gray-200">
              Selama lebih 10 tahun saya berkawan dengan Vijay atas urusan jual beli kereta, dari bujang hingga berumah tangga. Saya ucapkan ribuan terima kasih pada beliau kerana memberi keprcayaan penuh pada LUXOTICARS!
            </p>
          </div>
        </div>
      </main>
      <div className="py-10 clear-both">
        <Footer />
      </div>
    </>
  )
}
