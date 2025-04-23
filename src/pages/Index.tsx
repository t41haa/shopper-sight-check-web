
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Football jersey product data
const products = [
  {
    id: 1,
    name: "Barcelona Home Jersey 2023/24",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1577212017184-80cc0da11082?auto=format&fit=crop&w=1470&q=80",
    category: "Club Teams"
  },
  {
    id: 2,
    name: "Manchester United Away Kit 2023/24",
    price: 94.99,
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1470&q=80",
    category: "Club Teams"
  },
  {
    id: 3,
    name: "England National Team Home Jersey",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1550798874-39724c56de0d?auto=format&fit=crop&w=1470&q=80",
    category: "National Teams"
  },
  {
    id: 4,
    name: "Brazil National Team Away Jersey",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1528233307472-89c2ec1c0232?auto=format&fit=crop&w=1470&q=80",
    category: "National Teams"
  },
  {
    id: 5,
    name: "Real Madrid Home Jersey 2023/24",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=1470&q=80",
    category: "Club Teams"
  },
  {
    id: 6,
    name: "Arsenal Third Kit 2023/24",
    price: 94.99,
    image: "https://images.unsplash.com/photo-1571536802807-30451e3f7639?auto=format&fit=crop&w=1470&q=80",
    category: "Club Teams"
  },
  {
    id: 7,
    name: "France National Team Home Jersey",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1554098415-788601c80aef?auto=format&fit=crop&w=1471&q=80",
    category: "National Teams"
  },
  {
    id: 8,
    name: "Liverpool Home Jersey 2023/24",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1518675219903-c682c4b16b1d?auto=format&fit=crop&w=1471&q=80",
    category: "Club Teams"
  }
];

const categories = ["All", "Club Teams", "National Teams"];

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        <section className="container mx-auto px-4 py-16">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Official Football Jerseys</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Authentic jerseys from your favorite clubs and national teams
            </p>
          </div>
          
          <Tabs defaultValue="All" className="mb-8">
            <TabsList className="mx-auto flex justify-center">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {(category === "All" 
                    ? products 
                    : products.filter(product => product.category === category)
                  ).map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>
        
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Authentic Quality</h3>
                <p className="text-muted-foreground">100% official licensed jerseys</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Fast Shipping</h3>
                <p className="text-muted-foreground">Free shipping on orders over $150</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Easy Returns</h3>
                <p className="text-muted-foreground">30-day hassle-free returns</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/10 rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-md">Limited Time Offer</span>
                <h3 className="text-2xl md:text-3xl font-bold">Get 15% Off Your First Jersey</h3>
                <p className="text-muted-foreground">Join our newsletter for exclusive deals and early access to new kit releases.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  />
                  <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="hidden md:block relative h-[300px] w-full mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg blur-2xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1470&q=80"
                  alt="Football Jersey"
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
