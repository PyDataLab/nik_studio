import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
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
      <header className="flex flex-col sm:flex-row justify-between items-center px-6 sm:px-12 lg:px-24 pt-16 w-full absolute top-0 left-0 right-0 z-10">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo_header.svg"
            alt="NIK Studio Logo"
            width={82}
            height={30}
            className="text-[#DE063A]"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex sm:flex-row flex-col items-center gap-6 md:gap-12 -ml-[10px] sm:mt-0 mt-4">
          <Link
            href="#"
            className="text-white font-inter font-semibold text-lg md:text-[22px] leading-none hover:text-[#DE063A] transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            href="#"
            className="text-white font-inter font-semibold text-lg md:text-[22px] leading-none hover:text-[#DE063A] transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-white font-inter font-semibold text-lg md:text-[22px] leading-none hover:text-[#DE063A] transition-colors duration-300"
          >
            Studio
          </Link>
          <Link
            href="#"
            className="text-white font-inter font-semibold text-lg md:text-[22px] leading-none hover:text-[#DE063A] transition-colors duration-300"
          >
            Journal
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="flex flex-col gap-0.5 justify-center 2xl:-mr-[21px] sm:mt-0 mt-4">
          <Link
            href="#"
            className="text-white font-inter font-semibold text-lg md:text-[22px] leading-none underline underline-offset-5 decoration-2 hover:text-[#DE063A] transition-colors duration-300"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </header>

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
        <article className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 relative bg-[#0E1011]">
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src="/images/blog_img1.jpg"
              alt="Почему продуманный дизайн продает"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 md:p-20 flex flex-col gap-12 bg-[#0E1011]">
            <span className="text-white/60 text-xl md:text-[30px] font-geometria font-normal leading-none">
              (Креативный директор)
            </span>
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-3xl xl:text-[36px] 2xl:text-[48px] font-geometria font-bold uppercase leading-[1.3]">
                ПОЧЕМУ ПРОДУМАННЫЙ ДИЗАЙН ПРОДАЕТ
              </h2>
              <p className="text-white text-lg md:text-[22px] font-inter font-normal leading-[1.7]">
                Discover key strategies to create a memorable and impactful brand for your small business.
              </p>
            </div>
          </div>
        </article>

        {/* Article 2 */}
        <article className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 relative bg-[#181A1B]">
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src="/images/blog_img2.jpg"
              alt="Со сложного языка в простой визуал"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 md:p-20 flex flex-col gap-12 bg-[#181A1B]">
            <span className="text-white/60 text-xl md:text-[30px] font-geometria font-normal leading-none">
              (Креативный директор)
            </span>
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-3xl xl:text-[36px] 2xl:text-[48px] font-geometria font-bold uppercase leading-[1.3]">
                СО СЛОЖНОГО ЯЗЫКА В ПРОСТОЙ ВИЗУАЛ
              </h2>
              <p className="text-white/60 text-lg md:text-[22px] font-inter font-normal leading-[1.7]">
                Learn practical tips for designing websites that are both visually appealing and user-friendly.
              </p>
            </div>
          </div>
        </article>

        {/* Article 3 */}
        <article className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 relative bg-[#1F2122]">
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src="/images/blog_img3.jpg"
              alt="Правильные фото экономят бюджет"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 md:p-20 flex flex-col gap-12 bg-[#1F2122]">
            <span className="text-white/60 text-xl md:text-[30px] font-geometria font-normal leading-none">
              (Креативный директор)
            </span>
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-3xl xl:text-[36px] 2xl:text-[48px] font-geometria font-bold uppercase leading-[1.3]">
                ПРАВИЛЬНЫЕ ФОТО ЭКОНОМЯТ БЮДЖЕТ
              </h2>
              <p className="text-white/60 text-lg md:text-[22px] font-inter font-normal leading-[1.7]">
                Explore why responsive design is crucial for enhancing experience and increasing conversions.
              </p>
            </div>
          </div>
        </article>

        {/* Article 4 */}
        <article className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 relative bg-[#181A1B]">
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src="/images/blog_img4.jpg"
              alt="UMEX & SIMTEX 2024"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 md:p-20 flex flex-col gap-12 bg-[#181A1B]">
            <span className="text-white/60 text-xl md:text-[30px] font-geometria font-normal leading-none">
              (Креативный директор)
            </span>
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-3xl xl:text-[36px] 2xl:text-[48px] font-geometria font-bold uppercase leading-[1.3]">
                UMEX & SIMTEX 2024
              </h2>
              <p className="text-white/60 text-lg md:text-[22px] font-inter font-normal leading-[1.7]">
                Подготовили компанию «АЭРОМАКС» и сопроводили на выставке в Абу Даби. Создали стильный и продающий контент.
              </p>
            </div>
          </div>
        </article>

        {/* Article 5 */}
        <article className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 relative bg-[#1F2122]">
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src="/images/blog_img5.jpg"
              alt="Организация визита первого лица"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 md:p-20 flex flex-col gap-12 bg-[#1F2122]">
            <span className="text-white/60 text-xl md:text-[30px] font-geometria font-normal leading-none">
              (Креативный директор)
            </span>
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-3xl xl:text-[36px] 2xl:text-[48px] font-geometria font-bold uppercase leading-[1.3]">
                ОРГАНИЗАЦИЯ ВИЗИТА ПЕРВОГО ЛИЦА
              </h2>
              <p className="text-white/60 text-lg md:text-[22px] font-inter font-normal leading-[1.7]">
                В сопровождении мэра столицы Сергея Собянина Президент побывал в цехе производства БПЛА.
              </p>
            </div>
          </div>
        </article>

        {/* Article 6 */}
        <article className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 relative bg-[#181A1B]">
          <div className="relative w-full aspect-square overflow-hidden bg-[#0E1011]">
            <Image
              src="/images/blog_img6.jpg"
              alt="Участие в стратсессии руднево"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 md:p-20 flex flex-col gap-12 bg-[#181A1B]">
            <span className="text-white/60 text-xl md:text-[30px] font-geometria font-normal leading-none">
              (Креативный директор)
            </span>
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-3xl xl:text-[36px] 2xl:text-[48px] font-geometria font-bold uppercase leading-[1.3]">
                УЧАСТИЕ В СТРАТСЕССИИ РУДНЕВО
              </h2>
              <p className="text-white/60 text-lg md:text-[22px] font-inter font-normal leading-[1.7]">
                Организовали съёмку стратегической сессии в ОЭЦ «Технополис Москва» в Руднево с участием С.С. Собянина
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* Include Footer Component */}
      <Footer />
    </main>
  );
}
