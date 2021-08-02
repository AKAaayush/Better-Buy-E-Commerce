import React from 'react'
import { CardActions, CardContent, CardMedia,Typography, IconButton, Card } from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons'
import useStyles  from './styles'
const Product = ({product}) => {
    const classes = useStyles();
    return (
        <Card className ={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" >
                        {product.price}
                    </Typography>
                </div>
                <Typography variant="h4" color="textSecondary">{product.desc}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton arial-label="Add to Cart">
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
