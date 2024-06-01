"use client";
import Main from "./component/main";
export default function Studio(){
    
    return (
        <div className="w-full">
            <h1 className="flex text-center justify-center font-semibold text-2xl underline m-4">My Studio</h1>
            <Main reset={true}/>
        </div>
    );
}