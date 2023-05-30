import Product from '../model/product-schema.js';


export const getProducts = async (request,response) => {
    try {
            const products = await Product.find({}); //It will give all the data bcz it don't have any condition

            response.status(200).json(products);
    } catch (error) {
            response.status(500).json({message: error.message});
    }
}

export const getProductById = async (request, response) => {
        try {
                const id = request.params.id; //It will give id from frontend extracted from URL
                const product = await Product.findOne({ 'id': id })

                response.status(200).json(product);
        } catch (error) {
                response.status(500).json({message: error.message});
        }
}