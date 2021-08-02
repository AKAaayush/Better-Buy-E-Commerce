import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import logo from '../../assets/logo.png'

import useStyle from './styles'
const Navbar = () => {
    const classes = useStyle()
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant = "h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="70px" className={classes.image}/>
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        
                        <IconButton arial-label="show cart items" color='inherit'>
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>


                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
