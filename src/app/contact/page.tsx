import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import BackToTopLink from "@/components/BackToTopLink";
import { Metadata } from "next";

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
      className={`relative flex flex-col min-h-screen bg-[#0E1011] max-w-[1920px] w-full mx-auto ${inter.variable}`}
    >
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Image */}
        <div className="w-full lg:w-[52%] bg-white">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/contact-image.png"
              alt="Contact Image"
              className="object-cover object-center w-full h-auto lg:h-full"
              width={1327}
              height={1742}
              priority
            />
          </div>
        </div>

        {/* Right Side Column */}
        <div className="w-full lg:w-[48%]">
          {/* Header */}
          <header className="flex flex-col sm:flex-row lg:flex-col xl:flex-row justify-between items-center px-6 sm:px-12 lg:px-24 pt-8 lg:pt-16 w-full">
            <nav className="flex items-center gap-4 sm:gap-8">
              <Link
                href="#"
                className="text-white font-inter font-semibold text-lg sm:text-[22px] leading-none hover:text-[#DE063A] transition-colors duration-300"
              >
                Projects
              </Link>
              <Link
                href="#"
                className="text-white font-inter font-semibold text-lg sm:text-[22px] leading-none hover:text-[#DE063A] transition-colors duration-300"
              >
                Services
              </Link>
              <Link
                href="#"
                className="text-white font-inter font-semibold text-lg sm:text-[22px] leading-none hover:text-[#DE063A] transition-colors duration-300"
              >
                Studio
              </Link>
              <Link
                href="#"
                className="text-white font-inter font-semibold text-lg sm:text-[22px] leading-none hover:text-[#DE063A] transition-colors duration-300"
              >
                Journal
              </Link>
            </nav>
            <div className="flex flex-col gap-0.5 justify-center mt-4 sm:mt-0 lg:mt-4 xl:mt-0 xl:mr-0 2xl:-mr-[82px]">
              <Link
                href="#"
                className="text-white font-inter font-semibold text-lg sm:text-[22px] leading-none underline underline-offset-5 decoration-2 hover:text-[#DE063A] transition-colors duration-300"
              >
                Let's Talk
              </Link>
            </div>
          </header>

          {/* Right Side - Form */}
          <div className="bg-[#0E1011] flex flex-col items-center">
            <div className="flex flex-col pl-6 sm:pl-12 lg:pl-24 pr-4 py-12 lg:py-24 h-full w-full">
              {/* Title and Description */}
              <div className="flex flex-col gap-4 pt-8 sm:pt-12 lg:pt-[74px] mb-8 lg:mb-22">
                <h1 className="text-white text-4xl sm:text-5xl md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px] font-bold uppercase leading-[110%] font-geometria">
                  ХОТИТЕ СОТРУДНИЧАТЬ ?
                </h1>
                <p className="text-white text-base sm:text-xl lg:text-[24px] leading-[170%] font-inter mt-2 lg:mt-[4px]">
                  Всегда рады продуктивному сотрудничеству, напишите и мы с вами
                  свяжемся для обсуждения подробностей.
                </p>
              </div>

              {/* Form */}
              <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full">
                  {/* Name Field */}
                  <div className="flex flex-col gap-2 lg:gap-3 flex-1">
                    <label className="text-white/60 text-base lg:text-[20px] leading-[100%] font-geometria font-normal">
                      Имя
                    </label>
                    <div className="bg-[#181A1B] border-2 border-white/20 px-3 sm:px-5 py-3 sm:py-4">
                      <input
                        type="text"
                        placeholder="Имя"
                        className="bg-transparent w-full text-base lg:text-[18px] leading-[180%] text-[#595959] outline-none font-inter"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col gap-2 lg:gap-3 flex-1">
                    <label className="text-white/60 text-base lg:text-[20px] leading-[100%] font-geometria font-normal">
                      Email
                    </label>
                    <div className="bg-[#181A1B] border-2 border-white/20 px-3 sm:px-5 py-3 sm:py-4">
                      <input
                        type="email"
                        placeholder="Email"
                        className="bg-transparent w-full text-base lg:text-[18px] leading-[180%] text-[#595959] outline-none font-inter"
                      />
                    </div>
                  </div>
                </div>

                {/* Company Field */}
                <div className="w-full">
                  <div className="bg-[#181A1B] border-2 border-white/20 px-3 sm:px-5 py-3 sm:py-4 h-12 sm:h-16">
                    <input
                      type="text"
                      placeholder="Компания"
                      className="bg-transparent w-full text-base lg:text-[18px] leading-[180%] text-[#595959] outline-none font-inter"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="w-full">
                  <div className="bg-[#181A1B] border-2 border-white/20 px-3 sm:px-5 py-3 sm:py-4 h-28 sm:h-[140px]">
                    <textarea
                      placeholder="Сообщение"
                      className="bg-transparent w-full h-full text-base lg:text-[18px] leading-[180%] text-[#595959] outline-none resize-none font-inter"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button className="flex flex-row justify-center items-center py-3 sm:py-4 px-5 sm:px-[26px] gap-2 w-full h-12 sm:h-[54px] bg-white text-[#0E1011] text-lg sm:text-[22px] font-semibold rounded-full mx-auto font-inter hover:cursor-pointer hover:bg-[#DE063A] hover:text-white transition-colors duration-300">
                  Отправить запрос
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white w-full">
        <div className="flex flex-col justify-between gap-20 lg:gap-40 px-6 sm:px-12 lg:px-24 pt-12 lg:pt-24 pb-8 lg:pb-16 w-full">
          {/* Logo and Navigation */}
          <div className="flex flex-col justify-stretch gap-16 lg:gap-32 w-full">
            {/* Logo */}
            <div className="relative">
              <div className="mt-10 lg:mt-[79px]">
                <Link href="/">
                  <Image
                    src="/images/logo.svg"
                    alt="NIK Studio Logo"
                    className="w-full max-w-[393.59px] h-auto"
                    width={393.59}
                    height={139.15}
                  />
                </Link>
              </div>
            </div>

            {/* Navigation Lists */}
            <div className="flex flex-col gap-12 lg:gap-24 w-full mt-12 sm:mt-24 lg:mt-[203px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 xl:gap-24 2xl:gap-44 w-full">
                {/* Pages */}
                <div className="flex flex-col gap-4 lg:gap-8 self-stretch">
                  <h3 className="text-[#0E1011]/60 text-xl lg:text-[30px] font-geometria font-normal leading-[100%] w-full lg:w-[360px] lg:h-[30px] self-stretch flex-grow-0">
                    (Pages)
                  </h3>
                  <nav className="flex flex-col gap-2 lg:gap-4">
                    <Link
                      href="#"
                      className="text-[#0E1011] hover:opacity-60 text-xl lg:text-[26px] font-inter font-semibold leading-[130%] w-full lg:w-[360px] lg:h-[34px] self-stretch flex-grow-0 transition-opacity duration-300"
                    >
                      Home
                    </Link>
                    <Link
                      href="#"
                      className="text-[#0E1011] hover:opacity-60 text-xl lg:text-[26px] font-inter font-semibold leading-[130%] w-full lg:w-[360px] lg:h-[34px] self-stretch flex-grow-0 transition-opacity duration-300"
                    >
                      Service
                    </Link>
                    <Link
                      href="#"
                      className="text-[#0E1011] hover:opacity-60 text-xl lg:text-[26px] font-inter font-semibold leading-[130%] w-full lg:w-[360px] lg:h-[34px] self-stretch flex-grow-0 transition-opacity duration-300"
                    >
                      Studio
                    </Link>
                    <Link
                      href="#"
                      className="text-[#0E1011] hover:opacity-60 text-xl lg:text-[26px] font-inter font-semibold leading-[130%] w-full lg:w-[360px] lg:h-[34px] self-stretch flex-grow-0 transition-opacity duration-300"
                    >
                      Contact
                    </Link>
                  </nav>
                </div>

                {/* Projects */}
                <div className="flex flex-col gap-4 lg:gap-8 self-stretch">
                  <h3 className="text-[#0E1011]/60 text-xl lg:text-[30px] font-geometria font-normal leading-[100%] w-full lg:w-[360px] lg:h-[30px] self-stretch flex-grow-0">
                    (CMS)
                  </h3>
                  <nav className="flex flex-col gap-2 lg:gap-4">
                    <Link
                      href="#"
                      className="text-[#0E1011] hover:opacity-60 text-xl lg:text-[26px] font-inter font-semibold leading-[130%] w-full lg:w-[360px] lg:h-[34px] self-stretch flex-grow-0 transition-opacity duration-300"
                    >
                      Work
                    </Link>
                    <Link
                      href="#"
                      className="text-[#0E1011] hover:opacity-60 text-xl lg:text-[26px] font-inter font-semibold leading-[130%] w-full lg:w-[360px] lg:h-[34px] self-stretch flex-grow-0 transition-opacity duration-300"
                    >
                      Work Single
                    </Link>
                    <Link
                      href="#"
                      className="text-[#0E1011] hover:opacity-60 text-xl lg:text-[26px] font-inter font-semibold leading-[130%] w-full lg:w-[360px] lg:h-[34px] self-stretch flex-grow-0 transition-opacity duration-300"
                    >
                      Blog
                    </Link>
                    <Link
                      href="#"
                      className="text-[#0E1011] hover:opacity-60 text-xl lg:text-[26px] font-inter font-semibold leading-[130%] w-full lg:w-[360px] lg:h-[34px] self-stretch flex-grow-0 transition-opacity duration-300"
                    >
                      Blog Single
                    </Link>
                  </nav>
                </div>

                {/* Media */}
                <div className="flex flex-col gap-4 lg:gap-8 self-stretch mt-8 sm:mt-0">
                  <h3 className="text-[#0E1011]/60 text-xl lg:text-[30px] font-geometria font-normal leading-[100%] w-full lg:w-[360px] lg:h-[30px] self-stretch flex-grow-0">
                    (Utility Pages)
                  </h3>
                  <nav className="flex flex-col gap-2 lg:gap-4">
                    <Link
                      href="#"
                      className="text-[#0E1011] hover:opacity-60 text-xl lg:text-[26px] font-inter font-semibold leading-[130%] w-full lg:w-[360px] lg:h-[34px] self-stretch flex-grow-0 transition-opacity duration-300"
                    >
                      404
                    </Link>
                    <Link
                      href="#"
                      className="text-[#0E1011] hover:opacity-60 text-xl lg:text-[26px] font-inter font-semibold leading-[130%] w-full lg:w-[360px] lg:h-[34px] self-stretch flex-grow-0 transition-opacity duration-300"
                    >
                      Licensing
                    </Link>
                  </nav>
                </div>

                {/* Socials */}
                <div className="flex flex-col gap-4 lg:gap-8 self-stretch mt-8 sm:mt-0">
                  <h3 className="text-[#0E1011]/60 text-xl lg:text-[30px] font-geometria font-normal leading-[100%] w-full lg:w-[360px] lg:h-[30px] self-stretch flex-grow-0">
                    (Socials)
                  </h3>
                  <nav className="flex flex-col gap-2 lg:gap-4">
                    <Link
                      href="#"
                      className="text-[#0E1011] hover:opacity-60 text-xl lg:text-[26px] font-inter font-semibold leading-[130%] w-full lg:w-[360px] lg:h-[34px] self-stretch flex-grow-0 transition-opacity duration-300"
                    >
                      Instagram
                    </Link>
                    <Link
                      href="#"
                      className="text-[#0E1011] hover:opacity-60 text-xl lg:text-[26px] font-inter font-semibold leading-[130%] w-full lg:w-[360px] lg:h-[34px] self-stretch flex-grow-0 transition-opacity duration-300"
                    >
                      Behance
                    </Link>
                    <Link
                      href="#"
                      className="text-[#0E1011] hover:opacity-60 text-xl lg:text-[26px] font-inter font-semibold leading-[130%] w-full lg:w-[360px] lg:h-[34px] self-stretch flex-grow-0 transition-opacity duration-300"
                    >
                      Dribbble
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="flex flex-col sm:flex-row justify-between w-full sm:-mt-8 lg:-mt-[67px] gap-8 sm:gap-0">
            <div className="flex flex-col gap-0.5">
              <Link 
                href="https://www.golatemplate.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#0E1011] text-lg sm:text-[22px] font-semibold font-inter hover:opacity-60 underline underline-offset-5 decoration-2 transition-opacity duration-300"
              >
                By Gola Templates
              </Link>
            </div>
            <BackToTopLink />
          </div>
        </div>
      </footer>
    </main>
  );
}
