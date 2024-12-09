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

  const content = {
    mn: {
      name: "Батжаргалын Тэмүүжин",
      title: "Програм хангамжийн инженер",
      location: "Улаанбаатар, Монгол Улс",
      nav: ["Боловсрол", "Ажлын туршлага", "Ур чадвар", "Нэмэлт мэдээлэл"],
      education: {
        title: "Боловсрол",
        degree1: {
          name: "Бизнесийн удирдлага, бакалавр",
          school: "Сургууль: Kainan University",
          location: "Байршил: Тайвань",
          duration: "Хугацаа: 2018 – 2023 он 9 сар",
        },
        degree2: {
          name: "Software Engineer сертификат",
          school: "Байгууллага: Pinecone Academy",
          location: "Байршил: Монгол Улс",
          duration: "Хугацаа: 2023 - 2023 он 2 сар",
        },
      },
      experience: {
        title: "Ажлын туршлага",
        job: {
          company: "FedEx, Тайвань",
          position: "Ажлын албан тушаал: Цагийн ажилтан",
          duration: "Хугацаа: 2020 – 2023",
          responsibilities: [
            "Логистик, хэрэглэгчийн үйлчилгээний чиглэлээр туршлага хуримтлуулсан.",
            "Ажлын урсгалын оновчлол, цагийн менежмент, багийн харилцаа холбоог сайжруулсан.",
            "Ачаа тээвэр, хүргэлтийн процессыг хянах, зохицуулах үүрэгтэй ажилласан.",
          ],
        },
      },
      skills: {
        title: "Ур чадвар",
        programming: {
          title: "Програмчлалын ур чадвар:",
          languages: "Програмчлалын хэлүүд: HTML, CSS, JavaScript",
          frontend: "Фронт-энд хөгжүүлэлт: React.js, Tailwind CSS, ShadCN, MUI",
          backend: "Бэк-энд хөгжүүлэлт: Node.js, Express.js, MongoDB",
          services: "Үйлчилгээ ба интеграци: Clerk, Nodemailer",
          cloud:
            "Үүлэн үйлчилгээ ба байршуулалт: Cloudflare, Cloudinary, Vercel, Render",
        },
        business: {
          title: "Бизнесийн ур чадвар:",
          skills: "Төслийн удирдлага, харилцааны чадвар, логистик",
        },
        language: {
          title: "Хэлний мэдлэг:",
          skills:
            "Монгол хэл (Төрөлх), Англи хэл (Дундаас дээш түвшин), Хятад хэл (Суурь)",
        },
        teamwork: {
          title: "Багаар ажиллах чадвар:",
          skills: "Үр дүнтэй харилцаа, асуудал шийдвэрлэх ур чадвар сайтай.",
        },
        personal: {
          title: "Хувийн ур чадвар",
          skills: [
            "Асуудал шийдвэрлэх чадвар: Олон талт асуудлыг дүн шинжилгээ хийж, бүтээлч шийдлүүд гаргах чадвартай.",
            "Шинийг суралцах, дасан зохицох чадвар: Шинэ технологи болон аргачлалыг богино хугацаанд бие даан суралцдаг.",
            "Хариуцлага, цагийн менежмент: Ажлын зорилгыг цаг тухайд нь биелүүлэхэд анхаарч ажилладаг.",
          ],
        },
      },
      additional: {
        title: "Нэмэлт мэдээлэл",
        info: [
          "Тайваньд амьдарч байх хугацаандаа олон улсын орчинд ажиллах туршлага хуримтлуулсан.",
          "Бие дааж суралцах болон шинэ технологийг хурдан суралцах чадвартай.",
          "Программ хангамжийн инженерчлэл болон бизнесийн удирдлагын мэдлэгээ хослуулан, оновчтой шийдлүүдийг санал болгох чадвартай.",
        ],
      },
      footer: "© 2024 Батжаргалын Тэмүүжин. Бүх эрх хуулиар хамгаалагдсан.",
    },
    en: {
      name: "Batjargal Temuujin",
      title: "Software Engineer",
      location: "Ulaanbaatar, Mongolia",
      nav: ["Education", "Work Experience", "Skills", "Additional Information"],
      education: {
        title: "Education",
        degree1: {
          name: "Bachelor of Business Administration",
          school: "School: Kainan University",
          location: "Location: Taiwan",
          duration: "Duration: 2018 – September 2023",
        },
        degree2: {
          name: "Software Engineer Certificate",
          school: "Organization: Pinecone Academy",
          location: "Location: Mongolia",
          duration: "Duration: 2023 – 2 months",
        },
      },
      experience: {
        title: "Work Experience",
        job: {
          company: "FedEx, Taiwan",
          position: "Position: Part-Time Worker",
          duration: "Duration: 2020 – 2023",
          responsibilities: [
            "Gained experience in logistics and customer service.",
            "Improved workflow optimization, time management, and team communication.",
            "Responsible for monitoring and coordinating cargo transportation and delivery processes.",
          ],
        },
      },
      skills: {
        title: "Skills",
        programming: {
          title: "Programming Skills:",
          languages: "Programming Languages: HTML, CSS, JavaScript",
          frontend:
            "Front-End Development: React.js, Tailwind CSS, ShadCN, MUI",
          backend: "Back-End Development: Node.js, Express.js, MongoDB",
          services: "Services & Integrations: Clerk, Nodemailer",
          cloud:
            "Cloud Services & Deployment: Cloudflare, Cloudinary, Vercel, Render",
        },
        business: {
          title: "Business Skills:",
          skills: "Project management, communication skills, logistics",
        },
        language: {
          title: "Language Proficiency:",
          skills:
            "Mongolian (Native), English (Intermediate to Advanced), Chinese (Basic)",
        },
        teamwork: {
          title: "Teamwork Skills:",
          skills: "Strong communication and problem-solving abilities",
        },
        personal: {
          title: "Personal Skills",
          skills: [
            "Problem-Solving: Ability to analyze complex issues and provide creative solutions.",
            "Learning & Adaptability: Quick to learn new technologies and methods independently.",
            "Responsibility & Time Management: Focused on meeting work goals and deadlines.",
          ],
        },
      },
      additional: {
        title: "Additional Information",
        info: [
          "Gained experience working in an international environment while living in Taiwan.",
          "Able to learn independently and quickly adapt to new technologies.",
          "Capable of combining knowledge of software engineering and business management to propose optimized solutions.",
        ],
      },
      footer: "© 2024 Batjargal Temuujin. All rights reserved.",
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <header className="bg-green-600 text-white p-6 sm:p-8">
          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="relative w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/mkae.jpg"
                  alt={t.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="text-center relative top-14 sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                  {t.name}
                </h1>
                <p className="text-xl">{t.title}</p>
              </div>
            </div>
            <div className="mt-4 sm:mt-0">
              <div className="relative">
                <select
                  value={language}
                  onChange={toggleLanguage}
                  className="appearance-none bg-white text-green-600 py-2 pl-3 pr-10 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  <option value="mn">Монгол</option>
                  <option value="en">English</option>
                </select>
                <Globe className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600 pointer-events-none" />
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-8 ml-8 justify-center sm:justify-start">
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span className="font-bold text-sm sm:text-base">
                mkae.dev@gmail.com
              </span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span className="font-bold text-sm sm:text-base">
                +976 99484778
              </span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="font-bold text-sm sm:text-base">
                {t.location}
              </span>
            </div>
          </div>
        </header>

        <nav className="bg-white p-4 sticky top-0 z-10 shadow-md">
          <ul className="flex flex-wrap justify-between max-w-2xl mx-auto">
            {t.nav.map((section, index) => (
              <li key={section} className="w-1/2 sm:w-auto mb-2 sm:mb-0">
                <a
                  href={`#${section}`}
                  className="text-black hover:text-green-600 font-medium px-2 sm:px-4 py-2 rounded-md transition-colors duration-200 hover:bg-green-100 flex items-center text-sm sm:text-base"
                >
                  {index === 0 && (
                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-green-500" />
                  )}
                  {index === 1 && (
                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-green-500" />
                  )}
                  {index === 2 && (
                    <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-green-500" />
                  )}
                  {index === 3 && (
                    <Info className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-green-500" />
                  )}
                  <span className="hidden sm:inline">{section}</span>
                  <span className="sm:hidden">{section.split(" ")[0]}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <main className="p-6">
          <section id={t.nav[0]} className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <GraduationCap className="w-6 h-6 mr-2 text-green-500" />
              {t.education.title}
            </h2>
            <div className="ml-4 sm:ml-8">
              <h3 className="text-xl font-semibold">
                {t.education.degree1.name}
              </h3>
              <p>{t.education.degree1.school}</p>
              <p>{t.education.degree1.location}</p>
              <p>{t.education.degree1.duration}</p>
            </div>
            <div className="ml-4 sm:ml-8 mt-4">
              <h3 className="text-xl font-semibold">
                {t.education.degree2.name}
              </h3>
              <p>{t.education.degree2.school}</p>
              <p>{t.education.degree2.location}</p>
              <p>{t.education.degree2.duration}</p>
            </div>
          </section>

          <section id={t.nav[1]} className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Briefcase className="w-6 h-6 mr-2 text-green-500" />
              {t.experience.title}
            </h2>
            <div className="ml-4 sm:ml-8">
              <h3 className="text-xl font-semibold">
                {t.experience.job.company}
              </h3>
              <p>{t.experience.job.position}</p>
              <p>{t.experience.job.duration}</p>
              <ul className="list-disc ml-4 sm:ml-6 mt-2">
                {t.experience.job.responsibilities.map(
                  (responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  )
                )}
              </ul>
            </div>
          </section>

          <section id={t.nav[2]} className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Code className="w-6 h-6 mr-2 text-green-500" />
              {t.skills.title}
            </h2>
            <div className="ml-4 sm:ml-8 flex flex-col gap-2">
              <h3 className="text-xl font-semibold">
                {t.skills.programming.title}
              </h3>
              <p>{t.skills.programming.languages}</p>
              <p>{t.skills.programming.frontend}</p>
              <p>{t.skills.programming.backend}</p>
              <p>{t.skills.programming.services}</p>
              <p>{t.skills.programming.cloud}</p>

              <h3 className="text-xl font-semibold mt-4">
                {t.skills.business.title}
              </h3>
              <p>{t.skills.business.skills}</p>

              <h3 className="text-xl font-semibold mt-4 flex items-center">
                <Languages className="w-5 h-5 mr-2 text-green-500" />
                {t.skills.language.title}
              </h3>
              <p>{t.skills.language.skills}</p>

              <h3 className="text-xl font-semibold mt-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-green-500" />
                {t.skills.teamwork.title}
              </h3>
              <p>{t.skills.teamwork.skills}</p>

              <h3 className="text-xl font-semibold mt-4 flex items-center">
                <Code className="w-6 h-6 mr-2 text-green-500" />
                {t.skills.personal.title}
              </h3>
              <ul className="list-disc ml-6">
                {t.skills.personal.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </section>

          <section id={t.nav[3]} className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Info className="w-6 h-6 mr-2 text-green-500" />
              {t.additional.title}
            </h2>
            <ul className="list-disc ml-8 sm:ml-14">
              {t.additional.info.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          </section>
        </main>

        <footer className="bg-gray-200 p-6 text-center">
          <p>{t.footer}</p>
        </footer>
      </div>
    </div>
  );
}
