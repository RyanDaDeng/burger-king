import React from 'react';
import styles from './NavigattionItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link='/' exact>Burger Builder</NavigationItem>
        <NavigationItem link='/checkout'>Checkout</NavigationItem>
        <NavigationItem link='/my-orders'>My Orders</NavigationItem>
    </ul>
);

export default navigationItems;