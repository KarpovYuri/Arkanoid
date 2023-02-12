import { Route, Routes } from 'react-router-dom';
import Authorization from '../pages/authorization';
import Forum from '../pages/forum';
import Landing from '../pages/landing';
import Leaderboard from '../pages/leaderboard';
import Profile from '../pages/profile';
import Registration from '../pages/registration';
import { GamePage } from '../pages/GamePage';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/authorization" element={<Authorization />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
}
