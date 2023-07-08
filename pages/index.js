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
      <div className={'bg-indigo-900 w-screen h-screen flex items-center'}>
      <div className="text-center w-full">
        <button onClick={()=>signIn('google')} className='bg-white p-2 px-4 rounded-lg'>Login With Google</button>
        
        </div>
    </div>
    </Layout> 
    )
  }
