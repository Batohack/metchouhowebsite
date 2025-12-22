import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export function AppointmentModal({ isOpen, onClose }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [autoDateTime, setAutoDateTime] = useState({ date: '', time: '' });

  useEffect(() => {
    if (isOpen) {
      const now = new Date();
      const date = now.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
      const time = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
      
      setAutoDateTime({ date, time });
      setIsSubmitted(false);
      setErrorMessage("");
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    setErrorMessage("");
    
    // MISE À JOUR : Ajout de clientEmail dans l'objet envoyé
    const formData = {
      clientName: e.target.nameInput.value,
      clientEmail: e.target.emailInput.value, // <--- Nouveau
      date: autoDateTime.date,
      time: autoDateTime.time,
      message: e.target.messageInput.value,
    };

    try {
      const response = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.error || "Une erreur est survenue.");
      }
    } catch (error) {
      setErrorMessage("Impossible de contacter le serveur. Vérifiez votre connexion.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-[#0f0a07]/60 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden pointer-events-auto relative">
              <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors z-10">
                <X className="w-5 h-5 text-gray-500" />
              </button>

              <div className="p-8 md:p-12">
                {isSubmitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="py-12 flex flex-col items-center text-center space-y-4">
                    <CheckCircle className="w-16 h-16 text-green-500" />
                    <h3 className="text-2xl font-bold text-[#1a120b]">Demande confirmée</h3>
                    <p className="text-gray-600">Votre demande a été transmise avec succès au cabinet.</p>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-8 text-left">
                      <h2 className="text-3xl font-bold text-[#1a120b] mb-2 font-serif">Demande de consultation</h2>
                      <p className="text-gray-500">Me TCHOUHO recevra votre demande instantanément.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5 text-left">
                      {errorMessage && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 text-sm">
                          <AlertCircle className="w-5 h-5 shrink-0" />
                          {errorMessage}
                        </div>
                      )}

                      {/* CHAMP : NOM */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-amber-800 tracking-widest">Votre Nom</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input required name="nameInput" type="text" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all" />
                        </div>
                      </div>

                      {/* AJOUT : CHAMP EMAIL */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-amber-800 tracking-widest">Votre Email</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input required name="emailInput" type="email" placeholder="exemple@mail.com" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase text-gray-400 tracking-widest">Date (Auto)</label>
                          <div className="flex items-center p-3 bg-gray-100 border border-gray-100 rounded-xl text-gray-500">
                            <Calendar className="w-4 h-4 mr-3" />
                            <span className="text-sm font-medium">{autoDateTime.date}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase text-gray-400 tracking-widest">Heure (Auto)</label>
                          <div className="flex items-center p-3 bg-gray-100 border border-gray-100 rounded-xl text-gray-500">
                            <Clock className="w-4 h-4 mr-3" />
                            <span className="text-sm font-medium">{autoDateTime.time}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-amber-800 tracking-widest">Message (Optionnel)</label>
                        <textarea name="messageInput" rows="3" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all"></textarea>
                      </div>

                      <button 
                        disabled={isPending}
                        type="submit" 
                        className={`w-full bg-[#a82323] hover:bg-red-800 text-white py-4 rounded-xl font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2 ${isPending ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : "Confirmer l'envoi"}
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