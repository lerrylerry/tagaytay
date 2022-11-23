// import { useState, useEffect } from 'react'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([{ name: 'John Doe' },{ bio: 'Some text lalalala...'}])
}

// export default function image(req, res) {
//   useEffect(() => {
//     async function fetchImage() {
//       const res = await fetch('http://127.0.0.1:4000/display2' , {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//         },
//       });
//       const data = await res.json()
//       setGetdata(data)
//     }
//     fetchImage()
//   }, [])
//   if (isLoading) return <p>Loading...</p>
//   if (!data) return <p>No profile data</p>

//   return (
//     <div>
//       <h1>{data.page}</h1>
//       {list1.map((datas) => {
//         return (
//           <div key={datas}>
//             <p>{datas.time}</p>
//           </div>
//         )
//       })}
//     </div>
//   )
// }