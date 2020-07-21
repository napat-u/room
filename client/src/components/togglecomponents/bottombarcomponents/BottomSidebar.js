import React from 'react';
import {
    Menu,
    Sidebar,
  } from 'semantic-ui-react';
import ButtonSidebar from './ButtonSidebar';
import TableSidebar from './TableSidebar';
import './size.css';

class RightSidebar extends React.Component {
    state = {
        dimmed: false,
        visible: false,
    }
  
    handleAnimationChange = animation => () => {
      this.setState((prevState) => ({ animation, visible: !prevState.visible }))
    }

    render() {
        return (
            <div>
                <div>
                    <button 
                    className="big fixed circular ui icon button content" 
                    aria-label="Right Top Align"
                    onClick={this.handleAnimationChange('overlay')}
                    >
                        <i className="ellipsis vertical icon"></i>
                    </button>
                </div>
                
                <div className="pusher">
                <Sidebar
                as={Menu}
                animation='overlay'
                direction='bottom'
                icon='labeled'
                onHide={() => this.setState({ visible: false})}
                vertical
                className="test"
                visible={this.state.visible}
                style={{paddingLeft: '25px', paddingRight: '25px', paddingTop: '15px', marginBottom: '100px'}}
                >
                    <ButtonSidebar />
                    <TableSidebar />
                </Sidebar>
                </div>
            </div>
        )
    }
}

export default RightSidebar;