import "../globals.css";
import svg1 from '@/public/images/social media.svg'
import Image from "next/image";
import CommentSection from "./commentsection/page";

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import {
  VisualEditing,
  toPlainText,
  type PortableTextBlock,
} from "next-sanity";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";

import AlertBanner from "./alert-banner";
import PortableText from "./portable-text";

import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityFetch({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  });
  const title = settings?.title || demo.title;
  const description = settings?.description || demo.description;

  const ogImage = resolveOpenGraphImage(settings?.ogImage);
  let metadataBase: URL | undefined = undefined;
  try {
    metadataBase = settings?.ogImage?.metadataBase
      ? new URL(settings.ogImage.metadataBase)
      : undefined;
  } catch {
    // ignore
  }
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: toPlainText(description),
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  };
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await sanityFetch({ query: settingsQuery });
  const footer = data?.footer || [];
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="en" className={`${inter.variable} bg-white text-black`}>
      <body>
        <section className="min-h-screen">
          <AlertBanner />
          <main>{children}</main>
          <footer className="bg-accent-1 border-accent-2 border-t">
            <div className="container mx-auto px-5">
              {footer.length > 0 ? (
                <PortableText
                  className="prose-sm text-pretty bottom-0 w-full max-w-none bg-white py-12 text-center md:py-20"
                  value={footer as PortableTextBlock[]}
                />
              ) : (
                <div className="">
                  <div className="h-[173px] pt-[60px] lg:flex mt-20">
        <p className=" ml-10 sm:ml-80 lg:ml-[100px] xl:ml-[150px] text-[24px] font-[Montserrat] leading-[32px] text-blue-900 font-bold">Blog.com</p>
        <Image
      src={svg1}
      alt="company logo"
        className="mt-8 ml-8 sm:ml-80 lg:ml-[600px] xl:ml-[850px] lg:-mt-[70px]"
    />
        </div>

        <div>
            <div className="lg:flex space-x-20 lg:space-x-3 xl:space-x-32">
                <div className="sm:flex">
            <div className="space-y-[10px] mt-10 ml-10 lg:ml-4 xl:ml-32">
                <h1 className=" font-bold text-[16px] leading-[24px]">Company Info</h1>
                <p className=" text-custom3 font-bold text-[14px] leading-[24px]">About Us</p>
                <p className="text-custom3 font-bold text-[14px] leading-[24px]">Carrier</p>
                <p  className="text-custom3 font-bold text-[14px] leading-[24px]">We are hiring</p>
                <p className="text-custom3 font-bold text-[14px] leading-[24px]">Blog</p>
            </div>

            <div className="space-y-[10px] mt-10 ml-10">
                <h1 className=" font-bold text-[16px] leading-[24px]">Legal</h1>
                <p className=" text-custom3 font-bold text-[14px] leading-[24px]">About Us</p>
                <p className="text-custom3 font-bold text-[14px] leading-[24px]">Carrier</p>
                <p  className="text-custom3 font-bold text-[14px] leading-[24px]">We are hiring</p>
                <p className="text-custom3 font-bold text-[14px] leading-[24px]">Blog</p>
            </div>

            <div className="space-y-[10px] mt-10 ml-10">
                <h1 className=" font-bold text-[16px] leading-[24px]">Features</h1>
                <p className=" text-custom3 font-bold text-[14px] leading-[24px]">About Us</p>
                <p className="text-custom3 font-bold text-[14px] leading-[24px]">Carrier</p>
                <p  className="text-custom3 font-bold text-[14px] leading-[24px]">We are hiring</p>
                <p className="text-custom3 font-bold text-[14px] leading-[24px]">Blog</p>
            </div>
            

            <div className="space-y-[10px] mt-10 ml-10">
                <h1 className=" font-bold text-[16px] leading-[24px]">Resource</h1>
                <p className=" text-custom3 font-bold text-[14px] leading-[24px]">About Us</p>
                <p className="text-custom3 font-bold text-[14px] leading-[24px]">Carrier</p>
                <p  className="text-custom3 font-bold text-[14px] leading-[24px]">We are hiring</p>
                <p className="text-custom3 font-bold text-[14px] leading-[24px]">Blog</p>
            </div>
             
            <div className="space-y-[10px] mt-10 ml-10">
                <h1 className=" font-bold text-[16px] leading-[24px]">Company Info</h1>
                <p className=" text-custom3 font-bold text-[14px] leading-[24px]">About Us</p>
                <p className="text-custom3 font-bold text-[14px] leading-[24px]">Carrier</p>
                <p  className="text-custom3 font-bold text-[14px] leading-[24px]">We are hiring</p>
                <p className="text-custom3 font-bold text-[14px] leading-[24px]">Blog</p>
            </div>
            </div>
            <div className="mt-10 ">
            <h1 className=" font-bold text-[16px] leading-[24px]">Get In Touch</h1>
            <div className="flex mt-4">
            <div className="bg-slate-100 text-custom3 pt-[15px] text-[14px] leading-[28px] text-center h-[58px] rounded-[5px] w-[204px] ">Your Email</div>
            <button className="bg-blue-900 text-[14px] text-white leading-[28px] w-[120px] rounded-[5px]"> Subscribe</button>
            </div>
            </div>
</div>
            <div className="mt-4">
            {/* <Image
      src={svg2}
      alt="company logo"
        className="md:hidden"
    /> */}
            </div>
            <div className=" h-[74px] text-center pt-6 font-bold max-sm:hidden">
                <p className="text-blue-900">Made By Muhammad Usaid Khan All Right Reserved</p>
            </div>
        </div>
                </div>
              )}
            </div>
          </footer>
        </section>
        {isDraftMode && <VisualEditing />}
        <SpeedInsights />
                <CommentSection></CommentSection>
     </body>
    </html>
  );
}
