"use client"
import { registerAction } from "@/app/actions/signup";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { redirect } from "next/navigation";

function RegisterPage() {
   const { toast } = useToast()
   return (
      <>
         <form action={
            async (formdata: FormData) => {
               const result = await registerAction(formdata)
               if (result?.error) {
                  // setError(result.error)
                  toast({
                     title: "Registeration Failed",
                     description: result.error,
                     variant: "destructive"
                  })
               }
               else {
                  toast({
                     title: "Registeration Succesfull",
                     description: `Registered user with email : ${formdata.get("email")}`,
                     variant: "success"
                  })
                  redirect("/login")
               }
            }
         } className="flex flex-col w-[35%] py-10 gap-4 mx-auto items-center bg-white p-8 rounded-lg shadow-md shadow-[#70b391] [&>*]:w-[380px]">
            <h1 className="text-[#70b391] text-4xl text-center">Signup Page</h1>
            <section className="flex flex-col gap-1">
               <p className="text-left text-[#403D39]">Username</p>
               <input className="p-2 rounded outline-none border border-[#969696]" type="text" placeholder="Tom Hardey" name="name" />
            </section>
            <section className="flex flex-col gap-1">
               <p className="text-left text-[#403D39]">Email</p>
               <input className="p-2 rounded outline-none border border-[#969696]" type="text" placeholder="johnwick@gmail.com" name="email" />
            </section>
            <section className="flex flex-col gap-1">
               <p className="text-left text-[#403D39]">Password</p>
               <input type="password" className="p-2 rounded outline-none border border-[#969696]" placeholder="*********" name="password" />
            </section>
            <section className="flex flex-col gap-2">
               <button className="p-2 rounded bg-[#4ba377] text-white transition-all duration-300 hover:bg-[#66bd91]" type="submit">Register</button>
               <Link href="/login" className="text-[#403D39] text-center">Already have an account?</Link>
            </section>
         </form>
      </>
   );
}

export default RegisterPage;