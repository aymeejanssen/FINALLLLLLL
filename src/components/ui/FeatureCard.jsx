import React from "react";
import { Card, CardContent } from "./card";

const FeatureCard = ({ Icon, title, description }) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
      <CardContent className="text-center">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-white/80 leading-relaxed font-light">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
