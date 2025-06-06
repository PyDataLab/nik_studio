import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0E1011] relative">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="w-full px-6 sm:px-12 lg:px-24 pt-100 sm:pt-40 lg:pt-[150px] pb-16 lg:pb-[217px]">
        <h1 className="text-[52px] sm:text-[96px] md:text-[96px] lg:text-[150px] xl:text-[200px] 2xl:text-[280px] font-geometria font-extrabold uppercase text-white leading-none">
          проекты
        </h1>
        <p className="text-white text-2xl sm:text-4xl lg:text-[80px] font-inter font-semibold leading-[1.2] tracking-[-2.5%] max-w-[1400px] mt-2">
          Весь визуальный посыл в едином ключе создаёт сильный бренд и надежную репутацию
        </p>
      </section>

      {/* Project Categories */}
      <section className="w-full px-6 sm:px-12 lg:px-24 flex justify-center items-cente mt-10">
        <div className="text-white text-lg sm:text-xl lg:text-[32px] font-inter leading-none flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-10">
          <Link href="/projects" className="hover:text-[#DE063A] transition-colors duration-300">
            Проекты
          </Link>
          <Link href="/projects/branding" className="hover:text-[#DE063A] transition-colors duration-300">
            Брендинг
          </Link>
          <Link href="/projects/design" className="hover:text-[#DE063A] transition-colors duration-300">
            Дизайн
          </Link>
          <Link href="/projects/3d" className="hover:text-[#DE063A] transition-colors duration-300">
            3д графика
          </Link>
          <Link href="/projects/photo" className="hover:text-[#DE063A] transition-colors duration-300">
            Фото
          </Link>
          <Link href="/projects/video" className="hover:text-[#DE063A] transition-colors duration-300">
            Видео
          </Link>
          <Link href="/projects/websites" className="hover:text-[#DE063A] transition-colors duration-300">
            Сайты
          </Link>
        </div>
      </section>

      {/* Project Cards */}
      <section className="w-full flex flex-col gap-6 lg:gap-[24px] mt-8 lg:mt-7 pb-6">
        {/* ИКАР Project */}
        <div className="w-full h-screen sm:h-[540px] lg:h-[1080px] relative">
          <Image 
            src="/images/projects/ikar.jpg" 
            alt="ИКАР проект" 
            fill 
            className="object-cover" 
          />
          <div className="absolute bottom-8 sm:bottom-12 lg:bottom-[96px] left-6 sm:left-12 lg:left-24">
            <h2 className="text-[30px] sm:text-[64px] xl:text-[96px] 2xl:text-[192px] font-geometria font-bold text-white uppercase leading-none">
              икар
            </h2>
          </div>
        </div>

        {/* АВИАСПЕЦМАШ Project */}
        <div className="w-full h-screen sm:h-[540px] lg:h-[1080px] relative">
          <div className="absolute inset-0 bg-black/40"></div>
          <Image 
            src="/images/projects/aviaspecmash.jpg" 
            alt="АВИАСПЕЦМАШ проект" 
            fill 
            className="object-cover" 
          />
          <div className="absolute bottom-8 sm:bottom-12 lg:bottom-[96px] left-6 sm:left-12 lg:left-24">
            <h2 className="text-[30px] sm:text-[64px] xl:text-[96px] 2xl:text-[192px] font-geometria font-bold text-white uppercase leading-none">
              авиаспецмаш
            </h2>
          </div>
        </div>

        {/* ТЕХНОПОЛИС МОСКВА Project */}
        <div className="w-full h-screen sm:h-[540px] lg:h-[1080px] relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <Image 
            src="/images/projects/tehnopolis.jpg" 
            alt="ТЕХНОПОЛИС МОСКВА проект" 
            fill 
            className="object-cover" 
          />
          <div className="absolute bottom-8 sm:bottom-12 lg:bottom-28">
            <h2 className="text-[30px] sm:text-[64px] xl:text-[96px] 2xl:text-[192px] font-geometria font-bold text-white uppercase leading-none ml-6 sm:ml-12 lg:ml-24">
              технополис<br />москва
            </h2>
          </div>
        </div>

        {/* МОНИТОР СОФТ Project */}
        <div className="w-full h-screen sm:h-[540px] lg:h-[1080px] relative">
          <Image 
            src="/images/projects/monitor-soft.jpg" 
            alt="МОНИТОР СОФТ проект" 
            fill 
            className="object-cover" 
          />
          <div className="absolute bottom-8 sm:bottom-12 lg:bottom-[96px] left-6 sm:left-12 lg:left-24">
            <h2 className="text-[30px] sm:text-[64px] xl:text-[96px] 2xl:text-[192px] font-geometria font-bold text-white uppercase leading-none">
              монитор софт
            </h2>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
