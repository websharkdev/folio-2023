"use client";
import ContactsForm from "@/components/general/ContactsForm";
import { useUser } from "@clerk/nextjs";

type Props = {
  data: any;
};

const DashboardContent = ({ data }: Props) => {
  const { user, isLoaded } = useUser();
  return (
    <div className="w-full h-full flex justify-center items-center min-h-[90vh]">
      {isLoaded ? (
        <>
          {user && user.id === "user_2cjBOQAi0Q8sVvqVuYCYyxFXvEq" ? (
            <>
              <ContactsForm />

              {data?.map((item: any) => (
                <div key={item.id}>
                  {item.post} {item.link}
                </div>
              ))}
            </>
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
