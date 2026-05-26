import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="關於我們" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-serif text-brand-wood mb-8">關於我們</h2>
        <p className="text-lg leading-relaxed text-brand-coffee/80 mb-6">
          「疍＝蛋」，是甜點的靈魂；而我們是宅，希望你走進來，就像回到家。<br/>
          我們相信，最純粹的滋味，來自最樸實的食材。讓一顆蛋，不只是蛋，而是甜點靈魂的起點。
        </p>
        <p className="text-lg leading-relaxed text-brand-coffee/80">
          讓疍宅，成為你心中那個想回去的地方。<br/>
          我們希望這裡成為一個有溫度的角落，為喜愛甜食、也熱愛生活的你，留下一點安心的味道、一點值得停留的日常。
        </p>
      </motion.div>
    </section>
  );
}
