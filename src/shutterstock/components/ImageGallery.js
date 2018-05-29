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
          <div class="image" key={todo.id}>
              <img src={todo.assets.preview.url} alt="ceca"/>
              <p>{todo.description}</p>
          </div>
      );

      return (
          <div>{todoItems}</div>
      );
  }
}

export default ImageGallery;
