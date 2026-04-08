import React, { useState, useEffect } from 'react';
import { Menu, X, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    // Monitora o scroll para mudar a cor da Navbar (efeito glassmorphism)
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Início', id: 'home' },
        { name: 'Apresentação', id: 'sobre' },
        { name: 'Especialidades', id: 'especialidades' },
        { name: 'O Espaço', id: 'espaco' },
        { name: 'Contato', id: 'contato' }
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 md:px-16 py-4 md:py-6 ${scrolled || mobileMenu ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-50' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* LOGO */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-[#508068] rounded-full flex items-center justify-center text-white italic text-lg shadow-md" style={{ fontFamily: 'serif' }}>F</div>
                    <span className="text-xl md:text-2xl text-[#002B5B] tracking-tighter" style={{ fontFamily: 'serif' }}>Fabiana Ramos</span>
                </div>

                {/* DESKTOP MENU */}
                <div className="hidden lg:flex items-center gap-8">
                    <ul className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.25em] text-[#508068]">
                        {navLinks.map(link => (
                            <li key={link.id} className="hover:text-[#002B5B] cursor-pointer transition-colors relative group">
                                <a href={`#${link.id}`}>{link.name}</a>
                                <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-[#002B5B] transition-all group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4">
                        <Link
                            to="/admin"
                            title="Área Administrativa"
                            className="p-2.5 flex items-center justify-center text-[#508068] hover:text-[#002B5B] border border-gray-100 hover:border-[#002B5B] rounded-full transition-all"
                        >
                            <Lock size={16} />
                        </Link>

                        <a href="#contato" className="bg-[#002B5B] text-white px-6 py-3 rounded-full text-[10px] font-bold tracking-widest hover:bg-[#003d82] transition-all uppercase">
                            Agendar Agora
                        </a>
                    </div>
                </div>

                {/* MOBILE TOGGLE */}
                <button className="lg:hidden text-[#002B5B] p-2" onClick={() => setMobileMenu(!mobileMenu)}>
                    {mobileMenu ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* MOBILE MENU DROPDOWN */}
            {mobileMenu && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 p-8 flex flex-col gap-6 shadow-2xl">
                    {navLinks.map(link => (
                        <a key={`mob-${link.id}`} href={`#${link.id}`} onClick={() => setMobileMenu(false)} className="text-xs font-bold uppercase tracking-[0.2em] text-[#2A4336] hover:text-[#002B5B]">
                            {link.name}
                        </a>
                    ))}
                    <div className="flex flex-col gap-3 mt-4">
                        <a href="#contato" onClick={() => setMobileMenu(false)} className="w-full bg-[#002B5B] text-white py-4 rounded-xl text-center font-bold text-xs uppercase tracking-widest">Agendar Agora</a>
                        <Link to="/admin" className="w-full flex items-center justify-center gap-2 border border-gray-100 text-[#508068] py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest">
                            <Lock size={14} /> Área Administrativa
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};