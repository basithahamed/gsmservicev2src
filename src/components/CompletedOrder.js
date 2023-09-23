// import React, { useEffect, useState } from 'react';
// import "../css/pendingorder.css";
// import { db } from "../firebaseconfig";
// import { collection, getDocs, query, where } from "firebase/firestore";

// function CompletedOrder() {
//     const [records, setRecords] = useState([]);
//     const [searchText, setSearchText] = useState("");
  
//     useEffect(() => {
//       // Perform the Firestore query inside the useEffect
//       const fetchData = async () => {
//         // Create a query to filter documents where status is "pending"
//         const q = query(collection(db, "cusdata"), where("status", "==", "completed"));
        
//         try {
//           const querySnapshot = await getDocs(q);
//           const data = [];
//           querySnapshot.forEach((doc) => {
//             data.push({ id: doc.id, ...doc.data() });
//           });
//           console.log(data);
//           setRecords(data); // Update the state with Firestore data
//         } catch (error) {
//           console.error("Error fetching data:", error);
//         }
//       };
  
//       fetchData();
//     }, []); // Empty dependency array to run the effect only once on component mount
  
//     const filteredRecords = records.filter((record) =>
//       record.customername.toLowerCase().includes(searchText.toLowerCase()) ||
//       record.devicemodel.toLowerCase().includes(searchText.toLowerCase())
//     );
  
//     return (
//       <>
//         <div className='porderwrapper'>
//           <h1>Pending Orders</h1>
//           <div className='tablewrapper' style={{ overflowX: "auto", maxHeight: "400px" }}>
//             {/* Adjust maxHeight to your preferred height */}
//             <br />
//             <br />
//             <input
//               type="text"
//               placeholder='Search'
//               value={searchText}
//               onChange={(e) => setSearchText(e.target.value)}
//             />
//             <table>
//               <thead>
//                 <tr>
//                   <th>Customer Name</th>
//                   <th>Device Model</th>
//                   <th>Issue</th>
//                   <th>Mobile</th>
//                   <th>Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredRecords.map((record) => (
//                   <tr key={record.id}>
//                     <td>{record.customername}</td>
//                     <td>{record.devicemodel}</td>
//                     <td>{record.issue}</td>
//                     <td>{record.mobile}</td>
//                     <td>{record.status}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </>
//     );
// }

// export default CompletedOrder