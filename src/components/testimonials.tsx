import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "motion/react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Saransh showed remarkable proficiency in frontend development, quickly adapting to our workflow and technologies.",
      author: "Vaibhav Agarwal, CEO at Falcon AI",
    },
    {
      id: 2,
      text: "Working with Saransh was a pleasure. His technical skills are top-notch, and he always goes above and beyond to ensure project success.",
      author: "Shreyans Bhargava, COO at Fuelemy",
    },
    {
      id: 3,
      text: "Saransh's ability to solve complex problems is truly remarkable. He's not just a developer, but a valuable asset to any team he's part of.",
      author: "Likhit Ganni, COO at Fuelemy",
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
                  <blockquote className="text-lg italic mb-4">
                    "{testimonial.text}"
                  </blockquote>
                  <p className="font-semibold text-right">
                    {testimonial.author}
                  </p>
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
