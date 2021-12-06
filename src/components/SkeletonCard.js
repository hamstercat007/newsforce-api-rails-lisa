import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Link from '@material-ui/core/Link';

const SkeletonCard = () => {
  const style = {
    width: '100%',
    maxWidth: 500,
    bgcolor: 'background.paper',
    margin: '1em',
  };

  return (
    <Card style={style}>
      <CardHeader
        avatar={
          <Skeleton variant="rect" animation="wave">
            <Avatar src="" aria-label="recipe" variant="square" sx={{ height: 'auto' }}></Avatar>
          </Skeleton>
        }
        action={
          <IconButton className="skel-col" aria-label="settings">
            <Skeleton variant="circular" height="10px" width="10px" sx={{ margin: '2px' }}>
              <MoreVertIcon />
            </Skeleton>
            <Skeleton variant="circular" height="10px" width="10px" sx={{ margin: '2px' }}>
              <MoreVertIcon />
            </Skeleton>
            <Skeleton variant="circular" height="10px" width="10px" sx={{ margin: '2px' }}>
              <MoreVertIcon />
            </Skeleton>
          </IconButton>
        }
        title={
          <>
            <Skeleton variant="text" width="90%" animation="wave"></Skeleton>
            <Skeleton variant="text" width="80%" animation="wave"></Skeleton>
          </>
        }
        subheader={<Skeleton variant="text" width="20%" animation="wave"></Skeleton>}
      />
      <Skeleton variant="rect" width="100%" height="80%" animation="wave">
        <CardMedia component="img" height="194" src="" alt="Image" />
      </Skeleton>
      <CardActions disableSpacing>
        <div className="card-buttons">
          <Skeleton variant="circular" width="30px" height="30px" animation="wave" sx={{ margin: '5px' }}>
            <IconButton aria-label="add to favorites">
              <BookmarkAddIcon />
            </IconButton>
          </Skeleton>
          <Skeleton variant="circular" width="30px" height="30px" animation="wave">
            <Link href="" target="_blank">
              <IconButton aria-label="source article">
                <NewspaperIcon />
              </IconButton>
            </Link>
          </Skeleton>
        </div>
        <div className="skel-row">
          <Skeleton variant="rect" width="70px" height="30px" animation="wave" sx={{ borderRadius: '5px' }}></Skeleton>
          <Skeleton variant="rect" width="70px" height="30px" animation="wave" sx={{ borderRadius: '5px' }}></Skeleton>
        </div>
      </CardActions>
    </Card>
  );
};

export default SkeletonCard;
