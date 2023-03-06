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

export const metadata = {
  title: 'Alhumaira Contemporary',
  description: 'Pada tahun 2012, saya berkenalan dengan Humaidi melalui kawan saya Arib, beliau mengenalkan saya dengan Humaidi, berkenaan kereta.',
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
              Alhumaira Contemporary
            </h1>
            <div className="mt-3 px-2.5 max-w-none">
              <Image
                src={Img4}
                alt="En. Fauzi"
                sizes="(min-width: 1024px) 32rem, 48rem"
                className="aspect-square xl:rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="hidden xl:block text-xl font-bold tracking-tight text-zinc-200 sm:text-3xl">
              Alhumaira Contemporary
            </h1>
            <div className="mt-0 xl:mt-6 space-y-7 text-base text-zinc-200">
              <p>Pada tahun 2012, saya berkenalan dengan Humaidi melalui kawan saya Arib, beliau mengenalkan saya dengan Humaidi, berkenaan kereta.</p>
              <p>
                Di awal perkenalan dengan Humaidi, beliau ingin membeli sebuah kereta Mini Cooper untuk isteri tercinta beliau. Humaidi dan isteri adalah usahawan dalam perniagaan tudung jenama Alhumaira Contemporary. Saya mengenali beliau dari sekecil-kecil perniagaan dari Facebook secara online. Pada awalnya, permohonan pinjaman bank agar sukar mendapar kelulusan kerana syarat-syarat kelayakan begitu ketat. Jadi, urusan pembelian <Link href="/s/mini/1">Mini Cooper</Link> terbatal. Awal tahun 2013, beliau menghubungi saya sekali lagi bertanyakan mengenai Toyota Vellfire 2.4 ZG. Pembelian ini berjaya kerana perniagaan beliau semakin berkembang maju. Ini adalah pembelian pertama dengan saya yang berjaya. Saya deliver malam kerumah beliau. Tak berkesempatan saya kongsikan gambar pasangan ini disini. 
              </p>
              <div className="max-w-lg lg:max-w-none">
                <Image
                  src={Img5}
                  alt="Toyota Vellfire 2.5 ZG High Specs 2016"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-video rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </div>
              <p>
                Setelah 2 3 tahun kami tidak berurusan, sekali lagi beliau menghubungi saya bertanyakan <Link href="/s/toyota/1">Toyota</Link> Vellfire 3.5 VL. Kali ini, katanya nak upgrade lebih baru dan laju. Humaidi ni jenis yang ‘jiwa kelajuan’ dan pentingkan enjin. Dalam masa yang sama pasangan ini juga pernah memiliki <Link href="/s/bmw/1">BMW</Link> E46, <Link href="/s/bmw/1">BMW</Link> X5, Mini Countryman, Polo GTi dan <Link href="/s/mercedes-benz/1">Mercedes Benz</Link> A250 yang mana ini semua bukan yang dibeli dari saya. Urusan tersebut di ‘Trade-in’ dengan X5 Hybrid dan diganti dengan Toyota Vellfire 3.5VL warna putih. Ini juga adalah pembelian kedua dengan saya, dan hingga kini masih pakai untuk long distance bawak family balik kampung Kedah, orang kedah. 
              </p>
              <div className="max-w-xs lg:max-w-none">
                <Image
                  src={Img3}
                  alt=""
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-video rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </div>
              <p>Pada tahun 2019, kali ni menarik.</p>
              <p>Beliau stim dengan SVR pula. Katanya nak main V8. Biasalah singgah di showroom saya dan test drive. Biasanya test drive saya tak terbuka untuk semua customer melainkan yang ‘regular customer’ saja. Untuk walk-in customer memang saya tak akan bagi untuk test drive atas dasar keselamatan.</p>
              <p>Beliau test drive <Link href="/s/land-rover/1">Range Rover</Link> Sport SVR V8 5.0 2017. Dan akhirnya setuju untuk membeli SVR. Dalam masa menunggu dan proses loan.</p>
              <p>“Aku rasa aku kena ambil Sport V8 biasalah bu, bini aku kata slow-slow nanti ada rezki lebih jumpa Abu balik baru ambil SVR” kata beliau.</p>
              <p>Dengan nada sedih dia memberi tahu saya. Jadi yang dibeli masa ni adalah Range Rover Sport V8. Pada ketika ini perniagaan pasangan ini sudah ligat maju dan sudah ada kilang sendiri. Saya juga berbangga melihat perjalanan beliau sebagai pengusaha perniagaan dari yang biasa-biasa hingga expansi di seluruh Malaysia.</p>
              <p>Untuk kali ini, Pembelian kereta ketiga dengan saya cukup memberi kesan dalam ‘hobi’ saya, waktu inilah saya di peringkat awal mencuba meluaskan marketing di Youtube, Saya membuat video untuk semua customer yang membeli dengan saya, saya akan simpan kenangan di Youtube. Tidak semua customer yang dapat saya simpan di Youtube. Saya post video pasangan ini bertajuk “Isteri hadiahkan suami Range Rover Sport” , saya kongsikan di halaman ini.</p>
              <div className="rounded-xl overflow-hidden w-full h-full">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/QRXAW_RdVw0"
                  title="Isteri hadiahkan suami Range Rover Sport"
                  className="w-full aspect-video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p>Dan dengan video inilah channel LUXOTICARS mendapat views yang agak mencanak hingga ratusan ribu viewers! Kami sendiri tidak sangka!</p>
              <p>Accidently happened and unexpected! Saya tahu di pihak Humaidi tidak begitu selesa dengan komen-komen yang ada di video ini, isteri beliau juga mengalami tekanan sebenarnya dengan video ini tersebar luas. Biasalah newbie Youtubers mesti akan terima pelbagai kecaman dan tomahan!</p>
              <p>Saya juga tahu bahawa pasangan ini kalau boleh hendak berkata pada saya agar video ini dibuang atau delete, tetapi beliau tidak tahu bagaimana untuk memberitahu saya. Serba salah pula jadinya, saya mengharapkan sale dari video tersebut, beliau pula tidak selesa dan mengharungi kritikan.</p>
              <p>Apa-apa pun saya sangat berterima kasih dengan situasi ini, kerana inilah permulaan saya aktif di Youtube dan bekerjasama dengan RED SHOES STUDIO.</p>
              <div className="max-w-xs lg:max-w-none">
                <Image
                  src={Img2}
                  alt="Toyota Vellfire 2.5 ZG High Specs 2016"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-video rounded-2xl object-cover bg-zinc-800"
                />
              </div>
              <p>Dalam tahun yang sama 2019, Humaidi menghubungi saya lagi,</p>
              <p>“Bu Range Rover Evogue ko ada tak? Aku ingat nak beli kereta untuk Hani la. Tapi aku nak trade in la Mercedes Benz A250 aku tu”.</p>
              <p>Kebetulan masa membuat loan untuk Range Rover Sport V8 itu, permohonan bank lulus dengan dua bank, jadi ada slot lagi satu untuk Evogue.</p>
              <p>Akhirnya, dalam tahun yang sama, beliau membeli dua buah kereta dengan LUXOTICARS, iaitu Range Rover Sport V8 dan Range Rover Evogue Si4. Saya deliver waktu malam seingat saya kerumah beliau. Saya ada membuat video ringkat di Youtube LUXOTICARS!</p>
              <p>Situasi yang sama beliau juga tidak datang ke showroom, hingga sekarang beliau masih tidak pasti saya berada di showroom mana, tahu-tahu kereta muncul depan pintu.</p>
              <p>Tahun 2022, Sekali lagi Humaidi kali ini tak boleh tahan dah!</p>
              <p>Dia hubungi saya dan singgah di showroom untuk test drive Range Rover SVR! Hahahaha!</p>
              <p>Katanya tak stim lah V8 biasa bu, aku kena SVR jugaklah! V8 biasa ni kau tolong jual kira trade in. Itulah, hobi lelaki ni memang kasar, sekali kalau sudah target untuk memiliki, dia akan usaha sampai dapat.</p>
              <p>Pada waktu ini, perniagaan beliau sudah betul-betul established. Akhirnya berjaya juga mendapatkan Range Rover Sport SVR V8 Carbon Specs dengan LUXOTICRARS!</p>
              <p>Ini pembelian kelima dengan saya. Saya kongsikan gambar di sini, bergambar sebelah-sebelah dengan Sport lama dia.</p>
              <div className="max-w-md lg:max-w-none">
                <Image
                  src={Img1}
                  alt="Toyota Vellfire 2.5 ZG High Specs 2016"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-video rounded-2xl object-cover bg-zinc-800"
                />
              </div>
              <p>Terima kasih bro! Memberi kepercayaan pada LUXOTICARS dan sokongan!</p>
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
