import { Helmet } from "react-helmet-async";

export default function SEO({ title, description }) {
  const fullTitle = title
    ? `${title} | Kawsar Islam`
    : "Kawsar Islam | Frontend Developer";
  const desc =
    description ||
    "Kawsar Islam – Frontend Developer from Dhaka, Bangladesh. Building modern, responsive web applications with React.js and Tailwind CSS.";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}