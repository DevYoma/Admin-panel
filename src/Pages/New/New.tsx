import { DriveFolderUploadOutlined } from '@mui/icons-material';
import React, { useState } from 'react'
import Navbar from '../../components/Dashboard/Navbar/Navbar';
import SidebarDash from '../../components/Dashboard/SidebarDash/SidebarDash';
import './New.scss';

type NewProps = {
  inputs: Array<{ id: number, label: string, type: string, placeholder?: string}>;
  title: string;
}

const New = ({ inputs, title }: NewProps) => {
  const [file, setFile] = useState<Blob | MediaSource | string | any>("");

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
            <form>
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

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New