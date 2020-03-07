import React, { Component } from "react";
import "../BlogPost/BlogPost.css";
import MahasiswaItem from "../../components/Mahasiswa/MahasiswaItem";

export default class ListMahasiswa extends Component {
  state = {
    mahasiswa: [],
    inputMahasiswa: {
      NIM: "",
      nama: "",
      alamat: "",
      hp: "",
      angkatan: "",
      status: ""
    }
  };

  componentDidMount() {
    this.fetchMahasiswa();
  }

  fetchMahasiswa = () => {
    fetch("http://localhost:3001/mahasiswa?_sort=id&_order=desc")
      .then(response => response.json())
      .then(mahasiswa => this.setState({ mahasiswa }));
  };

  handleHapusMahasiswa = id => {
    // console.log(id);
    // return;
    fetch(`http://localhost:3001/mahasiswa/${id}`, { method: "DELETE" }).then(
      res => {
        this.fetchMahasiswa();
      }
    );
  };

  handleTambahMahasiswa = e => {
    let formInsertMahasiswa = { ...this.state.inputMahasiswa };
    formInsertMahasiswa[e.target.name] = e.target.value;
    this.setState({
      inputMahasiswa: formInsertMahasiswa
    });
  };

  handleTombolSimpan = e => {
    fetch("http://localhost:3001/mahasiswa", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.inputMahasiswa)
    }).then(res => {
      this.fetchMahasiswa();
    });
  };

  render() {
    return (
      <div className="post-artikel">
        <div className="form pb-2 border-bottom mt-4">
          <div className="form-group row">
            <label htmlFor="nama" className="col-sm-2 col-form-label">
              Nama
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="nama"
                name="nama"
                onChange={this.handleTambahMahasiswa}
              />
            </div>
          </div>
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
            <label htmlFor="alamat" className="col-sm-2 col-form-label">
              Alamat
            </label>
            <div className="col-sm-10">
              <textarea
                name="alamat"
                id="alamat"
                rows="3"
                className="form-control"
                onChange={this.handleTambahMahasiswa}
              ></textarea>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="hp" className="col-sm-2 col-form-label">
              No. Hp
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="hp"
                name="hp"
                onChange={this.handleTambahMahasiswa}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="angkatan" className="col-sm-2 col-form-label">
              Tahun angkatan
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="angkatan"
                name="angkatan"
                onChange={this.handleTambahMahasiswa}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="angkatan" className="col-sm-2 col-form-label">
              Tahun angkatan
            </label>
            <div className="col-sm-10">
              <select
                class="form-control"
                name="status"
                onChange={this.handleTambahMahasiswa}
              >
                <option value="Aktif">Aktif</option>
                <option value="Cuti">Cuti</option>
                <option value="Lulus">Lulus</option>
              </select>
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
        {this.state.mahasiswa.map(mhs => {
          return (
            <MahasiswaItem
              key={mhs.id}
              id={mhs.id}
              NIM={mhs.NIM}
              nama={mhs.nama}
              alamat={mhs.alamat}
              hp={mhs.hp}
              angkatan={mhs.angkatan}
              status={mhs.status}
              hapusMahasiswa={this.handleHapusMahasiswa}
            />
          );
        })}
      </div>
    );
  }
}
