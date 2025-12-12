import { useEffect, useState } from "react";
 
export default function Bakey() {
  const [chatOpen, setChatOpen] = useState(false);
 
  useEffect(() => {
    if (typeof window === "undefined") return;
 
    window.embeddedChatbotConfig = {
      chatbotId: "4SZ38CnK8HQMpLLpr6SRe",
      domain: "www.chatbase.co",
      buttonIcon:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=100&h=100&fit=crop",
    };
 
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "chatbase-script";
    document.body.appendChild(script);
 
    const interval = setInterval(() => {
      const iframe = document.querySelector('iframe[src*="chatbase"]');
      if (!iframe) return;
 
      const opened =
        iframe.style.display !== "none" && iframe.offsetWidth > 0;
 
      setChatOpen(opened);
    }, 350);
 
    return () => {
      clearInterval(interval);
      // Only remove if the script exists
      const chatScript = document.getElementById("chatbase-script");
      if (chatScript) {
        document.body.removeChild(chatScript);
      }
    };
  }, []);
 
  const closeChat = () => {
    if (window.chatbase) {
      window.chatbase("close");
      setChatOpen(false);
    }
  };
 
  return (
    <>
      {chatOpen && (
        <button
          onClick={closeChat}
          style={{
            position: "fixed",
            bottom: "20px", 
            right: "85px", 
            zIndex: 9999999,
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            backgroundColor: "#ff5a5f",
            border: "none",
            color: "white",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 3px 8px rgba(0,0,0,0.25)",
          }}
        >
          ✕
        </button>
      )}
 
      <style>{`
        iframe[src*="chatbase"] {
          z-index: 999999 !important;
        }
      `}</style>
    </>
  );
}