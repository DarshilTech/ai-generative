"use client";
import Studio from "@/components/Studio";
import StudioObject from "@/components/StudioObject";
export default function Page(){
    
    return (
        <div className="w-full flex flex-row p-4 bg-neutral-900 text-neutral-300 dark:text-neutral-400 border-b">
            <StudioObject/>
            <Studio reset={true}/>
        </div>
    );
}