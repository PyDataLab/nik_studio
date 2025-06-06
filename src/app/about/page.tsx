import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";

const inter = Inter({
  weight: ["400", "600"],
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "О нас | NIK Studio - Создаём эффектный визуал",
  description: "Создаём эффектный визуал, понимаем продукт, разрабатываем смыслы, доносим суть",
  keywords: ["NIK Studio", "о нас", "визуал", "креатив", "опыт", "скорость"],
  openGraph: {
    title: "О нас | NIK Studio - Создаём эффектный визуал",
    description: "Создаём эффектный визуал, понимаем продукт, разрабатываем смыслы, доносим суть",
    url: "https://nikstudio.com/about",
    siteName: "NIK Studio",
    images: [
      {
        url: "https://nikstudio.com/images/about/hero_image.jpg",
        width: 1200,
        height: 630,
        alt: "NIK Studio About Page",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
};

export default function About() {
  return (
    <main className={`relative flex flex-col min-h-screen bg-[#0E1011] max-w-[1920px] w-full mx-auto ${inter.variable}`}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="w-full flex flex-col">
        <div className="w-full flex flex-col px-6 sm:px-12 lg:px-24 pt-40 sm:pt-80 lg:pt-[150px] pb-24 sm:pb-24 lg:pb-[96px] mt-50 sm:mt-0">
          <h1 className="text-white text-[88px] sm:text-[200px] 2xl:text-[280px] font-geometria font-extrabold uppercase leading-[100%]">
            о нас
          </h1>
          <p className="mt-[10px] text-white text-2xl sm:text-4xl md:text-6xl lg:text-[80px] font-inter font-semibold leading-[1.2] tracking-[-0.025em] max-w-[1400px]">
            Создаём эффектный визуал, понимаем продукт, разрабатываем смыслы, доносим суть
          </p>
        </div>
        <div className="w-full h-[1080px] relative overflow-hidden">
          <Image
            src="/images/about/hero_image.png"
            alt="NIK Studio Work Environment"
            fill
            className="object-cover object-center"
            quality={100}
            priority
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full flex flex-col">
        <div className="w-full flex flex-col px-6 sm:px-12 lg:px-24 py-24 sm:py-24 lg:py-[96px] gap-24 sm:gap-24 lg:gap-[96px]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-12 lg:gap-[96px]">
            <span className="text-white/60 text-xl sm:text-2xl lg:text-[30px] font-geometria font-normal leading-none">
              Команда
            </span>
            <span className="text-white/60 text-xl sm:text-2xl lg:text-[30px] font-geometria font-normal leading-none">
              (01)
            </span>
          </div>
          <h2 className="text-white text-[44px] sm:text-[96px] lg:text-[200px] 2xl:text-[240px] font-geometria font-extrabold uppercase leading-[100%]">
            креатив<br />
            опыт<br />
            скорость
          </h2>
        </div>

        <div className="w-full flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 bg-[#0E1011] h-auto lg:h-[1080px] relative">
            <Image
              src="/images/about/slava_photo.png"
              alt="Слава Никитин"
              width={960}
              height={1260}
              className="w-full h-auto object-cover"
              quality={100}
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div className="flex flex-col lg:mt-[70px] xl:mt-[140px] 2xl:mt-[285px] px-6 sm:px-12 lg:px-24 pt-12 sm:pt-24 lg:pt-[160px] pb-16 sm:pb-16 lg:pb-[64px]">
              <h3 className="text-white text-4xl sm:text-5xl lg:text-[72px] xl:text-[80px] font-geometria font-bold uppercase leading-[110%]">
                слава никитин
              </h3>
              <div className="mt-4">
                <p className="text-white/60 text-lg sm:text-xl lg:text-[30px] font-geometria font-normal leading-none">
                  Основатель студии<br />
                  Креативный директор<br />
                  Продюсер<br />
                  Коммерческий фотограф
                </p>
              </div>
              <div className="mt-5">
                <p className="text-white text-lg sm:text-xl lg:text-[24px] font-inter font-normal leading-[170%]">
                  &quot;Нестандартный взгляд и внимание к деталям - всё это работает на оперативное решение задач по созданию лучшего и самого продуманного визуального посыла. Вы не тратите время, отвечая на вопросы - &quot;какой создавать дизайн, каким снимать ролик о вашем продукте, что и кого фотографировать, каким лучше придумать бренд, что размещать на сайте?&quot; - мы сами продумываем все вопросы, изучая вашу нишу и предлагаем решение.
                </p>
              </div>
            </div>

            <div className="flex flex-col px-6 sm:px-12 lg:px-24 py-12 sm:py-24 lg:pt-[96px] lg:pb-[126px] gap-16 sm:gap-16 lg:gap-[64px]">
              <div className="flex flex-col gap-2 sm:gap-2 lg:gap-[8px]">
                <h4 className="text-white text-2xl sm:text-3xl lg:text-[48px] font-geometria font-bold uppercase leading-[130%]">
                  нам доверяют лидеры отраслей
                </h4>
                <p className="text-white/60 text-base sm:text-lg lg:text-[20px] font-inter font-normal leading-[180%]">
                  За 7 лет работы, мы можем со всей гордостью сказать - что нам действительно доверяют лидеры! Мы создавали и создаём проекты в самых интересных нишах: фермерство, гражданская авиация, гастрономия, беспилотные летательные аппараты, музыкальная техника и кинотеатры, строительство и ландшафтное озеленение, и везде мы добились отличных результатов, а так же набрались огромного опыта, который применяем при создании наших услуг.
                </p>
              </div>
              
              <div className="flex flex-col gap-2 sm:gap-2 lg:gap-[8px]">
                <h4 className="text-white text-2xl sm:text-3xl lg:text-[48px] font-geometria font-bold uppercase leading-[130%]">
                  креативный подход
                </h4>
                <p className="text-white/60 text-base sm:text-lg lg:text-[20px] font-inter font-normal leading-[180%]">
                  Главным преимуществом является нестандартный подход, с которым нам удаётся показывать продукцию и производства &quot;реально&quot; без прикрас, но с сильных сторон и с позиции надежности, а так же с перспективой быстрого наращивания темпов выпуска продукции. Таким образом потенциальные клиенты видят те стороны, которые их действительно интересуют, а не просто красивую &quot;пыль в глаза&quot;. Для каждого проекта есть целевая аудитория - мы изучаем её и демонстрируем ей именно то, что заставит её видеть свои точки роста совместно с вашим продуктом.
                </p>
              </div>

              <div className="flex flex-col gap-2 sm:gap-2 lg:gap-[8px]">
                <h4 className="text-white text-2xl sm:text-3xl lg:text-[48px] font-geometria font-bold uppercase leading-[130%]">
                  сроки не прощают недоверия
                </h4>
                <p className="text-white/60 text-base sm:text-lg lg:text-[20px] font-inter font-normal leading-[180%]">
                  Наша команда прекрасно понимает ответственность своей работы. Мы делаем быстро, продумывая нюансы. Подстраиваемся под темп процесса, чтобы к выставке, а зачастую мы готовим предприятия именно к отраслевым выставкам - ваша компания оказалась &quot;во все оружия&quot;. Часто мы превращаем невозможные сроки - в крайне хороший и рабочий продукт, именно поэтому нас советуют и нам доверяют!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
