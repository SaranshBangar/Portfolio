import React from "react";
import { Card, CardContent } from "./ui/card";
import { motion } from "motion/react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Saransh's dedication to his work is commendable. He's always eager to learn and improve, and his passion for coding is truly inspiring.",
      author: "Akansha Srivastava, Founder at Erino",
      authorLinkedin: "https://www.linkedin.com/in/akansha-srivastava/",
    },
    {
      id: 2,
      text: "Working with Saransh was a pleasure. His technical skills are top-notch, and he always goes above and beyond to ensure project success.",
      author: "Kuenzang, Co-founder at Erino",
      authorLinkedin: "https://www.linkedin.com/in/kuenzang-sherub/",
    },
    {
      id: 3,
      text: "Saransh showed remarkable proficiency in frontend development, quickly adapting to our workflow and technologies.",
      author: "Vaibhav Agarwal, CEO at Falcon AI",
      authorLinkedin: "https://www.linkedin.com/in/mrvaibhav98/",
    },
    {
      id: 4,
      text: "Saransh is a great coder with the right mindset. He took initiative and always had a great attitude. His technical skills and approach to problem-solving are impressive.",
      author: "Rishab Raj, Founder at STRMLY",
      authorLinkedin: "https://www.linkedin.com/in/rishab-raj-34281122a",
    },
  ];

  return (
    <Card>
      <CardContent>
        <div className="grid gap-4 mt-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="w-full">
                <CardContent className="pt-6">
                  <blockquote className="text-lg italic mb-4">"{testimonial.text}"</blockquote>

                  <a href={testimonial.authorLinkedin} target="_blank" rel="noopener noreferrer">
                    <p className="font-semibold text-right underline underline-offset-2">{testimonial.author}</p>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonials;
