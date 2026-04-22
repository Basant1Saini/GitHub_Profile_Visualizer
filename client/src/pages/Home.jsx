import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) navigate(`/profile/${input.trim()}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '15vh', gap: 16 }}>
      <h1>GitHub Profile Visualizer</h1>
      <form onSubmit={handleSearch} style={{ display: 'flex', gap: 8 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter GitHub username"
          style={{ padding: '8px 12px', fontSize: 16, borderRadius: 6, border: '1px solid var(--accent)', width: 260 }}
        />
        <button type="submit" style={{ padding: '8px 16px', borderRadius: 6, background: 'var(--accent)', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Search
        </button>
      </form>
    </div>
  );
}
