import React, { useState } from 'react';
import { Check, Star, Zap, TrendingUp, Shield, Headphones, Calendar, ArrowRight } from 'lucide-react';

const SubscriptionPlans: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Básico',
      subtitle: 'Para emprendedores',
      price: { monthly: 25000, annual: 22500 },
      popular: false,
      description: 'Perfecto para negocios que necesitan presencia digital básica con soporte continuo.',
      features: [
        'Diagnóstico mensual básico',
        'Mantenimiento web',
        'Soporte por email',
        'Reportes mensuales',
        'Optimización SEO básica',
        'Backup automático',
        'SSL incluido'
      ],
      limits: [
        'Hasta 1,000 visitantes/mes',
        'Máximo 2 consultas/mes',
        'Respuesta en 48hs'
      ],
      cta: 'Empezar Plan Básico',
      color: 'blue'
    },
    {
      name: 'Intermedio',
      subtitle: 'Para negocios en crecimiento',
      price: { monthly: 65000, annual: 58500 },
      popular: true,
      description: 'La opción más completa para empresas que buscan crecimiento sostenido con gestión profesional.',
      features: [
        'Todo del Plan Básico',
        'Diagnóstico DSA360 mensual',
        'Gestión básica de campañas',
        'Optimización de conversiones',
        'Chat prioritario',
        'Reportes avanzados',
        'A/B testing básico',
        'Integración CRM',
        'Email marketing básico'
      ],
      limits: [
        'Hasta 10,000 visitantes/mes',
        'Consultas ilimitadas',
        'Respuesta en 24hs'
      ],
      cta: 'Plan Más Popular',
      color: 'emerald'
    },
    {
      name: 'Full',
      subtitle: 'Piloto automático completo',
      price: { monthly: 120000, annual: 108000 },
      popular: false,
      description: 'Solución integral para empresas que quieren delegar completamente su crecimiento digital.',
      features: [
        'Todo del Plan Intermedio',
        'Gestión completa paid media',
        'Desarrollo de funcionalidades',
        'Consultor dedicado',
        'Llamadas estratégicas mensuales',
        'Automatizaciones avanzadas',
        'Reportes ejecutivos',
        'Soporte 24/7',
        'Acceso a beta features',
        'Capacitación del equipo'
      ],
      limits: [
        'Visitantes ilimitados',
        'Soporte prioritario',
        'Respuesta inmediata'
      ],
      cta: 'Piloto Automático',
      color: 'purple'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Sin compromisos largos',
      description: 'Cancelá cuando quieras, sin penalizaciones'
    },
    {
      icon: TrendingUp,
      title: 'Crecimiento garantizado',
      description: 'O te devolvemos el dinero del primer mes'
    },
    {
      icon: Headphones,
      title: 'Soporte especializado',
      description: 'Equipo dedicado que conoce tu negocio'
    },
    {
      icon: Zap,
      title: 'Implementación rápida',
      description: 'Activo en menos de 48 horas'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        border: 'border-blue-200',
        bg: 'bg-blue-50',
        text: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700',
        gradient: 'from-blue-500 to-blue-600'
      },
      emerald: {
        border: 'border-emerald-200',
        bg: 'bg-emerald-50',
        text: 'text-emerald-600',
        button: 'bg-emerald-600 hover:bg-emerald-700',
        gradient: 'from-emerald-500 to-emerald-600'
      },
      purple: {
        border: 'border-purple-200',
        bg: 'bg-purple-50',
        text: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700',
        gradient: 'from-purple-500 to-purple-600'
      }
    };
    return colors[color as keyof typeof colors];
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Tu negocio en
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              piloto automático
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Suscripciones mensuales para que tu negocio crezca de forma sostenida, 
            con estrategia, ejecución y optimización continua.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-xl p-1 border border-slate-200 shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 relative ${
                billingCycle === 'annual'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Anual
              <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full">
                -10%
              </span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const colors = getColorClasses(plan.color);
            const price = plan.price[billingCycle];
            
            return (
              <div
                key={index}
                className={`relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular 
                    ? 'ring-2 ring-emerald-500 transform scale-105' 
                    : 'border border-slate-200 hover:border-slate-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="inline-flex items-center space-x-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      <Star className="w-4 h-4" />
                      <span>Más popular</span>
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                    <p className={`text-sm font-medium ${colors.text} mb-4`}>{plan.subtitle}</p>
                    
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-slate-900">
                        {formatPrice(price)}
                      </span>
                      <span className="text-slate-600">/mes</span>
                      {billingCycle === 'annual' && (
                        <div className="text-sm text-slate-500 mt-1">
                          <span className="line-through">{formatPrice(plan.price.monthly)}</span>
                          <span className="ml-2 text-emerald-600 font-medium">Ahorrás 10%</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-sm text-slate-600">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-3">✓ Incluye:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3 text-sm">
                            <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-500 mb-3">Límites:</h4>
                      <ul className="space-y-2">
                        {plan.limits.map((limit, idx) => (
                          <li key={idx} className="flex items-start space-x-3 text-sm">
                            <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-600">{limit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <button 
                    className={`w-full flex items-center justify-center space-x-2 px-6 py-3 ${colors.button} text-white font-semibold rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Trial Info */}
                  <p className="text-center text-xs text-slate-500 mt-4">
                    ✓ 14 días de prueba gratis • Cancelá cuando quieras
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl mb-4 shadow-lg">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
              <p className="text-slate-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl p-12 shadow-lg border border-slate-200">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Preguntas frecuentes
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: '¿Puedo cambiar de plan en cualquier momento?',
                a: 'Sí, podés cambiar de plan cuando quieras. Los cambios se aplican en el próximo ciclo de facturación.'
              },
              {
                q: '¿Qué pasa si no estoy satisfecho?',
                a: 'Ofrecemos garantía de satisfacción. Si no ves resultados en el primer mes, te devolvemos el dinero.'
              },
              {
                q: '¿Incluye la inversión publicitaria?',
                a: 'No, la inversión publicitaria es adicional. Nosotros gestionamos las campañas, vos definís el presupuesto.'
              },
              {
                q: '¿Hay permanencia mínima?',
                a: 'No hay permanencia. Podés cancelar tu suscripción en cualquier momento sin penalizaciones.'
              }
            ].map((faq, index) => (
              <div key={index} className="space-y-3">
                <h4 className="font-semibold text-slate-900">{faq.q}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            ¿Listo para poner tu negocio en piloto automático?
          </h3>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Empezá con 14 días gratis y descubrí cómo puede crecer tu negocio 
            con gestión profesional continua.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              <Calendar className="w-5 h-5" />
              <span>Empezar prueba gratuita</span>
            </button>
            <button className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 hover:border-slate-400 transition-all duration-200">
              <span>Agendar demo personalizada</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;