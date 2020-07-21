import React from 'react';

class PatientStatus extends React.Component {
    render() {
        return (
            <div className="item" style={{textAlign: 'left'}}>
                <h3>Patient Status</h3>
                <div className="ui toggle checkbox" style={{marginBottom: '10px'}}>
                  <input type="checkbox" name="normalTemp"/>
                  <label>Below 37.3 C</label>
                </div>
                <br />
                <div className="ui toggle checkbox" style={{marginBottom: '10px'}}>
                  <input type="checkbox" name="middleTemp" className="left aligned content" />
                  <label className="right aligned content">Between 37.3 - 37.5 C</label>
                </div>
                <br />
                <div className="ui toggle checkbox" style={{marginBottom: '10px'}}>
                  <input type="checkbox" name="highTemp" />
                  <label>Higher Than 37.5 C</label>
                </div>
              </div>
        )
    }
}

export default PatientStatus;