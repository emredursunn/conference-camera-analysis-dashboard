"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const conferences = [
  {
    id: 1,
    name: "NVIDIA Keynote 2025",
    sections: [
      {
        title: "Bölüm 1: Dönüşüm: Tekil Çipten Yapay Zeka Altyapısı",
        text:
          "İlk bölümde, NVIDIA olarak dönüşüm yolculuğunuzu anlattınız. Tek bir çipten başlayarak, bu çiplerle kurduğunuz sistemlere, oradan veri merkezlerine ve nihayetinde devasa bir yapay zeka altyapısına nasıl ulaştığınızı adım adım gösterdiniz. Bu sunumla, tekil bir bileşen üreticisinden bütünsel bir \"Yapay Zeka Fabrikası\" kurucusuna nasıl evrildiğinizi vurguladınız.",
      },
      {
        title:
          "Bölüm 2: Kurumsal Yapay Zeka Platformu ve Trilyon Dolarlık Pazar",
        text:
          "İkinci bölümde, trilyon dolarlık küresel pazarı hedefleyen Kurumsal Yapay Zeka Platformunuzu tanıttınız. Bu platformun sadece yapay zeka altyapısı (donanım) ile sınırlı kalmadığını; CUDA-X, NeMo, Omniverse gibi kritik yazılım katmanlarını da kapsadığını belirttiniz. Accenture ve Deloitte gibi iş ortaklıklarınızla \"Agentic AI\" geliştirerek kurumsal müşterilerinize nasıl uçtan uca çözümler sunduğunuzu vurguladınız.",
      },
      {
        title:
          "Bölüm 3: Yeni Yapay Zeka Veri Platformu ve Akıllı Muhakeme Motoru",
        text:
          "Son bölümde yeni NVIDIA Yapay Zeka Veri Platformunuzun lansmanını yaptınız. Bu platformun gücünü, Blackwell mimarisi üzerine kurulu yeni sunucularınızdan aldığını belirttiniz. Asıl odak noktası olarak, NVIDIA AI-Q adını verdiğiniz yeni nesil yapay zeka muhakeme motorunu tanıttınız. AI-Q'nun yalnızca yanıt vermekle kalmayıp, bir plan oluşturduğunu, hesap makinesi veya veri tabanı gibi harici araçları kullanarak muhakeme yürüttüğünü ve en sonunda akıllı bir yanıt ürettiğini anlattınız. Bu vizyonu hayata geçirmek için Dell, IBM ve NetApp gibi sektör lideri ortaklarınızla olan iş birliklerinize de değindiniz.",
      },
    ],
  },
  { id: 2, name: "Marketing Summit 2025", sections: [] },
  { id: 3, name: "Design Week 2025", sections: [] },
];

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
}

export default function Sidebar({ open, onToggle }: SidebarProps) {
  const [selectedConference, setSelectedConference] = useState(conferences[0]);
  const router = useRouter();



  return (
    <div
      className={`relative md:fixed md:top-0 md:left-0 md:h-screen shadow-xl flex flex-col mb-4 md:mb-0 transition-all duration-300 ease-in-out
        ${open ? 'w-full md:w-[28rem] p-6' : 'w-0 md:w-8 p-0'}
        md:border-r border-gray-200 rounded-tr-3xl rounded-br-3xl`}
        style={{
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          background: `
            linear-gradient(90deg,
              rgba(80, 180, 255, 0.9) 0%,
              rgba(170, 80, 255, 0.9) 40%,
              rgba(255,95, 210, 0.9) 100%)
          `
        }}
    >
      {/* Sağ kenarda toggle butonu */}
      {/* Toggle butonu: Sidebar sağ kenarında tam ortada ve en önde */}
      <button
  type="button"
  aria-label={open ? 'Paneli Gizle' : 'Paneli Aç'}
  onClick={onToggle}
  className={`hidden md:flex fixed items-center justify-center w-8 h-8 rounded-full border border-gray-300 bg-white/90 backdrop-blur-md shadow transition-transform duration-300
    ${open ? '' : 'rotate-180'} top-1/2 -translate-y-1/2 z-[9999]`}
  style={{
    // Sidebar genişliği: 28rem = 448px
    // Buton yarı genişliği: 16px
    left: open ? 'calc(28rem - 12px)' : '0.5rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  }}
>
  <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
    <path d="M7 5l5 5-5 5" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
</button>


      {/* İçerik: sadece açıkken göster */}
      <div className={`flex-1 overflow-y-auto transition-opacity duration-200 scrollbar-hide ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <h2 className="text-xl font-bold text-gray-800">Konferanslar</h2>
        <ul className="mt-4 space-y-3">
          {conferences.map((conference, idx) => (
            <li key={conference.id}>
              <button
                onClick={() => idx === 0 && setSelectedConference(conference)}
                disabled={idx !== 0}
                className={`w-full flex items-center text-left px-5 py-3 rounded-xl text-base font-semibold transition-all duration-200 shadow-sm border
                  ${selectedConference.id === conference.id
                    ? "bg-indigo-100 text-indigo-800 border-indigo-300 shadow-lg scale-[1.03]"
                    : "bg-white/60 text-gray-700 border-gray-300 hover:bg-white/80 hover:shadow-md"}
                  ${idx !== 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                style={{ boxShadow: selectedConference.id === conference.id ? '0 4px 24px 0 rgba(99,102,241,0.12)' : undefined }}
              >
                {conference.name}
                {idx !== 0 && <span className="ml-2 text-gray-400">🔒</span>}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-bold text-gray-800">
            {selectedConference.name} Bölümleri
          </h3>
          <div className="mt-4 space-y-5">
            {selectedConference.sections.map((sec, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 flex flex-col gap-1 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-7 rounded-full bg-gradient-to-b from-indigo-400 to-sky-400 block"></span>
                  <h4 className="font-bold text-gray-800 text-base">{sec.title}</h4>
                </div>
                <p className="text-sm text-gray-600 bg-indigo-50/40 rounded px-2 py-1 leading-relaxed">{sec.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
