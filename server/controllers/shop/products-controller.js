const Product = require('../../models/Product')
const getFilteredProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            sucess: true,
            data: products,
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Some error ocurred'
        })
    }
};

module.exports = { getFilteredProducts };