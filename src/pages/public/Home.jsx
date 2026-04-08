import React, { useState } from 'react';
import {
  ArrowRight,
  Heart,
  BookOpen,
  ShieldCheck,
  Quote,
  MessageCircle,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Clock,
  CheckCircle2,
  Mail,
  X,
  Brain,
  Users,
  Compass,
  Sun
} from 'lucide-react';

export const InteractiveCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Exemplo de horários que futuramente virão do Google Calendar
  const timeSlots = ["08:00", "09:00", "10:30", "14:00", "15:30", "17:00"];

  // Lógica simples para gerar dias do mês (Exemplo: Março 2026)
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="bg-white rounded-[40px] shadow-xl border border-gray-100 overflow-hidden max-w-md w-full mx-auto">
      {/* Cabeçalho do Calendário */}
      <div className="bg-[#002B5B] p-8 text-white">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-serif">Selecione uma data</h3>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"><ChevronLeft size={20} /></button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"><ChevronRight size={20} /></button>
          </div>
        </div>
        <p className="text-[#8FA69B] text-[10px] font-bold uppercase tracking-[0.3em]">Março 2026</p>
      </div>

      <div className="p-8">
        {/* Grade de Dias */}
        <div className="grid grid-cols-7 gap-2 mb-8 text-center">
          {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map(d => (
            <span key={d} className="text-[10px] font-bold text-gray-300 uppercase">{d}</span>
          ))}
          {days.map(day => (
            <button
              key={day}
              onClick={() => setSelectedDate(day)}
              className={`h-10 w-10 mx-auto cursor-pointer rounded-xl text-sm transition-all flex items-center justify-center
                ${selectedDate === day
                  ? 'bg-[#002B5B] text-white shadow-lg scale-110'
                  : 'hover:bg-[#002B5B]/10 text-[#002B5B] font-medium'
                }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Seleção de Horários */}
        {selectedDate && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-2 text-[#508068]">
              <Clock size={16} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Horários Disponíveis</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {timeSlots.map(time => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`py-3 cursor-pointer rounded-xl text-xs font-bold transition-all border
                    ${selectedTime === time
                      ? 'border-[#002B5B] bg-[#002B5B] text-white'
                      : 'border-gray-200 text-[#002B5B] hover:border-[#002B5B]'
                    }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Botão de Confirmação */}
        <button
          disabled={!selectedTime}
          className={`w-full mt-8 py-5 rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] transition-all
            ${selectedTime
              ? 'bg-[#002B5B] text-white shadow-lg cursor-pointer hover:bg-[#003d82]'
              : 'bg-gray-100 text-[#002B5B]/50 cursor-not-allowed'
            }`}
        >
          {selectedTime ? 'Solicitar Agendamento' : 'Selecione Data e Hora'}
        </button>
      </div>
    </div>
  );
};

// Sub-componente interno para organização (Pode ser movido para src/components/ui depois)
const SpecialtyCard = ({ title, description, details, icon: Icon, isSage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`p-8 md:p-10 rounded-[48px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,43,91,0.12)] cursor-pointer group backdrop-blur-md border transform-gpu ${isSage ? 'bg-[#508068]/10 border-white/40' : 'bg-white/80 border-gray-100 shadow-sm'
        } flex flex-col`}
    >
      <div className="w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform flex-shrink-0">
        <Icon size={28} className="text-[#508068]" />
      </div>
      <h3 className="text-2xl md:text-3xl font-medium text-[#002B5B] mb-4 leading-tight transition-colors group-hover:text-[#508068]" style={{ fontFamily: 'serif' }}>
        {title}
      </h3>
      <p className="text-[#2A4336] text-base md:text-lg leading-relaxed mb-6 font-normal">
        {description}
      </p>

      <div
        className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-56 opacity-100 mb-8' : 'max-h-0 opacity-0 mb-0'
          }`}
      >
        <p className="text-sm md:text-base text-[#2A4336] leading-relaxed font-normal border-l-2 border-[#508068] pl-4">
          {details}
        </p>
      </div>

      <div className="flex items-center justify-between mt-auto pt-4">
        <div className={`h-[1.5px] bg-[#002B5B] opacity-20 transition-all duration-700 ${isOpen ? 'w-full' : 'w-10 group-hover:w-full'
          }`}></div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#8FA69B] whitespace-nowrap ml-4 transition-opacity group-hover:opacity-100 opacity-60">
          {isOpen ? 'Menos info' : 'Ler mais'}
        </span>
      </div>
    </div>
  );
};

export const Home = () => {
  const [zoomedImage, setZoomedImage] = useState(null);

  return (
    <>
      {/* HERO SECTION */}
      <section id="home" className="relative pt-32 pb-16 md:pt-56 md:pb-40 px-6 overflow-hidden min-h-[70vh] flex items-center scroll-mt-24 bg-white">
        <div className="absolute top-0 right-0 w-[55vw] h-full bg-[#508068]/5 -z-10 rounded-bl-[150px] md:rounded-bl-[300px] hidden"></div>
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-gray-50 shadow-sm mx-auto">
            <span className="w-2 h-2 rounded-full bg-[#508068]"></span>
            <span className="text-[9px] font-bold text-[#508068] uppercase tracking-[0.4em]">Clínica de Psicanálise e Terapia Cognitiva</span>
          </div>
          <h1 className="text-5xl md:text-8xl lg:text-[100px] leading-[1.1] text-[#002B5B] tracking-tight font-medium" style={{ fontFamily: 'serif' }}>
            Equilíbrio e <br className="hidden md:block" /><span className="italic font-normal text-[#508068]">Clareza Mental</span>.
          </h1>
          <p className="text-base md:text-2xl text-[#2A4336] max-w-2xl leading-relaxed font-light mx-auto px-4">
            Um refúgio de escuta ativa e ciência, unindo abordagens contemporâneas para o seu florescimento emocional.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <a href="#contato" className="bg-[#002B5B] text-white px-12 py-6 rounded-full font-bold shadow-2xl hover:bg-[#003d82] transition-all text-[11px] uppercase tracking-widest">
              Iniciar Atendimento
            </a>
            <a href="#sobre" className="text-[11px] font-bold uppercase tracking-widest text-[#508068] hover:text-[#002B5B] transition-colors flex items-center gap-2 group">
              Conhecer a Dra. <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* APRESENTAÇÃO / SOBRE */}
      <section id="sobre" className="py-20 md:py-32 px-6 bg-[#7CA08E] text-white relative overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-[280px] h-[280px] md:w-[450px] md:h-[450px] bg-white/10 rounded-[40px] md:rounded-[60px] overflow-hidden border-[10px] md:border-[18px] border-white/20 shadow-2xl relative z-10 backdrop-blur-sm">
                  <div className="absolute inset-0 flex items-center justify-center text-white/30 italic text-sm text-center px-10" style={{ fontFamily: 'serif' }}>
                    Foto da Dra. Fabiana Ramos
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-10">
              <h2 className="text-3xl md:text-7xl text-white leading-tight font-medium" style={{ fontFamily: 'serif' }}>
                Um refúgio para <br className="hidden md:block" />sua <span className="italic font-normal text-[#002B5B]">Privacidade</span>.
              </h2>
              <div className="space-y-6 text-sm md:text-lg font-light leading-relaxed">
                <p>Dra. Fabiana Ramos é Psicóloga Clínica com vasta experiência no tratamento de transtornos de ansiedade e depressão...</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-[35px] p-8 md:p-12 border border-white/20 relative">
                <Quote size={40} className="text-white/20 absolute -top-5 -left-5" />
                <p className="text-lg md:text-2xl lg:text-3xl italic font-light" style={{ fontFamily: 'serif' }}>
                  "A terapia é o caminho para a liberdade emocional."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section id="especialidades" className="py-20 md:py-32 px-6 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl lg:text-7xl text-[#002B5B] mb-8 leading-tight font-medium" style={{ fontFamily: 'serif' }}>
              Áreas de Atuação: <br className="hidden md:block" />
              <span className="italic font-normal text-[#508068]">Onde a Psicanálise e a Terapia se Encontram</span>
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-[#2A4336] text-lg md:text-xl font-normal leading-relaxed">
                O processo terapêutico é um convite ao autoconhecimento e à transformação. Como psicanalista e terapeuta, meu trabalho foca em acessar as camadas mais profundas da mente para compreender como padrões do passado influenciam o seu presente.
              </p>
              <p className="text-[#508068] font-medium text-lg md:text-xl pt-2">
                Confira as principais frentes de atendimento:
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            <SpecialtyCard
              title="Conflitos Emocionais e Ansiedade"
              description="Encontrando novas formas de lidar com a pressão cotidiana."
              details="Tratamento para sintomas de ansiedade, depressão, angústia e estresse crônico. O objetivo é dar voz ao que o corpo manifesta como sintoma."
              icon={Brain}
              isSage={true}
            />
            <SpecialtyCard
              title="Relacionamentos e Vínculos"
              description="Apoio na compreensão de dinâmicas interpessoais."
              details="Trabalhando a comunicação, a imposição de limites e a quebra de ciclos repetitivos em dinâmicas familiares, amorosas ou profissionais."
              icon={Users}
              isSage={false}
            />
            <SpecialtyCard
              title="Autoconhecimento e Identidade"
              description="Entender 'quem sou eu' além das expectativas."
              details="Uma jornada para fases de transição de carreira, crises existenciais ou busca por propósito."
              icon={Compass}
              isSage={true}
            />
            <SpecialtyCard
              title="Luto e Traumas"
              description="Acolhimento e elaboração do que impede o fluxo da vida."
              details="Acolhimento especializado para processos de perda (pessoas, ciclos ou saúde) e elaboração de traumas enraizados."
              icon={Heart}
              isSage={false}
            />
            <SpecialtyCard
              title="Desenvolvimento de Autoestima"
              description="Reconstrução da autoimagem e autoconfiança."
              details="Fortalecimento da autoconfiança através da análise das crenças limitantes e do entendimento da própria identidade."
              icon={Sun}
              isSage={true}
            />
          </div>

          <div className="mt-20 bg-[#508068]/5 border border-[#508068]/20 rounded-[40px] p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl text-[#002B5B] mb-4" style={{ fontFamily: 'serif' }}>Por que buscar esse suporte?</h3>
            <p className="text-gray-600 text-lg font-light leading-relaxed">
              Diferente de um aconselhamento comum, a abordagem psicanalítica permite que você investigue a raiz dos problemas. É um espaço ético, seguro e livre de julgamentos, onde a sua fala é a principal ferramenta de cura.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO CONHEÇA NOSSO ESPAÇO */}
      <section id="espaco" className="py-20 md:py-32 px-6 bg-[#F9FBF9] scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Coluna das Imagens (Molduras) */}
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-6">
              {/* Moldura 1: Consultório */}
              <div
                className="h-64 md:h-96 bg-gray-200 rounded-[40px] shadow-inner overflow-hidden flex items-center justify-center group relative cursor-pointer"
                onClick={() => setZoomedImage('Consultório Principal')}
              >
                <span className="text-[#508068] text-xs italic z-10">Consultório Principal</span>
                {/* Tag <img> futura: <img src="..." className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110" /> */}
              </div>

              {/* Moldura 2: Sala de Espera (Com deslocamento para design moderno) */}
              <div
                className="h-64 md:h-96 bg-gray-200 rounded-[40px] shadow-inner mt-12 overflow-hidden flex items-center justify-center group relative border-4 border-white cursor-pointer"
                onClick={() => setZoomedImage('Sala de Espera')}
              >
                <span className="text-[#508068] text-xs italic z-10">Sala de Espera</span>
                {/* Tag <img> futura: <img src="..." className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110" /> */}
              </div>
            </div>

            {/* Coluna de Texto */}
            <div className="order-1 lg:order-2 space-y-10 text-center lg:text-left">
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-[#8FA69B] uppercase tracking-[0.4em]">Experiência Presencial</span>
                <h2 className="text-3xl md:text-5xl text-[#002B5B] leading-tight font-medium" style={{ fontFamily: 'serif' }}>
                  Conforto desenhado para <span className="italic font-normal text-[#508068]">você</span>.
                </h2>
                <p className="text-[#2A4336] text-lg font-light leading-relaxed">
                  Nosso espaço foi cuidadosamente planejado para oferecer um ambiente de acolhimento, tranquilidade e sigilo absoluto. Cada detalhe foi pensado para que você se sinta seguro(a) e à vontade desde o momento em que entra.
                </p>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-3 text-[#002B5B]">
                  <span className="w-12 h-12 rounded-full bg-[#508068]/10 flex items-center justify-center">
                    <MapPin size={20} className="text-[#508068]" />
                  </span>
                  <div className="text-left">
                    <span className="block text-sm font-bold">Localização Premium</span>
                    <span className="block text-xs text-[#2A4336]">Av. Paulista, São Paulo - SP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE CONTATO / AGENDAMENTO */}
      <section id="contato" className="py-20 md:py-32 px-6 bg-[#F5F8F6] text-[#002B5B] scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Texto Contato - Título */}
            <div className="order-1 lg:order-1 space-y-4 text-center lg:text-left">
              <span className="text-[10px] font-bold text-[#8FA69B] uppercase tracking-[0.4em]">Agendamento Fácil</span>
              <h2 className="text-3xl md:text-5xl text-[#002B5B] leading-tight font-medium" style={{ fontFamily: 'serif' }}>
                Dê o primeiro passo em <span className="italic font-normal text-[#8FA69B]">direção a você</span>.
              </h2>
              <p className="text-[#2A4336] text-lg font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                Selecione o melhor dia e horário para a sua sessão. Nossa equipe entrará em contato para confirmar sua reserva com total discrição e agilidade.
              </p>
            </div>

            {/* Calendário Componente */}
            <div className="order-2 lg:order-2 lg:row-span-2 flex justify-center w-full">
              <InteractiveCalendar />
            </div>

            {/* Dúvidas Frequentes */}
            <div className="order-3 lg:order-3 bg-white rounded-[35px] shadow-sm p-8 md:p-12 border border-gray-100 w-full max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <h3 className="text-xl font-serif text-[#002B5B] mb-6">Dúvidas Frequentes?</h3>
              <div className="space-y-4 pt-2">
                <a href="#" className="flex items-center gap-3 text-[#2A4336] hover:text-[#002B5B] transition-colors group justify-center lg:justify-start">
                  <MessageCircle size={18} className="text-[#8FA69B]" />
                  <span className="group-hover:translate-x-1 transition-transform cursor-pointer font-medium">Falar pelo WhatsApp</span>
                </a>
                <a href="mailto:contato@fabianaramos.com.br" className="flex items-center gap-3 text-[#2A4336] hover:text-[#002B5B] transition-colors group justify-center lg:justify-start">
                  <Mail size={18} className="text-[#8FA69B]" />
                  <span className="group-hover:translate-x-1 transition-transform cursor-pointer font-medium">contato@fabianaramos.com.br</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Aqui você pode adicionar as seções restantes conforme seu código original */}

      {/* MODAL DE ZOOM DE IMAGEM */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm cursor-zoom-out animate-in fade-in duration-300"
          onClick={() => setZoomedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full h-[60vh] md:h-[80vh] bg-gray-200 rounded-3xl overflow-hidden flex items-center justify-center animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar dentro da imagem (quando ela existir)
          >
            <span className="text-[#2A4336] text-xl md:text-3xl italic" style={{ fontFamily: 'serif' }}>
              Imagem Ampliada: {zoomedImage}
            </span>
            {/* Tag <img> futura: <img src="..." className="absolute inset-0 w-full h-full object-contain" /> */}

            <button
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full p-2 text-white transition-colors"
              onClick={() => setZoomedImage(null)}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};