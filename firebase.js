import { useEffect, useState } from "react";

const WelcomePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();

      const userData = tg.initDataUnsafe.user;
      setUser(userData);
    }
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      <div className="bg-white p-6 rounded-xl shadow-md text-center w-11/12 max-w-md">
        {user ? (
          <h2 className="text-2xl font-bold mb-4">Welcome, {user.first_name}!</h2>
        ) : (
          <h2 className="text-2xl font-bold mb-4">Loading...</h2>
        )}
      </div>
    </div>
  );
};

export default WelcomePage;
