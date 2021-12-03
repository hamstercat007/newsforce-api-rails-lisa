import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const AboutUs = () => {
  return (
    <Card sx={{ minWidth: 400 }} style={{ margin: "2em" }}>
      <CardContent>
        <h1>About Us - A Force for Good</h1>
        <p>
          Four aspirational students met at a software engineering school in
          London, UK.{" "}
        </p>
        <p>
          In a world of post-Brexit, Trump's fake news, and Covid
          misinformation, they realised the need for high quality news to
          educate people.{" "}
        </p>
        <p>
          However, free access to News Apis is under threat. To meet rising
          costs, more news outlets are forced to charge for their News APIs
          usage.{" "}
        </p>
        <p>
          These students engineered a way to make news from different sources
          freely available to all, to help people be better informed and have a
          broader view.{" "}
        </p>
        <br></br>
        <p style={{textAlign: 'center', fontWeight: 'bold'}}>
          We believe in making a difference.{" "}
        </p>
        <h3 style={{textAlign: 'center'}}>May the Newsforce be with you.</h3>
      </CardContent>
    </Card>
  );
};

export default AboutUs;
