import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './Product/Product'
import useStyles  from './styles'
const products = [
    {id:1, name:'Shoes', desc:'Running Shoes', price:"$5", image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'},
    {id:2, name:'cap', desc:'Running cap', price:"$10", image:'https://previews.123rf.com/images/dinna/dinna0801/dinna080100063/2318748-red-baseball-cap-image.jpg'}

]
const Products= () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map((product)=>(
                    <Grid item key = {product.id} xs={12} sm={6} md={4} lg={3}>
                <Product  product={product}/>
                </Grid>
)

)}
            </Grid>
        </main>
    )
}

export default Products
