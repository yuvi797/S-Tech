import React from "react";
import { Hammer, Grid3X3, Wrench, DoorOpen } from "lucide-react";

const ServiceInfo: React.FC = () => {
  const services = [
    {
      icon: Hammer,
      title: "Carpenter Mistry Service",
      description:
        "Expert carpentry services for custom furniture, wooden structures, and precision woodwork. Our skilled carpenters bring years of experience to every project.",
      features: [
        "Custom Furniture Design",
        "Cabinet Installation",
        "Door & Window Frames",
        "Wooden Flooring",
        "Repair & Maintenance",
      ],
    },
    {
      icon: Grid3X3,
      title: "False Ceiling",
      description:
        "Professional false ceiling installation and design services. Transform your space with modern ceiling solutions that enhance aesthetics and functionality.",
      features: [
        "Gypsum Board Ceiling",
        "POP Ceiling Design",
        "Wooden False Ceiling",
        "LED Integration",
        "Acoustic Solutions",
      ],
    },
    {
      icon: Wrench,
      title: "Mistry Service",
      description:
        "Comprehensive construction and maintenance services by skilled craftsmen. Quality workmanship for all your interior construction needs.",
      features: [
        "Electrical Work",
        "Plumbing Services",
        "Painting & Finishing",
        "Tile Installation",
        "General Repairs",
      ],
    },
    {
      icon: DoorOpen,
      title: "UPVC Window and Door",
      description:
        "Premium UPVC window and door installation services with modern glass work and stainless steel railing solutions for enhanced security and aesthetics.",
      features: [
        "UPVC Window Installation",
        "UPVC Door Systems",
        "Glass Work",
        "SS Railing Work",
        "Weather Sealing",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Interior Design Services in Patna
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive interior design and construction services delivered by
            skilled professionals in Patna. From carpentry to false ceiling,
            UPVC windows, and complete home renovations - we bring your vision
            to life with precision and quality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up h-full flex flex-col"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-white" size={20} />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 text-center">
                  {service.title}
                </h3>

                <p className="text-sm md:text-base text-gray-600 mb-4 text-center leading-relaxed flex-grow">
                  {service.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm md:text-base font-semibold text-blue-600 mb-2">
                    Our Services Include:
                  </h4>
                  <ul className="space-y-1.5">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-700 text-sm md:text-base"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceInfo;
