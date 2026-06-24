/**
 * TestimonialsCarousel Component
 * Carrusel interactivo de testimonios con navegación manual y automática
 * Diseño: Elegancia Constructora Clásica-Moderna
 */

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jesús Toro",
    role: "Propietario",
    image: "/manus-storage/ChatGPTImage23jun2026,20_18_47_33fa58ff.png",
    text: "Margarit Construcciones superó todas mis expectativas. El equipo fue profesional, cumplió los plazos al pie de la letra y la calidad de la obra es excepcional. Recomiendo ampliamente sus servicios.",
    rating: 5,
    project: "Cierre perimetral y protecciones",
  },
  {
    id: 2,
    name: "Gabriela Johnson",
    role: "Empresaria",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663711633841/5XxPpGNAZLgTZf7gqZEqew/avatar-cliente-2-a3xRBWD883cunNpvVZpREz.webp",
    text: "Trabajé con ellos en la remodelación de mi local comercial. La transparencia en los costos y la calidad de los materiales fueron impresionantes. Mi negocio ahora tiene un espacio moderno y funcional.",
    rating: 5,
    project: "Remodelación comercial",
  },

  {
    id: 4,
    name: "María de la Cruz",
    role: "Propietaria",
    image: "/manus-storage/IMG_5506_745e558f.JPG",
    text: "La ampliación de mi casa fue un proceso fluido gracias al equipo de Margarit. Desde el primer presupuesto hasta la última mano de pintura, todo fue perfecto. Muy satisfecha con el resultado.",
    rating: 5,
    project: "Ampliación de vivienda",
  },
  {
    id: 5,
    name: "Pamela Medina",
    role: "Propietaria",
    image: "/manus-storage/IMG_5750_087b5e28.webp",
    text: "He trabajado con ellos ya varias veces. Hicieron un trabajo expectacular con mi baño, con mi cocina y con el piso de mi depto. 100% recomendados.",
    rating: 5,
    project: "Remodelación departamento",
  },
];

interface TestimonialsCarouselProps {
  autoPlayInterval?: number;
}

export function TestimonialsCarousel({ autoPlayInterval = 6000 }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  // Auto-play logic
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setDirection("next");
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlay, autoPlayInterval]);

  const goToPrevious = () => {
    setIsAutoPlay(false);
    setDirection("prev");
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    // Resume autoplay after 8 seconds of inactivity
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const goToNext = () => {
    setIsAutoPlay(false);
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    // Resume autoplay after 8 seconds of inactivity
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlay(false);
    setDirection(index > currentIndex ? "next" : "prev");
    setCurrentIndex(index);
    // Resume autoplay after 8 seconds of inactivity
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full">
      {/* Main carousel container */}
      <div className="relative overflow-hidden">
        {/* Testimonial card with fade animation */}
        <div
          key={currentTestimonial.id}
          className="transition-all duration-500 ease-out"
          style={{
            animation:
              direction === "next"
                ? "fadeInRight 0.6s ease-out"
                : "fadeInLeft 0.6s ease-out",
          }}
        >
          <div
            className="rounded-sm p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 items-center"
            style={{
              background: "#FFFFFF",
              boxShadow: "0 4px 24px rgba(13,27,62,0.1)",
            }}
          >
            {/* Image side */}
            <div className="shrink-0">
              <div
                className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4"
                style={{ borderColor: "#C9A227" }}
              >
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text side */}
            <div className="flex-1 text-center md:text-left">
              {/* Stars */}
              <div className="flex justify-center md:justify-start gap-1 mb-4">
                {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-current"
                    style={{ color: "#C9A227" }}
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <p
                className="text-base md:text-lg leading-relaxed mb-6 italic"
                style={{ color: "#5A5A7A", fontFamily: "'Montserrat', sans-serif" }}
              >
                "{currentTestimonial.text}"
              </p>

              {/* Client info */}
              <div>
                <h4
                  className="text-lg font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#1A1A2E" }}
                >
                  {currentTestimonial.name}
                </h4>
                <p
                  className="text-sm font-medium"
                  style={{ color: "#C9A227", fontFamily: "'Montserrat', sans-serif" }}
                >
                  {currentTestimonial.role} • {currentTestimonial.project}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between mt-8 md:mt-10">
        <button
          onClick={goToPrevious}
          aria-label="Testimonial anterior"
          className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            border: "2px solid #C9A227",
            color: "#C9A227",
            background: "transparent",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(201,162,39,0.1)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
          }}
        >
          <ChevronLeft size={20} />
        </button>

        {/* Dots indicator */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Ir al testimonio ${index + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: index === currentIndex ? "32px" : "10px",
                height: "10px",
                background: index === currentIndex ? "#C9A227" : "rgba(201,162,39,0.3)",
              }}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          aria-label="Siguiente testimonio"
          className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            border: "2px solid #C9A227",
            color: "#C9A227",
            background: "transparent",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(201,162,39,0.1)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
          }}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
