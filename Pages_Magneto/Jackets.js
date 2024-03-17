exports.Jackets=class Jackets {


    constructor(page) {


        this.page = page
        this.productsNames = "//ol[@class='products list items product-items']/li//a[@class='product-item-link']"

    }


    async fetchAllProductPrice() {

        const allProducts = await this.page.locator(this.productsNames)
        const buyProduct=[]
        for (let i = 0; i < await allProducts.count(); i++) {
            const productNameText = await allProducts.nth(i).textContent()
            const priceText = await allProducts.nth(i).locator("../..//span[@class='price']").textContent()
            console.log(`Product name '${productNameText}' and price is '${priceText}'`);

            const finalPrice=await priceText.replace("$","")
            const finalPriceNum = await parseFloat(finalPrice)
            // const finalPrice="$75.00"

            if(finalPriceNum<75){
                    await buyProduct.push(productNameText)
            }
        }

        console.log(buyProduct)
    }
}