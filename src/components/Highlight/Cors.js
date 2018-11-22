import React from "react";
var request = require('request');
var cheerio = require('cheerio');
class Cors extends React.Component {
    state =  {
      description: ""
    }
    getReadme(github){
      var site = "https://cors-anywhere.herokuapp.com/"
      if(github.indexOf("github")<0){site+="https://github.com/AaronGoldsmith/"}
      site += github;
      let arr = [];
      request(site, function(err, resp, html) {
          if (!err && resp.statusCode === 200){
            const $ = cheerio.load(html);
            let arr = [];

           let body = $('.markdown-body').children().slice(1)
           body.each(line => {
             let sent = body[line].firstChild;
             if(sent.data)
                arr.push(sent.data)
            });
            console.log(arr.join(" "));
            // return arr.join(" ")
          }})
          return arr.join( " ")
    }
    componentDidMount(){
      this.setState({description: this.getReadme("hangman")})
      setTimeout(function(){},2000);
    }
    render(){
      return(
      <div>{this.state.description}</div> );
    }
      
      
}
export default Cors; 
