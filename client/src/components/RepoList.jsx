export default function RepoList({ repos }) {
  return (
    <div style={{ marginTop: 24 }}>
      <h3 style={{ marginBottom: 12 }}>Top Repositories</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            style={{ background: 'var(--card)', padding: 14, borderRadius: 8, textDecoration: 'none', color: 'inherit', display: 'block' }}
          >
            <strong style={{ color: 'var(--accent)' }}>{repo.name}</strong>
            {repo.description && <p style={{ fontSize: 13, marginTop: 4 }}>{repo.description}</p>}
            <div style={{ display: 'flex', gap: 12, marginTop: 8, fontSize: 13 }}>
              <span>⭐ {repo.stargazers_count}</span>
              <span>🍴 {repo.forks_count}</span>
              {repo.language && <span>🔵 {repo.language}</span>}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
