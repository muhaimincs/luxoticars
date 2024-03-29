import Link from 'next/link'

import { siteUrl } from 'app.config'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { HeroPattern } from '@/components/HeroPattern'
import datoAzwan from './azwan-aboo-mansor/gallery/img1.jpeg'
import vijay from './vijay/gallery/img1.jpeg'
import kazakon from './kazakon/gallery/img1.jpeg'
import icahfa from './icahfa/gallery/img2.jpeg'
import alhumaira from './alhumaira-contemporary/gallery/img1.jpeg'

export const metadata = {
  title: 'My Clients',
  description: 'Tentang client Luxoticars',
  openGraph: {
    title: 'My Clients',
    description: 'Tentang client Luxoticars',
    url: `${siteUrl}/client`,
    siteName: 'Luxoticars',
    locale: 'my-MS',
    type: 'article',
  },
};

const data = [
  {
    name: 'Dato Azwan Aboo Mansor',
    description: 'Ini antara pelanggan saya paling lama saya mengenali beliau, tahun 2009.',
    images: datoAzwan,
    url: 'azwan-aboo-mansor',
  },
  {
    name: 'Vijay',
    description: 'Pada tahun 2009, seawal-awal saya baru setahun jagung berkecimpung dalam industri automotif, Vijay adalah antara customer saya terawal membeli kereta dengan saya iaitu kereta Toyota Caldina 2.0 ZT 2005.',
    images: vijay,
    url: 'vijay',
  },
  {
    name: 'Kazakon',
    description: 'Saya berjumpa dan berkenalan dengan En. Faizal pada tahun 2012 melalui walk-in atau walk-in customer.',
    images: kazakon,
    url: 'kazakon',
  },
  {
    name: 'ICAHFA',
    description: 'Saya berjumpa dan berkenalan dengan En. Faizal pada tahun 2012 melalui walk-in atau walk-in customer.',
    images: icahfa,
    url: 'icahfa',
  },
  {
    name: 'Alhumaira Contemporary',
    description: 'Saya berjumpa dan berkenalan dengan En. Faizal pada tahun 2012 melalui walk-in atau walk-in customer.',
    images: alhumaira,
    url: 'alhumaira-contemporary',
  }
]

export default function ClientPage() {
  return (
    <>
      <HeroPattern />
      <Container className="mt-16 sm:mt-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:grid-cols-2 pb-4">
          <article className='w-full lg:mx-0 lg:max-w-lg space-y-4'>
            <h2 id="featured-post" className='mt-4 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl'>
              Client History
            </h2>
            <p className="text-xl leading-8 text-gray-200">Salam Sejahtera kepada semua customer saya dan juga penggemar dalam dunia kereta.</p>
            <p className="text-gray-200">Sebelum itu saya ingin menyatakan kepada sesiapa yang tidak suka dengan website ini dan penulisan saya yang agak hambar ini boleh tinggalkan web ini atau cari bahan bacaan yang lebih bermakna.</p>
            <p className="text-gray-200">Ruangkan ini adalah tempat saya menyantuni kenangan pahit dan manis semasa berurusan dengan semua customer sepanjang perjalanan sebagai seorang Salesman cabuk. Kerjaya ini yang saya sebut sebagai ‘Hobi’ adalah suatu kerjaya yang cukup dipandang enteng oleh semua jagat raya manusia di seluruh dunia. Itu adalah pandangan mereka, tetapi tidak bagi saya, kerana kerjaya saya disini lebih dinamik dan cukup menyentuh hati</p>
            <p className="text-gray-200">Saya tidak menjual ‘keperluan’ tetapi saya hanya si tukang merealisasikan impian mendapatkan impian.</p>
            <p className="text-gray-200">Saya mengambil pelajaran dari ahli tokoh Yunani, Socrates, Plato dan Aristotle. Mereka ini hanyalah tokoh falsafah yang lebih kepada kaedah idealistik dan imaginasi yang tidak tercapai. Saya lebih cenderung kepada teknis dan pandangan Machiavellian atau namanya Nicollo Machiavelli iaitu lebih tertumpu kepada realistik bukan khayalan atau imaginasi semata.</p>
            <p className="text-gray-200">Bukan menjurus kepada kekejaman tapi untuk orang yang tinggi intelektualnya akan memahami apa yang dimaksudkan Machiavellian, senang cerita jangan jadi lurus bendul dan harus tegas dalam setiap urusan.</p>
            <p className="text-gray-200">Tidak semua customer yang dapat saya kongsikan kenangan disini, hanya sebahagian. Maklumlah, kurang lebih sedekad lalu tahun 2008, trend media atau bergambar di media bersama customer belum menjadi tumpuan strategi marketing lagi, ketika itu hanya marketing ‘mouth to mouth’ sahaja.</p>
            <p className="text-gray-200">Jadi tidak kesemua customer yang boleh saya tuliskan disini. Gambar pun tak sempat nak ambil, tetapi contact number customer tetap saya simpan hingga kini. Biasalah saya pun belum pernah tukar contact number lagi, sebab tidak ada buat hal kan...</p>
            <p className="text-gray-200">Saya menulis disini kenangan yang hanya terlintas dan bermain-main di minda. Mungkin ketika pembaca yang sedang melewati halaman ini akan nampak sikit atau banyak customer saya, hingga kini saya masih mengarang kisah-kisah pahit manis berurusan dengan customer. </p>
            <p className="text-gray-200">Ada yang lost contact, ada yang menjadi lawan, ada yang meninggal, ada yang berkawan, ada yang pencen, ada yang dah jadi jutawan, ada yang dah buat-buat tak kenal, ada yang dah bercerai-berai, ada yang dah ditangkap, ada yang masuk politik, ada yang dah jadi taukeh dan macam-macam lagi pengalaman yang dialami.</p>
          </article>
          <div className="w-full border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
            <div className="-my-12 divide-y divide-gray-800/10 space-y-3 lg:sticky lg:top-14">
              {data.map((item) => (
                <article>
                  <div className="group relative max-w-xl border rounded-md border-gray-500 px-3 py-4 hover:bg-zinc-600">
                    <h2 className="mt-2 text-lg font-semibold text-gray-300 group-hover:text-red-600">
                      <Link href={`/client/${item.url}`}>
                        <span className='absolute inset-0' />
                        {item.name}
                      </Link>
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <div className="py-10">
        <Footer />
      </div>
    </>
  )
}
