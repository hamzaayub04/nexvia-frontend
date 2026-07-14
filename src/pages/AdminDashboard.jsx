import { Helmet } from 'react-helmet-async';
import { useAuth } from '../context/AuthContext';

export default function AdminDashboard() {
  const { user } = useAuth();

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Nexvia</title>
      </Helmet>
      <section className="section" style={{ paddingTop: '140px' }}>
        <div className="container">
          <div className="section-eyebrow">Admin</div>
          <h2 className="section-title">
            Admin <span>Dashboard</span>
          </h2>
          <p className="section-sub" style={{ marginTop: '10px' }}>
            Manage all projects, quotes, and users. Welcome, {user?.displayName || 'Admin'}.
          </p>

          <div className="dashboard-grid" style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '18px' }}>
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ marginBottom: '8px' }}>Total Projects</h3>
              <p style={{ color: 'var(--primary)', fontSize: '2rem', fontWeight: '700' }}>4</p>
            </div>
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ marginBottom: '8px' }}>Quote Requests</h3>
              <p style={{ color: 'var(--primary)', fontSize: '2rem', fontWeight: '700' }}>--</p>
            </div>
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ marginBottom: '8px' }}>Users</h3>
              <p style={{ color: 'var(--primary)', fontSize: '2rem', fontWeight: '700' }}>--</p>
            </div>
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ marginBottom: '8px' }}>Messages</h3>
              <p style={{ color: 'var(--primary)', fontSize: '2rem', fontWeight: '700' }}>--</p>
            </div>
          </div>

          <div className="card" style={{ padding: '28px', marginTop: '24px' }}>
            <h3 style={{ marginBottom: '12px' }}>Recent Quote Requests</h3>
            <p style={{ color: 'var(--muted-2)' }}>No quote requests yet. Connect to the backend API to see data here.</p>
          </div>
        </div>
      </section>
    </>
  );
}
