import React from 'react';
import { Shield, Crosshair, Eye, Zap, AlertTriangle, Network, Lock, Terminal, Database, Server } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-red-950/20 to-black">
      {}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-red-600/5 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-red-700/5 rounded-full blur-3xl animate-float"></div>
      </div>

      {}
      <div className="relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="text-center">
            <h1 className="text-7xl font-['Orbitron'] font-bold bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent mb-6 animate-glow">
              PladixProtect
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
              Sistema Avançado de Proteção Anti-Cheat para FiveM
            </p>
            <div className="flex justify-center gap-6">
              <button className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-900 transition-all shadow-lg shadow-red-600/20">
                Ver Soluções
              </button>
              <button className="bg-black/30 backdrop-blur-sm border border-red-500/30 text-red-500 px-8 py-4 rounded-lg font-semibold hover:bg-red-500/10 transition-all">
                Fale Conosco
              </button>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-['Orbitron'] font-bold text-center mb-4 text-red-500">Proteções Avançadas</h2>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Nosso sistema oferece mais de 100 proteções diferentes para garantir a integridade do seu servidor
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-red-900/10 backdrop-blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard number="99.9%" text="Taxa de Detecção" />
            <StatCard number="24/7" text="Monitoramento Ativo" />
            <StatCard number="100+" text="Proteções Ativas" />
          </div>
        </div>
      </div>

      {}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative bg-gradient-to-r from-red-900/40 to-black/40 rounded-2xl p-12 overflow-hidden backdrop-blur-lg border border-red-500/10">
          <div className="absolute inset-0 bg-grid-white/5"></div>
          <div className="relative text-center">
            <h2 className="text-4xl font-['Orbitron'] font-bold text-red-500 mb-6">
              Proteja Seu Servidor Agora
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Entre em contato para uma demonstração completa das nossas soluções de proteção.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-red-600/20">
              Agendar Demonstração
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const securityFeatures = [
  {
    icon: <Crosshair className="w-8 h-8 text-red-500" />,
    title: "Detecção de Aimbot",
    description: "Sistema avançado que detecta padrões suspeitos de mira, incluindo snap aim, smooth aim e silent aim."
  },
  {
    icon: <Eye className="w-8 h-8 text-red-500" />,
    title: "Anti ESP/Wallhack",
    description: "Proteção contra visualização de jogadores através de paredes e detecção de modificações na renderização."
  },
  {
    icon: <Zap className="w-8 h-8 text-red-500" />,
    title: "Anti Speed/Noclip",
    description: "Detecta e previne alterações na velocidade do jogador e atravessamento de paredes."
  },
  {
    icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
    title: "Proteção de Eventos",
    description: "Sistema robusto de verificação e validação de todos os eventos do servidor."
  },
  {
    icon: <Network className="w-8 h-8 text-red-500" />,
    title: "Anti Trigger",
    description: "Prevenção contra injeção de triggers maliciosos e execução não autorizada de eventos."
  },
  {
    icon: <Lock className="w-8 h-8 text-red-500" />,
    title: "Proteção de Recursos",
    description: "Sistema que previne a manipulação e injeção de recursos não autorizados."
  },
  {
    icon: <Terminal className="w-8 h-8 text-red-500" />,
    title: "Anti Executor",
    description: "Detecta e bloqueia tentativas de execução de códigos maliciosos através de executores externos."
  },
  {
    icon: <Database className="w-8 h-8 text-red-500" />,
    title: "Proteção de Dados",
    description: "Sistema de criptografia e validação para prevenir manipulação de dados do servidor."
  },
  {
    icon: <Server className="w-8 h-8 text-red-500" />,
    title: "Proteção do Servidor",
    description: "Conjunto de medidas para prevenir ataques DDoS e tentativas de crash do servidor."
  }
];

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="card-hover bg-gradient-to-br from-black/60 to-red-950/20 p-8 rounded-xl backdrop-blur-md border border-red-500/10">
      <div className="bg-gradient-to-br from-red-950 to-black w-16 h-16 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-red-500/20">
        {icon}
      </div>
      <h3 className="text-2xl font-['Orbitron'] font-bold text-red-400 mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

function StatCard({ number, text }: { number: string; text: string }) {
  return (
    <div className="text-center p-8 bg-black/30 rounded-xl backdrop-blur-sm border border-red-500/10">
      <div className="text-5xl font-['Orbitron'] font-bold text-red-500 mb-4">{number}</div>
      <div className="text-xl text-gray-400">{text}</div>
    </div>
  );
}

export default App;