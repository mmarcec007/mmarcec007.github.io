import React, { Component } from 'react';
import jsonResponse from '../model/images.json';
let list = null;

class ImageGallery extends Component {
  constructor() {
    super();
    this.state = {
        pictures: [],
    };
  }



    static getNumbers() {
        if (jsonResponse) {
            return jsonResponse.map((key) => {
                    return key.data;
            });
        } else {
            return <p>data is not available</p>;
        }
    }

    componentWillMount() {
        list = ImageGallery.getNumbers();
    }
        componentDidMount() {
      /*
    fetch('images.json', {
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(results => {
        console.log(results);
      return results.json();
    }).then(data => {
        let pictures;
        pictures = data.results.map((data) => {
            return (
                <div key={data.results}>
                    <img src={data.picture.large}/>
                </div>
            )
        });
    this.setState({pictures: pictures});
  })
    */
}

  render() {


      let rows = [];
      for (let i = 0; i < list[0].length; i++) {
          // note: we add a key prop here to allow react to uniquely identify each
          // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
          rows.push(list[0][i]);
      }

      const todoItems = rows.map((todo) =>
          <div class="col-md-6 col-lg-4" key={todo.id}>
              <div class="card border-0 transform-on-hover">
                  <a class="lightbox" href={todo.assets.preview.url}>
                      <img src={todo.assets.preview.url} alt="Card Image" class="card-img-top"/>
                  </a>
                  <div class="card-body">
                      <h6><a href="#">#{todo.id}</a></h6>
                      <p class="text-muted card-text">{todo.description}</p>
                  </div>
              </div>
          </div>
          
          
      );

      return (
          <div class="row">{todoItems}</div>
      );
  }
}

export default ImageGallery;
