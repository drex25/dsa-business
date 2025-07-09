import React, { useState } from 'react';
import { 
  User, 
  FileText, 
  MessageSquare, 
  CreditCard, 
  Settings, 
  Download, 
  Upload, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Plus,
  Eye,
  Calendar,
  DollarSign
} from 'lucide-react';

const ClientPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const projectStages = [
    { id: 1, name: 'Diagnóstico DSA360', status: 'completed', progress: 100 },
    { id: 2, name: 'Desarrollo Web', status: 'in-progress', progress: 75 },
    { id: 3, name: 'Configuración Paid Media', status: 'pending', progress: 0 },
    { id: 4, name: 'Lanzamiento y Optimización', status: 'pending', progress: 0 }
  ];

  const documents = [
    { id: 1, name: 'Brief Inicial - Boutique Luna.pdf', date: '2024-01-15', type: 'brief', size: '2.3 MB' },
    { id: 2, name: 'Diagnóstico DSA360 - Completo.pdf', date: '2024-01-20', type: 'report', size: '5.7 MB' },
    { id: 3, name: 'Mockups Web - V2.pdf', date: '2024-01-25', type: 'design', size: '12.4 MB' },
    { id: 4, name: 'Reporte Paid Media - Enero.pdf', date: '2024-02-01', type: 'report', size: '3.1 MB' }
  ];

  const invoices = [
    { id: 1, number: 'DSA-2024-001', amount: 150000, status: 'paid', date: '2024-01-15', service: 'Diagnóstico DSA360' },
    { id: 2, number: 'DSA-2024-002', amount: 280000, status: 'paid', date: '2024-01-30', service: 'Desarrollo Web' },
    { id: 3, number: 'DSA-2024-003', amount: 120000, status: 'pending', date: '2024-02-15', service: 'Paid Media - Febrero' }
  ];

  const messages = [
    { id: 1, from: 'Diego Sánchez', message: 'El diagnóstico está listo. Revisá los insights clave en la sección de documentos.', date: '2024-01-20', unread: false },
    { id: 2, from: 'Ana Torres', message: 'Las campañas de Facebook están funcionando muy bien. ROI del 3.2x hasta ahora.', date: '2024-02-01', unread: true },
    { id: 3, from: 'Santiago López', message: 'La web está casi lista. ¿Podés revisar los mockups y confirmar los textos?', date: '2024-02-05', unread: true }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulamos login exitoso
    setIsLoggedIn(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-emerald-600 bg-emerald-100';
      case 'in-progress': return 'text-blue-600 bg-blue-100';
      case 'pending': return 'text-slate-600 bg-slate-100';
      default: return 'text-slate-600 bg-slate-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'in-progress': return Clock;
      case 'pending': return AlertCircle;
      default: return AlertCircle;
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(price);
  };

  if (!isLoggedIn) {
    return (
      <section className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                DSA BUSINESS
              </h2>
              <p className="text-slate-600">Área Privada de Clientes</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={loginData.email}
                  onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Contraseña
                </label>
                <input
                  type="password"
                  required
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Ingresar al Portal
              </button>
            </form>

            <div className="mt-6 text-center">
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700 transition-colors duration-200">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Panel de Cliente</h1>
              <p className="text-slate-600">Boutique Luna - María González</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-slate-500">Último acceso</p>
                <p className="text-sm font-medium text-slate-900">Hoy, 14:30</p>
              </div>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="px-4 py-2 text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4">
              <ul className="space-y-2">
                {[
                  { id: 'dashboard', label: 'Dashboard', icon: User },
                  { id: 'project', label: 'Mi Proyecto', icon: FileText },
                  { id: 'documents', label: 'Documentos', icon: Download },
                  { id: 'messages', label: 'Mensajes', icon: MessageSquare },
                  { id: 'billing', label: 'Facturación', icon: CreditCard },
                  { id: 'services', label: 'Nuevos Servicios', icon: Plus },
                  { id: 'settings', label: 'Configuración', icon: Settings }
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                        activeTab === item.id
                          ? 'bg-blue-50 text-blue-600 border border-blue-200'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'dashboard' && (
              <div className="space-y-8">
                {/* Project Overview */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Resumen del Proyecto</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">75%</div>
                      <div className="text-sm text-slate-600">Progreso General</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-600 mb-2">2/4</div>
                      <div className="text-sm text-slate-600">Etapas Completadas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">15</div>
                      <div className="text-sm text-slate-600">Días Restantes</div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Actividad Reciente</h2>
                  <div className="space-y-4">
                    {messages.slice(0, 3).map((message) => (
                      <div key={message.id} className="flex items-start space-x-4 p-4 bg-slate-50 rounded-xl">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium text-slate-900">{message.from}</h4>
                            <span className="text-sm text-slate-500">{message.date}</span>
                          </div>
                          <p className="text-slate-700 text-sm">{message.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'project' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Estado del Proyecto</h2>
                <div className="space-y-6">
                  {projectStages.map((stage) => {
                    const StatusIcon = getStatusIcon(stage.status);
                    return (
                      <div key={stage.id} className="border border-slate-200 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg ${getStatusColor(stage.status)}`}>
                              <StatusIcon className="w-5 h-5" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-slate-900">Etapa {stage.id}: {stage.name}</h3>
                              <p className="text-sm text-slate-600 capitalize">{stage.status.replace('-', ' ')}</p>
                            </div>
                          </div>
                          <span className="text-sm font-medium text-slate-900">{stage.progress}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${stage.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'documents' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-slate-900">Documentos</h2>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200">
                    <Upload className="w-4 h-4" />
                    <span>Subir Archivo</span>
                  </button>
                </div>
                <div className="space-y-4">
                  {documents.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors duration-200">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <FileText className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900">{doc.name}</h4>
                          <p className="text-sm text-slate-600">{doc.date} • {doc.size}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-slate-600 hover:text-blue-600 transition-colors duration-200">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-600 hover:text-blue-600 transition-colors duration-200">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'messages' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Mensajes</h2>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`p-4 rounded-xl border ${message.unread ? 'border-blue-200 bg-blue-50' : 'border-slate-200'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-slate-900">{message.from}</h4>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-slate-500">{message.date}</span>
                          {message.unread && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                        </div>
                      </div>
                      <p className="text-slate-700">{message.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Facturación</h2>
                <div className="space-y-4">
                  {invoices.map((invoice) => (
                    <div key={invoice.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-xl">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-emerald-100 rounded-lg">
                          <CreditCard className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900">{invoice.number}</h4>
                          <p className="text-sm text-slate-600">{invoice.service} • {invoice.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-slate-900">{formatPrice(invoice.amount)}</p>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                          invoice.status === 'paid' ? 'bg-emerald-100 text-emerald-600' : 'bg-orange-100 text-orange-600'
                        }`}>
                          {invoice.status === 'paid' ? 'Pagado' : 'Pendiente'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Solicitar Nuevos Servicios</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { name: 'Diagnóstico Adicional', price: 50000, description: 'Análisis complementario de nuevas oportunidades' },
                    { name: 'Optimización Web', price: 80000, description: 'Mejoras de conversión y performance' },
                    { name: 'Campañas Adicionales', price: 120000, description: 'Nuevos canales publicitarios' },
                    { name: 'Consultoría Estratégica', price: 150000, description: 'Sesiones de estrategia personalizada' }
                  ].map((service, index) => (
                    <div key={index} className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200">
                      <h3 className="font-semibold text-slate-900 mb-2">{service.name}</h3>
                      <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900">{formatPrice(service.price)}</span>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                          Solicitar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientPortal;