import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NewspaperIcon from '@mui/icons-material/Newspaper';

import jazeeraLogo from '../images/al-jazeera-logo.png';
import bbcLogo from '../images/bbc-logo.png';
import APlogo from '../images/associatedpress.png';
import formatTimeAgo from './TimeFormat';
import Link from '@material-ui/core/Link';
import TagButtons from './TagButtons';
import truncate from './helpers/truncate';

const getIcon = (publisher) => {
  if (publisher === 'Associated Press') {
    return APlogo;
  } else if (publisher === 'Al Jazeera English') {
    return jazeeraLogo;
  } else {
    return bbcLogo;
  }
};

const NewsCard = ({ publisher, publish_date, image_url, headline, sub_headline, src_url, tag_list }) => {
  const style = {
    width: '100%',
    maxWidth: 500,
    height: 350,
    bgcolor: 'background.paper',
    margin: '1em',
  };

  return (
    <Card style={style}>
      <CardHeader
        avatar={<Avatar src={getIcon(publisher)} aria-label="recipe" variant="square" sx={{ height: 'auto' }}></Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={truncate(sub_headline)}
        subheader={formatTimeAgo(publish_date)}
      />
      <CardMedia component="img" height="194" src={image_url} alt="Image" />
      <CardActions disableSpacing>
        <div className="card-buttons">
          <IconButton aria-label="add to favorites">
            <BookmarkAddIcon />
          </IconButton>
          <Link href={src_url} target="_blank">
            <IconButton aria-label="source article">
              <NewspaperIcon />
            </IconButton>
          </Link>
        </div>
        <TagButtons tag_list={tag_list} />
      </CardActions>
    </Card>
  );
};

export default NewsCard;
