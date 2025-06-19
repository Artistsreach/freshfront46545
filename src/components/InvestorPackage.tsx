import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import mermaid from 'mermaid';
import EcosystemChart from './EcosystemChart';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { X } from 'lucide-react';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveBar } from '@nivo/bar';

const Section = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <section id={id} className="py-20 px-4 md:px-8 relative">
    <div className="max-w-7xl mx-auto relative z-10">
      {children}
    </div>
  </section>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-sky-700 bg-clip-text text-transparent">
      {children}
    </h2>
  </motion.div>
);

const InvestorPackage = () => {
  const [selectedNode, setSelectedNode] = useState<{ title: string; description: string } | null>(null);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img
                src="https://utdrojtjfwjcvuzmkooj.supabase.co/storage/v1/object/public/content//Logoff.png"
                alt="FreshFront Logo"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden md:block">
              <ul className="ml-10 flex items-baseline space-x-4">
                <li><a onClick={() => scrollToSection('hero')} className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Home</a></li>
                <li><a onClick={() => scrollToSection('opportunity')} className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Opportunity</a></li>
                <li><a onClick={() => scrollToSection('solution')} className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Solution</a></li>
                <li><a onClick={() => scrollToSection('market')} className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Market</a></li>
                <li><a onClick={() => scrollToSection('financials')} className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Financials</a></li>
                <li><a onClick={() => scrollToSection('budget')} className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Budget</a></li>
                <li><a onClick={() => scrollToSection('team')} className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Team</a></li>
                <li><a onClick={() => scrollToSection('timeline')} className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Timeline</a></li>
                <li><a onClick={() => scrollToSection('ecosystem')} className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Ecosystem</a></li>
                <li><a onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <header id="hero" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://utdrojtjfwjcvuzmkooj.supabase.co/storage/v1/object/public/content//Copy%20of%20FreshFront.zip%20-%201.png')" }}>
      </header>

      <Section id="opportunity">
        <SectionTitle>Executive Summary</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.img
            src="https://utdrojtjfwjcvuzmkooj.supabase.co/storage/v1/object/public/content//Copy%20of%20FreshFront.zip%20-%202.png"
            alt="3 Simple Steps"
            className="rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <div className="space-y-6">
            <Card>
              <CardHeader><CardTitle>The Opportunity</CardTitle></CardHeader>
              <CardContent>
                <p>The global print-on-demand market is projected to reach $42.64 billion by 2030, growing at 33.1% CAGR. Despite this massive opportunity, current solutions require significant technical expertise, leaving millions of potential creators unable to participate. FreshFront eliminates these barriers through advanced AI automation, creating the first truly accessible e-commerce creation platform.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Our Solution</CardTitle></CardHeader>
              <CardContent>
                <p>FreshFront is an AI-first platform that transforms anyone into an e-commerce entrepreneur in minutes, not months. Our proprietary AI stack generates complete stores, designs, content, and marketing materials while handling all technical complexity. The platform creates a virtuous ecosystem where creators, managers, and customers all benefit from shared success.</p>
              </CardContent>
            </Card>
          </div>
        </div>
        <Card className="mt-12">
          <CardHeader><CardTitle>Key Investment Highlights</CardTitle></CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Market Leadership Position:</strong> First-mover advantage in AI-automated e-commerce creation</li>
              <li><strong>Scalable Revenue Model:</strong> Multiple revenue streams with 85%+ gross margins</li>
              <li><strong>Lean Capital Requirements:</strong> $113,900 marketing focused budget (founder is lead developer)
              </li>
              <li><strong>Market Ready:</strong> Finished product ready to go to market after rigorous production 'confidence' tests</li>
              <li><strong>Clear Path to Profitability:</strong> Revenue generation starts immediately upon launch</li>
            </ul>
          </CardContent>
        </Card>
      </Section>

      <Section id="market">
        <SectionTitle>Market Analysis & Opportunity</SectionTitle>
        <div className="grid md:grid-cols-1 gap-8 mb-12">
          <Card>
            <CardHeader><CardTitle>Market Statistics</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Ecommerce Platform Market:</strong> $9.4B in 2024, projected to reach $23.27B by 2030.</li>
                <li><strong>Print on Demand Market:</strong> $10.2B in 2024, projected to reach $42.64B by 2030.</li>
                <li><strong>Global Ecommerce Market:</strong> $18.8T in 2024, projected to reach $43.86T by 2030.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader><CardTitle>Serviceable Addressable Market (SAM)</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Target Creators:</strong> 50M+ potential creators globally seeking e-commerce solutions.</li>
                <li><strong>Average Creator GMV:</strong> $2,100 annually (conservative estimate).</li>
                <li><strong>SAM Value:</strong> $120B+ serviceable market.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Year 3 Snapshot Projection</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Target User Base:</strong> 14,100 users (14,000 creators, 100 managers).</li>
                <li><strong>Projected Platform GMV:</strong> $29.34M annually.</li>
                <li><strong>Projected Net Revenue:</strong> $7.04M annually.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Unit Economics</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Customer Acquisition Cost (CAC):</strong> $28 (blended average).</li>
                <li><strong>Lifetime Value (LTV):</strong> $1,503 (Subscription + fees).</li>
                <li><strong>LTV/CAC Ratio:</strong> 54:1 (demonstrating significant return on customer acquisition).</li>
                <li><strong>Payback Period:</strong> 1 month</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader><CardTitle>Market Gaps & Pain Points</CardTitle></CardHeader>
            <CardContent>
              <h4 className="font-bold mb-2">Current Creator Challenges</h4>
              <ol className="list-decimal list-inside space-y-2">
                <li><strong>Technical Barriers:</strong> 78% of creators lack technical skills for e-commerce</li>
                <li><strong>Design Limitations:</strong> 84% struggle with professional design creation</li>
                <li><strong>Marketing Complexity:</strong> 92% find digital marketing overwhelming</li>
                <li><strong>Time Investment:</strong> Average 40+ hours to launch basic store</li>
                <li><strong>High Failure Rate:</strong> 67% of creator businesses fail within first year</li>
              </ol>
              <h4 className="font-bold mt-6 mb-2">Consumer Problems</h4>
              <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>Abandoned Carts</li>
                  <li>Lack of Personalization</li>
                  <li>Outdated experiences</li>
                  <li>Lack of Social Media friendly UX's</li>
              </ul>
              <h4 className="font-bold mt-6 mb-2">Platform Problems</h4>
              <ul className="list-disc list-inside space-y-2 mb-6">
                  <li><strong>Shopify:</strong> limitations, complex</li>
                  <li><strong>Etsy:</strong> no customization, saturated marketplace</li>
                  <li><strong>WooCommerce/BigCommerce:</strong> relevant for scaling, not to Gen-Z Creators</li>
                  <li><strong>Square/TeeSpring:</strong> basic, lacks AI features</li>
              </ul>
              <h4 className="font-bold mt-6 mb-2">Solutions for Creators, for their Customers</h4>
              <ul className="list-disc list-inside space-y-2">
                  <li>Al-enhanced Product Pages</li>
                  <li>Realtime Al Support Assistants</li>
                  <li>Al Product Visualization</li>
                  <li>Templates designed for Social Media conversions</li>
                  <li>Instant Prompt to Store</li>
                  <li>AI Customaztion & Editing Tool</li>
                  <li>Al Content & Product Tools</li>
                  <li>Low Fees and Pricing</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Competitive Landscape</CardTitle></CardHeader>
            <CardContent>
              <h4 className="font-bold mb-2">Direct Competitors</h4>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left">
                    <th className="p-2">Platform</th>
                    <th className="p-2">Strengths</th>
                    <th className="p-2">Weaknesses</th>
                    <th className="p-2">Market Share</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">Shopify</td>
                    <td className="p-2">Established, comprehensive</td>
                    <td className="p-2">Complex, expensive, technical</td>
                    <td className="p-2">32%</td>
                  </tr>
                  <tr>
                    <td className="p-2">Etsy</td>
                    <td className="p-2">Easy start, built-in audience</td>
                    <td className="p-2">Limited control, high fees</td>
                    <td className="p-2">18%</td>
                  </tr>
                  <tr>
                    <td className="p-2">Printful</td>
                    <td className="p-2">Good POD integration</td>
                    <td className="p-2">No store creation, technical</td>
                    <td className="p-2">8%</td>
                  </tr>
                  <tr>
                    <td className="p-2">Square</td>
                    <td className="p-2">Integrated payments</td>
                    <td className="p-2">Limited customization</td>
                    <td className="p-2">12%</td>
                  </tr>
                </tbody>
              </table>
              <h4 className="font-bold mt-6 mb-2">FreshFront Competitive Advantages</h4>
              <ol className="list-decimal list-inside space-y-2">
                <li><strong>AI-First Architecture:</strong> Only platform with comprehensive AI automation</li>
                <li><strong>Zero Technical Knowledge Required:</strong> Completely eliminates setup barriers</li>
                <li><strong>Complete Ecosystem:</strong> End-to-end solution from design to fulfillment</li>
                <li><strong>Manager Network:</strong> Unique scaling model through service providers</li>
                <li><strong>Greater Creator Economy:</strong> Starting the trend of Social Media influencer POD merch</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="solution">
        <SectionTitle>Product Deep Dive: Platform Walkthrough</SectionTitle>
        <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-lg mb-12 mx-auto">
          <source src="https://firebasestorage.googleapis.com/v0/b/freshfront-c3181.firebasestorage.app/o/store_products%2FVideo.mp4?alt=media&token=bde1f316-49db-45cc-b6a0-e5d258dc2b66" type="video/mp4" />
        </video>
        <img src="https://utdrojtjfwjcvuzmkooj.supabase.co/storage/v1/object/public/content//Copy%20of%20FreshFront.zip%20-%206.png" alt="Platform Walkthrough" className="rounded-lg mb-12 mx-auto" />
        <div className="space-y-8">
          <Card>
            <CardHeader><CardTitle>Core Platform Architecture</CardTitle></CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <img src="https://utdrojtjfwjcvuzmkooj.supabase.co/storage/v1/object/public/content//Copy%20of%20FreshFront.png" alt="User Prompt Mode" className="rounded-lg" />
                <div className="space-y-4">
                    <div>
                  <h4 className="font-bold">AI Technology Stack</h4>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><strong>Google GenAI SDK:</strong> Gemini Flash, Pro, Imagen, Veo models used for product analysis, content generation, store optimization, product recognition and design optimization, and customer support as well as other tasks.</li>
                    <li><strong>Apple Foundation Models:</strong> On device AI models used to create blogs, plan templates and site content changes offline (requires no internet connection)</li>
                    <li><strong>Anthropic Claude:</strong> Involved in template planning & code generation, assisting the gemini models.</li>
                    <li><strong>OpenAI:</strong> GPT Image 1 model used for advanced design requiring accurate text and attention to detail</li>
                    <li><strong>Meshy AI:</strong> Used to generate 3D models of Creators products for the integrated AR viewer on product pages</li>
                    <li><strong>Custom LLMs:</strong> Fine-tuned models for e-commerce specific tasks</li>
                  </ul>
                    </div>
                    <div>
                      <h4 className="font-bold">Platform Components</h4>
                      <ol className="list-decimal list-inside space-y-1 mt-2">
                        <li>Store Builder: Three creation modes (Prompt, Step-by-Step, Import)</li>
                        <li>Design Engine: AI-powered product design & store template generation</li>
                        <li>Content Management: Automated copywriting, images, video and SEO</li>
                        <li>Marketing Suite: Automated ad creation and campaign management</li>
                        <li>Fulfillment Integration: Seamless print-on-demand and dropshipping</li>
                        <li>Analytics Dashboard: Comprehensive performance tracking</li>
                      </ol>
                    </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Cross Beneficial Ecosystem & Value Propositions</CardTitle></CardHeader>
            <CardContent>
              <img src="https://utdrojtjfwjcvuzmkooj.supabase.co/storage/v1/object/public/content//Copy%20of%20FreshFront.zip%20-%2021.png" alt="Value Propositions" className="rounded-lg mb-6 mx-auto" />
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold">For Creators</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                    <li><strong>5-Minute Store Creation:</strong> Complete e-commerce store from simple prompt</li>
                    <li><strong>Zero Learning Curve:</strong> No technical knowledge required</li>
                    <li><strong>Professional Quality:</strong> AI generated production-level outputs</li>
                    <li><strong>Multiple Revenue Streams:</strong> POD, dropshipping, and inventory options</li>
                    <li><strong>Scalable Growth:</strong> AI handles complexity as business grows</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">For Managers</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                    <li><strong>Service Scaling:</strong> Manage multiple creators stores with AI automation</li>
                    <li><strong>Recurring Revenue:</strong> Earn fees from all transactions, from all stores of the Creators they onboard</li>
                    <li><strong>Low Touch Operations:</strong> AI reduces manual work by up to 80%</li>
                    <li><strong>Marketing Automation:</strong> Multi-creator campaign management</li>
                    <li><strong>Performance Analytics:</strong> Monitor store data & make decisions from your dashboard</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">For Customers</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                    <li><strong>Enhanced Shopping:</strong> AI-powered personalization and support</li>
                    <li><strong>Better Discovery:</strong> Intelligent search and recommendation engine</li>
                    <li><strong>Visual Shopping:</strong> AI & AR product visualization options</li>
                    <li><strong>More Variety:</strong> Shop from your friends or your favorite creators</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>3. Store Creation Modes</CardTitle></CardHeader>
            <CardContent>
              <img src="https://utdrojtjfwjcvuzmkooj.supabase.co/storage/v1/object/public/content//Copy%20of%20FreshFront.zip%20-%204.png" alt="Store Creation Modes 2" className="rounded-lg w-full mb-6" />
              <p>FreshFront offers multiple ways to create a store, catering to different user needs and technical comfort levels.</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold">Mode 1: User Prompt (Fastest Setup)</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li><strong>Initial Setup:</strong> User enters a Store Name and a simple text prompt describing their dream store. They can include things like their design, product, brand or niche details as well as template specifics ex. theme colors, style, effects, animations etc. </li>
                    <li><strong>AI Analysis & Generation:</strong> The platform analyzes the prompt to determine the store type (Inventory, Print on Demand, Dropshipping) and automatically generates everything: branding, products, collections, template, site content (text, images, video) and a starter content marketing package with multiformat ad copies.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Mode 2: Step by Step (Detailed Customization)</h4>
                  <ol className="list-decimal list-inside text-sm space-y-1 mt-2">
                    <li><strong>Category/Niche Selection:</strong> Choose a niche with help from AI-powered market analysis.</li>
                    <li><strong>Store Name Creation:</strong> Enter a name or get AI suggestions.</li>
                    <li><strong>Logo Creation:</strong> Upload an existing logo or have the AI generate one.</li>
                    <li><strong>Product Management:</strong> Add products via upload (inventory, POD), AI generation (POD), catalog (dropshipping) or import (inventory).</li>
                    <li><strong>Collection Organization:</strong> Let AI intelligently group products into collections or create your own.</li>
                    <li><strong>Finishing Touches:</strong> Describe the desired store personality for good measure.</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-bold">Mode 3: Import (Existing Store Migration)</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                    <li><strong>Supported Platforms:</strong> Shopify, Etsy, BigCommerce.</li>
                    <li><strong>Import Process:</strong> Provide access key from source platform, select the data to migrate (products, collections, branding, etc.), and let FreshFront handle the rest of the store based on your imported content.</li>
                  </ul>
                  <img src="https://utdrojtjfwjcvuzmkooj.supabase.co/storage/v1/object/public/content//Copy%20of%20FreshFront%20(1).png" alt="Store Migration" className="rounded-lg mt-2" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>4. AI-Powered Features</CardTitle></CardHeader>
            <CardContent>
              <h4 className="font-bold">AI Product Insights & Generation</h4>
              <img src="https://utdrojtjfwjcvuzmkooj.supabase.co/storage/v1/object/public/content//Copy%20of%20FreshFront.zip%20-%2014.png" alt="AI Product Insights" className="rounded-lg my-4 mx-auto" />
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Product Recommendations:</strong> Get instant product ideas for any niche based on market analysis, real-time purchase data, search trends, social media hashtags, articles & more.</li>
                <li><strong>Design Inspiration:</strong> See which designs are selling and generate new designs inspired by the winners.</li>
                <li><strong>Audience Insights:</strong> The AI provides detailed target audience personas, including SEO keywords, interests, pain points, and goals.</li>
                <li><strong>Variant Generation:</strong> The AI automatically detects product attributes (size, color) and can generate visual mockups for each variant, eliminating the need for manual photography.</li>
              </ul>
              <img src="https://utdrojtjfwjcvuzmkooj.supabase.co/storage/v1/object/public/content//Copy%20of%20FreshFront.zip%20-%2010.png" alt="AI Variant Generation" className="rounded-lg my-4 mx-auto" />
              <h4 className="font-bold mt-6">Integrated Content Creator</h4>
              <img src="https://utdrojtjfwjcvuzmkooj.supabase.co/storage/v1/object/public/content//Copy%20of%20FreshFront.zip%20-%2011.png" alt="Integrated Content Creator" className="rounded-lg my-4 mx-auto" />
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Marketing Asset Creation:</strong> The AI automatically generates 6 image ads and 4 video ads in various formats (post, reel, carousel, etc.) upon store creation.</li>
                <li><strong>Content Creation Studio:</strong> Users can generate new images or videos from their product catalog by simply describing a scene (e.g., "place this mug on a beach table").</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>5. Customer Experience Features</CardTitle></CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold">Integrated Product Visualizer</h4>
                  <img src="https://utdrojtjfwjcvuzmkooj.supabase.co/storage/v1/object/public/content//Copy%20of%20FreshFront.zip%20-%209.png" alt="Product Visualizer" className="rounded-lg my-4" />
                  <p>On each product page, an instant AI visualizer allows customers to preview the product on themselves (fashion), in their space (home decor), or in various contexts. This leads to higher conversions (once they see it in their own context they feel the need to own it aka endowment effect), as well as lower return rates (they know what to expect and are already happy with it).</p>
                </div>
                <div>
                  <h4 className="font-bold">Integrated AI Chat Assistant</h4>
                  <img src="https://utdrojtjfwjcvuzmkooj.supabase.co/storage/v1/object/public/content//Copy%20of%20FreshFront.zip%20-%208.png" alt="AI Chat Assistant" className="rounded-lg my-4" />
                  <p>Every store comes with an AI chatbot trained on store-specific data. It can recommend & visualize products as well as add them to the cart, answer FAQs, collect support tickets, and be programmed with a custom knowledge base by the creator/manager. It can also be interacted with in realtime via voice.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>6. Dashboard & Analytics</CardTitle></CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold">Integrated Store Dashboard</h4>
                  <img src="https://utdrojtjfwjcvuzmkooj.supabase.co/storage/v1/object/public/content//Copy%20of%20FreshFront.zip%20-%2013.png" alt="Store Dashboard" className="rounded-lg my-4" />
                  <p>A central hub to manage customers, fulfill orders, pay out funds, design products, edit the store, create social media content, and manage marketing campaigns. All sales data is real-time via the Stripe integration.</p>
                </div>
                <div>
                  <h4 className="font-bold">Integrated Storefolio (for Managers)</h4>
                  <img src="https://utdrojtjfwjcvuzmkooj.supabase.co/storage/v1/object/public/content//Copy%20of%20FreshFront.zip%20-%2012.png" alt="Storefolio" className="rounded-lg my-4" />
                  <p>A 'Storefolio' that displays all stores from creators registered with the manager. Managers can track performance, prepare AI tasks, and manage brand assets across multiple stores from one place.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="financials">
        <SectionTitle>Business Model & Revenue Streams</SectionTitle>
        <div className="grid md:grid-cols-1 gap-8">
          <Card>
            <CardHeader><CardTitle>Primary Revenue Sources</CardTitle></CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-4">
                <li><strong>Transaction Fees</strong>
                  <ul className="list-disc list-inside ml-4 text-sm">
                    <li><strong>Independent Creator:</strong> 2.9% + $0.30 per transaction (Stripe standard)</li>
                    <li><strong>Manager-Referred Creators:</strong> Manager sets custom fee (1-5% typical)</li>
                    <li><strong>Volume Scaling:</strong> Reduced rates for high-volume creators</li>
                  </ul>
                </li>
                <li><strong>Subscriptions & Credits</strong>
                  <ul className="list-disc list-inside ml-4 text-sm">
                    <li><strong>Manager Monthly:</strong> $99/month</li>
                    <li><strong>Creator Monthly:</strong> $29.99/month</li>
                    <li><strong>Credits:</strong> Free users can buy store generation credits</li>
                    <li><strong>Annual Discounts:</strong> 15% discount for annual payments</li>
                  </ul>
                </li>
                <li><strong>Manager Enterprise</strong>
                  <ul className="list-disc list-inside ml-4 text-sm">
                    <li>Advanced AI Tools: Superpower with beta features</li>
                    <li>Priority Support: Dedicated account management</li>
                    <li>Custom Integrations: Enterprise-level API access</li>
                    <li>White Label: Branded platform solutions</li>
                  </ul>
                </li>
                <li><strong>Marketplace Commission</strong>
                  <ul className="list-disc list-inside ml-4 text-sm">
                    <li><strong>Template Marketplace:</strong> Users can buy/sell generated templates</li>
                    <li><strong>Store Marketplace:</strong> Creators can buy/sell active stores to other Creators or Managers</li>
                    <li><strong>Design Marketplace:</strong> Creators can buy/sell designs from other Creators and place them on their products</li>
                    <li><strong>Service Marketplace (like Fiverr):</strong> Creators/Managers can offer and purchase marketing & design services from other Creators/Managers</li>
                  </ul>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-8">
          <CardHeader><CardTitle>Stripe Connect Architecture</CardTitle></CardHeader>
          <CardContent className="flex flex-col items-center pt-6">
            <p>The platform is built on Stripe Connect, allowing for seamless onboarding, secure payments, and automated revenue splitting between Creators and Managers. Users register their business with Stripe, allowing them to receive payments, manage customers, orders, and payouts.</p>
            <img src="https://utdrojtjfwjcvuzmkooj.supabase.co/storage/v1/object/public/content//Copy%20of%20FreshFront.zip%20-%2016.png" alt="Stripe Connect" className="rounded-lg mt-4 w-full" />
          </CardContent>
        </Card>
      </Section>

      <Section id="budget">
        <SectionTitle>Investment Requirement & Use of Funds</SectionTitle>
        <Card className="mb-8">
          <CardHeader><CardTitle>Total Investment Request: $113,900</CardTitle></CardHeader>
          <CardContent style={{ height: '500px' }}>
            <ResponsivePie
              data={[
                { id: 'Personnel & Operations', label: 'Personnel & Operations (17.55%)', value: 20000 },
                { id: 'Technology Development', label: 'Technology Development (7.97%)', value: 9100 },
                { id: 'API Integrations', label: 'API Integrations (2.46%)', value: 2800 },
                { id: 'Launch & Marketing', label: 'Launch & Marketing (39.76%)', value: 45300 },
                { id: 'Production Infrastructure', label: 'Production Infrastructure (8.86%)', value: 10100 },
                { id: 'Innovation & Growth', label: 'Innovation & Growth (23.40%)', value: 26600 },
              ]}
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: 'color' }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
              legends={[
                {
                  anchor: 'bottom',
                  direction: 'row',
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 120,
                  itemHeight: 18,
                  itemTextColor: '#999',
                  itemDirection: 'left-to-right',
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: 'circle',
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemTextColor: '#000',
                      },
                    },
                  ],
                },
              ]}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Detailed Budget Allocation</CardTitle></CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader><CardTitle>Personnel & Operations (17.55% - $20,000)</CardTitle></CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Founder Stipends: $12,000 (minimal personal expenses)</li>
                    <li>Part-Time Support: $6,000 (marketing and customer service)</li>
                    <li>General Admin: $2,000 (legal, accounting, business setup)</li>
                  </ul>
                  <p className="text-xs mt-2"><strong>Strategy:</strong> Lean team structure with founders handling core development, minimal overhead burn</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Technology Development (7.97% - $9,100)</CardTitle></CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>UI/UX Design: $3,000 (professional design system)</li>
                    <li>React Development: $1,500 (store builder interface)</li>
                    <li>Mobile Development: $2,100 (iOS and Android apps)</li>
                    <li>Development Tools: $600 (licenses and frameworks)</li>
                    <li>Infrastructure Setup: $1,900 (Firebase, hosting, databases)</li>
                  </ul>
                  <p className="text-xs mt-2"><strong>Strategy:</strong> Modern tech stack optimized for rapid development and scaling</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>API Integrations (2.46% - $2,800)</CardTitle></CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Print-on-Demand: $300 (Printful, Gooten integration)</li>
                    <li>Dropshipping: $300 (AliExpress, Amazon APIs)</li>
                    <li>AI Services: $300 (OpenAI, Gemini, Meshy)</li>
                    <li>Payment Processing: $200 (Stripe Connect)</li>
                    <li>Content Creation: $300 (Shotstack, Creatomate)</li>
                    <li>Supporting Services: $1,400 (email, monitoring, analytics)</li>
                  </ul>
                  <p className="text-xs mt-2"><strong>Strategy:</strong> Best-in-class integrations for comprehensive automation</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Launch & Marketing (39.76% - $45,300)</CardTitle></CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Creator Launch Program: $14,500 (resources & incentives for early users, driving traffic to their stores as well as FF)</li>
                    <li>Digital Advertising: $28,000 (Meta, Google, TikTok, YouTube)</li>
                    <li>Platform-Specific Marketing: $2,800 (LinkedIn, Twitter)</li>
                  </ul>
                  <p className="text-xs mt-2"><strong>Strategy:</strong> Aggressive customer acquisition during critical launch window</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Production Infrastructure (8.86% - $10,100)</CardTitle></CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Hosting & Storage: $5,500 (production-grade infrastructure)</li>
                    <li>Database Systems: $2,500 (scalable data management)</li>
                    <li>API Costs: $2,100 (production-level integrations)</li>
                  </ul>
                  <p className="text-xs mt-2"><strong>Strategy:</strong> Scalable infrastructure ready for rapid user growth</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Innovation & Growth (23.40% - $26,600)</CardTitle></CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Ongoing Development: $9,200 (templates, features, optimization)</li>
                    <li>Quality Assurance: $2,300 (testing tools and services)</li>
                    <li>Continuous Marketing: $10,500 (ongoing ad spend)</li>
                    <li>Content Creation: $4,200 (educational and marketing content)</li>
                    <li>Security & Compliance: $400 (professional audits)</li>
                  </ul>
                  <p className="text-xs mt-2"><strong>Strategy:</strong> Continuous improvement and market expansion</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </Section>

      <Section id="financial-projections">
        <SectionTitle>Financial Model & Projections</SectionTitle>
        <div className="space-y-8">
          <Card>
            <CardHeader><CardTitle>User Base & Revenue Snapshot</CardTitle></CardHeader>
            <CardContent>
              <p className="mb-4">The following model is based on a snapshot of 7,050 users (7,000 creators and 50 managers) to project annual revenue.</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-2xl font-bold">$3.57M</h4>
                  <p className="text-sm text-gray-600">Gross Annual Revenue</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-2xl font-bold">$3.52M</h4>
                  <p className="text-sm text-gray-600">Projected Net Annual Earnings</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-2xl font-bold">$507</h4>
                  <p className="text-sm text-gray-600">Blended ARPU</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-2xl font-bold">7,050</h4>
                  <p className="text-sm text-gray-600">Total Users</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-2xl font-bold">7,000</h4>
                  <p className="text-sm text-gray-600">Total Creators</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-2xl font-bold">50</h4>
                  <p className="text-sm text-gray-600">Total Managers</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-2xl font-bold">2,100</h4>
                  <p className="text-sm text-gray-600">Paid Creators</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-2xl font-bold">4,900</h4>
                  <p className="text-sm text-gray-600">Free Creators</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Annual Revenue Breakdown</CardTitle></CardHeader>
            <CardContent>
              <div style={{ height: '400px' }}>
                <ResponsiveBar
                  data={[
                    { source: 'Paid Creators', 'Revenue': 2446248 },
                    { source: 'Free Creators', 'Revenue': 1036840 },
                    { source: 'Managers', 'Revenue': 91127 },
                  ]}
                  keys={['Revenue']}
                  indexBy="source"
                  margin={{ top: 50, right: 60, bottom: 50, left: 90 }}
                  padding={0.4}
                  valueScale={{ type: 'linear' }}
                  indexScale={{ type: 'band', round: true }}
                  colors={{ scheme: 'nivo' }}
                  borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Revenue Source',
                    legendPosition: 'middle',
                    legendOffset: 32,
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Revenue in USD',
                    legendPosition: 'middle',
                    legendOffset: -80,
                    format: value => `$${(value / 1000000).toFixed(2)}M`,
                  }}
                  labelFormat="$.2s"
                  labelSkipWidth={12}
                  labelSkipHeight={12}
                  labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                  animate={true}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Detailed Financial Model</CardTitle></CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Section 1: User Base Overview</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                      <li><strong>Total Users:</strong> 7,050</li>
                      <li><strong>Total Creators:</strong> 7,000 (5,000 Organic, 2,000 Manager-Onboarded)</li>
                      <li><strong>Total Managers:</strong> 50</li>
                      <li><strong>Creator Plan Split:</strong> 4,900 Free (70%), 2,100 Paid (30%)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Section 2: Creator Revenue Breakdown</AccordionTrigger>
                  <AccordionContent>
                    <h4 className="font-bold mb-2">A. Paid Plan Creators (2,100 Users)</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4 mb-4">
                      <li>Subscription Revenue: <strong>$755,748</strong></li>
                      <li>Transaction Fee Revenue (2.9% + $0.30): <strong>$1,690,500</strong></li>
                      <li>Total from Paid Users: <strong>$2,446,248</strong></li>
                    </ul>
                    <h4 className="font-bold mb-2">B. Free Plan Creators (4,900 Users)</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4">
                      <li>Transaction Fee Revenue (2.9% + $0.30): <strong>$1,036,840</strong></li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Section 3: Manager Revenue & Costs</AccordionTrigger>
                  <AccordionContent>
                    <h4 className="font-bold mb-2">A. Direct Revenue from Managers</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4 mb-4">
                      <li>Subscription Revenue: <strong>$59,400</strong></li>
                      <li>Transaction Fees (from Managers' own stores): <strong>$29,255</strong></li>
                      <li>Total Direct Revenue: <strong>$88,655</strong></li>
                    </ul>
                    <h4 className="font-bold mb-2">B. Fees Delegated to Managers (Cost of Revenue)</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4">
                      <li>Total Delegated Fees (1.2% of $4.12M managed GMV): <strong>-$49,440</strong></li>
                    </ul>
                    <h4 className="font-bold mt-4 mb-2">C. Revenue from Manager Withdrawal Fee</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4">
                        <li>Revenue from Withdrawal Fee (5%): <strong>$2,472</strong></li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Section 4: Final Annual Financial Summary</AccordionTrigger>
                  <AccordionContent>
                    <table className="w-full text-sm">
                      <tbody>
                        <tr><td className="p-2">Total Revenue from Paid Creators</td><td className="p-2 text-right">$2,446,248</td></tr>
                        <tr><td className="p-2">Total Revenue from Free Creators</td><td className="p-2 text-right">$1,036,840</td></tr>
                        <tr><td className="p-2">Total Direct Revenue from Managers</td><td className="p-2 text-right">$88,655</td></tr>
                        <tr><td className="p-2">Revenue from Manager Withdrawal Fee</td><td className="p-2 text-right">$2,472</td></tr>
                        <tr className="font-bold border-t"><td className="p-2">Gross Annual Revenue</td><td className="p-2 text-right">$3,574,215</td></tr>
                        <tr><td className="p-2 text-red-600">Less: Fees Delegated to Managers</td><td className="p-2 text-right text-red-600">($49,440)</td></tr>
                        <tr className="font-bold border-t"><td className="p-2">Projected Net Annual Earnings</td><td className="p-2 text-right">$3,524,775</td></tr>
                      </tbody>
                    </table>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader><CardTitle>Return Projections</CardTitle></CardHeader>
            <CardContent>
              <h4 className="font-bold mb-2">Valuation Scenarios Based on Annual Revenue</h4>
              <p className="text-xs text-gray-600 mb-4">Based on a Gross Annual Revenue of $3.57M.</p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left">
                    <th className="p-2">Scenario</th>
                    <th className="p-2">Revenue Multiple</th>
                    <th className="p-2">Projected Valuation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-2">Conservative</td><td className="p-2">5x</td><td className="p-2">$17.85M</td></tr>
                  <tr><td className="p-2">Moderate</td><td className="p-2">8x</td><td className="p-2">$28.56M</td></tr>
                  <tr><td className="p-2">Optimistic</td><td className="p-2">12x</td><td className="p-2">$42.84M</td></tr>
                </tbody>
              </table>
              <p className="text-xs mt-2">Note: ROI and IRR are not projected as this model is a single-year snapshot. Returns are calculated on a $113,900 investment basis.</p>
            </CardContent>
          </Card>
        </div>
          <Card className="mt-8">
            <CardHeader><CardTitle>Exit Strategy Options. (why not?)</CardTitle></CardHeader>
            <CardContent>
              <h4 className="font-bold mb-2">Strategic Acquisition Targets</h4>
              <ol className="list-decimal list-inside space-y-1">
                <li><strong>Shopify:</strong> POD Creator solutions, AI capabilities & automation</li>
                <li><strong>Apple:</strong> Integrate with Apple Pay and iPhone/iOS shopping experience</li>
                <li><strong>Meta/TikTok:</strong> Enhance social commerce offerings</li>
                <li><strong>Google:</strong> Strengthen Google Shopping and Cloud AI</li>
                <li><strong>Amazon:</strong> Compete with Shopify with Creator economy and white label storefronts and expand AWS services</li>
              </ol>
            </CardContent>
          </Card>
      </Section>

      <Section id="risk">
        <SectionTitle>Risk Analysis & Mitigation</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader><CardTitle>Technology Risks</CardTitle></CardHeader>
            <CardContent>
              <h4 className="font-bold">AI Model Dependencies</h4>
              <p><strong>Risk:</strong> Reliance on third-party AI services</p>
              <p><strong>Mitigation:</strong> Multi-provider strategy, proprietary model development</p>
              <p><strong>Timeline:</strong> Custom models in development by Month 18</p>
              <h4 className="font-bold mt-4">Scalability Challenges</h4>
              <p><strong>Risk:</strong> Infrastructure limitations during rapid growth</p>
              <p><strong>Mitigation:</strong> Cloud-native architecture, auto-scaling systems (Google Cloud = excellent uptime)</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Market Risks</CardTitle></CardHeader>
            <CardContent>
              <h4 className="font-bold">Competition from Established Players</h4>
              <p><strong>Risk:</strong> Shopify, Adobe, or others launch competing AI features</p>
              <p><strong>Mitigation:</strong> First-mover advantage, superior AI integration</p>
              <p><strong>Competitive Moat:</strong> 18-month technology lead expected (modular scaffold systems in place and are constantly optimized, interchangeable with new AI models as they improve at an exponential rate)</p>
              <h4 className="font-bold mt-4">Creator Market Saturation</h4>
              <p><strong>Risk:</strong> Limited pool of potential creators</p>
              <p><strong>Mitigation:</strong> Global expansion, adjacent market entry (B2B, services), Quality over quantity (targeting both creators with businesses and artists not yet monetized)</p>
              <p><strong>Market Size:</strong> 50M+ addressable creators globally</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Operational Risks</CardTitle></CardHeader>
            <CardContent>
              <h4 className="font-bold">Fulfillment Partner Dependencies</h4>
              <p><strong>Risk:</strong> Gooten, Printful or other partners change terms or fail</p>
              <p><strong>Mitigation:</strong> Multi-provider integrations, direct partnerships, vertical integration with in-house POD supplier</p>
              <p><strong>Contingency:</strong> Budget includes multiple provider integration costs</p>
              <h4 className="font-bold mt-4">Regulatory Changes</h4>
              <p><strong>Risk:</strong> E-commerce, AI, or payment regulations impact operations</p>
              <p><strong>Mitigation:</strong> Compliance-first approach, legal budget allocation, strict AI model system instructions, robust Stripe integrations</p>
              <p><strong>Monitoring:</strong> Continuous regulatory tracking and adaptation</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Financial Risks</CardTitle></CardHeader>
            <CardContent>
              <h4 className="font-bold">Customer Acquisition Costs</h4>
              <p><strong>Risk:</strong> Rising ad costs reduce unit economics</p>
              <p><strong>Mitigation:</strong> Diversified marketing channels, organic growth, AI agent automation & optimization algorithms, improving ad creatives and adapting strategies</p>
              <p><strong>Buffer:</strong> 39.76% marketing budget provides testing flexibility during optimization grace</p>
              <h4 className="font-bold mt-4">Revenue Concentration</h4>
              <p><strong>Risk:</strong> Over-dependence on single revenue stream</p>
              <p><strong>Mitigation:</strong> Multiple revenue sources, premium feature development, sustainable economy with multiple revenue streams for multiple roles flowing back to source</p>
              <p><strong>Diversification:</strong> 4 distinct revenue streams at launch</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="technology">
        <SectionTitle>Technology & Intellectual Property</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader><CardTitle>Proprietary Technology Assets</CardTitle></CardHeader>
            <CardContent>
              <h4 className="font-bold">Core Algorithms</h4>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Perfect Design Conforming: AI that creates designs perfectly fitted to print on demand product contours</li>
                <li>Store Template Generation: Automated code generation of store templates based on niche analysis</li>
                <li>Multi-Modal Content Creation: Integrated text, image, and video generation with gene/attribute tags</li>
                <li>Conversion Optimization: Built in variant and product visualizer, 3D AR viewer, and realtime AI chat assistant with function calling and MCPs.</li>
                <li>Magic Marketing Packages: AI system that generates converting ad copies using realtime search APIs and MCP for live market data.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Data & Training Assets</CardTitle></CardHeader>
            <CardContent>
              <h4 className="font-bold">Proprietary Datasets</h4>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>E-commerce Performance Data: Store conversion and sales optimization</li>
                <li>Design Effectiveness: Visual content consistency across products</li>
                <li>Creator Behavior: User interaction and success pattern analysis</li>
                <li>Market Intelligence: Trend prediction and demand forecasting</li>
              </ul>
              <h4 className="font-bold mt-4">Competitive Intelligence</h4>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li><strong>Technology Moat:</strong> 18-month estimated lead over competitors</li>
                <li><strong>Network Effects:</strong> Creator and manager ecosystem creates switching costs</li>
                <li><strong>Data Advantage:</strong> Each user interaction improves AI performance</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="marketing-growth">
        <SectionTitle>Marketing & Growth Strategy</SectionTitle>
        <div className="space-y-8">
          <Card>
            <CardHeader><CardTitle>Go-to-Market Strategy</CardTitle></CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold">Phase 1: Creator Launch Program (Months 1-6)</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                    <li><strong>Target:</strong> 1,000 founding creators</li>
                    <li><strong>Investment:</strong> $14,500 in incentives and support</li>
                    <li><strong>Focus:</strong> Product-market fit validation, traffic and testimonials</li>
                    <li><strong>Success Metrics:</strong> 70%+ creator satisfaction, 50%+ monthly revenue growth</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Phase 2: Paid Acquisition Scale (Months 6-18)</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                    <li><strong>Investment:</strong> $28,000 in digital advertising</li>
                    <li><strong>Channels:</strong> Meta, Google, TikTok, YouTube advertising</li>
                    <li><strong>Target:</strong> 10,000 active creators by Month 12</li>
                    <li><strong>Success Metrics:</strong> CAC under $30, LTV/CAC ratio above 50:1</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Phase 3: Viral Growth & Network Effects (Months 18+)</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                    <li><strong>Strategy:</strong> Creator referral programs, manager network expansion</li>
                    <li><strong>Investment:</strong> Reduced paid acquisition, focus on retention</li>
                    <li><strong>Target:</strong> 50%+ growth from organic channels</li>
                    <li><strong>Success Metrics:</strong> Viral coefficient above 1.2</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader><CardTitle>Marketing Channel Strategy</CardTitle></CardHeader>
              <CardContent>
                <h4 className="font-bold">Digital Advertising Allocation</h4>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Meta Ads (28%): Instagram and Facebook creator targeting</li>
                  <li>Google Ads (25%): Search and display for e-commerce, generative AI keywords</li>
                  <li>YouTube Ads (25%): Tutorial and success story video content</li>
                  <li>TikTok Ads (15%): Gen-Z creator and entrepreneur targeting</li>
                  <li>LinkedIn Ads (5%): B2B manager and agency targeting</li>
                  <li>Twitter Ads (2%): Industry engagement and thought leadership</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Content Marketing Strategy</CardTitle></CardHeader>
              <CardContent>
                <h4 className="font-bold">Content Marketing Strategy</h4>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Educational Content: Tutorials, webinars, success stories</li>
                  <li>SEO Strategy: Long-tail keyword targeting for creator searches</li>
                  <li>Social Media: Showcase creator success stories and platform features</li>
                  <li>Influencer Partnerships: Collaborate with creator economy influencers</li>
                </ul>
                <h4 className="font-bold mt-4">Community Building</h4>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Creator Communities: Instagram, X (Twitter), Discord, Reddit</li>
                  <li>Manager Networks: Professional service provider partnerships</li>
                  <li>Success Showcases: Monthly creator spotlights and case studies</li>
                  <li>Educational Resources: Academy, certification programs, workshops</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section id="timeline">
        <SectionTitle>Implementation Timeline</SectionTitle>
        <img src="https://utdrojtjfwjcvuzmkooj.supabase.co/storage/v1/object/public/content//Copy%20of%20FreshFront.zip%20-%2022.png" alt="Roadmap" className="rounded-lg mb-12 mx-auto" />
        <div className="space-y-8">
          <Card>
            <CardHeader><CardTitle>Development Roadmap</CardTitle></CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-bold">Months 1-3: Foundation</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                    <li>Week 1-2: Business setup, legal structure, banking</li>
                    <li>Week 3-6: Complete UI/UX design and user flow mapping</li>
                    <li>Week 7-12: Complete MVP development, advanced AI integrations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Months 4-6: Integration & Testing</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                    <li>Week 13-16: Complete Print-on-demand and payment integrations (Gooten/Stripe)</li>
                    <li>Week 17-20: AI content generation testing and optimization</li>
                    <li>Week 21-24: Beta testing with founding creators</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Months 7-9: Launch & Scale</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                    <li>Week 25-28: Public launch, mobile app launch on Apple App Store & Google Play Store, marketing campaign activation</li>
                    <li>Week 29-32: Performance optimization, feature additions</li>
                    <li>Week 33-36: Manager network launch, scaling systems</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Months 10-12: Growth & Optimization</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                    <li>Week 37-40: 400 monthly paid subscribers acquired</li>
                    <li>Week 41-44: Team expansion, influencer marketing and partnerships</li>
                    <li>Week 45-48: Series A preparation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="investment-terms">
        <SectionTitle>Investment Terms & Next Steps</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader><CardTitle>Proposed Investment Structure</CardTitle></CardHeader>
            <CardContent>
              <h4 className="font-bold">Equity Investment</h4>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li><strong>Investment Amount:</strong> $113,900</li>
                <li><strong>Equity Percentage:</strong> 8-12%</li>
                <li><strong>Valuation:</strong> $950K - $1.42M pre-money</li>
                <li><strong>Investment Type:</strong> Convertible note or Series Seed</li>
              </ul>
              <h4 className="font-bold mt-4">Investor Benefits</h4>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Dashboard: Intuitive application experience to manage your investment</li>
                <li>Board Observer Rights: Quarterly reporting and strategic input</li>
                <li>Pro-Rata Rights: Participation in future funding rounds</li>
                <li>Information Rights: Monthly financial and operational updates</li>
                <li>Advisory Role: Direct input on strategic decisions</li>
                <li>Free Access to Manger Plan: Earn fees from our Creator economy</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Contact Information & Next Steps</CardTitle></CardHeader>
            <CardContent>
              <p>For additional information, technical demonstrations, or to begin the due diligence process, please contact:</p>
              <p className="font-bold my-2">FreshFront Investment Team</p>
              <p>Email: info@freshfront.co</p>
              <p>Phone: 647-615-2293</p>
              <p>Website: www.freshfront.co</p>
              <p>Demo Portal: app.freshfront.co</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="ecosystem">
        <SectionTitle>Ecosystem</SectionTitle>
        <Card>
          <CardContent className="pt-6">
            <EcosystemChart setSelectedNode={setSelectedNode} />
          </CardContent>
        </Card>
      </Section>
    </div>
  );
};

export default InvestorPackage;
