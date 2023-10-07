import { DocumentTextIcon, PhotoIcon } from "@heroicons/react/24/outline";
import TeleEmoji from "./telegram-emoji";
import { buttonVariants } from "./ui/button";
export const Hero = () => {
  return (
    <section className="col-span-full mb-4 mx-auto w-full max-w-7xl items-center px-5 pt-12 pb-6 md:px-12 lg:px-16">
      <div className="mx-auto flex w-full text-left">
        <div className="mx-auto inline-flex items-center align-middle">
          <div className="text-center">
            <h1
              className="max-w-8xl text-4xl font-extrabold leading-none tracking-tighter 
            text-slate-800 dark:text-slate-50 md:text-5xl lg:max-w-7xl lg:text-6xl"
            >
              <span
                className="animate-move-bg bg-gradient-to-r from-indigo-500 
              via-pink-500 to-indigo-500 bg-[length:400%] bg-clip-text
               text-transparent"
              >
                Animated{" "}
              </span>
              Fluent Emojis
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-slate-500 sm:mb-8">
              All the Microsoft animated fluent emojis are available in one
              place and ready to use in your next project or README file.
            </p>
            <div className="mx-auto mt-6 flex w-full max-w-2xl flex-col justify-center gap-2 sm:flex-row">
              <div className="mt-3 rounded-lg sm:mt-0">
                <a
                  href="https://github.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis"
                  className={buttonVariants({
                    variant: "default",
                    size: "lg",
                  })}
                >
                  <DocumentTextIcon className="mr-1.5 h-5 w-5" /> Documentation
                </a>
              </div>
              <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                <a
                  href="https://github.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/tree/master/Emojis"
                  className={buttonVariants({
                    variant: "secondary",
                    size: "lg",
                  })}
                >
                  <PhotoIcon className="mr-1.5 h-5 w-5" />
                  Source files
                </a>
              </div>
              <div className="mt-3  rounded-lg sm:mt-0 sm:ml-3">
                <a
                  href="https://telegram-animated-emojis.vercel.app/"
                  className={buttonVariants({
                    variant: "secondary",
                    size: "lg",
                  })}
                >
                  <TeleEmoji />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
