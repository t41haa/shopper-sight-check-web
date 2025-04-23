
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">New Arrivals</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Best Sellers</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Sale</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">All Products</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Customer Care</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">FAQs</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Track Order</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Our Story</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Sustainability</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Press</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Stay Connected</h3>
            <p className="text-sm text-muted-foreground mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2025 ShopperSight. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link to="/" className="text-xs text-muted-foreground hover:text-foreground">Privacy Policy</Link>
            <Link to="/" className="text-xs text-muted-foreground hover:text-foreground">Terms of Service</Link>
            <Link to="/" className="text-xs text-muted-foreground hover:text-foreground">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
