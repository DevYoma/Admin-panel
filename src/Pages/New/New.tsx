import { DriveFolderUploadOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Dashboard/Navbar/Navbar';
import SidebarDash from '../../components/Dashboard/SidebarDash/SidebarDash';
import './New.scss';
import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db, auth, storage } from '../../Firebase/Firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

type NewProps = {
  inputs: Array<{ id: string, label: string, type: string, placeholder?: string}>;
  title: string;
}

const New = ({ inputs, title }: NewProps) => {
  const [file, setFile] = useState<Blob | MediaSource | string | any>("");

  const [data, setData] = useState({
    userName: "",
    fullName: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    country: "",
  });

  const [percentage, setPercentage] = useState<null | number>(null)

  // console.log(data)

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name; // date milliseconds is appended(prefixed) to image name
      // console.log(name)
      const storageRef = ref(storage, file.name); // if file has same name, it will override

      const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    setPercentage(progress)
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
        default: 
          break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
    console.log(error)
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
      setData((prev) => ({
        ...prev,
        img: downloadURL
      }))
    });
  }
);
    }

    file && uploadFile();
  }, [file])

  // ONCHANGE
  const handleOnChange = (e: any) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({...data, [id]: value})
    // console.log(data)
  }

  console.log(data);

  const handleFormAdd = async (e: any) => {
    e.preventDefault();

    // CODE FROM FIREBASE
    try { 
      // SIGNING UP A USER 
      const signUpResponse = await createUserWithEmailAndPassword(auth, data.email, data.password)

      // ADDING DOCUMENT TO THE COLLECTION
      await setDoc(doc(db, "users", signUpResponse.user.uid ), { // cities => collection. // LA => Document Id
        ...data,
        timeStamp: serverTimestamp()
      });
      
    // console.log(res.id)
    } catch (error: any) {
      alert(error.message)      
    }
  }

  return (
    <div className="new">
      <SidebarDash />
      <div className="newContainer">
        <Navbar />
        < div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file) // make sure you dump them after use...
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleFormAdd}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlined className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  // learn how to use the event object with typescript in react.
                  onChange={(e: any) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              <div className="formInput">
                <label>Username</label>
                <input 
                  id="userName"
                  type="text"
                  placeholder='jhonny'
                  value={data.userName}
                  onChange={handleOnChange}
                  required
                />
              </div>

              <div className="formInput">
                <label>FullName</label>
                <input 
                  id="fullName"
                  type="text"
                  placeholder='John Doe'
                  value={data.fullName}
                  onChange={handleOnChange}
                  required
                />
              </div>

              <div className="formInput">
                <label>Email</label>
                <input 
                  id="email"
                  type="email"
                  placeholder='john@gmail.com'
                  value={data.email}
                  onChange={handleOnChange}
                  required
                />
              </div>

              <div className="formInput">
                <label>Phone</label>
                <input 
                  id="phone"
                  type="number"
                  placeholder='+124 59 453'
                  value={data.phone}
                  onChange={handleOnChange}
                  required
                />
              </div>

              <div className="formInput">
                <label>Password</label>
                <input 
                  id="password"
                  type="password"
                  value={data.password}
                  onChange={handleOnChange}
                  required
                />
              </div>

              <div className="formInput">
                <label>Address</label>
                <input 
                  id="address"
                  type="text"
                  placeholder='Elton St. 216 NewYork'
                  value={data.address}
                  onChange={handleOnChange}
                  required
                />
              </div>

              <div className="formInput">
                <label>Country</label>
                <input 
                  id="country"
                  type="text"
                  placeholder='USA'
                  value={data.country}
                  onChange={handleOnChange}
                  required

                />
              </div>

              <button disabled={percentage !== null && percentage < 100} type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New