import React from 'react';

export function CalendarPage() {
    const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const dates = Array.from({ length: 35 }, (_, i) => i - 2); // Simples gerador de dias para o mês

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Calendário</h1>
                    <p className="text-[#2A4336] mt-1">Gerencie a sua agenda de consultas.</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium shadow-sm transition-colors cursor-pointer">
                    + Novo Agendamento
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden max-w-4xl mx-auto">
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-800">Março 2026</h2>
                    <div className="flex space-x-2">
                        <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600 cursor-pointer">&larr;</button>
                        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 font-medium text-gray-700 cursor-pointer">Hoje</button>
                        <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600 cursor-pointer">&rarr;</button>
                    </div>
                </div>

                <div className="grid grid-cols-7 border-b border-gray-100 bg-gray-50">
                    {days.map(day => (
                        <div key={day} className="py-3 text-center text-sm font-semibold text-[#2A4336] uppercase tracking-wider">
                            {day}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-7 auto-rows-[100px] md:auto-rows-[120px]">
                    {dates.map((date, i) => {
                        const isCurrentMonth = date > 0 && date <= 31;
                        const isToday = date === 3; // Mock para "hoje"
                        const hasEvent = date === 10 || date === 15 || date === 24;

                        return (
                            <div
                                key={i}
                                className={`border-r border-b border-gray-100 p-1 md:p-2 transition-colors hover:bg-gray-50 cursor-pointer ${!isCurrentMonth ? 'bg-gray-50/50' : ''
                                    }`}
                            >
                                <div className="flex justify-center md:justify-between items-start">
                                    <span className={`inline-flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full text-xs md:text-sm ${isToday ? 'bg-blue-600 text-white font-bold' :
                                        isCurrentMonth ? 'text-gray-700 font-medium' : 'text-[#508068]'
                                        }`}>
                                        {isCurrentMonth ? date : (date <= 0 ? 28 + date : date - 31)}
                                    </span>
                                </div>

                                {hasEvent && isCurrentMonth && (
                                    <div className="mt-2 hidden md:block">
                                        <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded truncate mb-1">
                                            10:00 - Consulta
                                        </div>
                                    </div>
                                )}
                                {hasEvent && isCurrentMonth && (
                                    <div className="mt-1 md:hidden flex justify-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
