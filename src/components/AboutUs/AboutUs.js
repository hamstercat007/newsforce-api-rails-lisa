import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid"


const AboutUs = () => {
  return (
    <Card
      sx={{ minWidth: 400 }}
      style={{
        margin: "2em",
        paddingLeft: "1em",
        paddingRight: "1em",
        textAlign: "center",
      }}
    >
      <CardContent>
        <h2 data-testid="aboutUsTitle" style={{ padding:'0.5em'}}>About Us - A Force for Good</h2>

        <p>
          Four aspirational students met at a software engineering school in
          London, UK.
        </p>
        <p>
          In a world of post-Brexit, Trump's fake news, and Covid
          misinformation, they realised the need for high quality news to
          educate people.
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
        
        <p style={{ paddingTop: '1em', fontWeight: "bold" }}>We believe in making a difference.</p>
        <h3>May the Newsforce be with you.</h3>
      </CardContent>
    </Card>
  );
};

export default AboutUs;
