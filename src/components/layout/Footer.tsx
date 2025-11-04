'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

const DEFAULT_FOOTER = {
  logoText: 'Travel Destinations',
  companyDescription:
    'Discover breathtaking destinations around the world with our curated travel experiences. From exotic beaches to mountain adventures, we help you create unforgettable memories with expert guides and personalized itineraries.',
  contactEmail: 'explore@traveldestinations.com',
  contactPhone: '+1 (555) 987-6543',
  contactAddress: '456 Adventure Blvd, Suite 200, Explorer City',
  newsletterTitle: 'Travel Newsletter',
  newsletterPlaceholder: 'Enter your email for travel deals',
  newsletterDisclaimer:
    'Get exclusive travel deals and destination guides. No spam, unsubscribe anytime.',
  section1Title: 'Destinations',
  section2Title: 'Travel Services',
  section3Title: 'Planning',
  section4Title: 'Support',
  copyrightText: '© 2024 Travel Destinations. All rights reserved.',
  madeWithText: 'by passionate travelers',
  socialText: 'Follow our journeys:',
  social1Href: 'https://twitter.com/traveldestinations',
  social2Href: 'https://facebook.com/traveldestinations',
  social3Href: 'https://instagram.com/traveldestinations',
  social4Href: 'https://linkedin.com/company/traveldestinations',
  social5Href: 'https://github.com/traveldestinations',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };

  // ✅ FIXED: Added editableId to all footer links
  const footerSections = [
    {
      title: config.section1Title,
      links: [
        {
          name: 'Tropical Islands',
          href: '/destinations/tropical',
          editableId: 'link-footer-tropical',
        },
        {
          name: 'Mountain Retreats',
          href: '/destinations/mountains',
          editableId: 'link-footer-mountains',
        },
        { name: 'City Escapes', href: '/destinations/cities', editableId: 'link-footer-cities' },
        {
          name: 'Safari Adventures',
          href: '/destinations/safari',
          editableId: 'link-footer-safari',
        },
        {
          name: 'Cultural Tours',
          href: '/destinations/cultural',
          editableId: 'link-footer-cultural',
        },
        { name: 'Beach Resorts', href: '/destinations/beaches', editableId: 'link-footer-beaches' },
      ],
    },
    {
      title: config.section2Title,
      links: [
        { name: 'Guided Tours', href: '/services/tours', editableId: 'link-footer-tours' },
        {
          name: 'Travel Insurance',
          href: '/services/insurance',
          editableId: 'link-footer-insurance',
        },
        { name: 'Flight Booking', href: '/services/flights', editableId: 'link-footer-flights' },
        { name: 'Hotel Reservations', href: '/services/hotels', editableId: 'link-footer-hotels' },
        { name: 'Car Rentals', href: '/services/cars', editableId: 'link-footer-cars' },
        { name: 'Travel Packages', href: '/services/packages', editableId: 'link-footer-packages' },
      ],
    },
    {
      title: config.section3Title,
      links: [
        { name: 'Trip Planner', href: '/planning/planner', editableId: 'link-footer-planner' },
        { name: 'Travel Guides', href: '/planning/guides', editableId: 'link-footer-guides' },
        { name: 'Packing Lists', href: '/planning/packing', editableId: 'link-footer-packing' },
        { name: 'Weather Info', href: '/planning/weather', editableId: 'link-footer-weather' },
        { name: 'Visa Requirements', href: '/planning/visas', editableId: 'link-footer-visas' },
        { name: 'Travel Tips', href: '/planning/tips', editableId: 'link-footer-tips' },
      ],
    },
    {
      title: config.section4Title,
      links: [
        {
          name: 'Customer Service',
          href: '/support/customer-service',
          editableId: 'link-footer-customer-service',
        },
        { name: 'Booking Changes', href: '/support/changes', editableId: 'link-footer-changes' },
        {
          name: 'Cancellation Policy',
          href: '/support/cancellation',
          editableId: 'link-footer-cancellation',
        },
        {
          name: 'Travel Insurance Claims',
          href: '/support/claims',
          editableId: 'link-footer-claims',
        },
        {
          name: 'Emergency Assistance',
          href: '/support/emergency',
          editableId: 'link-footer-emergency',
        },
        { name: 'FAQ', href: '/support/faq', editableId: 'link-footer-faq' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: config.social1Href },
    { name: 'Facebook', icon: Facebook, href: config.social2Href },
    { name: 'Instagram', icon: Instagram, href: config.social3Href },
    { name: 'LinkedIn', icon: Linkedin, href: config.social4Href },
    { name: 'GitHub', icon: Github, href: config.social5Href },
  ];

  // ✅ FIXED: Added editableId to bottom bar links
  const bottomLinks = [
    { name: 'Terms of Service', href: '/legal/terms', editableId: 'link-footer-terms' },
    { name: 'Privacy Policy', href: '/legal/privacy', editableId: 'link-footer-privacy' },
    { name: 'Cookie Policy', href: '/legal/cookies', editableId: 'link-footer-cookies' },
    {
      name: 'Accessibility',
      href: '/legal/accessibility',
      editableId: 'link-footer-accessibility',
    },
  ];

  return (
    <footer id="footer" className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">
                    {config.logoText.charAt(0)}
                  </span>
                </div>
                <span className="font-bold text-xl" data-editable="logoText">
                  {config.logoText}
                </span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                <span data-editable="companyDescription">{config.companyDescription}</span>
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable="contactEmail">
                  {config.contactEmail}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable="contactPhone">
                  {config.contactPhone}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable="contactAddress">
                  {config.contactAddress}
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm" data-editable="newsletterTitle">
                {config.newsletterTitle}
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={config.newsletterPlaceholder}
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                <span data-editable="newsletterDisclaimer">{config.newsletterDisclaimer}</span>
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm" data-editable={`section${index + 1}Title`}>
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        data-editable-href={link.editableId}
                        data-original-href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span data-editable="copyrightText">{config.copyrightText}</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Made with <Heart className="size-3 text-red-500 fill-current" />
                <span data-editable="madeWithText">{config.madeWithText}</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2" data-editable="socialText">
                {config.socialText}
              </span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                    data-editable-href={`social${index + 1}Href`}
                    data-original-href={social.href}
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            {bottomLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                data-editable-href={link.editableId}
                data-original-href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
