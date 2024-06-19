import Link from "next/link";

function AboutPage() {
   return (
      <main className="flex flex-col gap-4 py-8">
         <div className="w-[70%] flex flex-col mx-auto gap-1">
            <h1 className="text-3xl font-extrabold">About me</h1>
            <p className="w-52 border-4 border-[#70b391]"></p>
         </div>
         <div>
            <section className="flex justify-center gap-14">
               <main className="flex flex-col justify-center items-center bg-white rounded-md p-8 gap-12 h-[385px] w-2/6 text-center">
                  <h1 className="text-4xl font-extrabold text-[#70b391]">Specialities</h1>
                  <h2 className="font-sans text-md font-semibold tracking-normal text-[#403D39]">
                     In this Section, I want to tell you some of my speciality (programming
                     languages and frameworks)
                     <br />
                     language including : #JavaScript , #HTML , #CSS , #Python framework
                     including : #ReactJs , #TailwindCss <br /> and also I Studied at
                     Soroush University and Sarami School
                  </h2>
               </main>
               <main className="flex flex-col justify-center items-center bg-white rounded-md p-8 gap-12 h-[385px] w-2/6 text-center">
                  <h1 className="text-4xl font-extrabold text-[#70b391]">Documents</h1>
                  <h2 className="font-sans text-md font-semibold tracking-normal text-[#403D39]">
                     In this section, I want to show you my documents <br /> As I said
                     previous part,I have a series of specialities! <br /> including :
                     #JavaScript , #HTML , #CSS , #Python and #ReactJs , #TailwindCss{" "}
                     <br /> Now I want to show you my documents, including : #ICDL , #TTC ,
                     #CTFA , #CFA , #Bachelor
                  </h2>
               </main>
            </section>
            <section className="flex gap-4 p-6 items-center justify-center">
               <p className="font-extrabold text-xl text-[#70b391]">{"<<"}</p>
               <Link
                  href="/"
                  className="px-6 rounded-lg bg-black py-2 font-semibold text-white transition-all duration-500 hover:bg-[#70b391]"
               >
                  Buy
               </Link>
               <p className="font-extrabold text-xl text-[#70b391]">{">>"}</p>
            </section>
         </div>
      </main>
   );
}

export default AboutPage;