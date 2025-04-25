// components/CustomerServiceCard.jsx
import { useState ,useEffect} from "react";
import { X, PhoneCallIcon } from "lucide-react";
import cs1 from "../assets/profilecs/cs1.jpg";
import cs2 from "../assets/profilecs/cs2.svg";
export default function CustomerServiceCard() {
  const [open, setOpen] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000); // 3 detik

    return () => clearTimeout(timer); // cleanup
  }, []);

  if (!open)
    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="fixed flex items-center space-x-2 rounded-full bottom-10 right-10 p-2 bg-green-600 border border-white"
        >
          <PhoneCallIcon size={15} color="#fff" />
          <p className="sm:block hidden font-medium text-white text-md">
            Hubungi Langsung
          </p>
        </button>
      </>
    );

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-xs shadow-lg rounded-xl overflow-hidden">
      <div className="bg-primary text-white px-4 py-2 text-sm">
        <p>
          WA/ Telpon. Supplier IT terpercaya. Konsultasi Gratis! Hubungi
          Sekarang!
        </p>
        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 -right-0 "
        >
          <X size={20} color="#fff" />
        </button>
      </div>
      <div className="bg-white p-4 flex items-center space-x-4 border-t">
        <img
          src={cs1}
          alt="rohul"
          className="w-12 h-12 rounded-full object-cover border"
        />
        <div className="flex-1">
          <div className="font-semibold">Rohul</div>
          <div className="text-sm text-gray-500">Marketing Specialist</div>
          <div className="text-red-500 text-xs">Available</div>
        </div>
        <a
          href="https://wa.me/6285231198475"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-red-800"
        >
          <PhoneCallIcon size={20} />
        </a>
      </div>
      <div className="bg-white p-4 flex items-center space-x-4 border-t">
        <img
          src={cs2}
          alt="novie"
          className="w-12 h-12 rounded-full object-cover border"
        />
        <div className="flex-1">
          <div className="font-semibold">Novie</div>
          <div className="text-sm text-gray-500">Marketing Specialist</div>
          <div className="text-red-500 text-xs">Available</div>
        </div>
        <a
          href="https://wa.me/6285231198475"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-red-800"
        >
          <PhoneCallIcon size={20} />
        </a>
      </div>
    </div>
  );
}
