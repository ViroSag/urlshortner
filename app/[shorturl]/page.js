import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
  const { shorturl } = await params


   const client = await clientPromise;      //copied from route.js
    const db = client.db("urlshortner");
    const collection = db.collection("urls");

     const doc = await collection.findOne({ shorturl: shorturl });
    if (doc) {
        redirect(doc.url)  //redirect to original url if found
    } else{
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)  //redirect to home page if not found
    }


  return <div>My Post: {url}</div>
}