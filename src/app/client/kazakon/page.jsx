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

export const metadata = {
  title: 'KAZAKON',
  description: 'Saya berjumpa dan berkenalan dengan En. Faizal pada tahun 2012 melalui walk-in atau walk-in customer.',
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
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <h1 className="xl:hidden text-xl font-bold tracking-tight text-zinc-200 sm:text-3xl">
              KAZAKON
            </h1>
            <div className="mt-3 px-2.5 max-w-none">
              <Image
                src={Img1}
                alt="En. Fauzi"
                sizes="(min-width: 1024px) 32rem, 48rem"
                className="aspect-square xl:rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="hidden xl:block text-xl font-bold tracking-tight text-zinc-200 sm:text-3xl">
              KAZAKON
            </h1>
            <div className="mt-0 xl:mt-6 space-y-7 text-base text-zinc-200">
              <p>Saya berjumpa dan berkenalan dengan En. Faizal pada tahun 2012 melalui walk-in atau walk-in customer</p>
              <p className='text-slate-500 pl-10 border-l-4 border-l-slate-600'>Sebelum itu saya mohon maaf kerana penulisan saya agak boring untuk dibaca kerana saya banyak menggunakan bahasa pasar atau penulisan ini tidak menggunakan bahasa yang tinggi, tiada metafora dan ayat-ayat yang mendalam maksudnya.
              Jika pembaca agak meluat untuk membaca boleh baca benda yang lebih berfaedah atau tinggalkan website ini.
              Ini hanyalah penulisan perkongsian saya sepanjang ‘berhobi’ di dalam industri kereta dan saya menulis hanya untuk meninggalkan kenangan dan tanda persahabatan kami. </p>
              <p>Pembelian pertama beliau dengan LUXOTICARS adalah kereta jenis <Link href="/s/mercedes-benz/1" className='text-red-100 hover:text-red-500'>Mercedes Benz</Link> C180 AMG Bluefficiency W204 2012.</p>
              <p>Beliau datang walk-in bersama ayahnya En. Ayob. Waktu ini kebetulan di showroom saya ada banyak <Link href="/s/mercedes-benz/1" className='text-red-100 hover:text-red-500'>Mercedes Benz</Link> C-Class lebih dari 20 units Merc saje.</p>
              <p>Rambang mata lah jadinya hahaha! Masa ini Merc C180 AMG menjadi product laris dan menjadi lauk bagi Salesman kerana orang kata ‘barang senang jual, barang panas’! Semasa saya menulis ini ayahanda beliau yang saya kenali sudah meninggal dunia...</p>
              <p>Urusan yang begitu mudah dengan beliau, akhirnya berjaya memiliki kereta tersebut <Link href="/s/mercedes-benz/1" className='text-red-100 hover:text-red-500'>Merc</Link> C180 AMG Bluefficiency 2012 W204 warna silver.</p>
              <p>Beberapa tahun kemudian, beliau hubungi saya,</p>
              <p>“bu kau ada <Link href="/s/audi/1" className='text-red-100 hover:text-red-500'>Audi</Link> TT?“</p>
              <p>Dukacitanya saya tiada model tersebut, saya menawarkan ‘Special Order’ pada beliau. Selang beberapa hari saya jumpa stock tersebut di London UK, <Link href="/s/audi/1" className='text-red-100 hover:text-red-500'>Audi</Link> TT 2.0 Quattro Black Edition 2013 warna merah!</p>
              <p>Pukul 2am pagi saya menghantar Whatsapp pada beliau. Terpaksa kacau pagi kerana Timezone di UK berbeza 8 jam dengan Malaysia.</p>
              <p>“Cepat, kau kena decide sekarang, kalau tak kereta ni mesti kena sapu!”</p>
              <p>Esok nya beliau transfer booking terus sebagai tanda jadi, hanya confirm melalui gambar sahaja.</p>
              <p>Terima kasih atas kepercayaan dengan LUXOTICARS!</p>
              <p>Setelah hampir 2 bulan menunggu kereta sampai, akhirnya beliau berjaya memilikinya. Barang sampai dengan gambar yang ditunjukan sama.</p>
              <p>Janji A dapat A!</p>
              <p>Saya kongsikan gambar disini. Masa ni saya belum aktif untuk buat video. Ini antara ‘Special Order” yang agak mudah, kerana sekali tunjuk gambar terus on! Kereta bohjan katanya.</p>
              <div className="max-w-xs lg:max-w-none">
                <Image
                  src={Img3}
                  alt=""
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-video rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </div>
              <p>2 tahun kemudian iaitu 2017, Faizal recommend adiknya Fazlee atau Pali membeli kereta dengan saya.</p>
              <p>“Ha kau call mamat ni, die boleh tolong kau”.</p>
              <p>Adik nya Pali membeli dengan saya kereta <Link href="/s/toyota/1" className='text-red-100 hover:text-red-500'>Toyota</Link> Harrier 2.0 Premium 2015 warna hitam. Faizal dan Fazlee adalah selaku pengarah urusan KAZAKON SDN. BHD., sebab itu tajuk penulisan ini saya letak KAZAKON.</p>
              <p>Dalam tahun yang sama, Faizal recommend lagi satu customer pada saya, tak silap nama customer tersebut Hj. Saimon. Hj. Saimon juga mencari <Link href="/s/toyota/1" className='text-red-100 hover:text-red-500'>Toyota</Link> Harrier 2.0 Premium 2015 warna hitam.</p>
              <p>Saya ada kongsikan gambar sekali disini sebagai kenangan.</p>
              <div className="max-w-sm lg:max-w-none">
                <Image
                  src={Img2}
                  alt=""
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-video rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </div>
              <p>Pada tahun 2019, Faizal menghubungi saya.</p>
              <p>“Bu aku nak jual la Audi TT merah ni, ko ada buyer?”</p>
              <p>Pada waktu ini seluruh dunia sedang mengalami wabak COVID-19 dan PKP lockdown. Pada saya mengapa beliau hendak menjual kereta tersebut adalah mungkin kerana banyak sektor yang terpaksa tutup atau tidak dapat beroperasi. Mungkin beliau hendak minimize kan overhead syarikat beliau. Jadi saya membantu untuk jualkan kereta itu.</p>
              <p>Senang cerita, Audi TT itu dibeli oleh media team saya RED SHOES STUDIO! Sekurang-kurangnya saya nampak kereta tu depan mata dan pemandunya. Saya dan beliau sentiasa berhubung dan selalu lepak minum kopi di showroom saya.</p>
              <p>Lepas ini kalau dia beli lagi kereta saya sambung penulisan ini..</p>  
              <div className="max-w-sm lg:max-w-none">
                <Image
                  src={Img4}
                  alt=""
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
