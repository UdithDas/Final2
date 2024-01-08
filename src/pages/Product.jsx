import React from 'react';
import { Button, Rating } from '@mui/material'
import './Product.css'

const Product = () => {
    return (
        <div align="center" className='txt'>
       <h3>Restaurant Rating</h3><br/><br/>
       Rating Approved by Govt&nbsp;&nbsp;<Rating name="size-small" defaultValue={3} size='small' /><br/><br/>
       <Button align="center" variant='contained'>Submit</Button>
      
    </div>
    );
};

export default Product;