import PorjectsForm from "@/components/general/ProjectsFrom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LinkIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  data: any;
};

const ProjectsTab = ({ data }: Props) => {
  console.log(data);
  return (
    <div className="w-full h-max">
      <PorjectsForm />

      <div className="flex flex-col gap-4 py-3">
        {data?.map((item: any) => (
          <div key={item.id} className="flex items-center gap-4">
            <h6 className="text-xs">Name {item.name}</h6>
            <Link
              href={"#"}
              className="flex items-center gap-1 bg-slate-200 rounded-sm p-1 px-2"
            >
              <LinkIcon className="w-4 h-4 aspect-square text-foreground text-lg" />
              <span className="text-xs truncate  w-max max-w-56">
                {item.link}
              </span>
            </Link>

            <h6 className="text-xs">Type {item.type}</h6>

            <h6 className="text-xs">Tooltip</h6>
            <TooltipProvider delayDuration={2000}>
              <Tooltip>
                <TooltipTrigger>
                  <span className="rounded-sm px-4 py-1 text-primary bg-white font-semibold hover:bg-primary hover:text-white">
                    #{item.tooltip_title}
                  </span>
                </TooltipTrigger>
                <TooltipContent className="mb-3">
                  <p className="rounded-sm px-4 py-1 text-primary bg-white font-semibold hover:bg-primary hover:text-white w-[35rem]">
                    {item.tooltip_text}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsTab;
