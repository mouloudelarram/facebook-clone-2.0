import Head from 'next/head'
import Header from "../components/Header"
import Login from "../components/Login"
import { getSession } from "next-auth/client"
import Sidebar from "../components/Sidebar"
import Feed from "../components/Feed"
import Widgets from "../components/Widgets"
import {db} from "../firebase"
export default function Home({ session, posts }) {
  if (!session )  return <Login />;
  return (
    <div className=" bg-gray-100">
      <Head>
        <title>Facebook by El Arram</title>
      </Head>
      {/* Header */}
      <Header />
      <main className="flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed  posts = {posts}/>
        {/* Widgets */}
        <Widgets />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  //get the user
  const session= await getSession(context);

  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp: null
  }))
  return {
    props: {
      session,
      posts: docs,
    }
  }
}
