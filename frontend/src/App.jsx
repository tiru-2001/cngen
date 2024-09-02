import io from 'socket.io-client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Parent,
  Register,
  Login,
  EditProfile,
  Schedules,
  Referral,
  Notification,
  Home,
  Profile,
  Tasks,
  Employees,
  Admin,
} from './pages/index';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  const { loginInfo } = useSelector((state) => state.aslice);
  const socket = io('http://localhost:8600');
  useEffect(() => {
    console.log(loginInfo);
    if (loginInfo) {
      socket.emit('joinRoom', loginInfo?._id);
      socket.on('connect', () => {
        console.log('Connected to the server');
      });
    }
    return () => {
      socket.disconnect();
    };
  }, [socket]);
  return (
    <section className="font">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Parent />}>
            <Route index element={<Home socket={socket} />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profile/editprofile" element={<EditProfile />} />
            <Route path="schedule" element={<Schedules />} />
            <Route path="performance" element={<Performance />} />
            <Route path="referral" element={<Referral />} />
            <Route path="notification" element={<Notification />} />
            <Route path="admin/*" element={<Admin socket={socket} />}>
              <Route path="employees" element={<Employees />} />
              <Route path="tasks" element={<Tasks />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default App;
