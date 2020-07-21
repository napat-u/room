import React from 'react';
import { connect } from 'react-redux';
import { fetchInfo } from '../../actions';
import { Header, Modal, Grid } from 'semantic-ui-react';
import ToggleSidebar from '../togglecomponents/ToggleSidebar';

class RoomList extends React.Component {
    state = {
        VC: true,
        OD: true
    }

    componentDidMount() {
        this.props.fetchInfo()
    }

    modalStructure = (color, info) => {
        return (
            <>
            <span style={{paddingLeft: '5px'}}>{info.room}</span><br/>
            <Modal trigger={<i className={`square icon ${color}`} style={{fontSize: '30px', cursor: 'pointer', paddingTop: '5px'}}></i>}>
                <Modal.Header>ROOM {info.room} </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Header>Room {info.room} Profile</Header>
                        <Grid columns={6} divided>
                            <Grid.Row>
                                <Grid.Column><p>Name</p></Grid.Column>
                                <Grid.Column><p>{info.name}</p></Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column><p>ID Card</p></Grid.Column>
                                <Grid.Column><p>{info.userId}</p></Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column><p>Address</p></Grid.Column>
                                <Grid.Column><p>{info.address}</p></Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column><p>Room</p></Grid.Column>
                                <Grid.Column><p>{info.room}</p></Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column><p>Status</p></Grid.Column>
                                <Grid.Column><p>{info.status}</p></Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column><p>Floor</p></Grid.Column>
                                <Grid.Column><p>{info.floor}</p></Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Modal.Description>
                </Modal.Content>        
            </Modal>
            </>
        )
    }


    checkStatus(status, info) {
        switch(status) {
            case 'VC':
                if(this.state.VC) {
                    return this.modalStructure('grey' ,info)
                }
                return console.log('VC HIDE')
            case 'OD':
                if(this.state.OD) {
                    return this.modalStructure('green' ,info)
                }
                return console.log('OD HIDE')
            default:
                return ''
        }
    }

    renderRoom(num) {
        const cusInfo = this.props.info
        if(cusInfo) {
            return cusInfo.map((e) => {
                if(e.floor === num) {
                    return (
                        <div key={e.room} style={{display: 'inline-block'}}>
                            {this.checkStatus(e.status, e)}
                        </div>
                    )
                }
                return ''
            })
        }
    }

    renderFloor = () => {
        if(this.props.info) {
            const floorInfo = this.props.info.map(({floor}) => floor)
            const floor = [...new Set(floorInfo)]
            
            return floor.map(num => {
                if(num) {
                    return (
                        <div className="sixteen wide column" key={num}>
                            {this.renderRoom(num)}
                        </div>
                    )
                }
                return ''
            })
        }
    }

    getCheckStatus = (name, val) => {
        this.setState({
            [name]: val
        })
    }

    render() {
        return (
            <>
                <div className="sixteen wide column">
                    <ToggleSidebar onToggle={this.getCheckStatus} />
                </div>
                {this.renderFloor()}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        info: Object.values(state.info)
    }
}

export default connect(
    mapStateToProps, 
    { fetchInfo }
    )(RoomList);
