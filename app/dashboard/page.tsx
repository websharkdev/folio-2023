import { getProduct } from "@/server/action";
import DashboardContent from "./(blocks)/Content";
import Header from "./(blocks)/Header";

export default async function Page() {
  const { sucsess, error } = await getProduct();
  return (
    <div className="w-full h-full relative flex flex-col flex-nowrap gap-y-5">
      <Header />
      <DashboardContent data={sucsess} />
    </div>
  );
}
