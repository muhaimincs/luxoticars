import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import {
  InstagramIcon,
  YoutubeIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/p1.jpeg'
import withTeamImage from '@/images/with-team.jpeg'
import youtubeAwwardImage from '@/images/youtube-awward.jpeg'

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

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <div className="mt-6 space-y-7 text-base text-zinc-200">
              <p>
                Pada tahun 2008, atau 15 tahun yang lalu saya melangkah masuk dalam dunia Automotive sebagai Salesman. Saya membuat penulisan ini pada awal tahun 2023, jadi saya kira 15 tahun pengalaman dalam industri ini. Tahun 2005 hingga 2007 saya dalam bidang yang sama, tetapi sebagai Field Sales Executive di syarikat MTM Publication Sdn. Bhd (Motor Trader Magazine) dan OTR Publication Sdn. Bhd. (On The Road Magazine), dari dua syarikat inilah saya mula sendiri belajar mengenai semua jenis kereta. Minat yang mendalam dalam industri Automobil saya terus melibatkan diri dalam dunia Motorsports. Permulaannya saya bercita-cita ingin menjadi Host atau Journalist dalam memnbuat liputan berkenaan kereta, dukacitanya semua permohonan saya di TopGear Magazine ditolak. Hanya diterima di syarikat penerbitan seperti yang saya tulis diatas. Pertengahan tahun 2008 saya bekerja sebagai Broker sementara dan diterima bekerja di syarikat AP Holder, Kumpulaniaga Mahmud Taib Sdn. Bhd. (KNMT) di Setepak Jalan Genting Kelang. Permulaan sebagai seorang Salesman pada waktu itu saya terus menjadi ‘Salesman Recon’. Orang kata, masuk-masuk je terus main kereta mewah, bukan kereta lokal. Kereta recon pertama yang saya jual masa itu adalah Toyota Caldina ZT. Melangkah masuk dalam industri kereta ini saya survive seorang diri tanpa ada sesiapa yang ingin mengajar saya tentang jualan kereta, lebih kurang bunyinya ‘street leaner atau street fighter’. Zaman ini, aplikasi Whatsapp belum 100% digunakan, segala urusan pinjaman bank hanya melalui mesin fax atau walk-in ke bank untuk submit semua permohonan pinjaman bank, tradisional style. 
              </p>
              <p>
                Pada tahun 2010, saya mula berfikir tentang suatu nama yang perlu saya gunakan dalam indusri ini. Perihal ‘nama’ dalam industri amat penting untuk saya membina empayar dan kepercayaan pada pelanggan. Saya memilih suatu entiti “LUXOTICARS” yang digabungkan dalam tiga elemen “Luxury Exotic Cars”. LUXOTICARS ini sebagai kapal dan saya adalah kemudinya. Penjenamaan ini adalah disebabkan, dalam dunia ‘Recon Car’ kesemua jenis kenderaan diketegorikan sebagai ‘luxury’ kerena ia adalah kenderaan yang diimport dan berharga sangat tinggi berbanding dengan negara asal kenderaan itu sendiri jika di malaysia. Pada masa ini (2010), media sosial dianggap masih tidak relevan dan saya sendiri pada masa itu memanfaatkan sepenuhnya platform digital sebagai landasan marketing yang pada masa itu kebanyakan salesman atau broker masih memandang enteng kepada platform tersebut. Saya mula dikenali di platform mudah.my sebagai “Abu Garcia”. Nama inilah yang saya pilih semasa bekerja di syarikat Majalah kereta yang saya tulis diatas tadi. Saya masih simpan namecard saya semasa bekerja di syarikat penerbitan tersebut. Nama ini jugalah pengemudi kapal “LUXOTICARS” hingga sekarang. LUXOTICARS juga adalah satu entiti berdaftar dan saya adalah selaku ‘Founder dan Managing Director, LUXOTICARS SDN. BHD.
              </p>
              <p>
                Sepanjang perjalanan dalam industri, pada awalnya saya seorang salesman yang aktif, orang kata, asal barang jadi duit, tetapi akhirnya saya menjadi lebih selective dalam jualan, hanya menjual kereta yang saya nak jual sahaja. Saya membuat aksioma begini “LUXOTICARS bukanlah sebuah platform kerjaya, tetapi ia adalah hobi”, kerana saya bukan menjual dan menyediakan keperluan, tetapi saya menjual impian. Kereta-kereta yang dijual seperti jenama Porsche, Lamborghini, Ferrari dan Audi bukan satu jentera keperluan, ianya adalah kepuasan dan kehendak nafsu manusia. Inilah yang menariknya dalam “Motorsports World”. Pada pandangan saya, jika saya menjual impian, saya dan customer akan sentiasa ada hubungan yang baik dan berpanjangan sampai bila-bila. Bukan sekadar hubungan transaksional jual beli kereta, tetapi hubungan dalam minat dan hobi yang sama dalam dunia kereta.
              </p>
              <p>
                Pendapat saya, sebagai pemilik syarikat “LUXOTICARS”, saya sendiri tidak perlu memiliki kereta mewah kerana saya hari-hari bergelumang dengan kereta mewah atau ‘Supercars’ yang mana saya boleh terjemahkan, semua orang ingin merasa dan memiliki kereta ‘Supercars’ tetapi saya sendiri hari-hari hanya bersandar sambil membelek telefon di ‘Supercars’ tersebut, hahaha!
              </p>
              <p>
                Di era digitalisasi tahun 2018, ada seorang sahabat seiman datang pada saya, dia mencadangkan “LUXOTICARS” ini boleh diketengahkan dalam dunia digital. Dengan berbekalkan Iphone 6, beliau membuat video saya berkenaan kereta dengan meggunakan handphonenya. Saya langsung tidak memberi keyakinan padanya. Beliau lebih selesa dikenali sebagai “BIGBADASSBOYS” dan bernaung dibawah kapal RED SHOES STUDIO. Bigbadassboys menguruskan segala aktiviti media di Youtube. Hingga kini semasa saya menulis ini tahun 2023, akhirnya LUXOTICARS dikenali dan menjadi bualan. Saya boleh terjemahkan, beliau adalah “Man behind the lens LUXOTICARS with creative idea!”. Dengan hasil karya videonya, akhirnya misi saya tercapai yang mana saya hendak menukar persepsi masyarakat memandang rendah terhadap kerjasa sebagai Car Salesman!
              </p>
              <p>
                Anehnya, title ‘Salesman’ memang sentiasa dipandang hina di mata masyarakat, kalau kita lalu di kaki lima shoplot, sentiasa akan ada signage ‘NO SALESMAN ALLOWED’. Mulut orang selalu berbunyi begini, ‘ORANG NAK BUAT MENANTU PUN TAK LAKU’. Di dalam mana-mana syarikat jualan kereta juga Salesman selalu akan menjadi kambing hitam dan sentiasa akan dipersalahkan dalam apa situasi sekalipun. Apa? Dia ingat kami ni buruh kasar ke yang kena cari duit untuk bayar gaji staff dalam syarikat tu!? Hal ini sering terngiang-ngiang dalam kepala saya hingga kini!
              </p>
              <p>
                Pelbagai cabaran dan pengalaman sepanjang saya ‘Berhobi’ sebegini, saya melihat kehidupan manusia dari awal hingga sukses ke hari ini. Contohnya, customer regular saya dari membeli kereta yang mampu milik hingga memiliki kereta yang tidak mampu milik dan juga saya melihat dari sekecil-kecil perniagaan hingga ke peringkat antarabangsa dan seluruh malaysia. Dari yang sukses hingga terjatuh pun ada. Pelbagai siklus, turun naik, jatuh bangunnya sesebuah empayar perniagaan tersebut. Ini suatu pelajaran dan pengalaman yang cukup memberi kesan dalam perjalanan saya sebagai pengemudi kapal “LUXOTICARS”. 
              </p>
              <p>
                Saya mengingat pesanan seorang sahabat dunia akhirat yang saya tak boleh sebut nama dalam penulisan ini, “Dalam Perjuangan Terkadang Kita Sukses, Terkadang Belajar, Bukan Gagal”
              </p>
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
              <SocialLink
                href="mailto:chai@luxoticars.cc"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                chai@luxoticars.cc
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
