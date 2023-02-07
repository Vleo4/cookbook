import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { SubHeading } from "../../components";
import "./ICP.css";
import ICPCard from "./ICPCard/ICPCard";

const icpURL =
  "https://cookbook.brainstormingapplication.com/api/ingridientbycategory/";

const ICP = () => {
  const { category } = useParams();

  const { id } = useParams();

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(icpURL + id + "/").then((response) => {
      setPost(response.data);
      console.log(response);
      console.log(post);
    });
  }, []);

  return (
    <div className="app__ICP">
      <SubHeading title={category} />
      <div className="app__ICP-cards">
      {post && (
          <>
            {post.map((meal) => {
              return (
                <Link to={`/all-ingredients/ingredient/${meal.id}`} key={meal.id}>
                  <ICPCard data={meal}></ICPCard>
                </Link>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default ICP;
