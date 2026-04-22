import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useGitHub(username) {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;
    setLoading(true);
    setError(null);

    Promise.all([
      axios.get(`/api/github/${username}`),
      axios.get(`/api/github/${username}/repos`),
    ])
      .then(([profileRes, reposRes]) => {
        setProfile(profileRes.data);
        setRepos(reposRes.data);
      })
      .catch((err) => setError(err.response?.data?.message || 'User not found'))
      .finally(() => setLoading(false));
  }, [username]);

  return { profile, repos, loading, error };
}
