import Link from "next/link";
import Image from "next/image";
import BackToTopLink from "./BackToTopLink";

export default function Footer() {
  return (
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 xl:gap-24 2xl:gap-26 w-full">
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

              {/* CMS */}
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

              {/* Utility Pages */}
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
  );
} 