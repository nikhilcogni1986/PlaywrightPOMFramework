// @ts-check

exports.PlaceOrderPage = class PlaceOrderPage {
    /**
     * @param {import('playwright').Page} page
     */

    constructor(page) {
        this.page = page;
        this.lblPlaceOrder = page.locator("#orderModalLabel");
        this.lblTotalPrice = page.locator("#totalm");
        this.txtName = page.locator("#name");
        this.txtCountry = page.locator("#country");
        this.txtCity = page.locator("#city");
        this.txtCreditCard = page.locator("#card");
        this.txtMonth = page.locator("#month");
        this.txtYear = page.locator("#year");
        this.btnPurchase = page.getByRole('button', {name: "Purchase"});

        this.lblSuccessMsg = page.locator("body > div.sweet-alert.showSweetAlert.visible > h2")
        this.orderDetails = page.locator("p.lead.text-muted");
    }

    async purchaseOrder() {
        await this.txtName.fill("Rakesh");
        await this.txtCountry.fill("India");
        await this.txtCity.fill("Bangalore")
        await this.txtCreditCard.fill("5566778899008899");
        await this.txtMonth.fill("JAN");
        await this.txtYear.fill("2023");
        await this.btnPurchase.click();
        console.log(await this.lblSuccessMsg.textContent());
        console.log(await this.orderDetails.textContent());
    }
}