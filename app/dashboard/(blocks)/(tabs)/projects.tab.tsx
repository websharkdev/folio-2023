import PorjectsForm from "@/components/general/ProjectsFrom";
import { LinkIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  data: any;
};

const ProjectsTab = ({ data }: Props) => {
  return (
    <div className="w-full h-max">
      <PorjectsForm />

      <div className="flex flex-col gap-4 py-3">
        {data?.map((item: any) => (
          <div key={item.id} className="flex items-center gap-4">
            <h6 className="text-xs">Name {item.post}</h6>
            <Link
              href={item.link}
              className="flex items-center gap-1 bg-slate-200 rounded-sm p-1 px-2"
            >
              <LinkIcon className="w-4 h-4 aspect-square text-foreground text-lg" />
              <span className="text-xs truncate  w-max max-w-56">
                {item.link}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsTab;
