const { Invoice, InvoiceItem, User, Product, Category } = require("../models");


exports.invoiceIndex = async (req, res) => {
    try {
        const invoices = await Invoice.findAll({
            include: {
                model: Product,
                attributes: ['id','name', 'price'],
                include:{
                    model:Category,
                    attributes: ['name'],
                },
                through:{
                    attributes:['quantity']
                    
                }   
            }
        })
        return res.json(invoices)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

exports.invoiceShow = async (req, res) => {
    const uuid = req.params.uuid
    try {
        const invoice = await Invoice.findOne({
            where: {
                id: uuid
            },
            include: {
                model: Product,
                attributes: ['id','name', 'price'],
                include:{
                    model:Category,
                    attributes: ['name'],
                },
                through:{
                    attributes:['quantity']
                    
                }   
            }
        })

        return res.json(invoice)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

exports.invoiceCreate = async (request, res) => {
    const { customerId, products } = request.body
    try {
        const user = await User.findOne({
            where: {
                id: customerId
            }
        })
        const invoice = await Invoice.create({
            customerId: customerId,
        }, {
            include: [User, Product]
        })

        let items = await []
        products.map((product) => {
            let item = {
                "invoiceId": invoice.id,
                "productId": product.productId,
                "quantity": product.quantity
            }
            items.push(item)
        })

        const invoiceItem = await InvoiceItem.bulkCreate(items)

        return res.json(invoice)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

