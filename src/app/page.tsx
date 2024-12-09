"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Code,
  Languages,
  Users,
  Info,
  Globe,
} from "lucide-react";

export default function CVWebsite() {
  const [language, setLanguage] = useState<"mn" | "en">("mn");

  const toggleLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as "mn" | "en");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <header className="bg-green-600 text-white p-8">
          <div className="flex flex-col items-center  md:flex-row md:justify-between">
            <div className="text-center  md:text-left flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/mkae.jpg"
                  alt="Батжаргалын Тэмүүжин"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative top-14 flex justify-center  flex-col">
                <h1 className="text-4xl font-bold mb-2">
                  Батжаргалын Тэмүүжин
                </h1>
                <p className="text-xl">Software Engineer</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              {/* <div className="relative bottom-20">
                <select
                  value={language}
                  onChange={toggleLanguage}
                  className="appearance-none  bg-white text-black py-2 pl-3 pr-10 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <option value="mn">Монгол</option>
                  <option value="en">English</option>
                </select>
                <Globe className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600 pointer-events-none" />
              </div> */}
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span className="font-bold text-[18px]">mkae.dev@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span className="font-bold text-[18px]">+976 99484778</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="font-bold text-[18px]">
                Улаанбаатар, Монгол Улс
              </span>
            </div>
          </div>
        </header>

        <nav className="bg-white p-4   sticky top-0 z-10">
          <ul className="flex flex-wrap justify-between max-w-2xl mx-auto">
            {[
              "Боловсрол",
              "Ажлын туршлага",
              "Ур чадвар",
              "Нэмэлт мэдээлэл",
            ].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className="text-black hover:text-blue-800 font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-blue-100 flex items-center"
                >
                  {section === "Боловсрол" && (
                    <GraduationCap className="w-5 h-5 mr-1 text-green-500" />
                  )}
                  {section === "Ажлын туршлага" && (
                    <Briefcase className="w-5 h-5 mr-1 text-green-500" />
                  )}
                  {section === "Ур чадвар" && (
                    <Code className="w-5 h-5 mr-1 text-green-500" />
                  )}
                  {section === "Нэмэлт мэдээлэл" && (
                    <Info className="w-5 h-5 mr-1 text-green-500" />
                  )}
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <main className="p-6">
          <section id="Боловсрол" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <GraduationCap className="w-6 h-6 mr-2 text-green-500" />
              Боловсрол
            </h2>
            <div className="ml-8">
              <h3 className="text-xl font-semibold">
                Бизнесийн удирдлага, бакалавр
              </h3>
              <p>Сургууль: Kainan University</p>
              <p>Байршил: Тайвань</p>
              <p>Хугацаа: 2018 – 2023 он 9 сар</p>
            </div>
            <div className="ml-8 mt-4">
              <h3 className="text-xl font-semibold">
                Software Engineer сертификат
              </h3>
              <p>Байгууллага: Pinecone Academy</p>
              <p>Байршил: Монгол Улс</p>
              <p>Хугацаа: 2023 - 2023 он 2 сар</p>
            </div>
          </section>

          <section id="Ажлын туршлага" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Briefcase className="w-6 h-6 mr-2 text-green-500" />
              Ажлын туршлага
            </h2>
            <div className="ml-8">
              <h3 className="text-xl font-semibold">FedEx, Тайвань</h3>
              <p>Ажлын албан тушаал: Цагийн ажилтан</p>
              <p>Хугацаа: 2020 – 2023</p>
              <ul className="list-disc ml-6 mt-2">
                <li>
                  Логистик, хэрэглэгчийн үйлчилгээний чиглэлээр туршлага
                  хуримтлуулсан.
                </li>
                <li>
                  Ажлын урсгалын оновчлол, цагийн менежмент, багийн харилцаа
                  холбоог сайжруулсан.
                </li>
                <li>
                  Ачаа тээвэр, хүргэлтийн процессыг хянах, зохицуулах үүрэгтэй
                  ажилласан.
                </li>
              </ul>
            </div>
          </section>

          <section id="Ур чадвар" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Code className="w-6 h-6 mr-2 text-green-500" />
              Ур чадвар
            </h2>
            <div className="ml-8 flex flex-col gap-2">
              <h3 className="text-xl font-semibold">
                Програмчлалын ур чадвар:
              </h3>
              <div className="flex">
                <p className="font-bold">Програмчлалын хэлүүд:</p> HTML, CSS,
                JavaScript
              </div>
              <div className="flex">
                <p className="font-bold">Фронт-энд хөгжүүлэлт:</p> React.js,
                Tailwind CSS, ShadCN, MUI
              </div>
              <div className="flex">
                <p className="font-bold">Бэк-энд хөгжүүлэлт:</p> Node.js,
                Express.js, MongoDB
              </div>
              <div className="flex">
                <p className="font-bold">Үйлчилгээ ба интеграци: :</p> Clerk,
                Nodemailer
              </div>
              <div className="flex">
                <p className="font-bold">Үүлэн үйлчилгээ ба байршуулалт:</p>{" "}
                Cloudflare, Cloudinary, Vercel, Render
              </div>
              <h3 className="text-xl font-semibold mt-2">
                Бизнесийн ур чадвар:
              </h3>
              <p>Төслийн удирдлага, харилцааны чадвар, логистик</p>
              <h3 className="text-xl font-semibold mt-4 flex items-center">
                <Languages className="w-5 h-5 mr-2 text-green-500" />
                Хэлний мэдлэг:
              </h3>
              <p>
                Монгол хэл (Төрөлх), Англи хэл (Дундаас дээш түвшин), Хятад хэл
                (Суурь)
              </p>
              <h3 className="text-xl font-semibold mt-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-green-500" />
                Багаар ажиллах чадвар:
              </h3>
              <p>Үр дүнтэй харилцаа, асуудал шийдвэрлэх ур чадвар сайтай.</p>
              <h3 className="text-xl font-semibold mt-4 flex items-center">
                <Code className="w-6 h-6 mr-2 text-green-500" />
                Хувийн ур чадвар
              </h3>
              <ul className="list-disc ml-14">
                <li>
                  Асуудал шийдвэрлэх чадвар. Олон талт асуудлыг дүн шинжилгээ
                  хийж, бүтээлч шийдлүүд гаргах чадвартай.
                </li>
                <li>
                  Шинийг суралцах, дасан зохицох чадвар. Шинэ технологи болон
                  аргачлалыг богино хугацаанд бие даан суралцдаг.
                </li>
                <li>
                  Хариуцлага, цагийн менежмент. Ажлын зорилгыг цаг тухайд нь
                  биелүүлэхэд анхаарч ажилладаг.
                </li>
              </ul>
            </div>
          </section>

          <section id="Нэмэлт мэдээлэл" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Info className="w-6 h-6 mr-2 text-green-500" />
              Нэмэлт мэдээлэл
            </h2>
            <ul className="list-disc ml-14">
              <li>
                Тайваньд амьдарч байх хугацаандаа олон улсын орчинд ажиллах
                туршлага хуримтлуулсан.
              </li>
              <li>
                Бие дааж суралцах болон шинэ технологийг хурдан суралцах
                чадвартай.
              </li>
              <li>
                Программ хангамжийн инженерчлэл болон бизнесийн удирдлагын
                мэдлэгээ хослуулан, оновчтой шийдлүүдийг санал болгох чадвартай.
              </li>
            </ul>
          </section>
        </main>

        <footer className="bg-gray-200 p-6 text-center">
          <p>
            &copy; 2024 Батжаргалын Тэмүүжин. Бүх эрх хуулиар хамгаалагдсан.
          </p>
        </footer>
      </div>
    </div>
  );
}
