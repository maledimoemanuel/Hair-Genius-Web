import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const {data: session} = useSession();
  return (
    <Layout>
      <div className="text-indigo-900 flex justify-between">
        
        <h2>
        Hello, <b>{session?.user?.name}</b>
        </h2>
        <div className='flex bg-gray-300 text-black overflow-hidden rounded-lg'>
        <img src={session?.user?.image} alt="" className="w-10 h-10"/>
        </div>
      </div>
    </Layout> 
    )
  }
