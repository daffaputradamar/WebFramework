import React, { useState } from "react";
import BlogPost from "../container/BlogPost/BlogPost";
import ListMahasiswa from "../container/Mahasiswa/ListMahasiswa";

export default function Blog() {
  const [isBlog, setIsBlog] = useState(true);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2" id="sidebar">
          <ul className="list-group mt-3">
            <li
              className={"list-group-item " + (isBlog ? "active" : "")}
              onClick={e => setIsBlog(true)}
            >
              Artikel
            </li>
            <li
              className={"list-group-item " + (!isBlog ? "active" : "")}
              onClick={e => setIsBlog(false)}
            >
              Mahasiswa
            </li>
          </ul>
        </div>
        <div className="col-10" id="content">
          {isBlog && <BlogPost />}
          {!isBlog && <ListMahasiswa />}
        </div>
      </div>
    </div>
  );
}
