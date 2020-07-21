import React from 'react';
import RightSidebar from './rightbarcomponents/RightSidebar';
import BottomSidebar from './bottombarcomponents/BottomSidebar';

class ToggleSidebar extends React.Component {
  
  render() {
    return (
      <div>
        <RightSidebar onToggle={this.props.onToggle} />
        <BottomSidebar />
      </div>
    )
  }
}

export default ToggleSidebar;
