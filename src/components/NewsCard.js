import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import jazeeraLogo from '../images/al-jazeera-logo.png';
import bbcLogo from '../images/bbc-logo.png';
import APlogo from '../images/associatedpress.png';
import formatTimeAgo from './TimeFormat';
import Link from '@material-ui/core/Link';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const getIcon = (publisher) => {
  if (publisher === 'Associated Press') {
    return APlogo;
  } else if (publisher === 'Al Jazeera English') {
    return jazeeraLogo;
  } else {
    return bbcLogo;
  }
};

const NewsCard = ({ publisher, publish_date, image_url, headline, sub_headline, src_url }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

  return (
    <Card sx={{ maxWidth: 400 }} style={{ margin: '1em' }}>
      <CardHeader
        avatar={<Avatar src={getIcon(publisher)} aria-label="recipe" variant="square" sx={{ height: 'auto' }}></Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={headline}
        subheader={formatTimeAgo(publish_date)}
      />
      <CardMedia component="img" height="194" src={image_url} alt="Image" />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <BookmarkAddIcon />
        </IconButton>
        <Link href={src_url} target="_blank">
          <NewspaperIcon />
        </Link>
        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{sub_headline}</Typography>
        </CardContent>
        <CardContent>
          <Typography paragraph>How others covered this:</Typography>
          <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem button>
              <ListItemText primary="Guardian" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Al Jazeera" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Associated Press" />
            </ListItem>
          </List>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default NewsCard;
