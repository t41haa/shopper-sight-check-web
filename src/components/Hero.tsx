
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/10 py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                Your Ultimate Football Jersey Destination
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Shop authentic jerseys from top clubs and national teams worldwide. Wear your passion with pride.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="px-8">Shop Now</Button>
              <Button size="lg" variant="outline">View Collections</Button>
            </div>
          </div>
          <div className="mx-auto flex w-full items-center justify-center lg:justify-end">
            <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&w=1470&q=80"
                alt="Football Jersey Collection"
                className="absolute inset-0 h-full w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
