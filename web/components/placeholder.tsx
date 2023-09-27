import { saveAs } from "file-saver";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDownTrayIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "./ui/button";

const downloadImage = (url: string, filename: string) => {
  saveAs(url, filename);
};

const copyToClipboard = (url: string, alt: string) => {
  navigator.clipboard.writeText(
    `<img src="${url}" alt="${alt}" width="25" height="25" />`
  );
};

const Placeholder = ({ url, alt }: { url: string; alt: string }) => {
  const { toast } = useToast();
  return (
    <Card className="group relative">
      <CardContent className="flex flex-col pt-4 items-center justify-center">
        {" "}
        <img
          className="transition-all duration-300 ease-in-out group-hover:scale-110"
          src={url}
          alt={alt}
        />
        <p className=" w-full truncate rounded-md p-1 text-center font-semibold opacity-100 transition-all duration-200 ease-in-out group-hover:opacity-0">
          {alt}
        </p>
        <div className="absolute -bottom-1 text-center text-slate-700 opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-3.5 group-hover:opacity-100 dark:text-slate-300">
          <div className="flex w-full space-x-4">
            <Button
              variant="secondary"
              size="icon"
              onClick={() => {
                downloadImage(url, alt);
                toast({
                  description: `Saved as ${alt}.png`,
                });
              }}
            >
              <ArrowDownTrayIcon className="h-5 w-5" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={() => {
                copyToClipboard(url, alt);
                toast({
                  description: `Copied ${alt} to clipboard`,
                });
              }}
            >
              <CodeBracketIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Placeholder;
