import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

export default function Login() {
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [loading, setLoading] = useState(false);
  const { signInWithGoogle, loginWithEmail, registerWithEmail, resetPassword } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();
      showToast('Signed in successfully!');
      navigate('/dashboard');
    } catch (err) {
      showToast(err.message || 'Google sign-in failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === 'login') {
        await loginWithEmail(email, password);
        showToast('Signed in successfully!');
        navigate('/dashboard');
      } else if (mode === 'register') {
        await registerWithEmail(email, password, displayName);
        showToast('Account created successfully!');
        navigate('/dashboard');
      } else if (mode === 'forgot') {
        await resetPassword(email);
        showToast('Password reset email sent!');
        setMode('login');
      }
    } catch (err) {
      showToast(err.message || 'Authentication failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login | Nexvia</title>
      </Helmet>
      <section className="section" style={{ paddingTop: '140px' }}>
        <div className="container">
          <div className="auth-container">
            <div className="auth-card">
              <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '8px' }}>
                {mode === 'login' && 'Welcome <span>Back</span>'}
                {mode === 'register' && 'Create <span>Account</span>'}
                {mode === 'forgot' && 'Reset <span>Password</span>'}
              </h2>
              <p className="section-sub" style={{ textAlign: 'center', margin: '0 auto 24px' }}>
                {mode === 'login' && 'Sign in to access your dashboard.'}
                {mode === 'register' && 'Create an account to get started.'}
                {mode === 'forgot' && 'Enter your email to reset your password.'}
              </p>

              <button className="btn btn-primary" style={{ width: '100%', marginBottom: '16px' }} onClick={handleGoogleLogin} disabled={loading}>
                <i className="fab fa-google"></i> Continue with Google
              </button>

              <div className="auth-divider"><span>or</span></div>

              <form onSubmit={handleEmailSubmit}>
                {mode === 'register' && (
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Your name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} required />
                  </div>
                )}
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                {mode !== 'forgot' && (
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
                  </div>
                )}
                <button className="btn btn-primary" type="submit" style={{ width: '100%', marginTop: '8px' }} disabled={loading}>
                  {loading ? 'Please wait...' : mode === 'login' ? 'Sign In' : mode === 'register' ? 'Create Account' : 'Send Reset Email'}
                </button>
              </form>

              <div className="auth-links">
                {mode === 'login' && (
                  <>
                    <a href="#" onClick={(e) => { e.preventDefault(); setMode('forgot'); }}>Forgot password?</a>
                    <span>Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); setMode('register'); }}>Sign up</a></span>
                  </>
                )}
                {mode === 'register' && (
                  <span>Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); setMode('login'); }}>Sign in</a></span>
                )}
                {mode === 'forgot' && (
                  <a href="#" onClick={(e) => { e.preventDefault(); setMode('login'); }}>Back to sign in</a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
