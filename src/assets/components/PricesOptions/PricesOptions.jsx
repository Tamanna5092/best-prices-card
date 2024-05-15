import PriceOption from "../PriceOption/PriceOption";


const PricesOptions = () => {
 
    const priceOptions = [
      {
        "id": 1,
        "name": "Basic Membership",
        "price": 29.99,
        "features": [
          "Access to cardio equipment",
          "Access to weightlifting area",
          "Locker room access",
          "Limited gym hours"
        ]
      },
      {
        "id": 2,
        "name": "Standard Membership",
        "price": 49.99,
        "features": [
          "Access to all basic membership features",
          "Access to group fitness classes",
          "Access to sauna and steam room"
        ]
      },
      {
        "id": 3,
        "name": "Premium Membership",
        "price": 79.99,
        "features": [
          "Access to all standard membership features",
          "Personal training sessions (2/month)",
          "Nutritional consultation",
          "Full range of workout equipment",
          "Extended gym hours",
          "Group fitness classes",
          "Access to locker room"
        ]
      },
      {
        "id": 4,
        "name": "Family Membership",
        "price": 99.99,
        "features": [
          "Access for 2 adults and 2 children under 18",
          "Access to all standard membership features",
          "Discounts on additional personal training sessions"
        ]
      },
      {
        "id": 5,
        "name": "Senior Membership",
        "price": 24.99,
        "features": [
          "Specialized fitness programs for seniors",
          "Access to all basic membership features",
          "Senior-friendly equipment"
        ]
      },
      {
        "id": 6,
        "name": "Student Membership",
        "price": 19.99,
        "features": [
          "Valid student ID required",
          "Access to all basic membership features",
          "Discounts on group fitness classes",
          "Personal training session",
          "Full range of workout equipment"
        ]
      }
    ]

    return (
        <div className="mx-12">
            <h1 className="text-5xl my-6">Best price in the town</h1>
            <div className="grid md:grid-cols-3 gap-6">
            {
                priceOptions.map(option => <PriceOption key={priceOptions.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PricesOptions;