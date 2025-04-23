
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample product data
const products = [
  {
    id: 1,
    name: "Minimalist Watch",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80",
    category: "Accessories"
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Electronics"
  },
  {
    id: 3,
    name: "Classic Leather Backpack",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1491637639811-60e5560d4937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
    category: "Bags"
  },
  {
    id: 4,
    name: "Ceramic Coffee Mug",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Home Goods"
  },
  {
    id: 5,
    name: "Striped T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Clothing"
  },
  {
    id: 6,
    name: "Minimalist Desk Lamp",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Home Goods"
  },
  {
    id: 7,
    name: "Sunglasses",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    category: "Accessories"
  },
  {
    id: 8,
    name: "Smart Watch",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
    category: "Electronics"
  }
];

const categories = ["All", "Clothing", "Electronics", "Accessories", "Home Goods", "Bags"];

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        <section className="container mx-auto px-4 py-16">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Products</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Discover our curated collection of top-quality products
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
                    <path d="M12 2v8"></path><path d="m4.93 10.93 1.41 1.41"></path><path d="M2 18h2"></path><path d="M20 18h2"></path><path d="m19.07 10.93-1.41 1.41"></path><path d="M22 22H2"></path><path d="m8 22 4-11 4 11"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Fast Shipping</h3>
                <p className="text-muted-foreground">Free shipping on orders over $50</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                    <path d="m9 13 6-6"></path><circle cx="9" cy="13" r="1"></circle><circle cx="15" cy="7" r="1"></circle><path d="M9 7a2 2 0 0 0-2 2v12"></path><path d="M9 11v2"></path><path d="M15 7h2a2 2 0 0 1 2 2v2"></path><path d="M18 18a6 6 0 0 0-6 6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Easy Returns</h3>
                <p className="text-muted-foreground">30-day hassle-free returns</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                    <path d="M19.3 14.8C19.3 14.8 18.3 19 13.8 19C9.3 19 6.7 15.8 5.6 12.8"></path><path d="M14 3.5C9.5 3.5 6.7 6.7 5.6 9.8"></path><circle cx="12" cy="11.5" r="2"></circle><path d="m2 12 3.5 3.5L9 12"></path><path d="m22 12-3.5-3.5L15 12"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Secure Payment</h3>
                <p className="text-muted-foreground">100% secure payment processing</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/10 rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-md">Limited Time Offer</span>
                <h3 className="text-2xl md:text-3xl font-bold">Subscribe & Get 15% Off Your First Order</h3>
                <p className="text-muted-foreground">Stay updated on our latest products and get exclusive offers straight to your inbox.</p>
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
              <div className="hidden md:block relative h-[200px] w-[300px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg blur-2xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Newsletter"
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
