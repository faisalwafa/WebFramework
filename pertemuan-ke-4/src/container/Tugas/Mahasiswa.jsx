import React, { Component } from "react";
import "./Mahasiswa.css";
import Post from "../../component/Tugas/PostMahasiswa";

class Mahasiswa extends Component {
  state = {
    listMahasiswa: [],
    insertMahasiswa: {
      NIM: "",
      nama: "",
      alamat: "",
      hp: "",
      angkatan: "",
      status: ""
    }
  };

  ambilDataDariServerAPI = () => {
    fetch("http://localhost:3002/mahasiswa?_sort=id&_order=desc")
      .then(response => response.json())
      .then(jsonHasilDariAPI => {
        this.setState({ listMahasiswa: jsonHasilDariAPI });
      });
  };

  componentDidMount() {
    this.ambilDataDariServerAPI();
  }

  handleHapusMahasiswa = data => {
    fetch(`http://localhost:3002/mahasiswa/${data}`, { method: "DELETE" }).then(
      res => {
        this.ambilDataDariServerAPI();
      }
    );
  };

  handleTambahMahasiswa = event => {
    let formInsertMahasiswa = { ...this.state.insertMahasiswa };
    let timestamp = new Date().getTime();
    formInsertMahasiswa["id"] = timestamp;
    formInsertMahasiswa[event.target.name] = event.target.value;
    this.setState({ insertMahasiswa: formInsertMahasiswa });
  };

  handleTombolSimpan = () => {
    fetch(`http://localhost:3002/mahasiswa`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.insertMahasiswa)
    }).then(Response => {
      this.ambilDataDariServerAPI();
    });
  };

  render() {
    return (
      <div className="post-Mahasiswa">
        <div className="form pb-2 border-botton">
          <div className="form-group row">
            <label htmlFor="NIM" className="col-sm-2 col-form-label">
              NIM
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="NIM"
                name="NIM"
                onChange={this.handleTambahMahasiswa}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="nama" className="col-sm-2 col-form-label">
              Nama
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                name="nama"
                id="nama"
                rows="3"
                onChange={this.handleTambahMahasiswa}
              ></textarea>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="alamat" className="col-sm-2 col-form-label">
              Alamat
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                name="alamat"
                id="alamat"
                rows="3"
                onChange={this.handleTambahMahasiswa}
              ></textarea>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="hp" className="col-sm-2 col-form-label">
              HP
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                name="hp"
                id="hp"
                rows="3"
                onChange={this.handleTambahMahasiswa}
              ></textarea>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="angkatan" className="col-sm-2 col-form-label">
              Angkatan
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                name="angkatan"
                id="angkatan"
                rows="3"
                onChange={this.handleTambahMahasiswa}
              ></textarea>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="status" className="col-sm-2 col-form-label">
              Status
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                name="status"
                id="status"
                rows="3"
                onChange={this.handleTambahMahasiswa}
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleTombolSimpan}
          >
            Simpan
          </button>
        </div>
        <h2>Daftar Mahasiswa</h2>
        {this.state.listMahasiswa.map(mahasiswa => {
          return (
            <Post
              key={mahasiswa.id}
              idMhs={mahasiswa.id}
              NIM={mahasiswa.NIM}
              nama={mahasiswa.nama}
              alamat={mahasiswa.alamat}
              hp={mahasiswa.hp}
              angkatan={mahasiswa.angkatan}
              status={mahasiswa.status}
              hapusMahasiswa={this.handleHapusMahasiswa}
            />
          );
        })}
      </div>
    );
  }
}

export default Mahasiswa;
