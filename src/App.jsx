import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EngineerGrowth from './components/EngineerGrowth';
import Services from './components/Services';
import Timeline from './components/Timeline';
import ImpactStats from './components/ImpactStats';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';
import CTA from './components/CTA';
import OurTeam from './components/OurTeam';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import TeamPage from './pages/TeamPage';
import WorkPage from './pages/WorkPage';
import ScrollToTop from './components/ScrollToTop';
import Seo from './components/Seo';
import blogPosts from './data/blogPosts';
import { organizationSchema, websiteSchema } from './seo/structuredData';

// Root layout — wraps every route. Scroll restoration lives here and
// the matched route renders into <Outlet />.
const RootLayout = () => (
  <>
    <ScrollToTop />
    <Outlet />
  </>
);

const Home = () => (
  <div className="min-h-screen text-white" style={{ background: '#0D0D0F' }}>
    <Seo
      path="/"
      jsonLd={[organizationSchema, websiteSchema]}
    />
    <Navbar />
    <main>
      <Hero />
      <EngineerGrowth />
      <Services />
      <Timeline />
      <ImpactStats />
      <OurTeam />
      <Testimonials />
      <Blog />
      <ContactForm />
      <CTA />
    </main>
    <Footer />
  </div>
);

// vite-react-ssg consumes this route config to pre-render each path to
// static HTML. `getStaticPaths` enumerates the dynamic blog routes.
export const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'terms-of-service', element: <TermsOfService /> },
      { path: 'cookie-policy', element: <CookiePolicy /> },
      { path: 'blog', element: <BlogPage /> },
      {
        path: 'blog/:slug',
        element: <BlogPost />,
        getStaticPaths: () => blogPosts.map((post) => `/blog/${post.slug}`),
      },
      { path: 'team', element: <TeamPage /> },
      { path: 'work', element: <WorkPage /> },
    ],
  },
];
