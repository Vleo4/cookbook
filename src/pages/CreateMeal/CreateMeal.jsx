import React from "react";
import { SubHeading } from "../../components";
import "./CreateMeal.css";
import images from "../../constants/images";

const CreateMeal = () => {
  
  return (
    <div className="app__createMeal">
      <SubHeading title="Створити страву" />
      <div className="app__createMeal-wrapper">
        <div className="app__createMeal-left">
          <div className="app__createMeal-left_loadPhoto">
            <p>Скоро буде</p>
          </div>
        </div>
        <div className="app__createMeal-right">
          <div className="app__createMeal-right_firstRow">
            <div className="app__createMeal-right_topRow-leftCol">
              <p>Назва страви:</p>
              <form>
                <input type="text" />
              </form>
            </div>
            <div className="app__createMeal-right_topRow-rightCol">
              <p>Важкість приготування</p>
              <div className="app__createMeal-right_topRow-rightCol_checkBox">
                <button></button>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>
          <div className="app__createMeal-right_secondRow">
            <p>Рецепт:</p>
            <textarea></textarea>
          </div>
          <div className="app__createMeal-right_thirdRow">
            <p>Інгредієнти:</p>
            <div className="app__createMeal-right_thirdRow-firstRow">
              <form>
                <input type="text" />
              </form>
              <form>
                <input type="text" />
              </form>
              <img src={images.XIcon} alt="XIcon" />
            </div>
            <div className="app__createMeal-right_thirdRow-secondRow">
              <form>
                <input type="text" placeholder="Додати інгредієнт" />
              </form>
              <form>
                <input type="text" />
              </form>
              <img src={images.AddIcon} alt="AddIcon" />
            </div>
            <div className="app__createMeal-right_thirdRow-thirdRow">
              <button>Створити рецепт</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMeal;
