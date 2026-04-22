import axios from 'axios';
import GitHubUser from '../models/GitHubUser.js';

const githubAPI = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  },
});

export const getProfile = async (req, res) => {
  const { username } = req.params;
  try {
    const cached = await GitHubUser.findOne({ username });
    if (cached) return res.json(cached.profile);

    const { data } = await githubAPI.get(`/users/${username}`);
    await GitHubUser.create({ username, profile: data });
    res.json(data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ message: err.message });
  }
};

export const getRepos = async (req, res) => {
  const { username } = req.params;
  try {
    const { data } = await githubAPI.get(`/users/${username}/repos`, {
      params: { sort: 'stars', per_page: 20 },
    });
    res.json(data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ message: err.message });
  }
};
