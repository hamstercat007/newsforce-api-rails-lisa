import * as React from "react";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faGithub } from "@fortawesome/free-brands-svg-icons";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function TeamBio({
  name,
  image_url,
  image_url_alt,
  github_url,
  strength1,
  strength2,
  strength3,
}) {
  return (
    <Card sx={{ minWidth: 225 }} className="enlargeOnHover" raised="true">
      <CardHeader title={name} style={{ fontSize: "2em" }} align="center" />
      <CardMedia
        component="img"
        height="194"
        image={image_url}
        alt={image_url_alt}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ fontSize: "1.5em" }}
          align="center"
        >
          Strengths
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FontAwesomeIcon
                  icon={faReact}
                  style={{ color: blue[500] }}
                  className="spinner"
                ></FontAwesomeIcon>
              </ListItemIcon>
              <ListItemText primary={strength1} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FontAwesomeIcon
                  icon={faReact}
                  style={{ color: blue[500] }}
                  className="spinner"
                ></FontAwesomeIcon>
              </ListItemIcon>
              <ListItemText primary={strength2} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FontAwesomeIcon
                  icon={faReact}
                  style={{ color: blue[500] }}
                  className="spinner"
                ></FontAwesomeIcon>
              </ListItemIcon>
              <ListItemText primary={strength3} />
            </ListItemButton>
          </ListItem>
        </List>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="github account">
          <a href={github_url}>
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
        </IconButton>
      </CardActions>
    </Card>
  );
}
