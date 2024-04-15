import React from "react";
import HeaderClass from "./HeaderClass";
import StudenList from "./MainClass/StudenList";
import Transcript from "./MainClass/Transcript";
import Statistical from "./MainClass/Statistical";
import { setChoose } from "./HeaderClass";

const MainClass = ({ url }) => {
  const renderContent = () => {
    let componentToRender;
    switch (setChoose(url)) {
      case "Studentlist":
        componentToRender = <StudenList />;
        break;
      case "Transcript":
        componentToRender = <Transcript />;
        break;
      case "Statistical":
        componentToRender = <Statistical />;
        break;
      default:
        componentToRender = <MainClass />;
    }
    return componentToRender;
  };

  return (
    <div>
      <HeaderClass />
      <div>{renderContent()}</div>
    </div>
  );
};

export default MainClass;
