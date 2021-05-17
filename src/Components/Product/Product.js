import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 300,
    },
});

const Product = ({ product }) => {
    const { image, name, price } = product;

    const classes = useStyles();

    return (
        <div className='col-md-4 my-3'>
            <Card className={`${classes.root} p-3`}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className='row'>
                    <Typography className='col-md-4 text-danger ml-3' gutterBottom variant="h6" component="h2">
                        {price}
                    </Typography>
                    <Button className='col-md-6' variant="contained" color="secondary">Buy Now</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Product;