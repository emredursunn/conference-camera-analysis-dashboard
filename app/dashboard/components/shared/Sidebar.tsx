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

export default function Sidebar() {
  const [selectedConference, setSelectedConference] = useState(conferences[0]);
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="w-[28rem] h-screen bg-gray-50 shadow-md flex flex-col p-6">
      <div className="flex-1 overflow-y-auto">
        <h2 className="text-xl font-bold text-gray-900">Conferences</h2>
        <ul className="mt-4 space-y-2">
          {conferences.map((conference, idx) => (
            <li key={conference.id}>
              <button
                onClick={() => idx === 0 && setSelectedConference(conference)}
                disabled={idx !== 0}
                className={`w-full flex items-center text-left px-4 py-2 rounded-md text-sm font-medium ${
                  selectedConference.id === conference.id
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-gray-700"
                } ${idx !== 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
              >
                {conference.name}
                {idx !== 0 && <span className="ml-2 text-gray-400">🔒</span>}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-bold text-gray-900">
            {selectedConference.name} Bölümleri
          </h3>
          <div className="mt-4 space-y-6">
            {selectedConference.sections.map((sec, index) => (
              <div key={index}>
                <h4 className="font-semibold text-gray-600 mb-1">{sec.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{sec.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto pt-6 border-t border-gray-200">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Presenter</p>
            <p className="text-xs text-gray-500">presenter@example.com</p>
          </div>
          <button
            onClick={handleLogout}
            className="ml-auto px-3 py-1 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
