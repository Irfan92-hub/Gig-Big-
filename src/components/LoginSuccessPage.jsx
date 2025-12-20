// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Baseurl } from "./url/Url";
// import {toast} from "react-toastify";


// const LoginSuccessPage = () => {
//   const [user, setUser] = useState("");
//   const [showModel, setShowModel] = useState(false);
//   const [editName, setEditName] = useState("");
//   const [editEmail, setEditEmail] = useState("");
//   const [editPassword, setEditPassword] = useState("")
//   const [image , setImage] =  useState("")

// const loginUserData = async()=>{
//   const token = localStorage.getItem("token");
// console.log("login")
//     if (!token) {
//       console.log("Token not found!");
//       return;
//     }

//      axios.get(`${Baseurl}/api/api/profile`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }) 

//       .then((res) => {
//         setUser(res.data.user);
//         setEditName(res.data.user.name);
//         setEditEmail(res.data.user.email);
//         setEditPassword(res.data.user.password);
//       })
      
//       .catch((err) => {
//         console.log("Profile error:", err.response?.data);
//       });
// }

//   useEffect(() => {
//     // const token = localStorage.getItem("token");

//     // if (!token) {
//     //   console.log("Token not found!");
//     //   return;
//     // }

//     // axios.get(`${Baseurl}/api/api/profile`, {
//     //   headers: {
//     //     Authorization: `Bearer ${token}`,
//     //   },
//     // }) 

//     //   .then((res) => {
//     //     setUser(res.data.user);
//     //     setEditName(res.data.user.name);
//     //     setEditEmail(res.data.user.email);
//     //     setEditPassword(res.data.user.password);
//     //   })
      
//     //   .catch((err) => {
//     //     console.log("Profile error:", err.response?.data);
//     //   });

//     loginUserData();

//   }, []);

//   if (!user) {
//     return <h1>loading...</h1>
//   }

//   const openModel = () =>setShowModel(true)
//   const closeModel = () => setShowModel(false)

//   const handleSave = async() =>{
//      const token = localStorage.getItem("token")
//       const formData = new FormData();
//     formData.append("name", editName);
//     formData.append("email", editEmail);
//     if (image) {
//       formData.append("image", image);
//     }
//      try {
//         const res = await axios.put(`${Baseurl}/api/api/update/profile` ,  formData ,  
//         //  {
//         //    name : editName,
//         //    email: editEmail,
//         //    password : editPassword
        
//         // },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
          

//         }
//       }
//     )

//     if(res.status = 200){
//      loginUserData();

//     }
//      setUser(res.data.user); 
//     setShowModel(false); 
//     toast.success("Profile Updated Successfully!");
  
  

//      } catch (error) {
//        console.log(error.response?.data);
//         toast.error("update faild")      
//      }
//   }

// console.log(user)
//   return (
//     <>
//       <div className="profile-Page">
//         <div className="Profile-Heading text-center">
//           <h1>User Profile</h1>

//         </div>

//         <div className="shadow rounded m-5 p-5">
//            <div className="profileimg">
            
//             <img src={`${Baseurl}/api/api/user/image/${user._id}`} alt="profile" width={150} height={150} style={{borderRadius:"50%"}} />
//            </div>
//           <h2>Name: {user.name}</h2>
//           <h2> email : {user.email}</h2>

//           {/* <h2>password : {user.password}</h2> */}
//         </div>
//         <div className="text-center ">
//           <button onClick={openModel} className="btn btn-primary">Edit</button>
        
//         </div>
//       </div>

//       {/* model */}
//       {
//         showModel ?    <div className="modal-overlay">
//         <div className="modal-box">

//           <button className="close-btn" onClick={closeModel}>
//             ✖
//           </button>

//           <h2>Edit User</h2>
           
//           <div className="form-group">
//           <label>Choose Image</label>
//             <input
//               type="file"
//               // name = "image"
//               onChange={(e) => setImage(e.target.files[0])}
//             />
           
//             <label>Name:</label>
//             <input
//               type="text"
//               value={editName}
//               onChange={(e) => setEditName(e.target.value)}
//             />
//           </div>

//           <div className="form-group">
//             <label>Email:</label>
//             <input
//               type="email"
//               value={editEmail}
//               onChange={(e) => setEditEmail(e.target.value)}
//             />
//           </div>

//           <button onClick={handleSave} className="btn btn-success w-100 mt-3">Save</button>
//         </div>
//       </div> 
//       : 
//      ""
//       }
    

//     </>
//   );
// };

// export default LoginSuccessPage;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Baseurl } from "./url/Url";
import { toast } from "react-toastify";

const LoginSuccessPage = () => {

  /* ===================== STATE ===================== */
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [image, setImage] = useState(null);

  const token = localStorage.getItem("token");

  /* ===================== GET PROFILE ===================== */
  const loginUserData = async () => {
    try {
      if (!token) return;

      const res = await axios.get(`${Baseurl}/api/api/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(res.data.user);
      setEditName(res.data.user.name);
      setEditEmail(res.data.user.email);

    } catch (error) {
      console.log("Profile error:", error.response?.data);
    }
  };

  /* ===================== UPDATE PROFILE ===================== */
  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("name", editName);
      formData.append("email", editEmail);
      if (image) formData.append("image", image);

      const res = await axios.put(
        `${Baseurl}/api/api/update/profile`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        toast.success("Profile Updated Successfully");
        setShowModal(false);
        loginUserData();
      }

    } catch (error) {
      console.log(error.response?.data);
      toast.error("Update failed");
    }
  };

  /* ===================== LIFE CYCLE ===================== */
  useEffect(() => {
    loginUserData();
  }, []);

  /* ===================== LOADING ===================== */
  if (!user) return <h1>Loading...</h1>;

  /* ===================== JSX ===================== */
  return (
    <>
      {/* ===== PROFILE SECTION ===== */}
      <div className="profile-Page">
        <div className="Profile-Heading text-center">
          <h1>User Profile</h1>
        </div>

        <div className="shadow rounded m-5 p-5 text-center">
          <img
            src={`${Baseurl}/api/api/user/image/${user._id}`}
            alt="profile"
            width={150}
            height={150}
            style={{ borderRadius: "50%" }}
          />

          <h2>Name: {user.name}</h2>
          <h2>Email: {user.email}</h2>
        </div>

        <div className="text-center">
          <button onClick={() => setShowModal(true)} className="btn btn-primary">
            Edit
          </button>
        </div>
      </div>

      {/* ===== MODAL ===== */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">

            <button className="close-btn" onClick={() => setShowModal(false)}>
              ✖
            </button>

            <h2>Edit User</h2>

            <div className="form-group">
              <label>Choose Image</label>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
              />
            </div>

            <button onClick={handleSave} className="btn btn-success w-100 mt-3">
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginSuccessPage;

