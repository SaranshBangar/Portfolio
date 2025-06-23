import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "motion/react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Saransh's dedication to his work is commendable. He's always eager to learn and improve, and his passion for coding is truly inspiring.",
      author: "Akansha Srivastava, Founder at Erino",
      authorLinkedin: "https://www.linkedin.com/in/akansha-srivastava/",
      link: "",
    },
    {
      id: 2,
      text: "Working with Saransh was a pleasure. His technical skills are top-notch, and he always goes above and beyond to ensure project success.",
      author: "Kuenzang, Co-founder at Erino",
      authorLinkedin: "https://www.linkedin.com/in/kuenzang-sherub/",
      link: "",
    },
    {
      id: 3,
      text: "Saransh showed remarkable proficiency in frontend development, quickly adapting to our workflow and technologies.",
      author: "Vaibhav Agarwal, CEO at Falcon AI",
      authorLinkedin: "https://www.linkedin.com/in/mrvaibhav98/",
      link: "",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Testimonials</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
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
                  <a href={testimonial.link}>
                    <a href={testimonial.authorLinkedin} target="_blank" rel="noopener noreferrer">
                      <p className="font-semibold text-right underline underline-offset-2">{testimonial.author}</p>
                    </a>
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
