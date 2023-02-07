import { Navigate, Route, Routes } from 'react-router-dom';
import Properties from '../components/Properties';
import PropertyDetails from '../components/PropertyDetails';

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/properties" />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/properties/:id" element={<PropertyDetails />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}
