import { BoltIcon } from "@heroicons/react/24/solid";
import React from "react";
const Footer = () => {
  return (
    <footer className="p-4 mt-8 border-t items-center justify-center flex">
      <p className="text-center text-sm flex space-x-1 leading-loose text-muted-foreground md:text-left">
        <span className="flex items-center justify-center space-x-1">
          <span>Made with</span>
          <BoltIcon className="w-4 h-4 text-green-500 animate-pluse" />
        </span>
        <span>by</span>
        <a
          href="https://oxyzen.vercel.app/"
          target="_blank"
          className="font-medium"
        >
          OxyZen
        </a>
        .<span>The source code is available on</span>
        <a
          href="https://github.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
