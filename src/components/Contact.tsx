import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, MessageCircle, Send, Clock, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    phone: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Diagnóstico DSA360',
    'Desarrollo Web',
    'Paid Media & Performance',
    'Pack Combinado',
    'Servicio Personalizado',
    'No estoy seguro'
  ];

  const budgets = [
    'Menos de $50.000',
    '$50.000 - $100.000',
    '$100.000 - $200.000',
    '$200.000 - $500.000',
    'Más de $500.000',
    'A definir'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Aquí iría la lógica de envío del formulario
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-8">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              ¡Mensaje enviado correctamente!
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Gracias por contactarnos. Revisaremos tu consulta y te responderemos en las próximas 24 horas.
            </p>
            <div className="bg-blue-50 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">¿Querés acelerar el proceso?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center space-x-2 px-6 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-colors duration-200">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp: +54 11 1234-5678</span>
                </button>
                <button className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors duration-200">
                  <Calendar className="w-5 h-5" />
                  <span>Agendar llamada directa</span>
                </button>
              </div>
            </div>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
            >
              ← Volver al formulario
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Conversemos sobre
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              tu proyecto
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Contanos tu desafío y te ayudamos a encontrar la mejor estrategia para hacer crecer tu negocio. 
            Primera consulta sin compromiso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 lg:p-12 text-white mb-8">
              <h3 className="text-2xl font-bold mb-8">¿Preferís contacto directo?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Teléfono / WhatsApp</h4>
                    <p className="text-slate-300">+54 11 1234-5678</p>
                    <p className="text-sm text-slate-400">Lun a Vie: 9:00 - 18:00 hs</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-slate-300">hola@dsabusiness.com</p>
                    <p className="text-sm text-slate-400">Respondemos en 24 hs</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Ubicación</h4>
                    <p className="text-slate-300">Buenos Aires, Argentina</p>
                    <p className="text-sm text-slate-400">Trabajamos con toda LATAM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Llamada estratégica</h4>
                    <p className="text-slate-300">30 min gratuitos</p>
                    <p className="text-sm text-slate-400">Agendá online en 2 clicks</p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-8 flex items-center justify-center space-x-2 px-6 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
                <Calendar className="w-5 h-5" />
                <span>Agendar llamada estratégica GRATIS</span>
              </button>
            </div>

            {/* Quick Response Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">⚡ Respuesta rápida garantizada</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-emerald-500" />
                  <span className="text-slate-700">Formulario: Respuesta en 24 hs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-green-500" />
                  <span className="text-slate-700">WhatsApp: Respuesta inmediata</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span className="text-slate-700">Llamada: Agenda disponible hoy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Contanos sobre tu proyecto
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="+54 11 1234-5678"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Servicio de interés
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Seleccionar servicio</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Presupuesto estimado
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Seleccionar rango</option>
                    {budgets.map((budget, index) => (
                      <option key={index} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Contanos sobre tu proyecto *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Describí tu negocio, objetivos y principales desafíos. Mientras más detalle, mejor podremos ayudarte."
                />
              </div>

              <div className="bg-blue-50 rounded-xl p-4">
                <p className="text-sm text-slate-700">
                  <strong>💡 Tip:</strong> Incluí información sobre tu industria, competencia y qué resultados esperás. 
                  Esto nos ayuda a preparar una propuesta más precisa.
                </p>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                <span>Enviar consulta</span>
              </button>

              <p className="text-sm text-slate-500 text-center">
                Al enviar este formulario, aceptás que podamos contactarte para brindarte información sobre nuestros servicios.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;