import mongoose from 'mongoose';

const gitHubUserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    profile: { type: Object, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('GitHubUser', gitHubUserSchema);
