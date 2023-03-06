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

export const metadata = {
  title: 'Icahfa',
  description: 'En. Fauzi adalah customer saya yang lama sejak dari tahun 2012. Kereta pertama yang beli dengan saya ialah Toyota Vellfire 2.4 ZG 2011',
  openGraph: {
    title: 'Icahfa',
    description: 'En. Fauzi adalah customer saya yang lama sejak dari tahun 2012. Kereta pertama yang beli dengan saya ialah Toyota Vellfire 2.4 ZG 2011',
    url: 'https://luxoticars.cc/client/icahfa',
    siteName: 'Luxoticars',
    images: [
      {
        url: 'https://i.ytimg.com/vi/xWuVDJMrtTo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D&rs=AOn4CLCszhyD44mzgYnrdixLdR-7VTLZwQ',
        width: 800,
        height: 600,
      },
    ],
    locale: 'my-MS',
    type: 'article',
  },
};

export default function IcahfaPage() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={Img1}
                alt="En. Fauzi"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-xl font-bold tracking-tight text-zinc-200 sm:text-3xl">
              ICAHFA
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-200">
              <p>En. Fauzi adalah customer saya yang lama sejak dari tahun 2012. Kereta pertama yang beli dengan saya ialah Toyota Vellfire 2.4 ZG 2011</p>
              <p>
                Berkenalan dengan beliau adalah melalui kawannya salah seorang dari group motor Ampang Chapter, dari sini lah saya mula berkenalan dengan beliau dan titik permulaan kami berkawan dan berurusan jual beli kereta.
                Seterusnya urusan kedua jual beli kereta dengan beliau adalah Toyota Vellfire 2.5 ZG High Specs 2016 pada tahun 2017. 
              </p>
              <div className="max-w-xs lg:max-w-none">
                <Image
                  src={Img4}
                  alt="Toyota Vellfire 2.5 ZG High Specs 2016"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-video rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </div>
              <p>
                Kereta pertama beliau iaitu Vellfire di trade-in melalui saya dan diganti dengan model yang baru. Urusan ini berlaku pada bulan Ramadhan, malam, kereta untuk berhari raya katanya. Setahun kemudian beliau menghubungi saya sekali lagi bertanyakan tentang kereta jenis Mercedes Benz A250 AMG.
              </p>
              <div className="max-w-xs lg:max-w-none">
                <Image
                  src={Img3}
                  alt=""
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-video rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </div>
              <p>Ini adalah kereta ketiga beliau membeli dengan saya, kereta untuk ke masjid ujar beliau.</p>
              <p>
                Tugas saya seperti biasa sentiasa menghantar gambar-gambar kereta dengan sengaja memaklumkan apa kereta terbaik yang telah sampai di showroom saya. Setelah 2 tahun berlalu, akhirnya beliau menghubungi saya bertanyakan pada saya mengenai kereta dimana saya sendiri minat dengan model kereta tersebut iaitu Porsche.
              </p>
              <p>
                Pada waktu ini saya sudah berpindah di showroom yang lain, tanpa menziarahi saya, beliau meminta saya bawakan kereta Porsche tersebut ke rumah beliau untuk demonstrasi dan setuju untuk membeli hasil dari chai saya, Porsche 718 Cayman. Biasalah servis saya dari mula hingga deliver sampai ke rumah customer, dari mula beli hingga deliver beliau tidak pernah datang ke showroom saya atas dasar kepercayaan penuh pada LUXOTICARS.
              </p>
              <div className="max-w-xs lg:max-w-none">
                <Image
                  src={Img2}
                  alt="Toyota Vellfire 2.5 ZG High Specs 2016"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-video rounded-2xl object-cover bg-zinc-800"
                />
              </div>
              <p>
              Kami sentiasa berhubung dan sentiasa menjaga hubungan silaturrahim, En. Fauzi adalah seorang ahli perniagaan pakaian muslimah bersama isteri tercinta dan mempunyai beberapa cawangan di seluruh malaysia, juga seorang yang <em>humble</em> dan <em>low-profile</em>. 
              </p>
              <div className="rounded-xl overflow-hidden w-full h-full">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/xWuVDJMrtTo"
                  title="HOME DELIVERY KENA CHAI MERCEDES BENZ GLC 250 COUPE // WEDNESDAY DELIVERY"
                  className="w-full aspect-video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p>Pada tahun 2021, ini unit kelima beli dengan saya,  saya terima call dari beliau berkenaan kereta Mercedes-Benz GLC250 2019, urusan ini juga beliau tidak ke showroom saya dan meminta saya bawa kereta ke rumah untuk tunjuk pada kak icah, akak ko suka kereta ni bu, ujar beliau. Dalam masa 2 minggu akhirnya kereta selamat register, macam biasa tugas saya deliver sampai depan pintu, saya ada buat sedikit review di Youtube LUXOTICARS.</p>
              <p>Situasi yang sama beliau juga tidak datang ke showroom, hingga sekarang beliau masih tidak pasti saya berada di showroom mana, tahu-tahu kereta muncul depan pintu.</p>
              <div className="max-w-xs lg:max-w-none">
                <Image
                  src={Img5}
                  alt="Mercedes-Benz G63 AMG"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-video rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </div>
              <p>Pada tahun 2022, sekian lama kami jarang berhubung, sekali lagi beliau call saya berkenaan kereta Mercedes-Benz G63 AMG, ini unit keenam beli dengan saya. Haa ini rezeki raya! Dah lama aku aim kereta ni buu! Ha apa lagi, Chai lah!!</p>
              <p>Esok juga saya bawa kereta tersebut kerumah beliau, hasil perbincangan yang tidak mencapai kesepakatan bersama kak icah, akhirnya beliau booking tanpa pengetahuan isteri haha! Ko diam-diam buu, jangan sampai bini aku tahu, esok pandai-pandai lah aku chai dia. Urusan berjalan lancar, akhirnya G63 tersebut register dan saya deliver di KLIA Airport pada hari raya kedua dan menyambut beliau yang baru saje menunaikan Umrah dengan kereta baru!</p>
              <p>Kak icah tergamam membisu, bila nampak kereta biasalah muka senyum lebar. Terima kasih En. Fauzi dan Kak Icah berurusan dengan saya bertahun lama dan memberi kepercayaan penuh pada LUXOTICARS!</p>
              <div className="max-w-xs lg:max-w-none">
                <Image
                  src={Img6}
                  alt="Mercedes-Benz G63 AMG"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-video rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </div>
            </div>
          </div>
          <div className="lg:pl-20">
          <ul role="list">
              <SocialLink href="https://instagram.com/luxoticars" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://youtube.com/luxoticars" icon={YoutubeIcon} className="mt-4">
                Follow on Youtube
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
      <div className="py-10">
        <Footer />
      </div>
    </>
  )
}
