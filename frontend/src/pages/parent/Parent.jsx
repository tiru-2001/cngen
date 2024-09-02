import { Header, Navbar } from '../../components';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './parent.scss';

const Parent = () => {
  const { loginInfo } = useSelector((state) => state.aslice);
  if (!loginInfo) {
    return <Navigate to="/login" />;
  }
  return (
    <section className="parent">
      <Header />
      <Outlet />
      <Navbar />
    </section>
  );
};

export default Parent;
