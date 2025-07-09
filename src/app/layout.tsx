import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Полина Варфоломеева | Специалист по автоматизации бизнес-процессов",
  description:
    "Специалист по автоматизации бизнес-процессов с экспертизой в 1С:ERP, 1С:Бухгалтерия, интеграции с ИИ и внешними системами. Разработка, внедрение, обучение.",
  keywords:
    "1С, автоматизация, бизнес-процессы, ERP, интеграции, ИИ, ЯндексGPT, Python, SQL, разработка",
  authors: [{ name: "Полина Варфоломеева" }],
  creator: "Полина Варфоломеева",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: "Полина Варфоломеева | Автоматизация бизнес-процессов",
    description:
      "Эксперт по 1С и автоматизации бизнес-процессов. Интеграции с ИИ, разработка решений, обучение специалистов.",
    siteName: "Портфолио Полины Варфоломеевой",
  },
  twitter: {
    card: "summary_large_image",
    title: "Полина Варфоломеева | Автоматизация бизнес-процессов",
    description:
      "Эксперт по 1С и автоматизации бизнес-процессов. Интеграции с ИИ, разработка решений, обучение специалистов.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}
