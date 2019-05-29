import React, {Component} from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('[modal]check')
    }

    render() {
        return (
            <React.Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={styles.Modal}
                     style={
                         {
                             transform: this.props.show ? 'translateY(0)' : 'translate(-100vh)',
                             opacity: this.props.show ? '1' : '0'
                         }
                     }>
                    {this.props.children}
                </div>
            </React.Fragment>
        );
    }
};

export default Modal;