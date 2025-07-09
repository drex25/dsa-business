import React, { useState } from 'react';
import { 
  Globe, 
  MessageCircle, 
  Users, 
  HelpCircle, 
  Target, 
  Layout,
  Bot,
  Database,
  BarChart3,
  Zap,
  ArrowRight,
  Check
} from 'lucide-react';

const AdvancedFeatures: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Globe,
      title: 'Multi-idioma',
      subtitle: 'Expansión regional inteligente',
      description: 'Capturá leads de toda Latinoamérica con sitios web optimizados para cada mercado local.',
      benefits: [
        'Sitios en español, portugués e inglés',
        'Localización de contenido por país',
        'SEO optimizado para cada región',
        'Formularios con validación local'
      ],
      implementation: 'Implementación en 2-3 semanas',
      price: 'Desde $80.000',
      color: 'blue'
    },
    {
      icon: Bot,
      title: 'Chatbot Inteligente',
      subtitle: 'Atención 24/7 automatizada',
      description: 'IA que filtra consultas, califica leads y deriva a tu equipo solo los prospectos más calificados.',
      benefits: [
        'Respuestas automáticas inteligentes',
        'Calificación de leads en tiempo real',
        'Integración con WhatsApp y web',
        'Reportes de conversaciones'
      ],
      implementation: 'Activo en 1 semana',
      price: 'Desde $45.000',
      color: 'emerald'
    },
    {
      icon: Database,
      title: 'CRM Integrado',
      subtitle: 'Gestión completa de clientes',
      description: 'Sistema completo para seguimiento de oportunidades, clientes y automatización de tareas comerciales.',
      benefits: [
        'Pipeline de ventas visual',
        'Automatización de seguimientos',
        'Reportes de performance comercial',
        'Integración con email y WhatsApp'
      ],
      implementation: 'Setup en 1-2 semanas',
      price: 'Desde $60.000',
      color: 'purple'
    },
    {
      icon: HelpCircle,
      title: 'Centro de Ayuda',
      subtitle: 'Soporte escalable',
      description: 'Base de conocimiento completa con FAQs, tutoriales y recursos para reducir consultas repetitivas.',
      benefits: [
        'FAQs dinámicas por categoría',
        'Tutoriales en video',
        'Búsqueda inteligente',
        'Métricas de satisfacción'
      ],
      implementation: 'Listo en 1 semana',
      price: 'Desde $35.000',
      color: 'orange'
    },
    {
      icon: Target,
      title: 'Lead Scoring',
      subtitle: 'Priorización automática',
      description: 'Algoritmo que clasifica automáticamente tus leads según probabilidad de conversión y valor potencial.',
      benefits: [
        'Puntuación automática de leads',
        'Segmentación por comportamiento',
        'Alertas de leads hot',
        'Integración con CRM'
      ],
      implementation: 'Configuración en 1 semana',
      price: 'Desde $40.000',
      color: 'indigo'
    },
    {
      icon: Layout,
      title: 'Landing Builder',
      subtitle: 'Campañas express',
      description: 'Herramienta interna para crear landing pages optimizadas en minutos usando plantillas probadas.',
      benefits: [
        'Plantillas de alta conversión',
        'Editor drag & drop',
        'A/B testing integrado',
        'Métricas en tiempo real'
      ],
      implementation: 'Disponible inmediatamente',
      price: 'Desde $50.000',
      color: 'pink'
    }
  ];

  const roadmapItems = [
    {
      phase: 'Fase 1',
      title: 'Fundación Digital',
      features: ['Multi-idioma', 'Chatbot Básico', 'Centro de Ayuda'],
      timeline: '1-2 meses',
      investment: '$160.000'
    },
    {
      phase: 'Fase 2',
      title: 'Automatización Comercial',
      features: ['CRM Integrado', 'Lead Scoring', 'Chatbot Avanzado'],
      timeline: '2-3 meses',
      investment: '$140.000'
    },
    {
      phase: 'Fase 3',
      title: 'Optimización y Escala',
      features: ['Landing Builder', 'Analytics Avanzado', 'Integraciones Custom'],
      timeline: '1-2 meses',
      investment: '$120.000'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      emerald: 'from-emerald-500 to-emerald-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      indigo: 'from-indigo-500 to-indigo-600',
      pink: 'from-pink-500 to-pink-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Funcionalidades
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              escalables y avanzadas
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Llevá tu negocio al siguiente nivel con tecnología de vanguardia. 
            Cada funcionalidad está diseñada para automatizar, optimizar y escalar tu operación.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Feature List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  activeFeature === index
                    ? 'border-blue-200 bg-blue-50 shadow-lg'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${getColorClasses(feature.color)}`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-2">{feature.subtitle}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-600">{feature.price}</span>
                      <span className="text-xs text-slate-500">{feature.implementation}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Detail */}
          <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-200">
            {(() => {
              const feature = features[activeFeature];
              return (
                <>
                  <div className="flex items-start space-x-6 mb-8">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${getColorClasses(feature.color)}`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-slate-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-lg font-medium text-blue-600">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">Beneficios clave:</h4>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-8 border-t border-slate-200">
                    <div className="mb-4 sm:mb-0">
                      <p className="text-sm text-slate-500 font-medium">INVERSIÓN</p>
                      <p className="text-2xl font-bold text-slate-900">{feature.price}</p>
                      <p className="text-sm text-slate-600">{feature.implementation}</p>
                    </div>
                    
                    <button className={`flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${getColorClasses(feature.color)} text-white font-medium rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200`}>
                      <span>Implementar ahora</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        </div>

        {/* Implementation Roadmap */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Roadmap de implementación
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {roadmapItems.map((item, index) => (
              <div key={index} className="relative">
                {index < roadmapItems.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent transform translate-x-4"></div>
                )}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-white font-bold text-lg mb-4">
                      {index + 1}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{item.phase}</h4>
                    <h5 className="text-lg font-semibold text-blue-600">{item.title}</h5>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-slate-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-center pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-600 mb-1">Timeline: {item.timeline}</p>
                    <p className="text-lg font-bold text-slate-900">{item.investment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Overview */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              ¿Por qué invertir en funcionalidades avanzadas?
            </h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Cada funcionalidad está diseñada para generar ROI positivo y automatizar procesos 
              que actualmente requieren tiempo manual de tu equipo.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: '40%', label: 'Reducción en tiempo de gestión' },
              { metric: '3.2x', label: 'Mejora en calificación de leads' },
              { metric: '65%', label: 'Aumento en conversión web' },
              { metric: '24/7', label: 'Atención automatizada' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-emerald-400 mb-2">{stat.metric}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-3xl p-12 shadow-lg border border-slate-200">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            ¿Listo para escalar tu operación?
          </h3>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Conversemos sobre qué funcionalidades pueden generar mayor impacto en tu negocio específico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              <Zap className="w-5 h-5" />
              <span>Análisis de necesidades GRATIS</span>
            </button>
            <button className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 hover:border-slate-400 transition-all duration-200">
              <span>Ver casos de implementación</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;