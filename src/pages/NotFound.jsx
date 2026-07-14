import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Nexvia</title>
      </Helmet>
      <section className="section" style={{ paddingTop: '140px', textAlign: 'center' }}>
        <div className="container">
          <h1 className="hero-title" style={{ marginBottom: '16px' }}>
            4<span>0</span>4
          </h1>
          <p className="section-sub" style={{ margin: '0 auto 32px', textAlign: 'center' }}>
            The page you are looking for does not exist or has been moved.
          </p>
          <Link to="/" className="btn btn-primary">
            <i className="fas fa-home"></i> Go Home
          </Link>
        </div>
      </section>
    </>
  );
}
