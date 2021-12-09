import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import jazeeraLogo from '../vectors/jazeera.svg';
import bbcLogo from '../vectors/bbcnews.svg';
import APlogo from '../vectors/associatedpress.svg';
import formatTimeAgo from './TimeFormat';
import Link from '@material-ui/core/Link';
import TagButtons from './TagButtons';
import truncate from './helpers/truncate';
import Tooltip from '@mui/material/Tooltip';

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
    height: 340,
    bgcolor: 'background.paper',
    margin: '1em',
  };

  return (
    <Card style={style}>
      <CardHeader
        avatar={<Avatar src={getIcon(publisher)} aria-label="publisher_logo" variant="square" sx={{ height: 'auto', width: '50px' }}></Avatar>}
        title={truncate(sub_headline)}
        subheader={formatTimeAgo(publish_date)}
      />
      <CardMedia component="img" height="194" src={image_url} alt="Image" />
      <CardActions disableSpacing>
        <Tooltip title={'View on ' + publisher} placement="right">
          <Link href={src_url} target="_blank">
            <IconButton aria-label="source article">
              <NewspaperIcon style={{ height: '1.2em', width: '1.2em' }} />
            </IconButton>
          </Link>
        </Tooltip>
        <TagButtons tag_list={tag_list} />
      </CardActions>
    </Card>
  );
};

export default NewsCard;
