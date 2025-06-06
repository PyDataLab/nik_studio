import Image from "next/image";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Header_mini from "@/components/Header_mini";
import Footer from "@/components/Footer";
import Link from "next/link";

const inter = Inter({
  weight: ["400", "600"],
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Почему продуманный дизайн продаёт | NIK Studio - Блог",
  description: "Improve user engagement by focusing on UX design that prioritizes functionality and user satisfaction.",
  keywords: ["NIK Studio", "дизайн", "UX дизайн", "продуманный дизайн", "пользовательский опыт"],
  openGraph: {
    title: "Почему продуманный дизайн продаёт | NIK Studio - Блог",
    description: "Improve user engagement by focusing on UX design that prioritizes functionality and user satisfaction.",
    url: "https://nikstudio.com/blog/pochemu-produmannyi-dizain-prodaet",
    siteName: "NIK Studio",
    images: [
      {
        url: "https://nikstudio.com/images/blog-og.jpg",
        width: 1200,
        height: 630,
        alt: "NIK Studio Blog Post",
      },
    ],
    locale: "ru_RU",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Почему продуманный дизайн продаёт | NIK Studio - Блог",
    description: "Improve user engagement by focusing on UX design that prioritizes functionality and user satisfaction.",
    images: ["https://nikstudio.com/images/blog-og.jpg"],
  },
  alternates: {
    canonical: "https://nikstudio.com/blog/pochemu-produmannyi-dizain-prodaet"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function BlogPost() {
  return (
    <main
      className={`relative flex flex-col min-h-screen bg-[#0E1011] max-w-[1920px] w-full mx-auto ${inter.variable}`}
    >
      {/* Section Post */}
      {/* Header Small */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 z-10">
        <Header_mini />
      </div>

      <div className="flex flex-col lg:flex-row justify-center w-full relative">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 bg-white relative h-[360px] sm:h-[540px] md:h-[720px] lg:h-[1080px]">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/blog/blog_header_image.png"
              alt="Blog Post Header Image"
              className="object-cover object-center w-full h-full"
              width={1787}
              height={1810}
              priority
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-end">
          <div className="flex flex-col p-6 sm:p-12 lg:p-24 gap-12 lg:pt-[564px] lg:pb-[64px] h-full">
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-[44px] xl:text-[56px] 2xl:text-[80px] font-bold uppercase leading-[110%] font-geometria">
                ПОЧЕМУ ПРОДУМАННЫЙ ДИЗАЙН ПРОДАЁТ
              </h1>
              <p className="text-white text-base sm:text-lg lg:text-[24px] leading-[170%] font-inter mt-2">
                Improve user engagement by focusing on UX design that prioritizes functionality and user satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-1/2 ml-auto">
        <div className="flex flex-col p-6 sm:p-12 lg:p-24 lg:py-[96px] gap-16 lg:gap-[64px] -mt-[10px]">
          {/* Priority User Needs */}
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-[48px] font-bold uppercase leading-[130%] font-geometria">
              PRIORITIZING USER NEEDS
            </h2>
            <div className="text-white/60 text-base sm:text-lg lg:text-[20px] leading-[180%] font-inter space-y-10">
              <p>
                At the heart of thoughtful UX design is a deep understanding of the user. Boosting engagement starts with knowing who your users are, what they need, and how they interact with your website or app. Every design decision should be rooted in making their experience as seamless and enjoyable as possible, ensuring that their needs are met intuitively.
              </p>
              <p>
                To prioritize user needs, it's important to conduct thorough research. This includes gathering data through user interviews, surveys, and analytics to identify pain points and areas for improvement. By understanding the user journey, you can tailor your design to eliminate friction and enhance usability, making it easier for users to achieve their goals.
              </p>
              <p>
                A thoughtful UX design doesn't just solve immediate problems—it anticipates future needs. By thinking ahead and considering how users' behaviors might evolve, you can design an experience that adapts over time, ensuring continued engagement. The more users feel that their needs are being met effortlessly, the more likely they are to remain loyal to your product or service.
              </p>
            </div>
          </div>

          {/* Creating a Seamless Flow */}
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-[48px] font-bold uppercase leading-[130%] font-geometria -mt-[5px]">
              CREATING A SEAMLESS FLOW
            </h2>
            <div className="text-white/60 text-base sm:text-lg lg:text-[20px] leading-[180%] font-inter space-y-10">
              <p>
                A key aspect of UX design that drives engagement is creating a seamless, intuitive flow. Users should be able to navigate through your website or app without confusion, frustration, or unnecessary clicks. Thoughtful design maps out clear paths for users, guiding them naturally from one step to the next while ensuring that important information is easily accessible.
              </p>
              <p>
                Consistency is essential in establishing a smooth user flow. This means maintaining consistent layouts, visual cues, and interactions across all pages or screens. Whether users are exploring your homepage or completing a purchase, a cohesive experience helps them stay focused and confident in their actions, increasing their overall satisfaction.
              </p>
              <p>
                Small details, such as button placement, typography, and visual hierarchy, can greatly impact how users interact with your site. By making thoughtful design choices that prioritize clarity and ease of use, you minimize cognitive load and keep users engaged. When users can navigate effortlessly, they're more likely to spend time exploring your content or completing desired actions.
              </p>
            </div>
          </div>

          {/* Engaging Through Emotion */}
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-[48px] font-bold uppercase leading-[130%] font-geometria -mt-[10px]">
              ENGAGING THROUGH EMOTION
            </h2>
            <div className="text-white/60 text-base sm:text-lg lg:text-[20px] leading-[180%] font-inter space-y-10">
              <p>
                Thoughtful UX design goes beyond functionality—it taps into users' emotions. Engagement is not just about making a website usable; it's about creating an emotional connection that resonates with the user. By incorporating elements of storytelling, visual appeal, and interactive features, you can evoke positive emotions that strengthen user engagement and loyalty.
              </p>
              <p>
                Designing for emotion means considering how users feel at each stage of their journey. From welcoming new users with an intuitive onboarding process to celebrating a successful purchase with a personalized confirmation page, every interaction is an opportunity to foster connection. Thoughtful micro-interactions, such as subtle animations or encouraging messages, can add delight and reinforce a positive experience.
              </p>
              <p>
                Ultimately, the goal of thoughtful UX design is to make users feel understood and valued. When users feel emotionally connected to your brand, they are more likely to return, recommend your product, and engage with your content on a deeper level. A user experience that resonates emotionally not only boosts engagement but also builds lasting relationships with your audience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Related News */}
      <div className="w-full">
        <div className="flex flex-col bg-[#181A1B] p-6 sm:p-12 lg:p-24 lg:pt-[150px] lg:pb-[96px] mt-[25px]">
          <h2 className="text-white text-6xl sm:text-8xl xl:text-[200px] 2xl:text-[280px] font-bold uppercase leading-[100%] font-geometria">
            ЕЩЁ НОВОСТИ
          </h2>
          <p className="text-white text-2xl sm:text-4xl lg:text-[80px] font-semibold leading-[120%] font-inter max-w-[1400px] mt-6 sm:mt-8 lg:mt-2">
            Опыт работы с большими компаниями даёт понимание основных рабочих инструментов
          </p>
        </div>
      </div>

      {/* Section Blog Posts */}
      <div className="w-full">
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Blog Post 1 */}
            <Link href="/blog/umex-simtex-2024" className="group h-full">
              <article className="bg-[#181A1B] transition-colors duration-300 group-hover:bg-white h-full flex flex-col">
                <div className="relative w-full aspect-square overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/blog/blog_related_1.png"
                    alt="UMEX & SIMTEX 2024"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    width={640}
                    height={640}
                  />
                </div>
                <div className="flex flex-col p-6 sm:p-10 lg:p-20 gap-6 sm:gap-10 lg:gap-12 bg-inherit flex-grow">
                  <span className="text-white/60 group-hover:text-black/60 text-xl lg:text-[30px] font-normal font-geometria transition-colors duration-300">
                    (Креативный директор)
                  </span>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-white group-hover:text-black text-2xl sm:text-3xl xl:text-[40px] 2xl:text-[48px] font-bold uppercase leading-[130%] font-geometria transition-colors duration-300">
                      UMEX & SIMTEX 2024
                    </h3>
                    <p className="text-white/60 group-hover:text-black/60 text-base sm:text-lg lg:text-[22px] leading-[170%] font-inter transition-colors duration-300">
                      Подготовили компанию «АЭРОМАКС» и сопроводили на выставке в Абу Даби. Создали стильный и продающий контент.
                    </p>
                  </div>
                </div>
              </article>
            </Link>

            {/* Blog Post 2 */}
            <Link href="/blog/organizaciya-vizita-pervogo-lica" className="group h-full">
              <article className="bg-[#1F2122] transition-colors duration-300 group-hover:bg-white h-full flex flex-col">
                <div className="relative w-full aspect-square overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/blog/blog_related_2.png"
                    alt="Организация визита первого лица"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    width={960}
                    height={640}
                  />
                </div>
                <div className="flex flex-col p-6 sm:p-10 lg:p-20 gap-6 sm:gap-10 lg:gap-12 bg-inherit flex-grow">
                  <span className="text-white/60 group-hover:text-black/60 text-xl lg:text-[30px] font-normal font-geometria transition-colors duration-300">
                    (Креативный директор)
                  </span>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-white group-hover:text-black text-2xl sm:text-3xl xl:text-[40px] 2xl:text-[48px] font-bold uppercase leading-[130%] font-geometria transition-colors duration-300">
                      ОРГАНИЗАЦИЯ ВИЗИТА ПЕРВОГО ЛИЦА
                    </h3>
                    <p className="text-white/60 group-hover:text-black/60 text-base sm:text-lg lg:text-[22px] leading-[170%] font-inter transition-colors duration-300">
                      В сопровождении мэра столицы Сергея Собянина Президент побывал в цехе производства БПЛА.
                    </p>
                  </div>
                </div>
              </article>
            </Link>

            {/* Blog Post 3 */}
            <Link href="/blog/uchastie-v-stratsessii-rudnevo" className="group h-full">
              <article className="bg-[#181A1B] transition-colors duration-300 group-hover:bg-white h-full flex flex-col">
                <div className="relative w-full aspect-square overflow-hidden flex-shrink-0 bg-white">
                  <Image
                    src="/images/blog/blog_related_3.png"
                    alt="Участие в стратсессии руднево"
                    className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-110"
                    width={971}
                    height={866}
                  />
                </div>
                <div className="flex flex-col p-6 sm:p-10 lg:p-20 gap-6 sm:gap-10 lg:gap-12 bg-inherit flex-grow">
                  <span className="text-white/60 group-hover:text-black/60 text-xl lg:text-[30px] font-normal font-geometria transition-colors duration-300">
                    (Креативный директор)
                  </span>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-white group-hover:text-black text-2xl sm:text-3xl xl:text-[40px] 2xl:text-[48px] font-bold uppercase leading-[130%] font-geometria transition-colors duration-300">
                      УЧАСТИЕ В СТРАТСЕССИИ РУДНЕВО
                    </h3>
                    <p className="text-white/60 group-hover:text-black/60 text-base sm:text-lg lg:text-[22px] leading-[170%] font-inter transition-colors duration-300">
                      Организовали съёмку стратегической сессии в ОЭЦ «Технополис Москва» в Руднево с участием С.С. Собянина
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
} 