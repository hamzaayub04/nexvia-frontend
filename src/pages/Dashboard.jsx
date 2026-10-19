import { Helmet } from 'react-helmet-async';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <>
      <Helmet>
        <title>Dashboard | Nexvia</title>
      </Helmet>
      <section className="section" style={{ paddingTop: '140px' }}>
        <div className="container">
          <div className="section-eyebrow">Dashboard</div>
          <h2 className="section-title">
            Welcome, <span>{user?.displayName || 'User'}</span>
          </h2>
          <p className="section-sub" style={{ marginTop: '10px' }}>
            Manage your projects and quote requests from your personal dashboard.
          </p>

          <div className="dashboard-grid" style={{ marginTop: '40px' }}>
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ marginBottom: '12px' }}>Profile</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <img src={user?.photoURL || ''} alt="avatar" style={{ width: '56px', height: '56px', borderRadius: '50%', border: '2px solid var(--primary)' }} />
                <div>
                  <p style={{ fontWeight: '600' }}>{user?.displayName}</p>
                  <p style={{ color: 'var(--muted-2)', fontSize: '0.9rem' }}>{user?.email}</p>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ marginBottom: '12px' }}>Quick Actions</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="/quote" className="btn btn-primary" style={{ justifyContent: 'flex-start' }}>
                  <i className="fas fa-paper-plane"></i> Request a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
