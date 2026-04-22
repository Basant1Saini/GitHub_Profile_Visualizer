export default function ProfileCard({ profile }) {
  return (
    <div style={{ display: 'flex', gap: 20, alignItems: 'center', background: 'var(--card)', padding: 20, borderRadius: 10, marginBottom: 24 }}>
      <img src={profile.avatar_url} alt={profile.login} width={90} height={90} style={{ borderRadius: '50%' }} />
      <div>
        <h2>{profile.name || profile.login}</h2>
        <p style={{ color: 'var(--accent)' }}>@{profile.login}</p>
        {profile.bio && <p style={{ marginTop: 6 }}>{profile.bio}</p>}
        <div style={{ display: 'flex', gap: 20, marginTop: 10, fontSize: 14 }}>
          <span>⭐ {profile.public_repos} repos</span>
          <span>👥 {profile.followers} followers</span>
          <span>➡️ {profile.following} following</span>
        </div>
      </div>
    </div>
  );
}
