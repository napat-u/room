import React from 'react';

class CheckRoomStatus extends React.Component {
    render() {
        return (
            <div className="item" style={{textAlign: 'left'}}>
              <h3>Room Status</h3>
                <div className="ui toggle checkbox" style={{marginBottom: '10px'}}>
                  <input type="checkbox" name="VC" checked={this.props.vc} onChange={this.props.handleCheckBox} />
                  <label>VC</label>
                </div>
                <br />
                <div className="ui toggle checkbox">
                  <input type="checkbox" name="OD" checked={this.props.od} onChange={this.props.handleCheckBox} />
                  <label>OD</label>
                </div>
            </div>
        )
    }
}

export default CheckRoomStatus;