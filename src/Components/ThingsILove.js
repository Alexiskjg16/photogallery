import React, { Component } from 'react';

class Photos extends Component {
    render() {
        return (
            <section>
            <h1>
                This is things I love!!!
            </h1>
            <ul>
             <li>
            <img src="images/jeep.jpg" alt="Jeeeeeeeps">Vehicles specifically Jeeps</img>
            </li>
            <li>
            <img src="images/nails.jpg" alt="Nails">Makeup/hair/nails</img>
            </li>
            </ul>
            </section>
        );
    }
}

export default Photos;
