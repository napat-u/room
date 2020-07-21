import React from 'react';
import RoomList from './RoomList';

class RoomManage extends React.Component {
    render() {
        return (
            <div className="ui grid">
                <RoomList />
            </div>
        )
    }
}

export default RoomManage;