import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from 'recharts';

const COLORS = ['#0969da', '#2da44e', '#e3b341', '#f85149', '#8957e5', '#39d353'];

export default function Charts({ repos }) {
  const starsData = repos
    .filter((r) => r.stargazers_count > 0)
    .slice(0, 8)
    .map((r) => ({ name: r.name, stars: r.stargazers_count }));

  const langMap = {};
  repos.forEach((r) => {
    if (r.language) langMap[r.language] = (langMap[r.language] || 0) + 1;
  });
  const langData = Object.entries(langMap).map(([name, value]) => ({ name, value }));

  return (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 24 }}>
      {starsData.length > 0 && (
        <div style={{ flex: 1, minWidth: 280 }}>
          <h3 style={{ marginBottom: 8 }}>Stars by Repo</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={starsData}>
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="stars" fill="#0969da" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
      {langData.length > 0 && (
        <div style={{ flex: 1, minWidth: 260 }}>
          <h3 style={{ marginBottom: 8 }}>Language Breakdown</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={langData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                {langData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
