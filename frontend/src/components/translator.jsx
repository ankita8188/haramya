import { useEffect } from "react";

function TranslateSelector() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,es,fr,ar",
        },
        "google_translate_element"
      );
    };
  }, []);

  const handleLangChange = (lang) => {
    const combo = document.querySelector(".goog-te-combo");
    if (combo) {
      combo.value = lang;
      combo.dispatchEvent(new Event("change"));
    }
  };

  return (
    <>
      {/* Hidden div to enable Google Translate */}
      <div id="google_translate_element" style={{ display: "none" }}></div>

      {/* Custom language selector with smaller size */}
      <select
        onChange={(e) => handleLangChange(e.target.value)}
        style={{
          padding: "2px 1px",
          fontSize: "18px",
          width: "60px",
          backgroundColor: "#f9f9f9",
          cursor: "pointer",
        }}
      >
        
        <option value="en">Eng</option>
        <option value="hi">Hin</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="ar">Arabic</option>
      </select>
    </>
  );
}

export default TranslateSelector;
