import SimpleSchema from "simpl-schema";
import { ordersCollection } from "../collections/orders";

ordersCollection.schema = new SimpleSchema({
    orderNumber: { type: String },
    userId: { type: String },
    products: { type: Array },
    subtotal: { type: Number, min: 0 },
    total: { type: Number, min: 0 },
    createdAt: { type: Date }
});