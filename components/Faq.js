import styles from "./Faq.module.css";

const faqs = [
  {
    q: "What is the dress code?",
    a: "Cocktail attire. Think dressy but comfortable — you'll want to enjoy the celebration!",
  },
  {
    q: "Can I bring a plus-one?",
    a: "We have a limited guest list, so please refer to your invitation for the number of seats reserved in your honor. If you have questions, don't hesitate to reach out.",
  },
  {
    q: "Are children welcome?",
    a: "Yes! Children are welcome to join the celebration. We'd love to have your whole family there.",
  },
  {
    q: "Is the venue indoors or outdoors?",
    a: "The ceremony will be outdoors (weather permitting) with the reception indoors. In case of rain, both will be held indoors.",
  },
  {
    q: "Will there be parking?",
    a: "Yes! Free parking is available on-site at the National Capital Trolley Museum.",
  },
  {
    q: "Will there be a shuttle?",
    a: "Yes, a complimentary shuttle will run between the Silver Spring hotel block and the venue. Details on timing and pickup location will be shared closer to the date.",
  },
  {
    q: "What about gifts?",
    a: "Your presence is the greatest gift! If you'd like to give something, registry details will be shared soon.",
  },
  {
    q: "When should I RSVP by?",
    a: "Please RSVP by August 26, 2026. A link to respond will be available here soon.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Questions &amp; Answers</h2>
        <div className="divider" />
        <dl className={styles.list}>
          {faqs.map(({ q, a }) => (
            <div key={q} className={styles.item}>
              <dt className={styles.question}>{q}</dt>
              <dd className={styles.answer}>{a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
