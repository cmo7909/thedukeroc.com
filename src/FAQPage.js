import React from 'react';
import FAQItem from './FAQItem';

function FAQPage() {
  const faqItems = [
    {
      question: "How many guests can The Duke Accommodate?",
      answer: "We can seat up to 140 guests with room for a dance floor and stage, up to 270 guests\nfor a cocktail style reception with high and low-top tables, or up to 350 guests for a\n‘standing room only’ presentation or concert. If your guest count is larger, ask about\nThe Mercantile on Main for an additional space!"
    },
    {
      question: "What is the Venue Rental Fee?",
      answer: "Venue rental fee is $4,000 for Sunday–Thursday and $5,500 for Friday and Saturdays.\n*Holiday Rates may apply, e.g. New Years Eve, Valentines Day, Mother’s Day etc."
    },
    {
      question: "What does the Venue Rental Include?",
      answer: "- Access to the Venue, 11:00am–11:00pm (all guests must be off the premise by midnight)\n- 14 King Tables (seat 8-10 guests)\n- 140 Chairs\n- 20, 30” High-Top Round Tables\n- 10, 30” Low-Top Round Tables\n- 10, 6ft Tables\n- Your Choice Color of Standard Polyester Linen for Tablecloths and Napkins (need at least 21 days’ notice to order)\n- Assorted Votives and Candles\n- China, Glassware and Silverware\n- Set-Up, Break-Down and Cleaning of the Space\n- Private Security Guard"
    },
    {
      question: "Where do my guests park?",
      answer: "There are 170 parking spaces in and around Parcel 5. Street parking is free after 5:00pm. The St.Joe’s garage is also conveniently attached right to our building (St.Joes Garage is closed on Saturdays and Sundays but will open for additional fee). In addition, the Mortimer Street garage is a stone’s throw away. The garages provide over 1,000 parking spaces attached right to the building. We can assist in booking a valet service for you if budget allows!"
    },
    {
      question: "How does payment work?",
      answer: "The venue fee will lock in the date for your event. All dates remain available for booking until this is received. The venue rental fee is non-refundable and non-transferable. We need your final menu and headcount at least two weeks prior to your event. A 50% deposit for the food and beverage is required 90 days prior and balance due 14 days prior.\nPayment can be made via check, cash or credit card."
    },
    {
      question: "Can I bring in my own food or use another caterer?",
      answer: "No. Per the NYS Health Department all food and beverage being served in The Duke and The Mercantile on Main needs to be prepared by one of our licensed and insured kitchens and operators. With the exception of desserts – desserts can be provided from any local bakery with valid copy of health permit."
    },
    {
      question: "Is there a food and beverage minimum?",
      answer: "$2,500 food and beverage minimum."
    },
    {
      question: "What food/bar packages do you offer?",
      answer: "Reach out to our event coordinators to send you further details! Catering &amp; bar packages are divided up seasonally and by size of group; when filling out the inquiry from, the more information you can provide the better!"
    },
    {
      question: "What is your alcohol policy?",
      answer: "No alcohol can be brought into the venue as we carry our own liquor license. The Duke reserves the right to ask for ID from anyone looking under 35 years of age and may ask client to provide wrist bands or hand stamps depending on the type of event. The Duke management and staff will refuse alcohol service to anyone that does not have proper identification, looks visibility intoxicated or causing a disturbance; no exceptions. Shots are prohibited."
    },
    {
      question: "Can I have live music or a DJ?",
      answer: "You are welcome to have live music or a DJ! All entertainment needs to be approved by our landlords and security team 90 days prior to your event. All entertainment companies and individuals need to have insurance and list ‘The Duke on Main’ and ‘Sibley Mixed Use’ as additionally insured.\n All music and entertainment must end by 11:00pm.\n The Duke on Main, The Mercantile on Main &amp; Sibley Building operators and security reserve the right to stop any music or performance that is aggressive, disrespectful, profane or incites violence."
    },
    {
      question: "Am I allowed to decorate?",
      answer: "We encourage you to make your event yours! You and your vendors will have access to the venue after 11:00am the day of your event unless other arrangements have been made (e.g. morning events e.g. showers/brunches). Please, no confetti or glitter and no tape or glue on our walls! All décor must be removed at the end of your event."
    },
    {
      question: "Where are the restrooms?",
      answer: "We have four private restrooms right in the venue!"
    },
    {
      question: "Is there an easy place for my vendors to load and unload?",
      answer: "Yes! We have a loading dock at the back of the building. Just let us know who to expect and what time and our staff will help direct them where to go. Vendors are also welcome to load in/out through the front main doors at 232 East Main Street. If we do not have an event scheduled the night before – some day before set up times may be available."
    },
    {
      question: "Is the Venue Wheelchair Accessible?",
      answer: "Yes! Our main entrance has a ramp with an accessible entrance as well as two of our restrooms."
    },
    {
      question: "Are there any other fees to be aware of?",
      answer: "8% NYS sales tax will be added to all invoices (unless a tax-exempt form is provided). A 23% service fee will be added to all food and beverage invoices to cover staffing needs."
    },
    {
      question: "Are there discounts for nonprofit organizations?",
      answer: "We love to work with our community organizations! Ask us about our discount program for nonprofit events and fundraisers. 501c3 or other NPO documentation required."
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      {faqItems.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

export default FAQPage;
