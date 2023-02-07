import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { IngredientCard, SubHeading } from '../../components';
import './AllIngredients.css';

const ingredListURL = "https://cookbook.brainstormingapplication.com/api/ingridientlist/";

const AllIngredients = () => {

  const [ingredPost, setIngredPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(ingredListURL).then((response) => {
      setIngredPost(response.data);
      console.log(response);
    });
  }, []);

  return (
    <div className='app__allIngredients'>
        <SubHeading title="Список інгредієнтів"/>
        <div className="app__allIngredients-cards">
        {ingredPost && (
          <>
            {ingredPost.map((ingred) => {
              return (
                <Link to={`/all-ingredients/ingredient/${ingred.id}`} key={ingred.id}>
                  <IngredientCard data={ingred}></IngredientCard>
                </Link>
              );
            })}
          </>
        )}
      </div>
    </div>
  )
}

export default AllIngredients;