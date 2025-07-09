import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Globe, Target } from 'lucide-react';

const Hero: React.FC = () => {
  const benefits = [
    { icon: CheckCircle, text: 'Diagnóstico real y profundo' },
    { icon: Globe, text: 'Webs funcionales que convierten' },
    { icon: TrendingUp, text: 'Publicidad que genera ROI real' },
  ];

  return (
    <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20`}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-6">
                <Target className="w-4 h-4 mr-2" />
                Del análisis a la acción
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                <span className="block">Estrategia, desarrollo</span>
                <span className="block">y performance para</span>
                <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  negocios que quieren crecer en serio
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-slate-300 mb-8 max-w-2xl">
                Transformamos ideas en resultados medibles. Desde el diagnóstico hasta la ejecución, 
                te acompañamos en cada paso hacia el crecimiento digital de tu negocio.
              </p>

              {/* Benefits */}
              <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 mb-10">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <benefit.icon className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-300 font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  <span>Pedí tu diagnóstico GRATIS</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-200">
                  Agendar llamada estratégica
                </button>
              </div>
            </div>
          </div>

          {/* Hero Image/Graphic */}
          <div className="lg:col-span-5 mt-12 lg:mt-0">
            <div className="relative">
              {/* Floating Cards */}
              <div className="relative z-10 space-y-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                    <span className="text-white font-semibold">Diagnóstico DSA360</span>
                  </div>
                  <p className="text-slate-300 text-sm">Análisis completo de tu presencia digital</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform -rotate-2 hover:rotate-0 transition-transform duration-300 ml-8">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-white font-semibold">Desarrollo Web</span>
                  </div>
                  <p className="text-slate-300 text-sm">Sitios que convierten visitantes en clientes</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-white font-semibold">Paid Media</span>
                  </div>
                  <p className="text-slate-300 text-sm">Publicidad que genera ROI comprobable</p>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl transform scale-110"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20 text-slate-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;