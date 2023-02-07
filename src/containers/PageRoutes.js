import { Navigate, Route, Routes } from 'react-router-dom';
import AdminDashboard from '../components/AdminDashboard';
import Properties from '../components/Properties';
import Users from '../components/Users';
import PropertyDetails from '../components/PropertyDetails';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import PropertyNew from '../components/PropertyNew';

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/properties" />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/properties/:id" element={<PropertyDetails />} />
      <Route path="/properties/new" element={<PropertyNew />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}
