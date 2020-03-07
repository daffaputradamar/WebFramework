import React from "react";

function MahasiswaItem({
  id,
  NIM,
  nama,
  alamat,
  hp,
  angkatan,
  status,
  hapusMahasiswa
}) {
  return (
    <div className="post-artikel">
      <div className="artikel">
        <div className="konten-artikel">
          <div className="judul-artikel">{nama}</div>
          <div className="isi-artikel">NIM: {NIM}</div>
          {/* <div className="isi-artikel">nama: {nama}</div> */}
          <div className="isi-artikel">alamat: {alamat}</div>
          <div className="isi-artikel">hp: {hp}</div>
          <div className="isi-artikel">angkatan: {angkatan}</div>
          <div className="isi-artikel">status: {status}</div>
          <button
            className="btn btn-sm btn-danger"
            onClick={hapusMahasiswa.bind(this, id)}
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}

export default MahasiswaItem;
