export default function RegisterForm() {
    return (
        <div className="m-4 box-border w-full shadow-custom mx-auto mb-24">
            <div className="h-8 p-px flex items-center justify-between bg-[#8378f7]">
                <div className="p-2 flex">
                    <div className="w-3 h-3 bg-[#f1d624] rounded-full border border-black mr-1.5"></div>
                    <div className="w-3 h-3 bg-[#f1d624] rounded-full border border-black mr-1.5"></div>
                    <div className="w-3 h-3 bg-[#f1d624] rounded-full border border-black"></div>
                </div>
            </div>

            <div className="border border-black flex">
                {/* Left column for image with overlay */}
                <div className="w-2/5 flex items-center justify-center bg-register bg-[#ffc43e] relative">
                    <div className="overlay w-full h-full absolute top-0 left-0 opacity-50"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center text-center">
                        {/* Including the SVG from the public folder */}
                        <img 
                            src="/formLeader.svg"  // Replace with your actual SVG file name
                            alt="Team Leader Icon" 
                            className="w-2/3 mb-4" // Adjust size and margin as needed
                        />
                        <br />
                        <h1 className="text-5xl font-pixeboy">TEAM LEADER</h1>
                    </div>
                </div>

                {/* Right column for form */}
                <div className="w-3/5 p-8 flex flex-col justify-center bg-white">
                    <form action="#">
                        <div className="flex flex-col space-y-6 font-pixeboy">
                            <input className="p-3 border border-black" type="text" name="fullName" placeholder="FULL NAME" required />
                            <input className="p-3 border border-black" type="text" name="registerNo" placeholder="REGISTRATION NUMBER" required />
                            <input className="p-3 border border-black" type="text" name="email" placeholder="EMAIL" required />
                            <input className="p-3 border border-black" type="text" name="team" placeholder="TEAM NAME" required />
                            <input className="p-3 border border-black" type="text" name="referral" placeholder="REFERRAL CODE" required />
                            <input className="p-3 border border-black" type="text" name="mobile" placeholder="MOBILE NUMBER" required />
                        </div>
                        <div className="flex justify-center mt-6">
                            <button type="submit" className="w-40 p-2 bg-blue-500 text-white font-pixeboy text-3xl border border-black">REGISTER</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
