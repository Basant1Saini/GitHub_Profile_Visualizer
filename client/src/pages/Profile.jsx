import { useParams, useNavigate } from 'react-router-dom';
import useGitHub from '../hooks/useGitHub.js';
import ProfileCard from '../components/ProfileCard.jsx';
import RepoList from '../components/RepoList.jsx';
import Charts from '../components/Charts.jsx';

export default function Profile() {
  const { username } = useParams();
  const navigate = useNavigate();
  const { profile, repos, loading, error } = useGitHub(username);

  if (loading) return <p style={{ textAlign: 'center', marginTop: 40 }}>Loading...</p>;
  if (error) return <p style={{ textAlign: 'center', marginTop: 40, color: 'red' }}>{error}</p>;

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '24px 16px' }}>
      <button onClick={() => navigate('/')} style={{ marginBottom: 16, cursor: 'pointer' }}>← Back</button>
      {profile && <ProfileCard profile={profile} />}
      {repos.length > 0 && (
        <>
          <Charts repos={repos} />
          <RepoList repos={repos} />
        </>
      )}
    </div>
  );
}
