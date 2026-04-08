import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Home } from '../pages/public/Home';

import { AdminLayout } from '../layouts/AdminLayout';
import { Dashboard } from '../pages/admin/Dashboard';
import { CalendarPage } from '../pages/admin/CalendarPage';
import { PatientsPage } from '../pages/admin/PatientsPage';

export function AppRoutes() {
    return (
        <Routes>
            {/* Rota do Site Institucional */}
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
            </Route>

            {/* Rotas da Área Administrativa */}
            <Route path="/admin" element={<AdminLayout />}>
                {/* /admin -> Renderiza o Dashboard.jsx */}
                <Route index element={<Dashboard />} />
                {/* /admin/calendario -> Renderiza o CalendarPage.jsx */}
                <Route path="calendario" element={<CalendarPage />} />
                {/* /admin/pacientes -> Renderiza o PatientsPage.jsx */}
                <Route path="pacientes" element={<PatientsPage />} />
            </Route>

            {/* Rota 404 - Caso o usuário digite um caminho inexistente */}
            <Route path="*" element={<div className="flex h-screen items-center justify-center">Página não encontrada</div>} />
        </Routes>
    );
}
