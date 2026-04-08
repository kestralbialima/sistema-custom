import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/shared/Navbar';
import { 
  Instagram, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from 'lucide-react';

export const MainLayout = () => {
  // Precisamos definir os links aqui para o Footer poder usar
  const navLinks = [
    { name: 'Início', id: 'home' },
    { name: 'Apresentação', id: 'sobre' },
    { name: 'Especialidades', id: 'especialidades' },
    { name: 'O Espaço', id: 'espaco' },
    { name: 'Contato', id: 'contato' }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#508068]/30 scroll-smooth">
      <Navbar />

      <main className="flex-grow">
        <Outlet /> 
      </main>

      <footer className="bg-[#F9FBF9] pt-24 pb-12 px-6 border-t border-gray-100">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">
               {/* Coluna 1: Logo e Bio */}
               <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#508068] rounded-full flex items-center justify-center text-white italic text-xl shadow-sm" style={{ fontFamily: 'serif' }}>F</div>
                    <span className="text-2xl text-[#002B5B] font-bold tracking-tighter" style={{ fontFamily: 'serif' }}>Fabiana Ramos</span>
                  </div>
                  <p className="text-sm text-[#508068] leading-relaxed font-light">
                    Transformando sofrimento em autonomia através de uma escuta ética, técnica e profundamente humana.
                  </p>
                  <div className="flex gap-4">
                     <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#508068] hover:text-[#508068] transition-all"><Instagram size={18}/></a>
                     <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#508068] hover:text-[#508068] transition-all"><Linkedin size={18}/></a>
                  </div>
               </div>

               {/* Coluna 2: Links Rápidos */}
               <div className="space-y-8">
                  <h4 className="text-[11px] font-bold text-[#002B5B] uppercase tracking-[0.3em]">Explorar</h4>
                  <ul className="space-y-4 text-[11px] font-bold text-[#508068] uppercase tracking-[0.2em]">
                     {navLinks.map(link => (
                       <li key={`foot-${link.id}`} className="hover:text-[#508068] transition-colors">
                         <a href={`#${link.id}`}>{link.name}</a>
                       </li>
                     ))}
                  </ul>
               </div>

               {/* Coluna 3: Contato */}
               <div className="space-y-8">
                  <h4 className="text-[11px] font-bold text-[#002B5B] uppercase tracking-[0.3em]">Contacto</h4>
                  <ul className="space-y-6 text-xs text-[#2A4336] font-light leading-relaxed">
                     <li className="flex items-start gap-4">
                        <MapPin size={18} className="text-[#508068] shrink-0"/> 
                        <span>Av. Brigadeiro Faria Lima, 2000 <br /> Jardim Paulistano, São Paulo - SP</span>
                     </li>
                     <li className="flex items-center gap-4">
                        <Phone size={18} className="text-[#8FA69B] shrink-0"/> 
                        <span>+55 11 99999-0000</span>
                     </li>
                     <li className="flex items-center gap-4">
                        <Mail size={18} className="text-[#8FA69B] shrink-0"/> 
                        <span>contacto@fabianaramos.com.br</span>
                     </li>
                  </ul>
               </div>

               {/* Coluna 4: Horário */}
               <div className="space-y-8">
                  <h4 className="text-[11px] font-bold text-[#002B5B] uppercase tracking-[0.3em]">Horário</h4>
                  <div className="bg-white p-6 rounded-3xl border border-gray-100 space-y-4 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 text-xs text-[#508068]">
                        <Clock size={16} className="text-[#508068]"/> 
                        <span className="font-bold tracking-widest uppercase">Segunda a Sexta</span>
                    </div>
                    <p className="text-2xl text-[#002B5B]" style={{ fontFamily: 'serif' }}>08h — 20h</p>
                  </div>
               </div>
            </div>

            {/* Créditos */}
            <div className="pt-12 border-t border-gray-100 text-center flex flex-col items-center gap-2">
               <p className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.4em]">
                  © 2024 Todos os direitos reservados.
               </p>
               <p className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.4em]">
                  Developed By <span className="text-[#8FA69B]">Core Build</span>.
               </p>
            </div>
         </div>
      </footer>
    </div>
  );
};