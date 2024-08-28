import Image from "next/image";

import Sendfrom from "./Sendfrom"

export default function Home() {
  //  send item 
  // fetch("https://react-interview.1putym.easypanel.host/api/product")
  // fetch("https://react-interview.1putym.easypanel.host/api/product?email=your@email.com")


//   {
//     "title" : "Example product",
//     "stock" : "50",
//     "price" : "6500",
//     "email" : "naim.microdeft@gmail.com",
//     "discount" : "500"
// }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       
       <Sendfrom></Sendfrom>
        

    </main>
  );
}
