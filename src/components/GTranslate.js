import React, { useEffect } from 'react';
import './GTranslate.css'; // Don't forget to import the CSS for styling and responsiveness

const GTranslate = () => {
  useEffect(() => {
    const scriptId = 'gtranslate-script-dwf';
    
    // 1. Define the global settings object for GTranslate
    // We check if it exists to prevent re-initialization if the component mounts multiple times
    if (!window.gtranslateSettings) {
      window.gtranslateSettings = {
        "default_language": "en",
        "languages": ["en", "sq", "de"],
        "wrapper_selector": ".gtranslate_wrapper",
        "switcher_horizontal_position": "inline" // Added your new setting
      };
    }

    // 2. Load the external script only if it hasn't been added yet
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      // Use the updated source URL
      script.src = "https://cdn.gtranslate.net/widgets/latest/dwf.js"; 
      script.defer = true;
      document.head.appendChild(script);
    }
    
    // Note: No standard cleanup is needed for this type of external global script.
  }, []); // Empty dependency array ensures this runs only once after the initial render

  return (
    // This div is the designated placeholder where GTranslate injects the dropdown widget
    // The class name must match the "wrapper_selector" setting above
    <div className="gtranslate_wrapper"></div>
  );
};

export default GTranslate;