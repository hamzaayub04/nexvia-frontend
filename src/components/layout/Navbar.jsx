import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useNavbar } from '../../hooks/useNavbar';
import { NAV_LINKS } from '../../constants';

export default function Navbar() {
  const { user, signInWithGoogle, logout } = useAuth();
  const { scrolled, mobileOpen, toggleMobile, closeMobile } = useNavbar();
  const navigate = useNavigate();

  const handleNavClick = (link) => {
    closeMobile();
    const [basePath, hash] = link.path.split('#');
    const targetPath = basePath || '/';

    if (window.location.pathname === targetPath) {
      // Already on the right page — just scroll (or scroll to top for plain links)
      if (hash) {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate(targetPath);
      if (hash) {
        // Wait for the new page to render before scrolling to the section
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  };

  const handleAuth = async () => {
    try {
      if (user) {
        await logout();
      } else {
        await signInWithGoogle();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <Link className="logo" to="/">
          <img
            src="/images/logo3.jpeg"
            alt="Nexvia Logo"
            onError={(e) => (e.target.style.display = 'none')}
          />
          <span>Nexvia</span>
        </Link>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={`${link.path}${link.hash || ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-auth">
          {!user ? (
            <button onClick={handleAuth} className="btn btn-primary nav-login-btn">
              <i className="fab fa-google"></i> Sign In
            </button>
          ) : (
            <div className="user-panel">
              <img
                className="user-avatar"
                src={user.photoURL || ''}
                alt={user.displayName || 'avatar'}
              />
              <span className="user-name">{user.displayName || user.email}</span>
              <button onClick={handleAuth} className="sign-out-btn">
                Sign Out
              </button>
            </div>
          )}
        </div>

        <div
          className={`hamburger ${mobileOpen ? 'active' : ''}`}
          onClick={toggleMobile}
          role="button"
          tabIndex={0}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={`${link.path}${link.hash || ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(link);
            }}
          >
            {link.label}
          </a>
        ))}
        {!user ? (
          <a href="#" onClick={(e) => { e.preventDefault(); handleAuth(); closeMobile(); }}>
            <i className="fab fa-google"></i> Sign In
          </a>
        ) : (
          <>
            <a href="/dashboard" onClick={() => closeMobile()}>Dashboard</a>
            <a href="#" onClick={(e) => { e.preventDefault(); handleAuth(); closeMobile(); }}>
              Sign Out
            </a>
          </>
        )}
      </div>
    </>
  );
}