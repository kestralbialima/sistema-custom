import React, { useState } from 'react';
import { Search, Plus, UserPlus, FileText, Calendar as CalendarIcon, Phone, Mail, X } from 'lucide-react';

export function PatientsPage() {
    const [patients, setPatients] = useState([
        { id: 1, name: 'Ana Silva', cpf: '111.222.333-44', birthDate: '1985-04-12', phone: '(11) 98765-4321', email: 'ana@email.com' },
        { id: 2, name: 'Carlos Ribeiro', cpf: '222.333.444-55', birthDate: '1990-08-23', phone: '(11) 91234-5678', email: 'carlos@email.com' },
        { id: 3, name: 'Beatriz Costa', cpf: '333.444.555-66', birthDate: '1978-11-05', phone: '(11) 99876-5432', email: 'beatriz@email.com' },
    ]);

    const mockHistory = [
        { id: 101, date: '12/02/2026', time: '14:00', notes: 'Sessão inicial. Paciente relatou episódios recentes de ansiedade no trabalho.', status: 'Realizada' },
        { id: 102, date: '19/02/2026', time: '14:00', notes: 'Trabalhou as respostas emocionais aos gatilhos identificados na última sessão.', status: 'Realizada' },
        { id: 103, date: '26/02/2026', time: '14:00', notes: 'Sessão focada em reestruturação cognitiva. Paciente demonstrou melhora.', status: 'Realizada' },
        { id: 104, date: '05/03/2026', time: '14:00', notes: 'Falta justificada. Paciente teve imprevisto familiar.', status: 'Cancelada' },
        { id: 105, date: '12/03/2026', time: '14:00', notes: 'Retomada dos exercícios. Paciente relatou semana tranquila.', status: 'Realizada' },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPatientForHistory, setSelectedPatientForHistory] = useState(null);
    const [isAddingEvolution, setIsAddingEvolution] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [formData, setFormData] = useState({ name: '', cpf: '', birthDate: '', phone: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.cpf) return;

        const newPatient = {
            id: Date.now(),
            ...formData
        };
        setPatients(prev => [newPatient, ...prev]);
        setFormData({ name: '', cpf: '', birthDate: '', phone: '', email: '' });
        setIsModalOpen(false);
    };

    const formatDate = (dateString) => {
        if (!dateString) return '-';
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    };

    const filteredPatients = patients.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.cpf.includes(searchTerm)
    );

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Pacientes</h1>
                    <p className="text-[#2A4336] mt-1">Gerencie os prontuários e o histórico de seus pacientes.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium shadow-sm transition-all duration-200 cursor-pointer flex items-center gap-2 w-max"
                >
                    <UserPlus className="w-5 h-5" />
                    Novo Paciente
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                {/* Barra de Ferramentas / Filtros */}
                <div className="p-5 border-b border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row gap-4 justify-between items-center">
                    <div className="relative w-full sm:w-96">
                        <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-[#508068]" />
                        <input
                            type="text"
                            placeholder="Buscar por nome ou CPF..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                    </div>
                    <div className="text-sm text-[#2A4336] font-medium">
                        Total: {filteredPatients.length} pacientes
                    </div>
                </div>

                {/* Historico / Tabela */}
                <div className="w-full">
                    <table className="w-full text-left flex flex-col md:table">
                        <thead className="hidden md:table-header-group">
                            <tr className="bg-gray-50 text-[#2A4336] text-sm uppercase tracking-wider">
                                <th className="px-6 py-4 font-medium">Nome do Paciente</th>
                                <th className="px-6 py-4 font-medium">CPF</th>
                                <th className="px-6 py-4 font-medium hidden md:table-cell">Data de Nasc.</th>
                                <th className="px-6 py-4 font-medium hidden lg:table-cell">Contato</th>
                                <th className="px-6 py-4 font-medium text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 flex flex-col md:table-row-group">
                            {filteredPatients.length > 0 ? (
                                filteredPatients.map(patient => (
                                    <tr key={patient.id} className="hover:bg-gray-50/50 transition-colors group flex flex-col md:table-row p-4 md:p-0 gap-2 md:gap-0">
                                        <td className="px-2 py-1 md:px-6 md:py-4 flex flex-col md:table-cell">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex flex-shrink-0 items-center justify-center text-blue-700 font-bold">
                                                    {patient.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{patient.name}</p>
                                                    <p className="text-xs text-[#2A4336] lg:hidden">{patient.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-2 py-1 md:px-6 md:py-4 text-gray-600 font-medium whitespace-nowrap flex flex-col md:table-cell">
                                            <span className="text-xs text-[#508068] mb-1 uppercase font-semibold block md:hidden">CPF</span>
                                            {patient.cpf}
                                        </td>
                                        <td className="px-2 py-1 md:px-6 md:py-4 text-gray-600 hidden md:table-cell whitespace-nowrap">
                                            {formatDate(patient.birthDate)}
                                        </td>
                                        <td className="px-2 py-1 md:px-6 md:py-4 hidden lg:table-cell">
                                            <div className="flex flex-col space-y-1">
                                                <span className="text-sm text-gray-600 flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#508068]" /> {patient.phone}</span>
                                                <span className="text-sm text-[#2A4336] flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[#508068]" /> {patient.email}</span>
                                            </div>
                                        </td>
                                        <td className="px-2 py-3 md:px-6 md:py-4 md:text-right flex flex-col md:table-cell">
                                            <button
                                                onClick={() => setSelectedPatientForHistory(patient)}
                                                className="text-white hover:bg-blue-700 bg-blue-600 md:bg-transparent md:text-blue-600 md:hover:bg-blue-50 p-3 md:p-2 rounded-xl md:rounded-lg transition-colors font-medium text-sm flex justify-center items-center gap-2 cursor-pointer w-full md:w-auto md:inline-flex"
                                            >
                                                <FileText className="w-4 h-4" />
                                                Prontuário
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr className="flex flex-col md:table-row">
                                    <td colSpan="5" className="px-6 py-12 text-center text-[#2A4336] md:table-cell">
                                        <div className="flex flex-col items-center justify-center gap-2">
                                            <Search className="w-8 h-8 text-gray-300" />
                                            <p>Nenhum paciente encontrado com base na sua busca.</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal de Cadastro */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setIsModalOpen(false)} />
                    <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
                            <h3 className="text-xl font-bold text-gray-900">Cadastrar Novo Paciente</h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-[#508068] hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        placeholder="Ex: João da Silva"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">CPF *</label>
                                        <input
                                            type="text"
                                            name="cpf"
                                            required
                                            value={formData.cpf}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="000.000.000-00"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Data de Nascimento</label>
                                        <input
                                            type="date"
                                            name="birthDate"
                                            value={formData.birthDate}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="(00) 00000-0000"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="email@exemplo.com"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-5 py-2.5 text-gray-700 font-medium hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-medium shadow-sm transition-colors cursor-pointer"
                                >
                                    Salvar Paciente
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal de Prontuário/Histórico */}
            {selectedPatientForHistory && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setSelectedPatientForHistory(null)} />
                    <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh] max-h-[calc(100vh - 4rem)]">
                        <div className="px-6 py-5 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0 bg-gray-50">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-blue-600" />
                                    {isAddingEvolution ? 'Adicionar Evolução' : `Histórico: ${selectedPatientForHistory.name}`}
                                </h3>
                                <p className="text-sm text-[#2A4336] mt-1">
                                    {isAddingEvolution ? 'Registre os detalhes da sessão atual.' : 'Visão geral dos últimos 5 atendimentos registrados.'}
                                </p>
                            </div>
                            <button
                                onClick={() => {
                                    if (isAddingEvolution) {
                                        setIsAddingEvolution(false);
                                    } else {
                                        setSelectedPatientForHistory(null);
                                    }
                                }}
                                className="text-[#508068] hover:text-gray-600 p-1 rounded-full hover:bg-gray-200 w-max transition-colors cursor-pointer self-end md:self-auto"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {!isAddingEvolution ? (
                            <>
                                <div className="p-6 overflow-y-auto bg-white flex-1 min-h-0 max-h-[75vh]">
                                    <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-200 before:to-gray-100">
                                        {mockHistory.map((session, index) => (
                                            <div key={session.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                                {/* Bola da Timeline */}
                                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-100 text-blue-600 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 transition-transform group-hover:scale-110">
                                                    <CalendarIcon className="w-4 h-4" />
                                                </div>

                                                {/* Card */}
                                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md max-w-none">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <div className="flex flex-col">
                                                            <span className="font-bold text-gray-800">{session.date}</span>
                                                            <span className="text-xs text-[#508068] font-medium">{session.time}</span>
                                                        </div>
                                                        <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${session.status === 'Realizada' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                                            {session.status}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-gray-600 leading-relaxed">
                                                        {session.notes}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end shrink-0 w-full">
                                    <button
                                        onClick={() => setIsAddingEvolution(true)}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium shadow-sm transition-colors cursor-pointer w-full md:w-auto min-w-[120px]">
                                        + Adicionar Evolução
                                    </button>
                                </div>
                            </>
                        ) : (
                            // Formulário de Adicionar Evolução
                            <div className="flex flex-col flex-1 h-full min-h-0">
                                <div className="p-6 overflow-y-auto bg-white flex-1 space-y-6">

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Status da Sessão</label>
                                            <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer text-sm">
                                                <option>Realizada</option>
                                                <option>Falta Justificada</option>
                                                <option>Falta Injustificada</option>
                                                <option>Cancelada pelo Paciente</option>
                                                <option>Remarcada</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Modalidade</label>
                                            <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer text-sm">
                                                <option>Presencial</option>
                                                <option>Online (Telemedicina)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Tags Clínicas (Temas Abordados)</label>
                                        <div className="flex flex-wrap gap-2">
                                            {['Ansiedade', 'Depressão', 'Conflito Familiar', 'Insegurança', 'Luto', 'Estresse no Trabalho', 'Relacionamento'].map(tag => (
                                                <label key={tag} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-600 cursor-pointer hover:bg-gray-100 transition-colors">
                                                    <input type="checkbox" className="w-3.5 h-3.5 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                                                    {tag}
                                                </label>
                                            ))}
                                            <button className="px-3 py-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer">+ Nova Tag</button>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Observações Clínicas (Evolução) <span className="text-xs font-normal text-[#508068] ml-1">Uso exclusivo do profissional</span>
                                        </label>
                                        <textarea
                                            rows="5"
                                            placeholder="Descreva aqui o resumo da sessão, impressões, humor do paciente e tarefas/orientações passadas..."
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm resize-none"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end gap-3 shrink-0">
                                    <button
                                        onClick={() => setIsAddingEvolution(false)}
                                        className="px-5 py-2.5 text-gray-700 font-medium hover:bg-gray-200 rounded-xl transition-colors cursor-pointer w-full md:w-auto"
                                    >
                                        Voltar
                                    </button>
                                    <button
                                        onClick={() => setIsAddingEvolution(false)}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium shadow-sm transition-colors cursor-pointer w-full md:w-auto"
                                    >
                                        Registrar Evolução
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
