import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Bell, Phone, ClipboardList, Download, User, Scale, ShieldCheck, Wrench, MapPin, QrCode, Smartphone,
  Calendar, Target, Settings, FileText, BarChart3, CheckSquare, AlertTriangle, Folder,
  Paperclip, Bot, Crown, SendHorizonal, Mic, Quote, Lock
} from 'lucide-react';

const mainGridItems = [
  { icon: Calendar, title: 'AGENDA', subtitle: 'Agenda institucional', badge: 'P' },
  { icon: Target, title: 'PLANEJAMENTO', subtitle: 'Estratégias e metas', badge: 'P' },
  { icon: Settings, title: 'PROCESSOS', subtitle: 'Fluxos de proteção', badge: 'P' },
  { icon: FileText, title: 'RELATÓRIO GABINETE', subtitle: 'Relatórios executivos', badge: 'E' },
  { icon: BarChart3, title: 'INDICADORES', subtitle: 'Métricas e KPIs', badge: 'D' },
  { icon: CheckSquare, title: 'AUDITORIA', subtitle: 'Verificação e conformidade', badge: 'D' },
  { icon: AlertTriangle, title: 'PLANO DE CRISE', subtitle: 'Gestão de emergências', badge: 'D' },
  { icon: Folder, title: 'PROJETOS', subtitle: 'Gestão de projetos', badge: 'D' },
];

const sidebarItems = [
  { icon: User, title: 'Administração', subtitle: 'Gestão administrativa e recursos humanos' },
  { icon: Scale, title: 'Jurídico', subtitle: 'Assessoria jurídica e compliance legal' },
  { icon: ShieldCheck, title: 'Qualidade', subtitle: 'Controle de qualidade e certificações' },
  { icon: Wrench, title: 'Metrologia', subtitle: 'Serviços metrológicos e calibração' },
  { icon: MapPin, title: 'Regionais', subtitle: 'Unidades regionais e atendimento local' },
];

const GlassCard = ({ children, className = '' }) => (
  <div className={`bg-[--card-bg] border border-[--card-border] rounded-[--radius] backdrop-blur-sm transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const Notification = ({ icon: Icon, title, content, time, actionIcon: ActionIcon }) => (
  <GlassCard className="p-4 mb-4 relative hover:bg-[--card-hover-bg] max-w-sm">
    <div className="flex items-start">
      <Icon className="w-5 h-5 mr-4 mt-1 text-white/90" />
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-white/70">{content}</p>
      </div>
    </div>
    <div className="absolute top-2 right-2 text-xs text-white/50">Atualizado: {time}</div>
    <div className="absolute bottom-2 right-2 text-white/70">
        <ActionIcon className="w-5 h-5" />
    </div>
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
  </GlassCard>
);

const Header = () => (
  <header className="absolute top-0 left-0 right-0 p-6 z-10">
    <div className="flex justify-between items-start">
      <div>
        <Notification icon={Bell} title="Lembrete" content="Veículo com a placa IOP-5G00 está com Crono com registro de furto. Atenção com o lote 203423355 da J.A" time="21:12" actionIcon={ClipboardList} />
        <Notification icon={Phone} title="Mensagem da Diretoria" content="Lembrem de emitir o certificado todos os dias e acompanhem o prazo de vencimento dos lotes." time="21:12" actionIcon={Phone} />
      </div>
      <div className="text-right">
        <GlassCard className="p-2 inline-flex items-center gap-2 mb-4">
            <p className="text-sm">Presidente versão 2.0</p>
            <button className="bg-white/10 p-2 rounded-md hover:bg-white/20">
                <Download className="w-5 h-5"/>
            </button>
        </GlassCard>
        <GlassCard className="p-4 flex flex-col items-center">
             <h1 className="text-3xl font-bold tracking-wider">
                IMETR<span className="text-red-500">O</span><span className="text-green-500">S</span><span className="text-blue-400">C</span>
            </h1>
            <p className="text-xs text-white/70 tracking-widest">INSTITUTO DE METROLOGIA DE SANTA CATARINA</p>
            <div className="mt-2 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                Presidente
            </div>
        </GlassCard>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <div className="flex flex-col items-center text-center mt-8 pt-[350px] md:pt-[250px] lg:pt-2">
    <div className="max-w-4xl mx-auto -mt-[250px] mb-8">
        <img src="https://i.imgur.com/s2k2n7w.png" alt="Owl Mascot" className="w-full h-auto max-w-sm mx-auto" />
    </div>
    <h2 className="text-4xl md:text-5xl font-bold">Como posso ajudar, Sr Presidente?</h2>
    <p className="text-lg text-white/70 mt-4 flex items-center">
      <Quote className="w-5 h-5 mr-2 transform -scale-x-100" />
      Um grande líder desenvolve pessoas, não apenas resultados.
      <Quote className="w-5 h-5 ml-2" />
    </p>
  </div>
);

const ChatInterface = () => (
  <GlassCard className="p-6">
    <div className="flex items-center gap-3 text-lg font-semibold text-white/90 mb-4">
      <Bot className="w-7 h-7" />
      <h3>Presidente - Assistente Virtual</h3>
    </div>
    <div className="relative">
      <textarea
        placeholder="Digite sua consulta..."
        className="w-full h-24 bg-black/20 border border-white/20 rounded-lg p-4 pr-12 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white/50"
      ></textarea>
      <Mic className="absolute top-1/2 right-4 -translate-y-1/2 w-5 h-5 text-white/70" />
    </div>
    <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 p-2 rounded-lg bg-black/20 hover:bg-black/30 text-white/70"><Paperclip className="w-5 h-5" /></button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/20 hover:bg-black/30 text-white/70"><Bot className="w-5 h-5" /> Pro</button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/20 hover:bg-black/30 text-white/70"><Crown className="w-5 h-5 text-yellow-400" /> Presidente</button>
        </div>
      <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 font-semibold">Flash <SendHorizonal className="w-5 h-5" /></button>
    </div>
  </GlassCard>
);

const ActionGridItem = ({ icon: Icon, title, subtitle, badge }) => (
    <GlassCard className="p-4 hover:bg-[--card-hover-bg] cursor-pointer relative flex flex-col items-center justify-center text-center h-40">
        <div className="absolute top-2 left-2 bg-black/30 text-white/80 text-xs font-bold w-6 h-6 flex items-center justify-center rounded-md">{badge}</div>
        <Icon className="w-10 h-10 mb-2 text-white/90" />
        <h4 className="font-bold text-sm">{title}</h4>
        <p className="text-xs text-white/60">{subtitle}</p>
    </GlassCard>
);

const ActionGrid = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {mainGridItems.map(item => <ActionGridItem key={item.title} {...item} />)}
    </div>
);

const SidebarItem = ({ icon: Icon, title, subtitle }) => (
    <a href="#" className="flex items-start p-4 bg-[--sidebar-card-bg] rounded-[--radius] hover:bg-[--sidebar-card-hover-bg] transition-colors duration-300">
        <Icon className="w-6 h-6 mr-4 mt-1 text-white/80 flex-shrink-0" />
        <div>
            <h4 className="font-semibold">{title}</h4>
            <p className="text-sm text-white/60">{subtitle}</p>
        </div>
    </a>
);

const Sidebar = () => (
    <GlassCard className="p-6">
        <h3 className="text-xl font-bold mb-6">Controle de Setor</h3>
        <div className="space-y-4">
            {sidebarItems.map(item => <SidebarItem key={item.title} {...item} />)}
        </div>
        <div className="mt-8 p-4 bg-[--sidebar-card-bg] rounded-[--radius] flex items-center gap-4">
            <img src="https://i.imgur.com/7d5sV3z.png" alt="QR Code" className="w-24 h-24 rounded-md bg-white p-1" />
            <div>
                <a href="#" className="flex items-center gap-2 font-semibold hover:text-blue-300">
                    <Smartphone className="w-5 h-5" /> Baixar App
                </a>
                <p className="text-sm text-white/60 mt-1">Escaneie com seu celular</p>
            </div>
        </div>
    </GlassCard>
);

const Footer = () => (
    <footer className="text-center py-6 text-sm text-white/50">
        <p className="flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" />
            Presidente oferece análise técnica especializada em LGPD e não substitui decisões oficiais ou pareceres jurídicos formais.
        </p>
    </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed text-white" style={{backgroundImage: "url('https://i.imgur.com/8O32TZy.png')"}}>
      <div className="min-h-screen w-full bg-blue-950/70 backdrop-brightness-50">
        <div className="relative">
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-0">
                <Hero />
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-12">
                <div className="xl:col-span-2">
                    <ChatInterface />
                    <ActionGrid />
                </div>
                <div>
                    <Sidebar />
                </div>
                </div>
            </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
