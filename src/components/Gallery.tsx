import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const galleryImages = [
  { url: "https://res.cloudinary.com/dn5dfwdzd/image/upload/w_800,h_450,c_fill,q_80/v1779480011/20260522_113616_0000_c94hhu.png", title: "Professional Installation" },
  { url: "https://res.cloudinary.com/dn5dfwdzd/image/upload/w_800,h_450,c_fill,q_80/v1779480038/20260522_114907_0000_elds64.png", title: "Heating System Upgrade" },
  { url: "https://res.cloudinary.com/dn5dfwdzd/image/upload/w_800,h_450,c_fill,q_80/v1779480039/20260522_115303_0000_udh7vz.png", title: "Elite Workmanship" },
  { url: "https://res.cloudinary.com/dn5dfwdzd/image/upload/w_800,h_450,c_fill,q_80/IMG_20260522_202500_lvqfhn.png", title: "Bathroom Refurbishment" },
  { url: "https://res.cloudinary.com/dn5dfwdzd/image/upload/w_800,h_450,c_fill,q_80/Untitled_design_20260522_115038_0000_w1qrhh.png", title: "Precision Piping" },
  { url: "https://res.cloudinary.com/dn5dfwdzd/image/upload/w_800,h_450,c_fill,q_80/IMG_20260522_202545_caapng.png", title: "Boiler Installation" },
  { url: "https://res.cloudinary.com/dn5dfwdzd/image/upload/w_800,h_450,c_fill,q_80/IMG_20260522_202516_e0idcq.png", title: "Expert Maintenance" },
  { url: "https://res.cloudinary.com/dn5dfwdzd/image/upload/w_800,h_450,c_fill,q_80/IMG_20260522_202531_zjrvpj.png", title: "Heating Solution" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-brand-red text-sm font-bold tracking-[0.2em] uppercase mb-4">Our Gallery</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white font-display">
              Built To Last, <span className="text-brand-blue">Finished To Perfection</span>
            </h3>
          </div>
          <p className="text-slate-400 md:max-w-[300px]">
            Take a look at some of our recent work across Lisburn and Greater Belfast.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative aspect-video rounded-2xl overflow-hidden"
              onClick={() => setSelectedImage(img.url)}
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-bg-deep/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button 
                  className="px-6 py-3 bg-brand-red text-white font-bold rounded-xl transform translate-y-4 group-hover:translate-y-0 transition-all hover:scale-105 active:scale-95 shadow-lg"
                >
                  View Work
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-bg-deep/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors z-[101]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Selected gallery work"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
