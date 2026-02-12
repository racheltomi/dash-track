import React, { useContext, useEffect } from "react";
import ApiContext from "../contexts/ApiContext";

const Input: React.FC = () => {
  const { inputText, handleInput, handleSend } = useContext(ApiContext);

  const onKeyPress = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "Enter") {
      handleSend?.(event);
    }
  };

  useEffect(() => {
    localStorage.setItem("textKey", JSON.stringify(inputText));
  }, [inputText]);

  return (
    <div className="">
      <input
        className="w-full rounded-[999px] bg-white px-6 py-3 text-sm text-urlColor placeholder:text-textPlaceholder shadow-lg outline-none focus:ring-2 focus:ring-primaryColor focus:ring-offset-0 border-none"
        placeholder="Enter a web page URL"
        onChange={handleInput}
        name="url"
        onKeyDown={onKeyPress}
        autoComplete="on"
        type="text"
        value={inputText}
      />
    </div>
  );
};

export default Input;
