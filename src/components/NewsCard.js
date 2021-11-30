import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const NewsCard = ({ publisher, publish_date, image_url, headline, sub_headline, article_body }) => {
  return (
    <Card sx={{ maxWidth: 445 }} style={{ margin: '2em' }}>
      <CardActionArea>
        <CardMedia component="img" height="140" src={image_url} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {headline}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {sub_headline}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {publisher}
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
