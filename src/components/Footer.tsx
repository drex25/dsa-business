import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Diagnóstico DSA360',
    'Desarrollo Web',
    'Paid Media & Performance',
    'Packs Combinados',
    'Servicios Personalizados'
  ];

  const resources = [
    'Blog de Marketing',
    'Casos de Éxito',
    'Recursos Gratuitos',
    'Newsletter DSA Insights',
    'Guías Descargables'
  ];

  const company = [
    'Sobre DSA Business',
    'Nuestro Equipo',
    'Metodología',
    'Clientes',
    'Contacto'
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 border-b border-slate-800">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  DSA BUSINESS
                </h3>
                <p className="text-slate-400 mt-2">Del análisis a la acción</p>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                Transformamos negocios a través del marketing digital inteligente. 
                Estrategia, desarrollo y performance para empresas que quieren crecer en serio.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">+54 11 1234-5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">hola@dsabusiness.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">Buenos Aires, Argentina</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-pink-600 transition-colors duration-200">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-400 transition-colors duration-200">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Servicios</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group">
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                      <span>{service}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Recursos</h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group">
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                      <span>{resource}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Empresa</h4>
              <ul className="space-y-3 mb-8">
                {company.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group">
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Newsletter Signup */}
              <div className="bg-slate-800 rounded-2xl p-6">
                <h5 className="font-semibold mb-3">Newsletter DSA Insights</h5>
                <p className="text-sm text-slate-400 mb-4">
                  Estrategias y tips exclusivos cada miércoles
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-sm text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © {currentYear} DSA Business. Todos los derechos reservados.
            </div>
            
            <div className="flex space-x-8 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                Política de Privacidad
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                Términos de Servicio
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-800 text-center">
            <p className="text-slate-400 text-sm">
              🚀 <strong className="text-white">¿Listo para hacer crecer tu negocio?</strong> 
              <a href="#contact" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 ml-1">
                Conversemos →
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;