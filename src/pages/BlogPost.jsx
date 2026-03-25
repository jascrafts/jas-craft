import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import blogPosts from '../data/blogPosts';

const renderBlock = (block, i) => {
  switch (block.type) {
    case 'heading':
      return (
        <h2 key={i} style={{ fontSize: '22px', fontWeight: 800, color: '#fff', margin: '40px 0 14px' }}>
          {block.text}
        </h2>
      );
    case 'subheading':
      return (
        <h3 key={i} style={{ fontSize: '17px', fontWeight: 700, color: 'rgba(255,255,255,0.85)', margin: '28px 0 10px' }}>
          {block.text}
        </h3>
      );
    case 'paragraph':
      return (
        <p key={i} style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.9, fontSize: '16px', marginBottom: '20px' }}>
          {block.text}
        </p>
      );
    case 'quote':
      return (
        <blockquote
          key={i}
          style={{
            borderLeft: '3px solid #8B6BB5',
            paddingLeft: '24px',
            margin: '32px 0',
            color: 'rgba(255,255,255,0.7)',
            fontSize: '17px',
            fontStyle: 'italic',
            lineHeight: 1.8,
          }}
        >
          "{block.text}"
        </blockquote>
      );
    case 'list':
      return (
        <ul key={i} style={{ paddingLeft: '22px', marginBottom: '20px', color: 'rgba(255,255,255,0.65)', lineHeight: 2.1, fontSize: '16px' }}>
          {block.items.map((item, j) => <li key={j}>{item}</li>)}
        </ul>
      );
    default:
      return null;
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const idx = blogPosts.findIndex(p => p.slug === slug);
  const post = blogPosts[idx];
  const prev = blogPosts[idx - 1];
  const next = blogPosts[idx + 1];

  if (!post) {
    return (
      <div style={{ background: '#0D0D0F', minHeight: '100vh', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="text-center">
          <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '20px' }}>Post not found.</p>
          <Link to="/blog" style={{ color: '#8B6BB5', fontWeight: 700, textDecoration: 'none' }}>← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: '#0D0D0F', minHeight: '100vh', color: '#fff' }}>
      <Navbar />
      <main className="pt-32 pb-28 px-6">
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>

          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold mb-10 hover:opacity-80 transition-opacity"
            style={{ color: '#8B6BB5', textDecoration: 'none' }}
          >
            <ArrowLeft size={15} /> Back to Insights
          </Link>

          {/* Category + meta */}
          <div className="flex items-center gap-4 mb-5">
            <span
              className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ background: 'linear-gradient(135deg, #8B6BB5, #E8956D)', color: '#fff' }}
            >
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.25)' }}>
              <Calendar size={11} /> {post.date}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.25)' }}>
              <Clock size={11} /> {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 900, lineHeight: 1.2, marginBottom: '32px', color: '#fff' }}>
            {post.title}
          </h1>

          {/* Hero image */}
          <div className="rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: '16/7' }}>
            <img src={post.thumb} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Body */}
          <article>
            {post.content.map((block, i) => renderBlock(block, i))}
          </article>

          {/* Prev / Next navigation */}
          {(prev || next) && (
            <div
              className="flex flex-col md:flex-row gap-4 mt-16 pt-10"
              style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
            >
              {prev && (
                <Link
                  to={`/blog/${prev.slug}`}
                  className="flex-1 p-6 rounded-2xl group hover:border-purple-500/40 transition-colors"
                  style={{ background: '#141418', border: '1px solid #2A2A35', textDecoration: 'none' }}
                >
                  <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.25)' }}>
                    <ArrowLeft size={11} /> Previous
                  </span>
                  <p className="text-sm font-bold text-white group-hover:text-[#8B6BB5] transition-colors leading-snug">{prev.title}</p>
                </Link>
              )}
              {next && (
                <Link
                  to={`/blog/${next.slug}`}
                  className="flex-1 p-6 rounded-2xl group text-right hover:border-purple-500/40 transition-colors"
                  style={{ background: '#141418', border: '1px solid #2A2A35', textDecoration: 'none' }}
                >
                  <span className="flex items-center justify-end gap-1.5 text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.25)' }}>
                    Next <ArrowRight size={11} />
                  </span>
                  <p className="text-sm font-bold text-white group-hover:text-[#8B6BB5] transition-colors leading-snug">{next.title}</p>
                </Link>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
