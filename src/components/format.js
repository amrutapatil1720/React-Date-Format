import React  from 'react';
import Moment from 'react-moment';

export default class MyComponent extends React.Component {

    render() {
      const dateToFormat = new Date('1976-04-19T12:59-0500');

        return (
          <div>
          <h1>Original Date Format is:</h1>
          <Moment>{dateToFormat}</Moment>
          <br></br>
          <h1>Formated Date is:</h1>
          <Moment format="YYYY/MM/DD">
                {dateToFormat}
            </Moment>
            </div>
        );
    }
}
