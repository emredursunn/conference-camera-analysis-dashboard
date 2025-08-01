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
    <div className="w-full md:w-[28rem] h-auto md:h-screen bg-gray-50 shadow-md flex flex-col p-6 mb-4 md:mb-0">
      <div className="flex-1 overflow-y-auto">
        <h2 className="text-xl font-bold text-gray-900">Konferanslar</h2>
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
          <img src="data:image/jpeg;base64,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" 
          className="w-10 h-10 bg-gray-300 rounded-full" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500">johndoe@example.com</p>
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
