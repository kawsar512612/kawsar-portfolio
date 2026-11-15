import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FiHome, FiArrowLeft } from "react-icons/fi";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <PageTransition>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist."
      />
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="container-x flex min-h-screen flex-col items-center justify-center pb-16 pt-28 text-center">
        <p className="gradient-text font-display text-8xl font-bold sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-muted">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="btn-primary">
            <FiHome /> Back to Home
          </Link>
          <button onClick={() => window.history.back()} className="btn-outline">
            <FiArrowLeft /> Go Back
          </button>
        </div>
      </section>
    </PageTransition>
  );
}