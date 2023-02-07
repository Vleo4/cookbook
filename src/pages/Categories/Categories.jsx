import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { CategoriesCard, SubHeading } from "../../components";
import "./Categories.css";

const baseURL = "https://cookbook.brainstormingapplication.com/api/categorys/";

const Categories = () => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response);
    });
  }, []);

  return (
    <div className="app__categories">
      <SubHeading title="Категорії" />
      <div className="app__categories-cards">
        {post && (
          <>
            {post.map((category) => {
              return (
                <Link
                  to={`/meal-categories/meal-category/${category.id}/${category.name}`}
                  key={category.id}
                >
                  <CategoriesCard data={category} />
                </Link>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Categories;
