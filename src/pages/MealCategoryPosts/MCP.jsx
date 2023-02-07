import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { SubHeading } from "../../components";
import "./MCP.css";
import MCPCard from "./MCPCard/MCPCard";

const mcpURL =
  "https://cookbook.brainstormingapplication.com/api/mealbycategorylist/";

const MCP = () => {
  const { category } = useParams();

  const { id } = useParams();

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(mcpURL + id + "/").then((response) => {
      setPost(response.data);
      console.log(response);
      console.log(post);
    });
  }, []);

  return (
    <div className="app__MCP">
      <SubHeading title={category} />
      <div className="app__MCP-cards">
        {post && (
          <>
            {post.map((meal) => {
              return (
                <Link to={`/meals/meal/${meal.id}`} key={meal.id}>
                  <MCPCard data={meal}></MCPCard>
                </Link>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default MCP;
