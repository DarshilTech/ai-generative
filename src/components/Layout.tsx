import { useRouter } from "next/navigation";
import Prefooter from "@/components/Prefooter";
const Layout = (props: any) => {
  const { children } = props;
  return (
    <div className="min-w-[350px] overflow-x-hidden">
      <div id="skip" className="bg-white dark:bg-neutral-900">
        {children}
        <Prefooter />
      </div>
    </div>
  );
};

export default Layout;
