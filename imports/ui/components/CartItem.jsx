import React from "react";
import { Meteor } from 'meteor/meteor'

import { useTracker } from 'meteor/react-meteor-data'
import { Image, CloseButton } from 'react-bootstrap'


const useAccount = () => useTracker(() => {
    const user = Meteor.user()
    const userId = Meteor.userId()
    return {
        user,
        userId,
        isLoggedIn: !!userId
    }
}, []);

const CartItem = ({ product }) => {

    const { user, userId, isLoggedIn } = useAccount();

    const [quantity, setQuantity] = React.useState(product.quantity);

    const addQuantity = () => {

        if (quantity + 1 > product.stock) {


            console.log('ERROR: La cantidad supera el stock.');

        }

        Meteor.call('cartProducts.addQuantity', { _id: product._id, price: product.price }, (error) => {

            if (error) {
                console.log(error);
            }

            console.log('Cartproduct actualizado: ')
            setQuantity(quantity + 1);
            return;
        });
    }

    const takeQuantity = () => {

        if (quantity - 1 == 0) {


            console.log('ERROR: La cantidad mínima debe ser 1.');

        }

        Meteor.call('cartProducts.takeQuantity', { _id: product._id, price: product.price }, (error) => {

            if (error) {
                console.log(error);
            }

            console.log('Cartproduct actualizado: ')
            setQuantity(quantity - 1);
            return;
        });
    }

    const handleDelete = () => {

        console.log('handle delete');
        console.log('Product id: ', product._id);
        console.log('User id: ', userId);
        const productId = product.productId;

        Meteor.call('cartProducts.delete', { _id: product._id }, (error, result) => {

            if (error) {
                console.log(error);
            }

            console.log('Producto eliminado', result);

            Meteor.call('products.returnToStock', { _id: productId, quantity: quantity }, (error) => {

                if (error) {
                    console.log(error);
                }

                console.log('Stock actualizado');
            });
        });
    }


    return (
        <>

            <div className="cart-item">

                <Image src={product.image} className="w-25" />

                <div className="w-25 d-flex flex-column justify-content-start" >
                    <span className="hk-grotesk-medium mb-1">
                        {product.name}
                    </span>

                    <span className="hk-grotesk my-1">
                        {product.brand}
                    </span>

                    <span className="hk-grotesk-medium my-1">
                        ${product.price}
                    </span>
                </div>

                <div className="input-group w-25">
                    {product.quantity === 1 ? (
                        <button
                            className="btn text-center rounded-0 fw-bold input-group-text bg-secondary"
                            onClick={(ev) => ev.preventDefault()}
                            disabled
                        >
                            -
                        </button>
                    ) : (
                        <button
                            className="btn btn-dark text-center rounded-0 fw-bold input-group-text"
                            onClick={takeQuantity}
                        >
                            -
                        </button>
                    )}
                    <span className="text-center rounded-0 fw-bold input-group-text">
                        {quantity}
                    </span>
                    <button
                        className="btn btn-dark text-center rounded-0 fw-bold input-group-text"
                        onClick={addQuantity}
                    >
                        +
                    </button>
                </div>

                <CloseButton onClick={handleDelete} />

            </div>
        </>
    )
}

export default CartItem;