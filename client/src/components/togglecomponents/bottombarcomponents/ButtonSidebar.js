import React from 'react';

const ButtonSidebar = () => {
    return (
        <div className="ui clearing segment" style={{padding: '0px', border: '0px', boxShadow: '0 0 0 0'}}>
            <div className="ui left floated header">
                <button className="ui button primary">
                    <i className="reply icon"></i>
                    Back
                </button>
            </div>
            <div className="ui right floated header">
                <button className="ui button teal">
                    <i className="cogs icon"></i>
                    Setting
                </button>
            </div>
            <div className="ui right floated header">
                <button className="ui button green">
                    <i className="comments icon"></i>
                    Group Message
                </button>
            </div>
            <div className="ui right floated header">
                <button className="ui button orange">
                    <i className="stethoscope icon"></i>
                    Medical Summary
                </button>
            </div>
            <div className="ui right floated header">
                <button className="ui button orange">
                    <i className="clipboard icon"></i>
                    Hotel Summary
                </button>
            </div>
                        
        </div>
    )
}

export default ButtonSidebar;