import ContactsForm from "@/components/general/ContactsForm";
import { LinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  data: any;
};

const ContactsTab = ({ data }: Props) => {
  return (
    <div className="w-full h-max">
      <ContactsForm />

      <div className="flex flex-col gap-4 py-3">
        {data?.map((item: any) => (
          <div key={item.id} className="flex items-center gap-4">
            <h6 className="text-xs">Name {item.post}</h6>
            <Link href={item.link} className="flex items-center gap-1">
              <LinkIcon className="w-4 h-4 aspect-square text-foreground text-lg" />
              <span className="text-xs truncate w-56">{item.link}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactsTab;
