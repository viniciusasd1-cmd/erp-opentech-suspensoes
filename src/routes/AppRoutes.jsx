import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import ClientesPage from '../pages/ClientesPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import PedidosPage from '../pages/PedidosPage'
import ProductionOrderPage from '../pages/ProductionOrderPage'
import ProdutosPage from '../pages/ProdutosPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route element={<AppLayout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/produtos" element={<ProdutosPage />} />
        <Route path="/pedidos" element={<PedidosPage />} />
        <Route path="/ordens-producao" element={<ProductionOrderPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  )
}

export default AppRoutes
