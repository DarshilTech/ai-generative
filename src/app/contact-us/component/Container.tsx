import Image from "next/image";
import React, { useEffect, useState } from "react";
// import Replicate from 'replicate';
// const replicate = new Replicate();

const Container = () => {
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");

    const clickHandel = async (event: React.FormEvent) => {
        // const input = {
        //     prompt: "self-portrait of a woman, lightning in the background"
        // };
        // const output = await replicate.run("bytedance/sdxl-lightning-4step:727e49a643e999d602a896c774a0658ffefea21465756a6ce24b7ea4165eba6a", { input });
        // console.log(output);        
        event.preventDefault();
        // if(!email || !comment) {
        //     alert("Please fill all the fields");
        //     return;
        // }
        console.log(event);
        console.log(email, comment);
    };

    return (
        <div className="w-full h-full flex flex-row">
            <div className="w-full bg-[#0e122d] flex flex-col py-8 justify-center items-center">
                <Image src="/1.png" alt="D-ai logo" width={250} height={250} priority />
            </div>
            <div className="w-full bg-[#4e5c68] px-4 py-[180px] flex flex-col justify-between">
                <div className="w-full flex items-center justify-center">
                    <span className="text-blue font-bold text-2xl uppercase">Leave us your Feedback</span>
                </div>
                <form className="p-4 flex flex-col justify-center">
                    <div className="control-email w-full mb-3">
                        <label htmlFor="email" className="text-white text-lg font-semibold">
                            Email
                        </label>
                        <input
                            className="w-full border text-black italic border-gray rounded-md"
                            name="email"
                            placeholder="Enter your email address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="control-comment w-full mb-3">
                        <label htmlFor="comment" className="text-white text-lg font-semibold">
                            Comment
                        </label>
                        <textarea
                            name="comment"
                            className="w-full text-black italic border border-gray rounded-md"
                            onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="control-action">
                        <button type="submit" className="btn btn-primary border p-2 hover:bg-[#0E122D] transition-all ease-in delay-75" onClick={clickHandel} name="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Container;