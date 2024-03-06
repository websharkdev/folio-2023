import { getProduct, getProjects } from "@/server/action";
import DashboardContent from "./(blocks)/Content";
import Header from "./(blocks)/Header";

export default function Page() {
  const data = async () => {
    const productData = await getProduct();
    const projectData = await getProjects();

    return { productData, projectData };
  };

  console.log(data);
  // const data = {
  //   contacts: productData.sucsess,
  //   projects: projectData.sucsess,
  // };
  return (
    <div className="w-full h-full relative flex flex-col flex-nowrap gap-y-5">
      <Header />
      {/* <DashboardContent data={data} /> */}
    </div>
  );
}
