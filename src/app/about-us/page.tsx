import Main from "./component/main";
import AboutUSTwo from "@/components/AboutUsSectionTwo";
import AboutUSOne from "@/components/AboutUsSectionOne";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Page | Free Next.js Template for Startup and SaaS",
    description: "This is About Page for Startup Nextjs Template",
    // other metadata
};
export default function AboutUs() {
    return (
        <>
            <div className="bg-white dark:bg-neutral-900">
                <div className="mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <Breadcrumb
                        pageName="About Page"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
                    />
                    <AboutUSOne />
                    <AboutUSTwo />
                </div>
            </div>
        </>
    );
}