import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';
import { Link, browserHistory, withRouter } from 'react-router-dom';
import Strings from '../misc/Strings'

const style = {
  title: {
    cursor: 'pointer'
  }
};

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleTitleTouchTap = this.handleTitleTouchTap.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  handleTitleTouchTap() {
    
    browserHistory.push('/'); // Navigate home
  }

  render() {
    const appName = Strings.get(Strings.AppName)
    return (
      <div>
        <AppBar
          onLeftIconButtonClick={this.handleToggle}
          title={<span style={style.title}>{appName}</span>}
          onTitleClick={this.handleTitleTouchTap}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
        >
          <List>
            <ListItem
              containerElement={<Link to="/" />}
              onClick={this.handleToggle}
              primaryText={appName}
            />

            <ListItem
              containerElement={<Link to="/faq" />}
              onClick={this.handleToggle}
              primaryText="FAQ"
            />
            <ListItem
              containerElement={<Link to="/contact" />}
              onClick={this.handleToggle}
              primaryText="Contact"
            />
          </List>
        </Drawer>
      </div>
    );
  }
}