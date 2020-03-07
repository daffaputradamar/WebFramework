import React, { Component } from "react";
import "./BlogPost.css";
import Post from "../../components/BlogPost/Post";

export default class BlogPost extends Component {
  state = {
    posts: [],
    inputArtikel: {
      userId: 1,
      id: 0,
      title: "",
      body: ""
    }
  };

  componentDidMount() {
    this.fetchArtikel();
  }

  fetchArtikel = () => {
    fetch("http://localhost:3001/posts?_sort=id&_order=desc")
      .then(response => response.json())
      .then(posts => this.setState({ posts }));
  };

  handleHapusArtikel = id => {
    fetch(`http://localhost:3001/posts/${id}`, { method: "DELETE" }).then(
      res => {
        this.fetchArtikel();
      }
    );
  };

  handleTambahArtikel = e => {
    let formInsertArtikel = { ...this.state.inputArtikel };
    formInsertArtikel["id"] = new Date().getTime();
    formInsertArtikel[e.target.name] = e.target.value;
    this.setState({
      inputArtikel: formInsertArtikel
    });
  };

  handleTombolSimpan = e => {
    fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.inputArtikel)
    }).then(res => {
      this.fetchArtikel();
    });
  };

  render() {
    return (
      <div className="post-artikel">
        <div className="form pb-2 border-bottom mt-4">
          <div className="form-group row">
            <label htmlFor="title" className="col-sm-2 col-form-label">
              Judul
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                onChange={this.handleTambahArtikel}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="body" className="col-sm-2 col-form-label">
              Isi
            </label>
            <div className="col-sm-10">
              <textarea
                name="body"
                id="body"
                rows="3"
                className="form-control"
                onChange={this.handleTambahArtikel}
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
        <h2>Daftar Artikel</h2>
        {this.state.posts.map(post => {
          return (
            <Post
              key={post.id}
              judul={post.title}
              isi={post.body}
              idArtikel={post.id}
              hapusArtikel={this.handleHapusArtikel}
            />
          );
        })}
      </div>
    );
  }
}
