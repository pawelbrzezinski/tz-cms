import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

import "../styles/cookies_info.scss";

const CookiesInfo = () => {
  const [cookieAgreed, setCookieAgreed] = useState("1");
  const [className, setClassName] = useState("cookies_info_wrapper");

  useEffect(() => {
    setCookieAgreed(localStorage.getItem("cookie_agreed"));
  }, []);

  const onClick = () => {
    setClassName("cookies_info_wrapper animate");
    localStorage.setItem("cookie_agreed", "1");
  };

  return !cookieAgreed ? (
    <div className={className} onClick={onClick}>
      Korzystamy z <span title="pliki cookies">🍪🍪</span>. Więcej informacji
      znajdziesz{" "}
      <Link to="/polityka" className="cookie_agree">
        tutaj
      </Link>
      . Możesz wyłączyć ich przechowywanie w przeglądarce.{" "}
      <span className="cookie_agree">Zgadzam się.</span>
    </div>
  ) : null;
};

export default CookiesInfo;
