import SkeletonCard from './SkeletonCard';
import Grid from '@mui/material/Grid';

export default function SkeletonGrid() {
  const skelArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <>
      <Grid container spacing={0}>
        {skelArr.map((skel) => {
          return (
            <Grid key={skel + 'grid'} item xs={12} sm={12} md={5}>
              <SkeletonCard key={skel + 'skel'} typeskel={skel} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
