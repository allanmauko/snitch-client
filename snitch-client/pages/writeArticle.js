import React, {useState} from 'react';
import Header from '../components/header/header';
import {useHistory} from 'react-router-dom';

// const initialValue = {
//   title: "",
//   value: "",
//   imageUrl: "",
//   numberOfLikes: "",
// }

const WriteArticle = () => {

  // const [article, setArticle] = useState(initialValue)
  // const [title, value, imageUrl, numberOfLikes] = article
  //
  // const history = useHistory()
  //
  // export const createArticle = async (article) => {
  //   return await axios.post(url,article)
  // }

  return (
      <div>
        <Header/>
        <div className="container">
          <div className="col">
            <div className="row">
              <p>testing write article</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default WriteArticle;