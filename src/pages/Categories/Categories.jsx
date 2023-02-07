import axios from "axios";
import React from "react";
import { CategoriesCard, SubHeading } from "../../components";
import "./Categories.css";

const baseURL =
  "https://cookbook.brainstormingapplication.com/api/categorys/";

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
              return <CategoriesCard key={category.id} data={category} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Categories;
