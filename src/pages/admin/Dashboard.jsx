import React from 'react';
import { Activity, Users, CalendarDays, TrendingUp } from 'lucide-react';

export function Dashboard() {
    const stats = [
        { title: 'Pacientes Ativos', value: '1,240', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
        { title: 'Consultas Hoje', value: '12', icon: Activity, color: 'text-green-600', bg: 'bg-green-100' },
        { title: 'Agendamentos Semana', value: '48', icon: CalendarDays, color: 'text-purple-600', bg: 'bg-purple-100' },
        { title: 'Taxa de Retorno', value: '84%', icon: TrendingUp, color: 'text-amber-600', bg: 'bg-amber-100' },
    ];

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Dashboard</h1>
                <p className="text-[#2A4336] mt-1">Bem-vindo ao painel de administração.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-[#2A4336]">{stat.title}</p>
                                    <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                                </div>
                                <div className={`${stat.bg} ${stat.color} p-4 rounded-xl`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Gráfico de Sessões (Simulado com CSS) */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 lg:col-span-2 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold text-gray-900">Atendimentos na Semana</h2>
                        <span className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full font-medium">+12% vs. semana anterior</span>
                    </div>

                    <div className="flex-1 flex items-end justify-between gap-1 sm:gap-2 mt-4 pt-4 border-t border-gray-50 overflow-x-auto pb-2 no-scrollbar w-full">
                        {/* Barras do Gráfico */}
                        {[
                            { day: 'Seg', height: '60%', value: 5 },
                            { day: 'Ter', height: '80%', value: 7 },
                            { day: 'Qua', height: '40%', value: 3 },
                            { day: 'Qui', height: '100%', value: 8 },
                            { day: 'Sex', height: '70%', value: 6 },
                            { day: 'Sáb', height: '20%', value: 2 },
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center flex-1 group min-w-[36px]">
                                <span className="text-[10px] sm:text-xs text-[#508068] mb-2 opacity-0 group-hover:opacity-100 transition-opacity font-bold whitespace-nowrap">{item.value} sessões</span>
                                <div className="w-full max-w-[40px] md:max-w-[60px] bg-gray-50 rounded-lg relative h-48 flex items-end justify-center overflow-hidden">
                                    <div
                                        className="w-full bg-gradient-to-t from-blue-600 to-indigo-400 rounded-lg transition-all duration-1000 ease-out group-hover:from-blue-700 group-hover:to-indigo-500"
                                        style={{ height: item.height }}
                                    ></div>
                                </div>
                                <span className="text-xs sm:text-sm text-[#2A4336] mt-3 font-medium">{item.day}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Próximos Atendimentos */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold text-gray-900">Próximos Hoje</h2>
                        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium cursor-pointer">Ver agenda</button>
                    </div>
                    <div className="space-y-4">
                        {[
                            { time: '14:00', name: 'Ana Silva', type: 'Terapia Cognitiva', status: 'Confirmado' },
                            { time: '15:30', name: 'Carlos Ribeiro', type: 'Psicanálise', status: 'Confirmado' },
                            { time: '17:00', name: 'Beatriz Costa', type: 'Primeira Sessão', status: 'Aguardando' },
                        ].map((apt, idx) => (
                            <div key={idx} className="flex items-center p-3 rounded-xl border border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer group">
                                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    {apt.time.split(':')[0]}h
                                </div>
                                <div className="ml-4 flex-1">
                                    <p className="font-bold text-gray-900">{apt.name}</p>
                                    <p className="text-xs text-[#2A4336] mt-0.5">{apt.type}</p>
                                </div>
                                <div title={apt.status}>
                                    <span className={`w-2.5 h-2.5 rounded-full block shadow-sm ${apt.status === 'Confirmado' ? 'bg-green-500' : 'bg-amber-400'}`}></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
