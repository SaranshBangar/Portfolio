import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "motion/react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Saransh's dedication to his work is commendable. He's always eager to learn and improve, and his passion for coding is truly inspiring.",
      author: "Akansha Srivastava, Founder at Erino",
      link: "",
    },
    {
      id: 2,
      text: "Working with Saransh was a pleasure. His technical skills are top-notch, and he always goes above and beyond to ensure project success.",
      author: "Kuenzang, Co-founder at Erino",
      link: "",
    },
    {
      id: 3,
      text: "Working with Saransh was a pleasure. His technical skills are top-notch, and he always goes above and beyond to ensure project success.",
      author: "Shreyans Bhargava, CEO at Fuelemy",
      link: "",
    },
    {
      id: 4,
      text: "Saransh showed remarkable proficiency in frontend development, quickly adapting to our workflow and technologies.",
      author: "Vaibhav Agarwal, CEO at Falcon AI",
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
                    <p className="font-semibold text-right">{testimonial.author}</p>
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
