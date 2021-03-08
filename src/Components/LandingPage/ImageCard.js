import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Collapse } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 650,
    background: "rgba(0,0,0,0.45)",
    margin: "25px",
    "&:hover": {
      background: "rgba(0,0,0,0.7)",
      cursor: "pointer",
      borderColor: "red",
      padding: 5,
      transition: "3000",
    },
  },
  media: {
    height: 400,
    minWidth: 250,
  },
  title: {
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  desc: {
    fontSize: "1.1rem",
    color: "#ddd",
  },
});

export default function ImageCard({ data, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={data.imageUrl}
          title="options"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {data.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {data.description}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}
