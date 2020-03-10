import React from "react";

const PostMahasiswa = props => {
  return (
    <div className="artikel">
      <div className="gambar-artikel">
        <img
          src="http://placeimg.com/120/120/any"
          alt="gambar thumbnail artikel"
        />
      </div>
      <div className="konten-artikel">
        <div className="judul-artikel">{props.nama}</div>
        <p className="isi-artikel">NIM : {props.NIM}</p>
        <p className="isi-artikel">Alamat : {props.alamat}</p>
        <p className="isi-artikel">Nomor HP : {props.hp}</p>
        <p className="isi-artikel">Angkatan : {props.angkatan}</p>
        <p className="isi-artikel">Status : {props.status}</p>
        <button
          className="btn btn-sm btn-warning"
          onClick={props.hapusMahasiswa.bind(this, props.idMhs)}
        >
          Hapus
        </button>
      </div>
    </div>
  );
};

export default PostMahasiswa;
