import { Link } from 'react-router-dom';
import { Stethoscope, Linkedin, Mail, MessageCircle } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Courses & Resources', href: '/resources' },
    { name: 'Careers', href: '/careers' },
    { name: 'Collaboration', href: '/collaboration' },
  ],
  community: [
    { name: 'Join Us', href: '/join' },
    { name: 'LinkedIn Group', href: '#' },
    { name: 'WhatsApp Community', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-br from-primary to-vet-accent rounded-lg">
                <Stethoscope className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">The Vet Tech Herd</div>
                <div className="text-xs text-muted-foreground">Vets in Technology</div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Connecting veterinarians in the tech industry to promote collaboration, 
              knowledge exchange, and professional growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="mailto:hello@vettechherd.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Community</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 The Vet Tech Herd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}