import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import App from './App';
import ShowDetail from './components/ShowDetail';
import ShowList from './components/ShowList';
import Header from './components/Header';
import ShowExtendedDetails from './components/ShowExtendedDetails';

const RouterComponent = () => {
  const { headerStyle, titleTextStyle, backArrowStyle } = styles;
  return(
    <Router >
      <Scene key="root" >
        <Scene
          key="showList"
          component={ShowList}
          initial={true}
          navBar={Header}
        />
        <Scene
          navigationBarStyle={headerStyle}
          key="showExtendedDetails"
          component={ShowExtendedDetails}
          back={true}
          title={'m00иSiTe'}
          titleStyle={titleTextStyle}
          navBarButtonColor= '#3d5c5c'
        />
      </Scene>
    </Router>
  );
};
const styles = {
    headerStyle: {
      flex: 1,
      textAlign: 'center',
      backgroundColor: '#b3cccc',
      height: 45,
      paddingTop: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5},
      shadowOpacity: 0.2,
      elevation: 2
    },
    titleTextStyle: {
      flex: 1,
      textAlign: 'center',
      fontSize: 18
    }
};
export default RouterComponent;
