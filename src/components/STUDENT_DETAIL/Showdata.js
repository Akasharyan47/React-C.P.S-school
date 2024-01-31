// import React, { useEffect } from 'react';
// //   import { useDispatch, useSelector } from 'react-redux';
// //  import { showUser } from '../../Feature/useDetailSlice';


// const Showdata = () => {
//   const dispatch = useDispatch();
//     const {users, loading} = useSelector((state)=> state.app)
 
//     // useEffect(() =>{
//     // dispatch(showUser());

//     //  })

//     //  if(loading){
//     //     return<h2>loading</h2>
//     //  }
//   return (
//     <div>
//       {/* <div>
//         {users &&
//           users
//             // .filter((ele) => {
//             //   if (searchData.length === 0) {
//             //     return ele;
//             //   } else {
//             //     return ele.name
//             //       .toLowerCase()
//             //       .includes(searchData.toLowerCase());
//             //   }
//             // })
//             // .filter((ele) => {
//             //   if (radioData === "Male") {
//             //     return ele.gender === radioData;
//             //   } else if (radioData === "Female") {
//             //     return ele.gender === radioData;
//             //   } else return ele;
//             // })

//             .map((ele) => (
//               <div key={ele.id} className="card w-50 mx-auto my-2">
//                 <div className="card-body">
//                   <h5 className="card-title">{ele.name}</h5>
//                   <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
//                   <p className="card-text">{ele.gender}</p>
//                   {/* <button
//                     className="card-link"
//                     onClick={() => [setId(ele.id), setShowPopup(true)]}
//                   >
//                     View
//                   </button> */}
//                   {/* <Link to={`/edit/${ele.id}`} className="card-link">
//                     Edit
//                   </Link>
//                   <Link
//                     onClick={() => dispatch(deleteUser(ele.id))}
//                     className="card-link"
//                   >
//                     Delete
//                   </Link> */}
//                 {/* </div>
//               </div>
//             ))}
//       </div> */}
//     </div>
//   );
// }

// export default Showdata