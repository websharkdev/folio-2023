"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useUser } from "@clerk/nextjs";
import ContactsTab from "./(tabs)/contacts.tab";
import ProjectsTab from "./(tabs)/projects.tab";

type Props = {
  data: any;
};

const DashboardContent = ({ data }: Props) => {
  const { user, isLoaded } = useUser();
  const tabs = ["Contacts", "Projects"];

  return (
    <div className="w-full h-full min-h-[90vh] px-5">
      {isLoaded ? (
        <>
          {user && user.id === "user_2cjBOQAi0Q8sVvqVuYCYyxFXvEq" ? (
            <Tabs
              defaultValue="contacts"
              orientation="horizontal"
              className="flex justify-between items-start h-full gap-5"
            >
              <TabsList className="max-w-xs w-full">
                {tabs.map((tabName, index) => (
                  <TabsTrigger
                    value={tabName.toLocaleLowerCase().split(" ").join("_")}
                    key={index}
                  >
                    {tabName}
                  </TabsTrigger>
                ))}
              </TabsList>
              <TabsContent value="contacts" className="items-start max-h-max">
                <ContactsTab data={data.contacts} />
              </TabsContent>
              <TabsContent value="projects" className="items-start max-h-max">
                <ProjectsTab data={data.projects} />
              </TabsContent>
            </Tabs>
          ) : (
            <h6>А ты любопытный... ты мне нравишься</h6>
          )}
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <h6>Loading...</h6>
        </div>
      )}
    </div>
  );
};

export default DashboardContent;
