import React, { useEffect } from "react";

const ChatBot = () => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "eb014cf5-01d1-4e3d-a767-6917d95acc8d",
      region: "us-south",
      serviceInstanceID: "810c3ba6-73f5-44aa-899f-44d5eb10d723",
      onLoad: async (instance) => {
        await instance.render();
      },
    };

    const script = document.createElement("script");
    script.src =
      "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
      (window.watsonAssistantChatOptions.clientVersion || "latest") +
      "/WatsonAssistantChatEntry.js";
    document.head.appendChild(script);
  }, []); // Empty dependency array ensures that this effect runs only once after the initial render

  return <>{/* Your component JSX goes here */}</>;
};

export default ChatBot;