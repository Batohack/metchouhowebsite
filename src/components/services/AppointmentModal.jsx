import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, MessageSquare, CheckCircle } from 'lucide-react';

export function AppointmentModal({ isOpen, onClose }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay avec flou d'arrière-plan */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-[#0f0a07]/60 backdrop-blur-md"
          />

          {/* Conteneur de la Modale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden pointer-events-auto relative">
              
              {/* Bouton Fermer */}
              <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors z-10">
                <X className="w-5 h-5 text-gray-500" />
              </button>

              <div className="p-8 md:p-12">
                {isSubmitted ? (
                  <div className="py-12 flex flex-col items-center text-center space-y-4">
                    <CheckCircle className="w-16 h-16 text-green-500" />
                    <h3 className="text-2xl font-bold text-[#1a120b]">Demande confirmée</h3>
                    <p className="text-gray-600">Notre secrétariat vous contactera sous peu.</p>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-[#1a120b] mb-2 font-serif">Prendre rendez-vous</h2>
                      <p className="text-gray-500">Remplissez le formulaire pour une consultation.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-amber-800 tracking-widest">Votre Nom</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input required type="text" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase text-amber-800 tracking-widest">Date</label>
                          <div className="relative text-gray-400">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" />
                            <input required type="date" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none text-black" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase text-amber-800 tracking-widest">Heure</label>
                          <div className="relative text-gray-400">
                            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" />
                            <input required type="time" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none text-black" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-amber-800 tracking-widest">Message (Optionnel)</label>
                        <textarea rows="3" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none"></textarea>
                      </div>

                      <button type="submit" className="w-full bg-[#a82323] hover:bg-red-800 text-white py-4 rounded-xl font-bold text-lg shadow-lg transition-all active:scale-[0.98]">
                        Confirmer le rendez-vous
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}