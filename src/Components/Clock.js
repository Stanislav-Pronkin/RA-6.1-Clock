import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.clock = props.clock;
        this.onDelete = props.onDelete;
        this.interval = null;
    }

    state = {
        time: null
    }

    componentDidMount() {
        this.setState({ time: this.getTime(this.clock.timezone) });
        this.interval = setInterval(() => this.setState({ time: this.getTime(this.clock.timezone) }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getTime(utc) {
        const date = new Date();
        const hourUTC = (date.getUTCHours() + parseInt(utc));
        const hour = hourUTC >= 24 ? hourUTC - 24 : hourUTC;
        const min = date.getUTCMinutes();
        const sec = date.getUTCSeconds();

        return `${hour < 10 ? '0' + hour : hour}:${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`;
    }

    render() {
          return (
              <div className='clock'>
                  <h5 className='clock-name'>{this.clock.name}</h5>
                  <button className='btn delete-btn' onClick={() => this.onDelete(this.clock.id)}>x</button>
                  <span className='clock-value'>{this.state.time}</span>                 
              </div>
          )  
    }
}