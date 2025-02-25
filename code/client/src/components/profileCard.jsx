import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function ProfileCard() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    avatar: ""
  });

  useEffect(() => {
    
    const name = Cookies.get("username") || "undefined";
    const email = Cookies.get("email") || "undefined";

    setUser({ name, email});
  }, []);

  return (
    <div className="relative flex flex-col items-center bg-white p-2 rounded-2xl px-5">
      <div className="flex flex-col items-center">
        <h2 className="text-lg font-semibold">{user.name}</h2>
        <p className="text-gray-500 text-sm">{user.email}</p>
      </div>
    </div>
  );
}
