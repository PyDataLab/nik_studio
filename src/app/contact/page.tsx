import Image from "next/image";
import Header_mini from "@/components/Header_mini";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Footer from "@/components/Footer";

const inter = Inter({
  weight: ["400", "600"],
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Контакты | NIK Studio - Форма обратной связи",
  description: "Свяжитесь с NIK Studio для обсуждения сотрудничества. Заполните форму обратной связи, и мы свяжемся с вами для обсуждения подробностей вашего проекта.",
  keywords: ["NIK Studio", "контакты", "обратная связь", "сотрудничество", "дизайн студия"],
  openGraph: {
    title: "Контакты | NIK Studio - Форма обратной связи",
    description: "Свяжитесь с NIK Studio для обсуждения сотрудничества. Заполните форму обратной связи, и мы свяжемся с вами для обсуждения подробностей вашего проекта.",
    url: "https://nikstudio.com/contact",
    siteName: "NIK Studio",
    images: [
      {
        url: "https://nikstudio.com/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "NIK Studio Contact Page",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Контакты | NIK Studio - Форма обратной связи",
    description: "Свяжитесь с NIK Studio для обсуждения сотрудничества и заполните форму обратной связи.",
    images: ["https://nikstudio.com/images/contact-og.jpg"],
  },
  alternates: {
    canonical: "https://nikstudio.com/contact"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function Contact() {
  return (
    <main
      className={`relative flex flex-col min-h-screen bg-[#0E1011] max-w-[2560px] w-full mx-auto ${inter.variable}`}
    >
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 bg-white">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/contact/contact-image.png"
              alt="Contact Image"
              className="object-cover object-center w-full h-auto lg:h-full"
              width={1327}
              height={1742}
              priority
            />
          </div>
        </div>

        {/* Right Side Column */}
        <div className="w-full lg:w-1/2">
          {/* Header */}
          <Header_mini />

          {/* Right Side - Form */}
          <div className="bg-[#0E1011] flex flex-col items-center">
            <div className="flex flex-col px-6 sm:px-12 lg:px-24 py-12 lg:py-24 h-full w-full 3xl:px-[120px] 3xl:py-[120px]">
              {/* Title and Description */}
              <div className="flex flex-col gap-4 pt-8 sm:pt-12 lg:pt-[74px] mb-8 lg:mb-22 3xl:pt-[100px] 3xl:mb-[120px]">
                <h1 className="text-white text-4xl sm:text-5xl md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px] 3xl:text-[100px] font-bold uppercase leading-[110%] font-geometria">
                  ХОТИТЕ СОТРУДНИЧАТЬ ?
                </h1>
                <p className="text-white text-base sm:text-xl lg:text-[24px] 3xl:text-[32px] leading-[170%] font-inter mt-2 lg:mt-[4px] 3xl:mt-[10px]">
                  Всегда рады продуктивному сотрудничеству, напишите и мы с вами
                  свяжемся для обсуждения подробностей.
                </p>
              </div>

              {/* Form */}
              <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 3xl:gap-12 w-full">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 3xl:gap-12 w-full">
                  {/* Name Field */}
                  <div className="flex flex-col gap-2 lg:gap-3 3xl:gap-5 flex-1">
                    <label className="text-white/60 text-base lg:text-[20px] 3xl:text-[28px] leading-[100%] font-geometria font-normal">
                      Имя
                    </label>
                    <div className="bg-[#181A1B] border-2 border-white/20 px-3 sm:px-5 py-3 sm:py-4 3xl:px-8 3xl:py-6">
                      <input
                        type="text"
                        placeholder="Имя"
                        className="bg-transparent w-full text-base lg:text-[18px] 3xl:text-[24px] leading-[180%] text-[#595959] placeholder:text-[#595959] outline-none font-inter"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col gap-2 lg:gap-3 3xl:gap-5 flex-1">
                    <label className="text-white/60 text-base lg:text-[20px] 3xl:text-[28px] leading-[100%] font-geometria font-normal">
                      Email
                    </label>
                    <div className="bg-[#181A1B] border-2 border-white/20 px-3 sm:px-5 py-3 sm:py-4 3xl:px-8 3xl:py-6">
                      <input
                        type="email"
                        placeholder="Email"
                        className="bg-transparent w-full text-base lg:text-[18px] 3xl:text-[24px] leading-[180%] text-[#595959] placeholder:text-[#595959] outline-none font-inter"
                      />
                    </div>
                  </div>
                </div>

                {/* Company Field */}
                <div className="w-full">
                  <div className="bg-[#181A1B] border-2 border-white/20 px-3 sm:px-5 py-3 sm:py-4 3xl:px-8 3xl:py-6 h-12 sm:h-16 3xl:h-[80px]">
                    <input
                      type="text"
                      placeholder="Компания"
                      className="bg-transparent w-full text-base lg:text-[18px] 3xl:text-[24px] leading-[180%] text-[#595959] placeholder:text-[#595959] outline-none font-inter"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="w-full">
                  <div className="bg-[#181A1B] border-2 border-white/20 px-3 sm:px-5 py-3 sm:py-4 3xl:px-8 3xl:py-6 h-28 sm:h-[140px] 3xl:h-[200px]">
                    <textarea
                      placeholder="Сообщение"
                      className="bg-transparent w-full h-full text-base lg:text-[18px] 3xl:text-[24px] leading-[180%] text-[#595959] placeholder:text-[#595959] outline-none resize-none font-inter"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button className="flex flex-row justify-center items-center py-3 sm:py-4 px-5 sm:px-[26px] gap-2 w-full h-12 sm:h-[54px] 3xl:h-[70px] 3xl:text-[28px] bg-white text-[#0E1011] text-lg sm:text-[22px] font-semibold rounded-full mx-auto font-inter hover:cursor-pointer hover:bg-[#DE063A] hover:text-white transition-colors duration-300">
                  Отправить запрос
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
