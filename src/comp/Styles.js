import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '100%',
  },
  colorPrimary: { backgroundColor: '#2c5d63' },
  gameOver: {
    alignItems: 'center',
    color: '#757a79',
    display: 'flex',
    fontWeight: 800,
    justifyContent: 'center',
    margin: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  paper: {
    '& > *': {
      backgroundColor: '#aeccc6',
      height: 'calc(100vh - 72px)',
      margin: theme.spacing(1),
      width: '100%',
    },
    border: '1px solid #9ba6a5',
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
}));
export { useStyles};