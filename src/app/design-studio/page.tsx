"use client";
import Main from "./component/main";
export default function Studio(){
    
    return (
        <div className="w-full p-4 bg-neutral-900 text-neutral-300 dark:text-neutral-400 border-b">
            <h1 className="flex text-center justify-center font-semibold text-2xl underline m-4">My Studio</h1>
            <Main reset={true}/>
        </div>
    );
}