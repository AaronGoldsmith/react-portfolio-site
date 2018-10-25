import React from "react"
import Project from "./Project"
class PortfoFrame extends React.Component{


  componentDidMount(){
     // API call to get projects
  }

    render(){
      return(
        <div>
          <Project title="Test" imgSrc="https://picsum.photos/200" />
        </div>
      )
    }
}
export default PortfoFrame;