import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TeamBio from "./TeamBio";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@mui/material/Button";
import lisa from "../images/team_bio/lisa-mac.png";
import arthur from "../images/team_bio/arthur-fincham.jpeg";
import alex from "../images/team_bio/alex-boyling.jpeg";
import tom from "../images/team_bio/tom-kellet.jpeg";

const paddingStyles = makeStyles({
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
});

const AboutUs = () => {
  const classes = paddingStyles();
  return (
    <div>
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
          <h2 data-testid="aboutUsTitle" style={{ padding: "0.5em" }}>
            About Us - A Force for Good
          </h2>

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
            freely available to all, to help people be better informed and have
            a broader view.{" "}
          </p>

          <p style={{ paddingTop: "1em", fontWeight: "bold" }}>
            We believe in making a difference.
          </p>
          <h3>May the Newsforce be with you.</h3>
        </CardContent>
      </Card>
      <Grid container justify="center">
        <Box m={2} pb={1}>
          <Button variant="contained">Team Bio</Button>
        </Box>
      </Grid>
      <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item xs={12} sm={6} md={3}>
          <TeamBio
            name="Alex"
            image_url={alex}
            image_url_alt="Photo of Alex Boyling"
            github_url="https://github.com/arthurfincham"
            strength1="Design skills"
            strength2="Calm and methodical"
            strength3=""
          ></TeamBio>
          </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TeamBio
            name="Arthur"
            image_url={arthur}
            image_url_alt="Photo of Arthur Fincham"
            github_url="https://github.com/arthurfincham"
            strength1="Fast coder"
            strength2="Enjoys challenges"
            strength3="Inclusive team player"
          ></TeamBio>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TeamBio
            name="Lisa"
            image_url={lisa}
            image_url_alt="Photo of Lisa Mac"
            github_url="https://github.com/hamstercat007"
            strength1="Creative"
            strength2="Writer"
            strength3=""
          ></TeamBio>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TeamBio
            name="Tom"
            image_url={tom}
            image_url_alt="Photo of Tom Kellett"
            github_url="https://github.com/hamstercat007"
            strength1="Managerial"
            strength2=""
            strength3=""
          ></TeamBio>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutUs;
