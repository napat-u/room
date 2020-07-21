import React from 'react';

const TableSidebar = () => {
    return (
        <div className="ui grid" style={{alignContent:'center'}}>
            <div className="sixteen wide column row">
                <div className="three wide column row">
                    <table className="ui small very basic collapsing celled table">
                        <thead>
                            <tr>
                                <th>Room</th>
                                <th>Guest Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>201</td>
                                <td>Very Big TOO</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="four wide column row">
                <table className="ui small very basic collapsing celled table">
                        <thead>
                            <tr>
                                <th>Room</th>
                                <th>Time</th>
                                <th>Repair List</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>201</td>
                                <td>09.04 AM</td>
                                <td>TV</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="four wide column row">
                <table className="ui small very basic collapsing celled table">
                        <thead>
                            <tr>
                                <th>Room</th>
                                <th>Time</th>
                                <th>General List</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>201</td>
                                <td>0.01 AM</td>
                                <td>Lost wallet</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="five wide column row">
                <table className="ui small very basic collapsing celled table">
                        <thead>
                            <tr>
                                <th>Group</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Totally Guest</td>
                                <td>DB where name != null . length</td>
                            </tr>
                            <tr>
                                <td>Repair List</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>General List</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Surveillance for infections</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Flu</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Check temperature</td>
                                <td>check = true and getLength from total.length </td>
                            </tr>
                            <tr>
                                <td>Non-Check temperature</td>
                                <td>allGuest.length - checkTemp.length</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TableSidebar;