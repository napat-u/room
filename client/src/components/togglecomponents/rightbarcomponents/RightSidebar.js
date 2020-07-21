import React from 'react';
import {
    Menu,
    Sidebar,
  } from 'semantic-ui-react'; 
import CountrySelect from './CountrySelect';
import CheckRoomStatus from './CheckRoomStatus';
import PatientStatus from './PatientStatus';

class RightSidebar extends React.Component {
    state = {
        dimmed: false,
        visible: false,
        VC: true,
        OD: true
    }
  
    handleCheckBox = (e) => {
      const target = e.target
      const val = target.type === 'checkbox' ? target.checked : target.value
      const name = target.name
  
      this.props.onToggle(name, val)
  
      this.setState({
        [name]: val
      })
    }
  
    handleAnimationChange = animation => () => {
      this.setState((prevState) => ({ animation, visible: !prevState.visible }))
    }

    render() {
        return (
            <div>
                <button 
                className="big fixed circular ui icon button right floated content" 
                aria-label="Right Top Align"
                onClick={this.handleAnimationChange('overlay')}
                >
                    <i className="content icon"></i>
                </button>
                
                <div className="pusher">
                <Sidebar
                as={Menu}
                animation='overlay'
                direction='right'
                icon='labeled'
                onHide={() => this.setState({ visible: false})}
                vertical
                visible={this.state.visible} 
                style={{paddingLeft: '25px', paddingRight: '25px', paddingTop: '15px'}}
                >
                    <h2 style={{marginBottom: '25px'}}>Bangkok Palace Building</h2>
                    <div className="ui divided items">
                    <PatientStatus />
                    <CheckRoomStatus handleCheckBox={this.handleCheckBox} vc={this.state.VC} od={this.state.OD} />
                    <CountrySelect />
                    </div>
                </Sidebar>
                </div>
            </div>
        )
    }
}

export default RightSidebar;