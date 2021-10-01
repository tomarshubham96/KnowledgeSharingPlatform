import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { MainListItems } from './routes/AppDrawerRoutes';

export default function SwipeableTemporaryDrawer(props) {
  const { open, handleDrawerClose } = props;

//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

  return (
    <div>
        <React.Fragment>
          <SwipeableDrawer
            anchor={'left'}
            open={open}
            onClose={handleDrawerClose}
            onOpen={open}
          >
            <MainListItems />
          </SwipeableDrawer>
        </React.Fragment>
      
    </div>
  );
}
