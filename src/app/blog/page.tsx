import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";


const inter = Inter({
  weight: ["400", "600"],
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Блог | NIK Studio - Новости и тенденции",
  description: "Новости и тенденции, которые помогут усовершенствовать стратегию вашего бренда.",
  keywords: ["NIK Studio", "блог", "новости", "тенденции", "брендинг", "стратегия"],
  openGraph: {
    title: "Блог | NIK Studio - Новости и тенденции",
    description: "Новости и тенденции, которые помогут усовершенствовать стратегию вашего бренда.",
    url: "https://nikstudio.com/blog",
    siteName: "NIK Studio",
    images: [
      {
        url: "https://nikstudio.com/images/blog-og.jpg",
        width: 1200,
        height: 630,
        alt: "NIK Studio Blog Page",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
};

export default function Blog() {
  return (
    <main className={`relative flex flex-col min-h-screen bg-[#0E1011] max-w-[1920px] w-full mx-auto ${inter.variable}`}>
      {/* Header */}
      <Header />

      {/* Blog Title Section */}
      <section className="w-full pt-96 sm:pt-38 pb-24 px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col">
          <h1 className="text-white text-[88px] sm:text-[200px] 2xl:text-[280px] font-geometria font-extrabold uppercase leading-[100%]">
            БЛОГ
          </h1>
          <p className="mt-[10px] text-white text-2xl sm:text-4xl md:text-6xl lg:text-[80px] font-inter font-semibold leading-[1.2] tracking-[-0.025em] max-w-[1400px]">
            Новости и тенденции, которые помогут усовершенствовать стратегию вашего бренда.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="w-full flex flex-wrap">
        {/* Article 1 */}
        <Link href="/blog/pochemu-produmannyj-dizajn-prodaet" className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 group">
          <article className="relative bg-[#0E1011] transition-colors duration-300 group-hover:bg-white h-full">
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/images/blog_img1.jpg"
                alt="Почему продуманный дизайн продает"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-8 md:p-20 flex flex-col gap-12 bg-inherit">
              <span className="text-white/60 group-hover:text-black/60 text-xl md:text-[30px] font-geometria font-normal leading-none transition-colors duration-300">
                (Креативный директор)
              </span>
              <div className="flex flex-col gap-4">
                <h2 className="text-white group-hover:text-black text-3xl xl:text-[36px] 2xl:text-[48px] font-geometria font-bold uppercase leading-[1.3] transition-colors duration-300">
                  ПОЧЕМУ ПРОДУМАННЫЙ ДИЗАЙН ПРОДАЕТ
                </h2>
                <p className="text-white group-hover:text-black text-lg md:text-[22px] font-inter font-normal leading-[1.7] transition-colors duration-300">
                  Discover key strategies to create a memorable and impactful brand for your small business.
                </p>
              </div>
            </div>
          </article>
        </Link>

        {/* Article 2 */}
        <Link href="/blog/so-slozhnogo-yazyka-v-prostoj-vizual" className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 group">
          <article className="relative bg-[#181A1B] transition-colors duration-300 group-hover:bg-white h-full">
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/images/blog_img2.jpg"
                alt="Со сложного языка в простой визуал"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-8 md:p-20 flex flex-col gap-12 bg-inherit">
              <span className="text-white/60 group-hover:text-black/60 text-xl md:text-[30px] font-geometria font-normal leading-none transition-colors duration-300">
                (Креативный директор)
              </span>
              <div className="flex flex-col gap-4">
                <h2 className="text-white group-hover:text-black text-3xl xl:text-[36px] 2xl:text-[48px] font-geometria font-bold uppercase leading-[1.3] transition-colors duration-300">
                  СО СЛОЖНОГО ЯЗЫКА В ПРОСТОЙ ВИЗУАЛ
                </h2>
                <p className="text-white/60 group-hover:text-black/60 text-lg md:text-[22px] font-inter font-normal leading-[1.7] transition-colors duration-300">
                  Learn practical tips for designing websites that are both visually appealing and user-friendly.
                </p>
              </div>
            </div>
          </article>
        </Link>

        {/* Article 3 */}
        <Link href="/blog/pravilnye-foto-ekonomyat-byudzhet" className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 group">
          <article className="relative bg-[#1F2122] transition-colors duration-300 group-hover:bg-white h-full">
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/images/blog_img3.jpg"
                alt="Правильные фото экономят бюджет"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-8 md:p-20 flex flex-col gap-12 bg-inherit">
              <span className="text-white/60 group-hover:text-black/60 text-xl md:text-[30px] font-geometria font-normal leading-none transition-colors duration-300">
                (Креативный директор)
              </span>
              <div className="flex flex-col gap-4">
                <h2 className="text-white group-hover:text-black text-3xl xl:text-[36px] 2xl:text-[48px] font-geometria font-bold uppercase leading-[1.3] transition-colors duration-300">
                  ПРАВИЛЬНЫЕ ФОТО ЭКОНОМЯТ БЮДЖЕТ
                </h2>
                <p className="text-white/60 group-hover:text-black/60 text-lg md:text-[22px] font-inter font-normal leading-[1.7] transition-colors duration-300">
                  Explore why responsive design is crucial for enhancing experience and increasing conversions.
                </p>
              </div>
            </div>
          </article>
        </Link>

        {/* Article 4 */}
        <Link href="/blog/umex-simtex-2024" className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 group">
          <article className="relative bg-[#181A1B] transition-colors duration-300 group-hover:bg-white h-full">
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/images/blog_img4.jpg"
                alt="UMEX & SIMTEX 2024"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-8 md:p-20 flex flex-col gap-12 bg-inherit">
              <span className="text-white/60 group-hover:text-black/60 text-xl md:text-[30px] font-geometria font-normal leading-none transition-colors duration-300">
                (Креативный директор)
              </span>
              <div className="flex flex-col gap-4">
                <h2 className="text-white group-hover:text-black text-3xl xl:text-[36px] 2xl:text-[48px] font-geometria font-bold uppercase leading-[1.3] transition-colors duration-300">
                  UMEX & SIMTEX 2024
                </h2>
                <p className="text-white/60 group-hover:text-black/60 text-lg md:text-[22px] font-inter font-normal leading-[1.7] transition-colors duration-300">
                  Подготовили компанию «АЭРОМАКС» и сопроводили на выставке в Абу Даби. Создали стильный и продающий контент.
                </p>
              </div>
            </div>
          </article>
        </Link>

        {/* Article 5 */}
        <Link href="/blog/organizaciya-vizita-pervogo-lica" className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 group">
          <article className="relative bg-[#1F2122] transition-colors duration-300 group-hover:bg-white h-full">
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/images/blog_img5.jpg"
                alt="Организация визита первого лица"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-8 md:p-20 flex flex-col gap-12 bg-inherit">
              <span className="text-white/60 group-hover:text-black/60 text-xl md:text-[30px] font-geometria font-normal leading-none transition-colors duration-300">
                (Креативный директор)
              </span>
              <div className="flex flex-col gap-4">
                <h2 className="text-white group-hover:text-black text-3xl xl:text-[36px] 2xl:text-[48px] font-geometria font-bold uppercase leading-[1.3] transition-colors duration-300">
                  ОРГАНИЗАЦИЯ ВИЗИТА ПЕРВОГО ЛИЦА
                </h2>
                <p className="text-white/60 group-hover:text-black/60 text-lg md:text-[22px] font-inter font-normal leading-[1.7] transition-colors duration-300">
                  В сопровождении мэра столицы Сергея Собянина Президент побывал в цехе производства БПЛА.
                </p>
              </div>
            </div>
          </article>
        </Link>

        {/* Article 6 */}
        <Link href="/blog/uchastie-v-stratsessii-rudnevo" className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 group">
          <article className="relative bg-[#181A1B] transition-colors duration-300 group-hover:bg-white h-full">
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/images/blog_img6.jpg"
                alt="Участие в стратсессии руднево"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-8 md:p-20 flex flex-col gap-12 bg-inherit">
              <span className="text-white/60 group-hover:text-black/60 text-xl md:text-[30px] font-geometria font-normal leading-none transition-colors duration-300">
                (Креативный директор)
              </span>
              <div className="flex flex-col gap-4">
                <h2 className="text-white group-hover:text-black text-3xl xl:text-[36px] 2xl:text-[48px] font-geometria font-bold uppercase leading-[1.3] transition-colors duration-300">
                  УЧАСТИЕ В СТРАТСЕССИИ РУДНЕВО
                </h2>
                <p className="text-white/60 group-hover:text-black/60 text-lg md:text-[22px] font-inter font-normal leading-[1.7] transition-colors duration-300">
                  Организовали съёмку стратегической сессии в ОЭЦ «Технополис Москва» в Руднево с участием С.С. Собянина
                </p>
              </div>
            </div>
          </article>
        </Link>
      </section>

      {/* Include Footer Component */}
      <Footer />
    </main>
  );
}
