import CreditCard from "./CreditCard/CreditCard";
import "./CustomerCards.scss";

const CustomerCards = () => {

    const cards = [
        {
            balance: 5756,
            cardHolder: "Eddy Cusuma",
            cardNumber: "3778123412341234",
            expiryDate: "12/22",
            variant: "dark"
        },
        {
            balance: 5756,
            cardHolder: "Eddy Cusuma",
            cardNumber: "3778123412341234",
            expiryDate: "12/22",
            variant: "light"
        },
        {
            balance: 5756,
            cardHolder: "Eddy Cusuma",
            cardNumber: "3778123412341234",
            expiryDate: "12/22",
            variant: "light"
        }
    ];

    return (
        <div className="customer__cards">
            {
                cards.map((card, index) => {
                    return (
                        <CreditCard
                            key={index}
                            balance={card.balance}
                            cardHolder={card.cardHolder}
                            cardNumber={card.cardNumber}
                            expiryDate={card.expiryDate}
                            variant={card.variant}
                        />
                    )
                })
            }
        </div>
    )
}

export default CustomerCards;
