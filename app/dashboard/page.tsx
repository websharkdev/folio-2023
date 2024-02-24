import { getProduct, getProjects } from "@/server/action";
import DashboardContent from "./(blocks)/Content";
import Header from "./(blocks)/Header";

export default async function Page() {
  const productData = await getProduct();
  const projectData = await getProjects();
  const data = {
    contacts: productData.sucsess,
    projects: projectData.sucsess,
  };
  return (
    <div className="w-full h-full relative flex flex-col flex-nowrap gap-y-5">
      <Header />
      <DashboardContent data={data} />
    </div>
  );
}
