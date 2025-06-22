import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import mermaid from 'mermaid';
import EcosystemChart from './EcosystemChart';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [selectedNode, setSelectedNode] = useState<{ title: string; description: string } | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      mermaid.initialize({ startOnLoad: true });
      mermaid.contentLoaded();
    }
  }, [isAuthenticated]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Fresh25') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  const MatrixEffect = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const letters = 'FRESHFRONT'.split('');
      const fontSize = 16;
      const columns = Math.floor(canvas.width / fontSize);
      const drops: number[] = Array(columns).fill(1);

      function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0f0';
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
          const text = letters[Math.floor(Math.random() * letters.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }

      const interval = setInterval(draw, 33);
      return () => clearInterval(interval);
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
  };

  if (!isAuthenticated) {
    return (
      <div className="relative flex items-center justify-center h-screen bg-black font-mono text-green-400" style={{ fontFamily: '"Lucida Console", monospace' }}>
        <MatrixEffect />
        <div className="relative z-10 w-full max-w-2xl p-8 border-2 border-green-400 rounded-lg bg-black/50 backdrop-blur-sm">
          <div className="animate-pulse text-center text-lg mb-4">FreshFront Investor Portal</div>
          <p className="mb-2"> Access is restricted...</p>
          <p className="mb-4"> Please provide credentials.</p>
          <form onSubmit={handlePasswordSubmit} className="flex items-center">
            <label htmlFor="password-input" className="mr-2"> Enter Password:</label>
            <input
              id="password-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-grow bg-transparent border-none focus:ring-0 text-green-400"
              autoFocus
            />
            <span className="w-2 h-5 bg-green-400 animate-blink"></span>
          </form>
          {error && <p className="text-red-500 text-sm mt-4"> {error}</p>}
        </div>
        <style>{`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s step-end infinite;
          }
        `}</style>
      </div>
    );
  }

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
                <li><a onClick={() => scrollToSection('budget')} className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Budget</a></li>
                <li><a onClick={() => scrollToSection('team')} className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Team</a></li>
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
                <p>The global print-on-demand market is projected to reach $42.64 billion by 2030, growing at 33.1% CAGR, while AI is projected to grow at a CAGR of 35.9% to 1.81T. Despite this massive opportunity, current solutions require significant technical expertise, leaving millions of potential creators unable to participate in the benefits of AI Ecommerce. FreshFront eliminates these barriers creating the first truly accessible e-commerce platform with integrated AI features for store owners and their customers. AI-driven personalization and predictive analytics are key to enhancing the customer journey, improving conversion rates, and increasing customer lifetime value.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Our Solution</CardTitle></CardHeader>
              <CardContent>
                <p>FreshFront is an AI-first platform that transforms anyone into an e-commerce entrepreneur in minutes, not months. Our proprietary AI stack generates complete stores; designs, products, collections, site content, and marketing materials from a single prompt. The platform creates a virtuous ecosystem where creators, managers, and customers all benefit from shared success.</p>
              </CardContent>
            </Card>
          </div>
        </div>
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
                <li><strong>Global Artificial Intelligence Market:</strong> $279.22B in 2024, projected to reach $1.81T by 2030.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader><CardTitle>Serviceable Addressable Market (SAM)</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Target Creators:</strong> Potential 50M+ professional creators globally with audiences who would buy merch. Source: Goldman Sachs "The Creator Economy" Report 2023</li>
                <li><strong>28 Million Ecommerce stores online.</strong></li>
                <li><strong>SAM Value:</strong> $150B+ serviceable market.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Revenue Model</CardTitle></CardHeader>
            <CardContent>
              <p>Our revenue model is designed for scalability and diversification, ensuring multiple income streams that grow with our user base. We focus on a combination of transaction-based fees and recurring subscriptions, creating a stable and predictable financial future.</p>
              <Button variant="outline" className="mt-4" onClick={() => scrollToSection('financial-projections')}>View Model</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Unit Economics</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Customer Acquisition Cost (CAC):</strong> $28 (blended average).</li>
                <li><strong>Lifetime Value (LTV):</strong> $1,591 (Subscription + fees).</li>
                <li><strong>LTV/CAC Ratio:</strong> 57:1 (demonstrating significant return on customer acquisition).</li>
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
        </div>
      </Section>

      <Section id="solution">
        <SectionTitle>Product Deep Dive: Platform Walkthrough</SectionTitle>
        <video loop playsInline controls className="w-full h-full object-cover rounded-lg mb-12 mx-auto">
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

      <Section id="ecosystem">
        <SectionTitle>Ecosystem</SectionTitle>
        <Card>
          <CardContent className="pt-6">
            <EcosystemChart setSelectedNode={setSelectedNode} />
          </CardContent>
        </Card>
      </Section>

      <Section id="financial-projections">
        <SectionTitle>Financial Projections</SectionTitle>
        <Card>
          <CardHeader><CardTitle>Annual Revenue Projection</CardTitle></CardHeader>
          <CardContent style={{ height: '500px' }}>
            <ResponsiveBar
              data={[
                { stream: 'Paid Creators', revenue: 64.5 },
                { stream: 'Free Creators', revenue: 25.5 },
                { stream: 'Managers', revenue: 10 },
                { stream: 'Withdrawal Fees', revenue: 0.1 },
                { stream: 'Delegated Fees', revenue: -2.5 },
              ]}
              keys={['revenue']}
              indexBy="stream"
              margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
              padding={0.3}
              valueScale={{ type: 'linear' }}
              indexScale={{ type: 'band', round: true }}
              colors={'#017852'}
              borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Revenue Stream',
                legendPosition: 'middle',
                legendOffset: 32,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Revenue (%)',
                legendPosition: 'middle',
                legendOffset: -40,
                format: value => `${value}%`,
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={'white'}
              legends={[
                {
                  dataFrom: 'keys',
                  anchor: 'bottom-right',
                  direction: 'column',
                  justify: false,
                  translateX: 120,
                  translateY: 0,
                  itemsSpacing: 2,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemDirection: 'left-to-right',
                  itemOpacity: 0.85,
                  symbolSize: 20,
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
              animate={true}
              tooltip={({ id, value, color }) => (
                <strong style={{ color }}>
                  {id}: {value}%
                </strong>
              )}
            />
          </CardContent>
        </Card>
        <Card className="mt-8">
          <CardHeader><CardTitle>Financial Model Structure</CardTitle></CardHeader>
          <CardContent>
            <p>The financial model is built upon a detailed breakdown of our user base, segmented into three primary groups: Free Creators, Paid Creators, and Managers. Revenue is projected by analyzing subscription fees and transaction-based income from each segment. The model also accounts for the unique fee delegation system, where Managers can set their own rates for onboarded creators, and a platform fee is applied to Manager withdrawals. This comprehensive approach provides a clear and transparent view of our potential earnings.</p>
            <h4 className="font-bold mt-6 mb-2">Fee Structure</h4>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Creator Subscription Fee:</strong> $29.99/month</li>
              <li><strong>Manager Subscription Fee:</strong> $99/month</li>
              <li><strong>Standard Transaction Fee:</strong> 2.9% + $0.30 per transaction</li>
              <li><strong>Manager Withdrawal Fee:</strong> 2.9% (Managers only)</li>
              <li><strong>Creator Withdrawal Fee:</strong> 0%</li>
              <li><strong>Manager Fee Delegation:</strong> Managers can set a custom fee (1-5% typical) on their referred creators' sales, which is deducted from the creators' earnings and paid to the manager.</li>
            </ul>
            <h4 className="font-bold mt-6 mb-2">Revenue Breakdown (Year 3 with 7k users, 250 managers)</h4>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Paid Creators:</strong> 2,100 users * $29.99/month * 12 months + (2,100 users * avg $12,000 revenue * 0.029) + (2,100 users * average 2,200 transactions * $0.30) = $2,872,548</li>
              <li><strong>Free Creators:</strong> (4,900 users * avg $1,500 revenue * 0.029) + (4,900 users * average 628 transactions * $0.30) = $1,136,310</li>
              <li><strong>Managers:</strong> 250 managers * $99/month * 12 months + (50 stores * avg $25,000 revenue * 0.029) + (50 stores * average 7,335 transactions * $0.30) = $443,275</li>
              <li><strong>Manager Withdrawal Fee:</strong> $111,600 * 0.029 = $3,236</li>
            </ul>
          </CardContent>
        </Card>
      </Section>

      <Section id="budget">
        <SectionTitle>Investment Requirement & Use of Funds</SectionTitle>
        <Card className="mb-8">
          <CardHeader><CardTitle>Use of Funds</CardTitle></CardHeader>
          <CardContent style={{ height: '500px' }}>
            <ResponsivePie
              data={[
                { id: 'Personnel & Operations', label: 'Personnel & Operations (20%)', value: 20, color: '#3b3be3' },
                { id: 'Technology Development', label: 'Technology Development (20%)', value: 20, color: '#0ed60b' },
                { id: 'API Integrations', label: 'API Integrations (5%)', value: 5, color: '#9d00ff' },
                { id: 'Launch & Marketing', label: 'Launch & Marketing (30%)', value: 30, color: '#ff42f9' },
                { id: 'Production Infrastructure', label: 'Production Infrastructure (10%)', value: 10, color: '#131417' },
                { id: 'Innovation & Growth', label: 'Innovation & Growth (15%)', value: 15, color: '#00e1ed' },
              ]}
              colors={{ datum: 'data.color' }}
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
              arcLabelsTextColor={(d) => {
                const whiteTextIds = ['Production Infrastructure', 'Personnel & Operations', 'Launch & Marketing', 'API Integrations'];
                return whiteTextIds.includes(d.id.toString()) ? 'white' : 'black';
              }}
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
                <CardHeader><CardTitle>Personnel & Operations (20%)</CardTitle></CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Founder Stipends (minimal personal expenses)</li>
                    <li>Part-Time Support (marketing and customer service)</li>
                    <li>General Admin (legal, accounting, business setup)</li>
                  </ul>
                  <p className="text-xs mt-2"><strong>Strategy:</strong> Lean team structure with founder experience handling core development with AI coding agent acceleration, minimal overhead burn</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Technology Development (20%)</CardTitle></CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>UI/UX Design (professional design system)</li>
                    <li>React Development (store builder interface)</li>
                    <li>Mobile Development (iOS and Android apps)</li>
                    <li>Development Tools (licenses and frameworks)</li>
                    <li>Infrastructure Setup (Firebase, hosting, databases)</li>
                  </ul>
                  <p className="text-xs mt-2"><strong>Strategy:</strong> 90% of development complete. Bonus lap features, debugging, optimization. </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>API Integrations (5%)</CardTitle></CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Print-on-Demand (Printful, Gooten integration)</li>
                    <li>Dropshipping (AliExpress, Amazon APIs)</li>
                    <li>AI Services (OpenAI, Gemini, Meshy)</li>
                    <li>Payment Processing (Stripe Connect)</li>
                    <li>Content Creation (Shotstack, Creatomate)</li>
                    <li>Supporting Services (email, monitoring, analytics)</li>
                  </ul>
                  <p className="text-xs mt-2"><strong>Strategy:</strong> Best-in-class integrations for comprehensive automation and a reliable user experience</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Launch & Marketing (30%)</CardTitle></CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Creator Launch Program (resources & incentives for early users, driving traffic to their stores as well as FF)</li>
                    <li>Digital Advertising (Meta, Google, TikTok, YouTube)</li>
                    <li>Platform-Specific Marketing (LinkedIn, X (Twitter)</li>
                  </ul>
                  <p className="text-xs mt-2"><strong>Strategy:</strong> Aggressive customer acquisition during critical launch window</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Production Infrastructure (10%)</CardTitle></CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Hosting & Storage (production-grade infrastructure)</li>
                    <li>Database Systems (scalable data management)</li>
                    <li>API Costs (production-level integrations)</li>
                  </ul>
                  <p className="text-xs mt-2"><strong>Strategy:</strong> Reliable & Scalable infrastructure ready for rapid user growth</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Innovation & Growth (15%)</CardTitle></CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Ongoing Development (templates, features, optimization)</li>
                    <li>Quality Assurance (testing tools and services)</li>
                    <li>Continuous Marketing (ongoing ad spend)</li>
                    <li>Content Creation (generative AI, educational and marketing content)</li>
                    <li>Security & Compliance (professional audits)</li>
                  </ul>
                  <p className="text-xs mt-2"><strong>Strategy:</strong> Continuous improvement and market expansion</p>
                </CardContent>
              </Card>
            </div>
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
              <p><strong>Mitigation:</strong> Multi-provider strategy with fallbacks in place, proprietary model development</p>
              <p><strong>Timeline:</strong> Custom models in development by Month 18 with recursive training</p>
              <h4 className="font-bold mt-4">Scalability Challenges</h4>
              <p><strong>Risk:</strong> Infrastructure limitations during rapid growth</p>
              <p><strong>Mitigation:</strong> Cloud-native architecture, auto-scaling systems (Google Cloud)</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Market Risks</CardTitle></CardHeader>
            <CardContent>
              <h4 className="font-bold">Competition from Established Players</h4>
              <p><strong>Risk:</strong> Shopify, Adobe, or others launch competing AI features</p>
              <p><strong>Mitigation:</strong> First-mover advantage, superior AI integration [we are the ChatGPT to Siri and the Anthropic to OpenAI]]</p>
              <p><strong>Competitive Moat:</strong> 18-month technology lead expected (unique modular scaffold systems in place and are constantly optimized, interchangeable with new AI models as they improve at an exponential rate)</p>
              <h4 className="font-bold mt-4">Ethical AI Considerations</h4>
              <p><strong>Risk:</strong> Algorithmic bias, data privacy concerns, and lack of transparency in AI-driven marketing.</p>
              <p><strong>Mitigation:</strong> Continuously audit of our algorithms for bias, provide users with clear data usage policies, and ensure compliance with all relevant privacy regulations.</p>
              <h4 className="font-bold mt-4">Creator Market Saturation</h4>
              <p><strong>Risk:</strong> Limited pool of potential creators ready for stores</p>
              <p><strong>Mitigation:</strong> Influencer Marketing, Low barrier to entry, Quality over quantity (targeting both creators with businesses and artists not yet monetized)</p>
              <p><strong>Market Size:</strong> 50M+ addressable creators globally</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Operational Risks</CardTitle></CardHeader>
            <CardContent>
              <h4 className="font-bold">Fulfillment Partner Dependencies</h4>
              <p><strong>Risk:</strong> Gooten, Printful or other partners change terms or fail</p>
              <p><strong>Mitigation:</strong> Alternatives in place for Creators/Managers with Multi-provider integrations, direct partnerships, vertical integration options with in-house POD supplier</p>
              <p><strong>Contingency:</strong> Budget includes multiple provider integration costs</p>
              <h4 className="font-bold mt-4">Regulatory Changes</h4>
              <p><strong>Risk:</strong> E-commerce, AI, or payment regulations impact operations</p>
              <p><strong>Mitigation:</strong> Compliance-first approach, legal budget allocation, layer-filtered AI system instructions, robust Stripe integrations</p>
              <p><strong>Monitoring:</strong> Continuous regulatory tracking and adaptation with 4 step approach (review, learn, apply, comply)</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Financial Risks</CardTitle></CardHeader>
            <CardContent>
              <h4 className="font-bold">Customer Acquisition Costs</h4>
              <p><strong>Risk:</strong> Rising ad costs reduce unit economics</p>
              <p><strong>Mitigation:</strong> Diversified marketing channels, organic growth, AI pixel based marketing, improving ad creatives and adapting strategies</p>
              <p><strong>Buffer:</strong> 39.76% marketing budget provides testing room during ad optimization & pixel warm up to find winning ad configurations</p>
              <h4 className="font-bold mt-4">Revenue Concentration</h4>
              <p><strong>Risk:</strong> Over-dependence on single revenue stream</p>
              <p><strong>Mitigation:</strong> Multiple revenue sources, predictable revenue systems, sustainable economy with multiple roles transacting</p>
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
                <li>POD Designs: Layered API calls that result in professional designs visualized on a large variety of print on demand products</li>
                <li>Store Template Generation: Automated code generation of store templates based on store prompt, niche analysis & more</li>
                <li>Multi-Modal Content Creation: Integrated text, image, and video generation with unique gene/attribute tag system</li>
                <li>Conversion Optimization: Built in variant and product visualizer, 3D AR viewer, and realtime AI chat assistant with function calling and MCP integration.</li>
                <li>Magic Marketing Packages: AI system that generates converting ad copies using realtime search APIs and MCP agents for live market data.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Data & Training Assets</CardTitle></CardHeader>
            <CardContent>
              <h4 className="font-bold">Proprietary Datasets</h4>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>E-commerce Performance Data: Pixel heat maps, store conversion and sales optimization</li>
                <li>Product Design Effectiveness: Realism and accuracy consistency across modern design trends and their placement on mockups</li>
                <li>Creator Behavior: User persona demographics, origin, interaction and success pattern analysis</li>
                <li>Market Intelligence: Social commerce trend prediction and market demand forecasting</li>
              </ul>
              <h4 className="font-bold mt-4">Competitive Intelligence</h4>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li><strong>Technology Moat:</strong> Irreducible level of simplicity with one prompt achieving full store generation in under 3 minutes with efficient use flash models</li>
                <li><strong>Network Effects:</strong> Creator generates store with AI, Managers promotes Creators products, Customer gets the product, Creators get the sale, Managers get the fee</li>
                <li><strong>Data Advantage:</strong> Each user AI interaction improves the platform, whether it's a Customer visualizing a product, a Manager creating social media content or a Creator editing a design</li>
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
                    <li><strong>Target:</strong> 100 founding creators</li>
                    <li><strong>Investment:</strong> $14,500 in incentives and support to 100 chosen founders that apply</li>
                    <li><strong>Focus:</strong> Product-market fit validation, traffic and testimonials</li>
                    <li><strong>Success Metrics:</strong> 70%+ creator satisfaction, 50%+ monthly revenue growth</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Phase 2: Paid Acquisition Scale (Months 6-18)</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                    <li><strong>Investment:</strong> $28,000 in digital advertising</li>
                    <li><strong>Channels:</strong> Meta, Google, TikTok, YouTube advertising</li>
                    <li><strong>Target:</strong> 1,000 active creators by Month 12</li>
                    <li><strong>Success Metrics:</strong> CAC under $30, LTV/CAC ratio above 50:1</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Phase 3: Viral Growth & Network Effects (Months 18+)</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                    <li><strong>Strategy:</strong> Creator referral programs, manager network expansion</li>
                    <li><strong>Investment:</strong> Stabilized paid acquisition, shift gears to loyalty/retention</li>
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
                  <li>Communities: FreshForums, Instagram, Facebook, Substack, X (Twitter), Discord, Reddit</li>
                  <li>Manager Networks: Professional service provider partnerships</li>
                  <li>Success Showcases: Monthly creator spotlights and case studies</li>
                  <li>Educational Resources: Academy, certification programs, workshops</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Exit Strategy</CardTitle></CardHeader>
              <CardContent>
                <p>Possible exit scenarios include strategic acquisition by major technology companies such as Shopify, Apple, Meta/TikTok, Google, or Amazon, who may be interested in our AI capabilities, creator economy solutions, and social commerce integrations.</p>
              </CardContent>
            </Card>
          </div>
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
    </div>
  );
};

export default InvestorPackage;
