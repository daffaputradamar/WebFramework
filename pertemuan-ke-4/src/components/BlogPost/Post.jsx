import React from "react";

function Post({ judul, isi, hapusArtikel, idArtikel }) {
  return (
    <div className="post-artikel">
      <div className="artikel">
        <div className="gambar-artikel">
          <img src="http://placeimg.com/80/80/tech" alt="thumbnail artikel" />
        </div>
        <div className="konten-artikel">
          <div className="judul-artikel">{judul}</div>
          <div className="isi-artikel">{isi}</div>
          <button
            className="btn btn-sm btn-danger"
            onClick={hapusArtikel.bind(this, idArtikel)}
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
