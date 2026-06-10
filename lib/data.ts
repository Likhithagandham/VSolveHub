// @ts-nocheck — migrated catalog data from static site
export const WHATSAPP_NUMBER = '919000000000';
export const CONTACT_PHONE = '+91 90000 00000';
export const CONTACT_EMAIL = 'hello@vsolvehub.com';
export const CONTACT_ADDRESS = 'VSolveHub HQ, HITEC City, Hyderabad, Telangana 500081';
export const MAPS_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.123456789!2d78.3762!3d17.4484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzU0LjIiTiA3OMKwMjInMzQuNCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin';

export const CATEGORIES = [
  {
    id: 'construction',
    name: 'Construction Labour',
    shortName: 'Construction',
    tagline: 'Helper, mason, painter, tile & 10 more trades',
    icon: 'brick',
    count: 85,
  },
  {
    id: 'technician',
    name: 'Technician Services',
    shortName: 'Technician',
    tagline: 'Electrician, plumber, AC, CCTV & 10 more',
    icon: 'bolt',
    count: 176,
  },
  {
    id: 'manpower',
    name: 'Manpower & Support',
    shortName: 'Manpower',
    tagline: 'Cleaning, drivers, security, domestic & support staff',
    icon: 'clean',
    count: 54,
  },
  {
    id: 'beautician',
    name: 'Beautician & Wedding',
    shortName: 'Beautician',
    tagline: 'Facial, waxing, makeup, hair & bridal packages',
    icon: 'makeup',
    count: 98,
  },
  {
    id: 'events',
    name: 'Events & Media',
    shortName: 'Events',
    tagline: 'Photography, decor, DJ, catering & event management',
    icon: 'camera',
    count: 109,
  },
  {
    id: 'rental',
    name: 'Equipment Rental',
    shortName: 'Rental',
    tagline: 'Furniture, tents, sound, tools & appliances',
    icon: 'chair',
    count: 101,
  },
  {
    id: 'vehicle',
    name: 'Vehicle Services',
    shortName: 'Vehicle',
    tagline: 'Rides, taxi, transport, repair & EV',
    icon: 'auto',
    count: 133,
  },
  {
    id: 'accommodation',
    name: 'Rooms / PG / Hostel',
    shortName: 'Stay',
    tagline: 'Rooms, PG, hostels, apartments & co-living',
    icon: 'office',
    count: 94,
  },
  {
    id: 'jobs',
    name: 'Job Opportunities',
    shortName: 'Jobs',
    tagline: 'Retail, healthcare, IT, drivers & 200+ roles',
    icon: 'guard',
    count: 222,
  },
];

const CONSTRUCTION_CATALOG = [
  { subCategory: 'Helper', icon: 'brick', services: ['Site Cleaning', 'Material Shifting (Sand)', 'Material Shifting (Cement)', 'Material Shifting (Bricks)', 'Loading & Unloading', 'Water Curing', 'Concrete Mixing Support', 'Debris Removal', 'Tools Handling', 'General Work Support'] },
  { subCategory: 'Mason', icon: 'brick', services: ['Brick Work', 'Block Work', 'Plastering Work', 'Tile Fixing', 'Stone Work', 'Concrete Work', 'Repair Work', 'Compound Wall Construction', 'Drain Construction', 'PCC Work'] },
  { subCategory: 'Shuttering Carpenter', icon: 'hammer', services: ['Footing Shuttering', 'Column Shuttering', 'Beam Shuttering', 'Slab Centering', 'Staircase Shuttering', 'Formwork Dismantling', 'Scaffolding Support', 'Retaining Wall Shuttering'] },
  { subCategory: 'Bar Bending (Steel Work)', icon: 'hammer', services: ['Steel Cutting', 'Steel Bending', 'Steel Binding', 'Footing Reinforcement', 'Column Reinforcement', 'Beam Reinforcement', 'Slab Reinforcement', 'Staircase Reinforcement'] },
  { subCategory: 'Concrete Labour', icon: 'brick', services: ['Concrete Mixing', 'Concrete Pouring', 'Vibrator Support', 'Surface Levelling', 'Concrete Finishing', 'Water Curing'] },
  { subCategory: 'Tile Worker', icon: 'tile', services: ['Floor Tile Fixing', 'Wall Tile Fixing', 'Bathroom Tile Work', 'Kitchen Tile Work', 'Granite Fixing', 'Marble Fixing', 'Tile Repair Work', 'Tile Grouting'] },
  { subCategory: 'Painter', icon: 'paint', services: ['Interior Painting', 'Exterior Painting', 'Wall Putty', 'Primer Coating', 'Texture Painting', 'Polish Work', 'Waterproof Coating', 'Enamel Painting'] },
  { subCategory: 'Demolition Labour', icon: 'hammer', services: ['Wall Breaking', 'Concrete Breaking', 'Debris Removal', 'Waste Shifting', 'Site Cleaning', 'Floor Breaking', 'Roof Demolition'] },
  { subCategory: 'Welding Worker', icon: 'bolt', services: ['Gate Welding', 'Steel Structure Welding', 'Railing Welding', 'Grill Welding', 'Fabrication Welding'] },
  { subCategory: 'Fabrication Worker', icon: 'hammer', services: ['Steel Fabrication', 'Shed Fabrication', 'Structural Fabrication', 'Industrial Fabrication'] },
  { subCategory: 'Scaffolding Worker', icon: 'hammer', services: ['Scaffolding Erection', 'Scaffolding Dismantling', 'Scaffolding Maintenance'] },
  { subCategory: 'Road & Civil Worker', icon: 'tile', services: ['Paver Block Work', 'Drainage Work', 'Road Repair Work', 'Culvert Work'] },
  { subCategory: 'Waterproofing Worker', icon: 'paint', services: ['Terrace Waterproofing', 'Bathroom Waterproofing', 'Wall Waterproofing', 'Basement Waterproofing'] },
];

function buildConstructionServices() {
  return buildCatalogServices(CONSTRUCTION_CATALOG, 'construction', 1001, () => 'From ₹500/day');
}

const TECHNICIAN_CATALOG = [
  { subCategory: 'Electrician', icon: 'bolt', services: ['BASIC VISIT CHARGE', 'General Electrical Works', 'Switch Repair', 'Socket Repair', 'Switch Board Repair', 'Switch Board Replacement', 'Plug Point Fixing', 'Bulb / Tube / LED Installation', 'Door Bell Installation', 'Ceiling Fan Installation', 'Wall Fan Installation', 'Exhaust Fan Installation', 'Fan Repair', 'Decorative Light Installation', 'Chandelier Installation', 'New House Wiring', 'Old Wiring Replacement', 'Concealed Wiring', 'Open Wiring', 'Conduit Pipe Laying', 'Cable Pulling', 'Junction Box Fixing', 'DB Board Installation', 'DB Board Repair', 'MCB Installation', 'Fuse Replacement', 'Main Board Installation', 'Load Distribution Setup', 'Water Motor Wiring', 'Pump Connection', 'Bore Motor Connection', 'Starter Panel Setup', 'Inverter Installation', 'UPS Setup', 'Generator Connection', 'Power Issue Check', 'Short Circuit Fix', 'Voltage Issue Fix', 'Trip Problem Fix'] },
  { subCategory: 'Plumbing', icon: 'pipe', services: ['BASIC VISIT CHARGE', 'Tap Repair', 'Tap Replacement', 'Pipe Leakage Fix', 'Pipe Joint Repair', 'Shower Repair', 'Flush Repair', 'Drain Block Removal', 'Tap Installation', 'Shower Installation', 'WC Installation', 'Basin Installation', 'Sink Installation', 'Health Faucet Installation', 'New Pipeline Installation', 'Old Pipe Replacement', 'Pipe Extension Work', 'Underground Pipeline Work', 'Overhead Tank Connection', 'Bore Connection', 'Full Bathroom Plumbing', 'Geyser Pipe Connection', 'Bathroom Fitting Setup', 'Drain Line Installation', 'Chamber Cleaning', 'Sewer Line Work', 'Water Pressure Fix', 'Tank Overflow Fix', 'General Plumbing Check', 'Motor Installation', 'Motor Repair'] },
  { subCategory: 'Carpenter', icon: 'hammer', services: ['BASIC VISIT CHARGE', 'Door Repair', 'Window Repair', 'Cupboard Repair', 'Hinge Fix', 'Lock Fitting', 'Door Installation', 'Window Installation', 'Shelf Installation', 'Curtain Rod Installation', 'Glass Fixing', 'Bed Assembly', 'Table Assembly', 'Chair Assembly', 'TV Unit Installation', 'Modular Kitchen Installation', 'Cabinet Installation', 'Wood Polishing', 'Laminate Fixing'] },
  { subCategory: 'AC Technician', icon: 'ac', services: ['BASIC VISIT CHARGE', 'Split AC Installation', 'Window AC Installation', 'AC Uninstallation', 'AC Reinstallation', 'AC General Service', 'AC Deep Cleaning', 'AC Jet Wash', 'Gas Filling', 'Cooling Issue Repair', 'Water Leakage Fix', 'AC Shifting'] },
  { subCategory: 'RO Technician', icon: 'pipe', services: ['BASIC VISIT CHARGE', 'RO Installation', 'RO Service', 'Filter Replacement', 'RO Repair'] },
  { subCategory: 'Internet & WiFi Technician', icon: 'bolt', services: ['BASIC VISIT CHARGE', 'Router Installation', 'Router Configuration', 'WiFi Setup', 'LAN Cable Wiring', 'Network Setup', 'Signal Issue Fix', 'WiFi Range Extender Setup', 'Access Point Installation'] },
  { subCategory: 'Gas Stove Technician', icon: 'pipe', services: ['BASIC VISIT CHARGE', 'Gas Stove Repair', 'Gas Leakage Fix', 'Gas Pipeline Installation', 'Regulator Installation', 'Burner Cleaning', 'Burner Replacement', 'Auto Ignition Repair'] },
  { subCategory: 'Computer & Laptop Technician', icon: 'office', services: ['BASIC VISIT CHARGE', 'OS Installation', 'Software Installation', 'Virus Removal', 'System Formatting', 'RAM Upgrade', 'SSD Installation', 'Screen Replacement', 'Keyboard Replacement', 'Motherboard Repair', 'Printer Setup', 'Data Recovery'] },
  { subCategory: 'Mobile Technician', icon: 'office', services: ['BASIC VISIT CHARGE', 'Screen Replacement', 'Battery Replacement', 'Charging Issue Repair', 'Speaker Repair', 'Microphone Repair', 'Camera Repair', 'Water Damage Repair', 'Software Flashing'] },
  { subCategory: 'CCTV & Security Technician', icon: 'cctv', services: ['BASIC VISIT CHARGE', 'CCTV Camera Installation', 'Full CCTV Setup', 'DVR Installation', 'NVR Installation', 'Mobile Viewing Setup', 'CCTV Wiring', 'Camera Repair', 'Biometric Installation', 'Video Door Phone Installation'] },
  { subCategory: 'Locksmith', icon: 'guard', services: ['BASIC VISIT CHARGE', 'Lock Repair', 'Lock Installation', 'Key Duplication', 'Door Unlock Service', 'Car Lock Opening', 'Digital Lock Installation', 'Smart Lock Installation'] },
  { subCategory: 'Home Automation & Sound', icon: 'sound', services: ['BASIC VISIT CHARGE', 'Smart Switch Installation', 'Smart Home Setup', 'Home Theatre Installation', 'Speaker Setup', 'Alexa Integration', 'Smart Curtain Setup'] },
  { subCategory: 'Fire Safety Technician', icon: 'guard', services: ['BASIC VISIT CHARGE', 'Fire Extinguisher Installation', 'Fire Alarm Setup', 'Sprinkler Installation', 'Fire Safety Inspection', 'Extinguisher Refilling', 'Emergency Exit Sign Installation'] },
];

function technicianPrice(name) {
  return name === 'BASIC VISIT CHARGE' ? 'From ₹299/visit' : 'From ₹199/visit';
}

function buildTechnicianServices() {
  return buildCatalogServices(TECHNICIAN_CATALOG, 'technician', 2001, technicianPrice);
}

const BEAUTICIAN_CATALOG = [
  { subCategory: 'Face Care (Facial & Cleanup)', icon: 'makeup', services: ['BASIC VISIT CHARGE', 'Face Cleanup', 'Basic Facial', 'Fruit Facial', 'Gold Facial', 'Diamond Facial', 'Pearl Facial', 'Anti-Aging Facial', 'Acne Treatment Facial', 'Whitening Facial', 'Hydrating Facial', 'Brightening Facial', 'Skin Polishing'] },
  { subCategory: 'Bleach & Detan', icon: 'makeup', services: ['BASIC VISIT CHARGE', 'Face Bleach', 'Neck Bleach', 'Full Body Bleach', 'Detan Face', 'Detan Neck', 'Detan Full Body'] },
  { subCategory: 'Waxing', icon: 'makeup', services: ['BASIC VISIT CHARGE', 'Full Arms Wax', 'Half Arms Wax', 'Full Legs Wax', 'Half Legs Wax', 'Underarms Wax', 'Full Body Wax', 'Bikini Wax', 'Face Wax', 'Normal Wax', 'Rica Wax', 'Chocolate Wax'] },
  { subCategory: 'Threading', icon: 'makeup', services: ['BASIC VISIT CHARGE', 'Eyebrow Threading', 'Upper Lip Threading', 'Forehead Threading', 'Chin Threading', 'Full Face Threading'] },
  { subCategory: 'Hair Services (Full Range)', icon: 'hair', services: ['BASIC VISIT CHARGE', 'Hair Cut', 'Hair Trim', 'Hair Styling', 'Blow Dry', 'Global Hair Color', 'Root Touch-up', 'Highlights', 'Balayage', 'Ombre', 'Hair Spa', 'Dandruff Treatment', 'Hair Fall Treatment', 'Scalp Treatment', 'Hair Smoothening', 'Hair Straightening', 'Keratin Treatment', 'Botox Treatment', 'Hair Rebonding', 'Hair Extension'] },
  { subCategory: 'Manicure & Pedicure', icon: 'makeup', services: ['BASIC VISIT CHARGE', 'Basic Manicure', 'Basic Pedicure', 'Spa Manicure', 'Spa Pedicure', 'Foot Spa', 'Gel Nail Polish', 'Nail Art'] },
  { subCategory: 'Makeup (Full Range)', icon: 'makeup', services: ['BASIC VISIT CHARGE', 'Light Makeup', 'Party Makeup', 'Engagement Makeup', 'Bridal Makeup', 'HD Makeup', 'Airbrush Makeup', 'Reception Makeup'] },
  { subCategory: 'Mehendi (Henna)', icon: 'mehendi', services: ['BASIC VISIT CHARGE', 'Simple Mehendi', 'Arabic Mehendi', 'Full Hand Mehendi', 'Bridal Mehendi', 'Leg Mehendi'] },
  { subCategory: 'Body Care', icon: 'makeup', services: ['BASIC VISIT CHARGE', 'Body Polishing', 'Body Scrub', 'Body Massage', 'Full Body Detan'] },
  { subCategory: 'Advanced Skin Care', icon: 'makeup', services: ['BASIC VISIT CHARGE', 'Acne Treatment', 'Pigmentation Treatment', 'Skin Glow Treatment', 'Anti-Aging Treatment', 'Dark Spot Removal', 'Hydra Facial', 'Chemical Peel'] },
  { subCategory: 'Bridal Packages', icon: 'makeup', services: ['BASIC VISIT CHARGE', 'Pre-Bridal Package', 'Bridal Full Package', 'Engagement Package', 'Bridesmaid Makeup'] },
];

function beauticianPrice(name) {
  if (name === 'BASIC VISIT CHARGE') return 'From ₹299/visit';
  if (name.includes('Bridal') || name.includes('Package')) return 'From ₹2,999';
  return 'From ₹199/visit';
}

function buildBeauticianServices() {
  return buildCatalogServices(BEAUTICIAN_CATALOG, 'beautician', 3001, beauticianPrice);
}

const EVENTS_CATALOG = [
  { subCategory: 'Photography', icon: 'camera', services: ['Event Photography', 'Birthday Photography', 'Wedding Photography', 'Pre-Wedding Shoot', 'Engagement Photography', 'Reception Photography', 'Baby Shoot', 'Kids Photography', 'Maternity Shoot', 'Family Shoot', 'Portfolio Shoot', 'Product Photography', 'Food Photography', 'Real Estate Photography', 'Corporate Event Photography', 'Candid Photography', 'Traditional Photography'] },
  { subCategory: 'Videography', icon: 'camera', services: ['Event Videography', 'Wedding Videography', 'Pre-Wedding Video', 'Engagement Video', 'Birthday Videography', 'Drone Videography', 'Corporate Video Shoot', 'YouTube Video Shoot', 'Instagram Reels Shoot', 'Short Film Shoot', 'Documentary Video', 'Promotional Video', 'Real Estate Video', 'Product Video Shoot', 'Cinematic Video Shoot'] },
  { subCategory: 'Video Editing', icon: 'camera', services: ['Basic Video Editing', 'Advanced Video Editing', 'Wedding Highlight Video', 'Full Wedding Film Editing', 'Reels Editing', 'YouTube Editing', 'Color Grading', 'Motion Graphics Editing', 'Subtitle Editing', 'Promo Video Editing'] },
  { subCategory: 'Photo Editing', icon: 'camera', services: ['Basic Photo Editing', 'Advanced Photo Editing', 'Wedding Album Editing', 'Skin Retouching', 'Color Correction', 'Background Removal', 'Photo Enhancement', 'AI Photo Restoration'] },
  { subCategory: 'Album & Printing', icon: 'camera', services: ['Wedding Album Design', 'Birthday Album', 'Premium Album Printing', 'Digital Album', 'Photo Printing', 'Frame Printing', 'Canvas Printing', 'Photo Book Design'] },
  { subCategory: 'Decoration', icon: 'decor', services: ['Site Visit & Consultation', 'Birthday Decoration', 'Balloon Decoration', 'Wedding Decoration', 'Engagement Decoration', 'Reception Decoration', 'Haldi Decoration', 'Sangeet Decoration', 'Stage Decoration', 'Flower Decoration', 'Theme Decoration', 'Baby Shower Decoration', 'Anniversary Decoration', 'Naming Ceremony Decoration', 'Corporate Event Decoration'] },
  { subCategory: 'Catering', icon: 'chair', services: ['Veg Catering', 'Non-Veg Catering', 'Buffet Setup', 'Snacks Catering', 'Full Meal Catering', 'Live Food Counter', 'Outdoor Catering', 'Corporate Catering'] },
  { subCategory: 'DJ & Sound', icon: 'sound', services: ['Site Visit & Consultation', 'DJ Setup', 'Sound System Setup', 'Stage Sound Setup', 'Lighting Setup', 'DJ Lights Setup', 'Smoke Machine Setup', 'Live Band Setup', 'LED Wall Setup', 'Laser Show Setup'] },
  { subCategory: 'Event Management', icon: 'decor', services: ['Event Consultation', 'Full Event Management', 'Wedding Planning', 'Birthday Planning', 'Corporate Event Management', 'Event Coordination', 'Anchor / Host', 'Celebrity Management', 'Destination Wedding Planning'] },
  { subCategory: 'Entertainment Services', icon: 'sound', services: ['Magician Show', 'Dance Performance', 'Live Singer', 'Anchor / MC', 'Kids Entertainment', 'Fireworks Show', 'Game Organizer', 'Mimicry Show', 'Stand-up Comedy'] },
];

function eventsPrice(name) {
  if (name.includes('Consultation') || name.includes('Site Visit')) return 'From ₹499/visit';
  if (name.includes('Wedding') || name.includes('Full Event') || name.includes('Destination')) return 'From ₹9,999';
  if (name.includes('Drone') || name.includes('Cinematic') || name.includes('Celebrity')) return 'From ₹4,999';
  return 'From ₹1,999';
}

function buildEventsServices() {
  return buildCatalogServices(EVENTS_CATALOG, 'events', 4001, eventsPrice);
}

const RENTAL_CATALOG = [
  { subCategory: 'Event Furniture Rental', icon: 'chair', services: ['Plastic Chair', 'Cushion Chair', 'VIP Sofa Chair', 'Round Table', 'Dining Table', 'Cocktail Table', 'Stage Sofa Set', 'Bride/Groom Chair', 'Reception Table', 'VIP Lounge Sofa', 'Bar Counter'] },
  { subCategory: 'Tent / Shamiana', icon: 'chair', services: ['10x10 ft Tent (10-15 members)', '20x20 ft Tent (30-50 members)', '30x30 ft Tent (70-100 members)', '40x40 ft Tent (120-150 members)', '50x50 ft Tent (200-300 members)', '60x40 ft Tent (250-400 members)', '100x50 ft Tent (500+ members)', 'Dome Tent', 'Pagoda Tent'] },
  { subCategory: 'Lighting Rental', icon: 'led', services: ['LED Lights', 'Focus Lights', 'Decorative Lights', 'Serial Lights', 'Flood Lights', 'Stage Lights', 'Moving Head Lights', 'Laser Lights', 'LED Wall'] },
  { subCategory: 'Sound System Rental', icon: 'sound', services: ['Small Speaker', 'Large Speaker', 'Line Array System', 'Subwoofer', 'Microphone', 'Cordless Microphone', 'Amplifier', 'DJ Setup', 'Mixer System', 'Audio Mixer Console'] },
  { subCategory: 'Décor Items Rent', icon: 'decor', services: ['Balloon Kit', 'Theme Props', 'Photo Booth Setup', 'Cutouts', 'Flower Panels', 'Entry Gate Setup', 'Selfie Point Setup', 'LED Name Board', 'Red Carpet'] },
  { subCategory: 'Catering Equipment', icon: 'chair', services: ['Cooking Vessels', 'Serving Dishes', 'Buffet Tables', 'Plates & Glasses', 'Water Dispenser', 'Gas Stove', 'Deep Freezer', 'Tea/Coffee Counter Setup'] },
  { subCategory: 'Construction Equipment', icon: 'generator', services: ['Concrete Mixer', 'Vibrator Machine', 'Scaffolding', 'Centering Material', 'JCB / Excavator', 'Drilling Machine', 'Power Trowel', 'Diesel Generator'] },
  { subCategory: 'Home Appliance Rental', icon: 'ac', services: ['Refrigerator', 'Washing Machine', 'TV', 'AC', 'Air Cooler', 'Water Purifier', 'Microwave Oven'] },
  { subCategory: 'Furniture Rental (Home/Office)', icon: 'chair', services: ['Sofa', 'Bed', 'Mattress', 'Wardrobe', 'Office Chair', 'Office Table', 'Study Table', 'Workstation'] },
  { subCategory: 'Camera & Media Equipment', icon: 'camera', services: ['DSLR Camera', 'Lens', 'Video Camera', 'Tripod', 'Gimbal', 'Drone Camera', 'Action Camera', 'LED Video Light'] },
  { subCategory: 'Tools & Machinery', icon: 'hammer', services: ['Drill Machine', 'Cutter Machine', 'Grinder', 'Welding Machine', 'Power Tools Kit', 'Air Compressor', 'Pressure Washer', 'Ladder'] },
  { subCategory: 'Cooling / Heating', icon: 'ac', services: ['Air Cooler', 'AC Rental', 'Industrial Fan', 'Heater', 'Air Blower', 'Mist Fan'] },
];

function rentalPrice(name) {
  if (name.includes('Tent') || name.includes('JCB') || name.includes('Excavator')) return 'From ₹3,999/day';
  if (name.includes('LED Wall') || name.includes('Line Array') || name.includes('Drone')) return 'From ₹2,999/day';
  if (name.includes('Chair') || name.includes('Table') || name.includes('Plate')) return 'From ₹30/piece';
  return 'From ₹499/day';
}

function buildRentalServices() {
  return buildCatalogServices(RENTAL_CATALOG, 'rental', 5001, rentalPrice);
}

const VEHICLE_CATALOG = [
  { subCategory: 'Ride Booking', icon: 'auto', services: ['Bike Ride', 'Auto Ride', 'Taxi Ride', 'Premium Cab Ride', 'EV Ride'] },
  { subCategory: 'Taxi Services', icon: 'auto', services: ['Local Taxi', 'Airport Pickup Taxi', 'Airport Drop Taxi', 'Outstation One Way Taxi', 'Outstation Round Trip Taxi', 'Hourly Taxi Booking', 'Full Day Taxi Booking', 'Premium Taxi', 'SUV Taxi', 'Innova Taxi', 'Tempo Traveller Taxi', 'Corporate Taxi', 'Wedding Guest Transportation'] },
  { subCategory: 'Goods & Transportation', icon: 'tractor', services: ['Tata Ace Booking', 'Pickup Vehicle Booking', 'Mini Truck Booking', 'Truck Booking', 'Tempo Traveller Transport', 'Bus Transport', 'Water Tanker Booking', 'House Shifting', 'Office Shifting', 'Material Transport', 'Furniture Transport', 'Machinery Transport', 'Construction Material Transport'] },
  { subCategory: 'Instant Delivery', icon: 'auto', services: ['Parcel Delivery', 'Document Delivery', 'Medicine Delivery', 'Grocery Delivery', 'Food Delivery', 'Flower Delivery', 'Fruits Delivery', 'Vegetables Delivery', 'Water Can Delivery', 'Milk Delivery', 'Small Package Delivery'] },
  { subCategory: 'Vehicle Washing & Cleaning', icon: 'auto', services: ['Bike Wash', 'Car Wash', 'Foam Wash', 'Interior Cleaning', 'Exterior Cleaning', 'Vacuum Cleaning', 'Engine Bay Cleaning', 'Headlight Restoration', 'Polishing', 'Detailing', 'Ceramic Coating', 'Teflon Coating'] },
  { subCategory: 'Vehicle Servicing', icon: 'auto', services: ['Basic Inspection', 'Bike Service', 'Car Service', 'EV Service', 'Commercial Vehicle Service', 'Periodic Service', 'Engine Oil Change', 'Filter Replacement', 'AC Service', 'Battery Checkup', 'Wheel Alignment', 'Wheel Balancing', 'Full Vehicle Checkup'] },
  { subCategory: 'Vehicle Repair Services', icon: 'bolt', services: ['Engine Repair', 'Clutch Repair', 'Brake Repair', 'Suspension Repair', 'Electrical Repair', 'Starter Repair', 'Alternator Repair', 'Radiator Repair', 'Battery Repair', 'AC Repair', 'Gearbox Repair', 'Silencer Repair', 'Fuel System Repair', 'Denting & Painting', 'Windshield Repair'] },
  { subCategory: 'Roadside Assistance', icon: 'auto', services: ['Breakdown Assistance', 'Emergency Repair', 'On-Site Inspection', 'Battery Jump Start', 'Battery Replacement', 'Battery Charging', 'Puncture Repair', 'Tyre Replacement', 'Wheel Alignment', 'Wheel Balancing', 'Emergency Fuel Delivery', 'Wrong Fuel Assistance', 'Key Unlock Service', 'Lost Key Assistance', 'Duplicate Key Service', 'Local Towing', 'Long Distance Towing', 'Flatbed Towing', 'Accident Recovery'] },
  { subCategory: 'Vehicle Rental Services', icon: 'auto', services: ['Bike Rental', 'Scooter Rental', 'Auto Rental', 'Car Rental (Self Drive)', 'Car Rental (With Driver)', 'Luxury Car Rental', 'Wedding Car Rental', 'EV Vehicle Rental', 'Van Rental', 'Tempo Traveller Rental', 'Mini Bus Rental', 'Bus Rental', 'Truck Rental', 'Pickup Vehicle Rental', 'Water Tanker Rental'] },
  { subCategory: 'EV Services', icon: 'bolt', services: ['Battery Health Check', 'Charging System Check', 'Motor Inspection', 'Controller Diagnostics', 'Mobile Charging Support', 'Battery Assistance', 'EV Towing', 'EV Charger Installation'] },
  { subCategory: 'Vehicle Documents & Insurance', icon: 'guard', services: ['New Insurance', 'Insurance Renewal', 'Claim Assistance', 'RC Transfer', 'Fitness Certificate', 'Pollution Certificate', 'Permit Renewal', 'Loan Closure Assistance', 'Challan Assistance'] },
];

function vehiclePrice(name) {
  if (name.includes('Insurance') || name.includes('Wedding') || name.includes('Luxury')) return 'From ₹2,999';
  if (name.includes('Ride') || name.includes('Delivery') || name.includes('Taxi')) return 'From ₹49';
  if (name.includes('Rental') || name.includes('Shift') || name.includes('Transport')) return 'From ₹799';
  if (name.includes('Assistance') || name.includes('Towing') || name.includes('Repair')) return 'From ₹499';
  return 'From ₹299';
}

function buildVehicleServices() {
  return buildCatalogServices(VEHICLE_CATALOG, 'vehicle', 6001, vehiclePrice);
}

const ACCOMMODATION_CATALOG = [
  { subCategory: 'Rooms', icon: 'office', services: ['Single Room', 'Double Sharing Room', 'Triple Sharing Room', 'Four Sharing Room', 'Family Room', 'Studio Room', 'Furnished Room', 'Semi Furnished Room', 'Non Furnished Room', 'AC Room', 'Non AC Room', 'Attached Bathroom Room', 'Shared Bathroom Room'] },
  { subCategory: 'PG Accommodation', icon: 'office', services: ['Gents PG', 'Ladies PG', 'Students PG', 'Working Professionals PG', 'AC PG', 'Non AC PG', 'Food Included PG', 'Without Food PG', 'Single Sharing PG', 'Double Sharing PG', 'Triple Sharing PG', 'Four Sharing PG', 'Luxury PG', 'Budget PG'] },
  { subCategory: 'Hostels', icon: 'office', services: ['Gents Hostel', 'Ladies Hostel', 'Students Hostel', 'Working Professionals Hostel', 'AC Hostel', 'Non AC Hostel', 'Dormitory Hostel', 'Backpacker Hostel', 'Budget Hostel'] },
  { subCategory: 'Bed Space', icon: 'office', services: ['Single Bed Space', 'Double Bed Space', 'Shared Bed Space', 'Labour Bed Space'] },
  { subCategory: 'Co-Living Spaces', icon: 'office', services: ['Co-Living Room', 'Shared Co-Living', 'Premium Co-Living', 'Fully Managed Co-Living'] },
  { subCategory: 'Apartments', icon: 'office', services: ['1 RK Apartment', '1 BHK Apartment', '2 BHK Apartment', '3 BHK Apartment', '4 BHK Apartment', 'Fully Furnished Apartment', 'Semi Furnished Apartment', 'Unfurnished Apartment'] },
  { subCategory: 'Rental Properties', icon: 'office', services: ['Independent House', 'Villa', 'Farm House', 'Studio Apartment', 'Service Apartment', 'Duplex House', 'Commercial Space', 'Office Space', 'Shop Space', 'Godown / Warehouse'] },
  { subCategory: 'Short Stay', icon: 'office', services: ['Daily Room', 'Weekly Stay', 'Monthly Stay', 'Hourly Stay', 'Guest House', 'Service Apartment', 'Vacation Home'] },
  { subCategory: 'Student Accommodation', icon: 'office', services: ['College Nearby Hostel', 'College Nearby PG', 'Exam Stay Room', 'Coaching Student PG'] },
  { subCategory: 'Worker Accommodation', icon: 'office', services: ['Labour Room', 'Labour Camp', 'Construction Worker Stay', 'Factory Worker Stay', 'Staff Accommodation', 'Driver Accommodation'] },
  { subCategory: 'Property Listing', icon: 'office', services: ['Room for Rent', 'PG for Rent', 'Hostel Vacancy', 'Apartment for Rent', 'House for Rent', 'Villa for Rent', 'Commercial Space for Rent', 'Office Space for Rent', 'Godown / Warehouse for Rent'] },
  { subCategory: 'Premium Stays', icon: 'office', services: ['Luxury Apartment', 'Premium Villa', 'Executive Suite', 'Corporate Stay', 'Serviced Residence'] },
];

function accommodationPrice(name) {
  if (name.includes('Luxury') || name.includes('Premium') || name.includes('Villa') || name.includes('Executive')) return 'From ₹9,999/month';
  if (name.includes('Hourly') || name.includes('Daily')) return 'From ₹299/day';
  if (name.includes('Labour') || name.includes('Budget') || name.includes('Bed Space')) return 'From ₹199/month';
  return 'From ₹3,999/month';
}

function buildAccommodationServices() {
  return buildCatalogServices(ACCOMMODATION_CATALOG, 'accommodation', 7001, accommodationPrice);
}

const MANPOWER_CATALOG = [
  { subCategory: 'Cleaning & Maintenance Staff', icon: 'clean', services: ['Housekeeping Staff', 'Office Cleaning Staff', 'Janitors', 'Deep Cleaning Teams', 'Maintenance Workers', 'Pest Control Helpers'] },
  { subCategory: 'Logistics & Handling', icon: 'driver', services: ['Loading Staff', 'Unloading Staff', 'Packers & Movers Staff', 'Delivery Helpers', 'Warehouse Helpers', 'Material Handling Staff'] },
  { subCategory: 'Event & Catering Staff', icon: 'chair', services: ['Catering Boys', 'Catering Girls', 'Waiters', 'Kitchen Helpers', 'Event Setup Staff', 'Serving Staff', 'Decoration Helpers'] },
  { subCategory: 'Drivers & Transport Staff', icon: 'driver', services: ['Car Drivers', 'Truck Drivers', 'Tempo Drivers', 'Bus Drivers', 'Temporary Drivers', 'Permanent Drivers'] },
  { subCategory: 'Office Support Staff', icon: 'office', services: ['Office Boys', 'Office Assistants', 'Data Entry Operators', 'Receptionists', 'File Management Staff', 'Front Office Staff'] },
  { subCategory: 'Domestic Staff', icon: 'clean', services: ['Maids', 'Cooks', 'Babysitters', 'Elder Care Staff', 'House Helpers', 'Patient Care Attendants'] },
  { subCategory: 'Security Staff', icon: 'guard', services: ['Security Guards', 'Bouncers', 'Watchmen', 'Gate Security Staff', 'Event Security Staff'] },
  { subCategory: 'Construction Support Staff', icon: 'brick', services: ['Construction Helpers', 'Site Cleaning Staff', 'Material Shifting Staff', 'General Labour'] },
  { subCategory: 'Retail Support Staff', icon: 'sales', services: ['Sales Boys', 'Sales Girls', 'Store Helpers', 'Cash Counter Assistants'] },
  { subCategory: 'Industrial Support Staff', icon: 'hammer', services: ['Factory Helpers', 'Packing Staff', 'Assembly Line Helpers', 'Production Helpers'] },
];

function manpowerPrice(name) {
  if (/Driver|Chauffeur/.test(name)) return 'From ₹800/day';
  if (/Security|Watchmen|Bouncer/.test(name)) return 'From ₹700/day';
  if (/Deep Cleaning|Packers/.test(name)) return 'From ₹999/visit';
  if (/Permanent/.test(name)) return 'From ₹15,000/month';
  return 'From ₹500/day';
}

function buildManpowerServices() {
  return buildCatalogServices(MANPOWER_CATALOG, 'manpower', 9001, manpowerPrice);
}

const JOBS_CATALOG = [
  { subCategory: 'Retail & Shop Staff', icon: 'sales', services: ['Sales Boys', 'Sales Girls', 'Showroom Executives', 'Cashiers', 'Billing Staff', 'Store Assistants', 'Store Managers', 'Inventory Staff', 'Merchandisers', 'Supermarket Staff'] },
  { subCategory: 'Health Care Jobs', icon: 'office', services: ['Staff Nurses', 'Home Nurses', 'Ward Boys', 'Ward Girls', 'Lab Assistants', 'Pharmacy Assistants', 'Clinic Receptionists', 'Patient Care Takers', 'Physiotherapists', 'Medical Representatives', 'Doctors', 'Dentists', 'Radiology Technicians'] },
  { subCategory: 'Hotels & Restaurant Jobs', icon: 'chair', services: ['Waiters', 'Waitresses', 'Cooks', 'Chefs', 'Kitchen Helpers', 'Dish Washers', 'Hotel Receptionists', 'Room Service Staff', 'Housekeeping Staff', 'Restaurant Managers', 'Baristas', 'Bakers'] },
  { subCategory: 'Office & Admin Jobs', icon: 'office', services: ['Office Assistants', 'Back Office Executives', 'Receptionists', 'Front Desk Executives', 'Data Entry Operators', 'HR Assistants', 'Admin Executives', 'Office Coordinators', 'Personal Assistants', 'Office Managers'] },
  { subCategory: 'Delivery & Logistics Jobs', icon: 'driver', services: ['Delivery Boys', 'Delivery Riders', 'Courier Delivery Staff', 'Warehouse Pickers', 'Packers', 'Dispatch Executives', 'Logistics Coordinators', 'Inventory Executives', 'Loading Staff', 'Unloading Staff'] },
  { subCategory: 'Factory & Industrial Jobs', icon: 'hammer', services: ['Factory Workers', 'Machine Operators', 'Helpers', 'Quality Check Staff', 'Supervisors', 'Production Operators', 'Assembly Line Workers', 'Store Keepers', 'Packaging Staff', 'Forklift Operators'] },
  { subCategory: 'Construction Jobs', icon: 'brick', services: ['Masons', 'Helpers', 'Bar Benders', 'Shuttering Carpenters', 'Welders', 'Painters', 'Tile Workers', 'Construction Supervisors', 'Site Engineers', 'Quantity Surveyors', 'Civil Engineers', 'Surveyors'] },
  { subCategory: 'Technician Jobs', icon: 'bolt', services: ['Electricians', 'Plumbers', 'Carpenters', 'AC Technicians', 'CCTV Technicians', 'Computer Technicians', 'Mobile Technicians', 'RO Technicians', 'Gas Stove Technicians', 'Locksmiths', 'Internet/WiFi Technicians', 'Home Appliance Technicians', 'Elevator Technicians', 'Solar Technicians'] },
  { subCategory: 'Vehicle & Transport Jobs', icon: 'auto', services: ['Auto Drivers', 'Cab Drivers', 'Truck Drivers', 'Tempo Drivers', 'Bus Drivers', 'Heavy Vehicle Drivers', 'Vehicle Mechanics', 'Bike Mechanics', 'Car Wash Staff', 'Tow Truck Operators'] },
  { subCategory: 'Security Jobs', icon: 'guard', services: ['Security Guards', 'Bouncers', 'Watchmen', 'Gate Security', 'Security Supervisors', 'CCTV Operators'] },
  { subCategory: 'Domestic Jobs', icon: 'clean', services: ['Maids', 'Cooks', 'Babysitters', 'Elder Care Staff', 'House Helpers', 'Housekeepers'] },
  { subCategory: 'Driver Jobs', icon: 'driver', services: ['Personal Drivers', 'Company Drivers', 'Delivery Drivers', 'Truck Drivers', 'School Bus Drivers', 'Chauffeurs'] },
  { subCategory: 'Sales & Marketing Jobs', icon: 'sales', services: ['Field Sales Executives', 'Sales Promoters', 'Telecallers', 'Marketing Executives', 'Business Development Executives', 'Relationship Managers', 'Brand Executives', 'Digital Marketing Executives'] },
  { subCategory: 'Customer Support Jobs', icon: 'office', services: ['Call Center Executives', 'Customer Support Executives', 'Chat Support Executives', 'Telecallers', 'Customer Care Executives', 'Process Associates'] },
  { subCategory: 'Event & Promotion Jobs', icon: 'decor', services: ['Event Staff', 'Brand Promoters', 'Campaign Staff', 'Exhibition Staff', 'Sampling Promoters'] },
  { subCategory: 'Event & Media Jobs', icon: 'camera', services: ['Photographers', 'Videographers', 'Video Editors', 'DJs', 'Event Coordinators', 'Graphic Designers', 'Social Media Managers', 'Content Creators'] },
  { subCategory: 'Education Jobs', icon: 'office', services: ['Teachers', 'Tutors', 'Trainers', 'Coaching Staff', 'Online Tutors', 'Spoken English Trainers', 'Lecturers', 'Professors'] },
  { subCategory: 'Cleaning & Maintenance Jobs', icon: 'clean', services: ['Housekeeping Staff', 'Office Cleaning Staff', 'Janitors', 'Maintenance Workers', 'Deep Cleaning Staff', 'Pest Control Technicians'] },
  { subCategory: 'IT & Software Jobs', icon: 'bolt', services: ['Software Developers', 'Web Developers', 'App Developers', 'UI/UX Designers', 'Graphic Designers', 'SEO Executives', 'Content Writers', 'Data Analysts', 'Data Scientists', 'AI Engineers', 'Cyber Security Analysts', 'Cloud Engineers', 'DevOps Engineers', 'Software Testers'] },
  { subCategory: 'Finance & Accounts Jobs', icon: 'office', services: ['Accountants', 'Account Executives', 'Auditors', 'GST Executives', 'Tax Consultants', 'Payroll Executives', 'Finance Managers', 'Banking Executives'] },
  { subCategory: 'Beauty & Wellness Jobs', icon: 'makeup', services: ['Beauticians', 'Hair Stylists', 'Makeup Artists', 'Spa Therapists', 'Nail Artists', 'Mehendi Artists'] },
  { subCategory: 'Business Services Jobs', icon: 'office', services: ['GST Consultants', 'Company Secretaries', 'Legal Assistants', 'Business Consultants', 'Insurance Advisors', 'Loan Consultants'] },
  { subCategory: 'Government Jobs', icon: 'guard', services: ['Central Government Jobs', 'State Government Jobs', 'Railway Jobs', 'Bank Jobs', 'Police Jobs', 'Defence Jobs'] },
  { subCategory: 'Banking & Insurance Jobs', icon: 'office', services: ['Bank Officer', 'Relationship Manager', 'Insurance Advisor', 'Loan Officer'] },
  { subCategory: 'Legal Jobs', icon: 'guard', services: ['Advocates', 'Legal Advisors', 'Legal Assistants'] },
  { subCategory: 'HR & Recruitment Jobs', icon: 'office', services: ['HR Executives', 'Recruiters', 'Talent Acquisition Specialists'] },
  { subCategory: 'Real Estate Jobs', icon: 'office', services: ['Property Advisors', 'Real Estate Sales Executives', 'Property Managers'] },
  { subCategory: 'BPO & Call Center Jobs', icon: 'office', services: ['Voice Process Executive', 'Non Voice Process Executive', 'Technical Support Executive'] },
  { subCategory: 'Work From Home Jobs', icon: 'office', services: ['Data Entry Work', 'Online Tutor', 'Content Writer', 'Customer Support Executive'] },
  { subCategory: 'Freelance Jobs', icon: 'sales', services: ['Graphic Designer', 'Web Developer', 'Photographer', 'Digital Marketer'] },
  { subCategory: 'Internship Jobs', icon: 'office', services: ['Engineering Intern', 'Marketing Intern', 'HR Intern', 'Accounts Intern'] },
];

function jobsPrice(name) {
  if (/Doctor|Dentist|Professor|AI Engineer|Software Developer|Data Scientist|Cyber Security/.test(name)) return 'Salary negotiable';
  if (/Government|Railway|Bank Jobs|Police|Defence/.test(name)) return 'As per govt norms';
  if (/Intern|Helper|Delivery Boy|Delivery Rider|Ward Boy|Ward Girl/.test(name)) return 'From ₹8,000/month';
  return 'From ₹12,000/month';
}

function buildJobsServices() {
  return buildCatalogServices(JOBS_CATALOG, 'jobs', 8001, jobsPrice).map((s) => ({
    ...s,
    description: `Hire verified ${s.name} — temp, contract or full-time placements.`,
  }));
}

function buildCatalogServices(catalog, categoryId, startId, priceFn) {
  let id = startId;
  return catalog.flatMap((group) =>
    group.services.map((name) => ({
      id: id++,
      name,
      subCategory: group.subCategory,
      price: priceFn(name),
      description: `${name} by verified ${group.subCategory} at your doorstep.`,
      category: categoryId,
      icon: group.icon,
    }))
  );
}

const CATEGORY_CATALOGS = {
  construction: CONSTRUCTION_CATALOG,
  technician: TECHNICIAN_CATALOG,
  manpower: MANPOWER_CATALOG,
  beautician: BEAUTICIAN_CATALOG,
  events: EVENTS_CATALOG,
  rental: RENTAL_CATALOG,
  vehicle: VEHICLE_CATALOG,
  accommodation: ACCOMMODATION_CATALOG,
  jobs: JOBS_CATALOG,
};

export function getCategoryCatalog(categoryId: string) {
  return CATEGORY_CATALOGS[categoryId] || null;
}

export const SERVICES = [
  ...buildConstructionServices(),
  ...buildTechnicianServices(),
  ...buildManpowerServices(),
  ...buildBeauticianServices(),
  ...buildEventsServices(),
  ...buildRentalServices(),
  ...buildVehicleServices(),
  ...buildAccommodationServices(),
  ...buildJobsServices(),
];

export const TESTIMONIALS = [
  { quote: 'Booked an electrician in 10 minutes. The worker arrived on time and fixed everything.', author: 'Priya', city: 'Hyderabad' },
  { quote: 'Finally one place for wedding makeup, decor, and photography. Very easy to use.', author: 'Ramesh', city: 'Vijayawada' },
  { quote: 'Hired masons for our home renovation. Transparent pricing and reliable workers.', author: 'Lakshmi', city: 'Guntur' },
  { quote: 'Generator rental was delivered same day for our shop event. Great service!', author: 'Suresh', city: 'Warangal' },
];

export const ICONS: Record<string, string> = {
  brick: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="8" y="20" width="20" height="12" rx="1"/><rect x="36" y="20" width="20" height="12" rx="1"/><rect x="22" y="36" width="20" height="12" rx="1"/></svg>',
  paint: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 44l8-24h24l8 24"/><rect x="20" y="44" width="24" height="8" rx="2"/></svg>',
  hammer: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 50l20-20"/><rect x="34" y="10" width="16" height="10" rx="2" transform="rotate(45 42 15)"/></svg>',
  tile: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="10" y="10" width="18" height="18"/><rect x="36" y="10" width="18" height="18"/><rect x="10" y="36" width="18" height="18"/><rect x="36" y="36" width="18" height="18"/></svg>',
  bolt: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M36 8L18 36h14l-6 20 22-30H34l2-18z"/></svg>',
  pipe: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M16 32c0-8 6-14 16-14s16 6 16 14"/><path d="M20 32v16M44 32v16"/><circle cx="32" cy="52" r="4"/></svg>',
  ac: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="10" y="18" width="44" height="22" rx="3"/><path d="M18 48l6-8M32 48l0-8M46 48l-6-8"/></svg>',
  cctv: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="12" y="24" width="32" height="20" rx="4"/><path d="M44 34h12l-6-8v16z"/><circle cx="28" cy="34" r="6"/></svg>',
  clean: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 44l16-28 8 14"/><ellipse cx="32" cy="48" rx="14" ry="6"/></svg>',
  driver: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="32" cy="20" r="10"/><path d="M16 52c0-10 7-16 16-16s16 6 16 16"/></svg>',
  office: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="14" y="14" width="36" height="36" rx="2"/><path d="M14 28h36M26 28v22M38 28v22"/></svg>',
  makeup: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5"><ellipse cx="32" cy="28" rx="14" ry="18"/><path d="M22 46h20"/><circle cx="26" cy="24" r="2" fill="currentColor"/><circle cx="38" cy="24" r="2" fill="currentColor"/></svg>',
  hair: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M32 12c-10 0-16 8-16 18 0 6 4 10 8 12"/><path d="M32 12c10 0 16 8 16 18 0 6-4 10-8 12"/><path d="M24 50h16"/></svg>',
  mehendi: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M32 10v44"/><path d="M32 20c-8 4-12 12-8 18 4 6 12 4 16-2"/><path d="M32 20c8 4 12 12 8 18-4 6-12 4-16-2"/></svg>',
  camera: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="10" y="20" width="44" height="30" rx="4"/><circle cx="32" cy="35" r="10"/><path d="M22 20l4-8h12l4 8"/></svg>',
  decor: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M32 8l4 12h12l-10 8 4 12-10-8-10 8 4-12-10-8h12z"/></svg>',
  sound: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="14" y="22" width="12" height="24" rx="2"/><path d="M26 32h8l12-8v24l-12-8h-8"/><path d="M48 28v8"/></svg>',
  chair: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="18" y="14" width="28" height="8" rx="2"/><path d="M20 22v20h24V22"/><path d="M18 42h28M24 42v8M40 42v8"/></svg>',
  generator: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="14" y="18" width="36" height="28" rx="3"/><circle cx="32" cy="32" r="8"/><path d="M32 24v8l6 4"/></svg>',
  led: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="10" y="16" width="44" height="28" rx="2"/><path d="M18 48h28M24 48v4M40 48v4"/></svg>',
  auto: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 36h40l-4-12H16z"/><circle cx="20" cy="40" r="6"/><circle cx="44" cy="40" r="6"/><path d="M26 36h12"/></svg>',
  tractor: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="18" cy="44" r="10"/><circle cx="46" cy="44" r="8"/><rect x="24" y="20" width="24" height="16" rx="2"/><path d="M24 28H14"/></svg>',
  guard: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M32 8l20 8v14c0 14-10 22-20 26-10-4-20-12-20-26V16z"/><path d="M32 24v16M26 30h12"/></svg>',
  sales: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="16" y="12" width="32" height="40" rx="3"/><path d="M24 22h16M24 30h16M24 38h10"/><circle cx="44" cy="44" r="10"/><path d="M44 40v8M40 44h8"/></svg>',
};

export const ARROW_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H9M17 7v8"/></svg>';

export function getCategory(id: string) {
  return CATEGORIES.find((c) => c.id === id);
}

export function getServiceById(id: number | string) {
  const numId = Number(id);
  return SERVICES.find((s) => s.id === numId) || null;
}

export function getServicesByCategory(categoryId: string) {
  return SERVICES.filter((s) => s.category === categoryId);
}

export function getServicesBySubCategory(categoryId: string, subCategory: string) {
  return getServicesByCategory(categoryId).filter((s) => s.subCategory === subCategory);
}

export function getSubCategories(categoryId: string) {
  const catalog = getCategoryCatalog(categoryId);
  if (catalog) return catalog.map((g) => g.subCategory);
  const seen = new Set();
  return getServicesByCategory(categoryId)
    .map((s) => s.subCategory)
    .filter((sc) => sc && !seen.has(sc) && seen.add(sc));
}

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const BOOKING_STATUSES = [
  { id: 'pending', label: 'Pending', step: 0 },
  { id: 'confirmed', label: 'Confirmed', step: 1 },
  { id: 'in_progress', label: 'In Progress', step: 2 },
  { id: 'completed', label: 'Completed', step: 3 },
];

export function generateBookingId() {
  return `VSH${Date.now().toString(36).toUpperCase().slice(-8)}`;
}

export type Booking = {
  bookingId: string;
  name: string;
  phone: string;
  serviceId: number | string;
  serviceName: string;
  categoryId: string;
  categoryName: string;
  date: string;
  location: string;
  status: string;
  createdAt: string;
  otpVerified?: boolean;
};

export function saveBooking(booking: Booking) {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem('vsh_booking', JSON.stringify(booking));
}

export function getBooking(): Booking | null {
  if (typeof window === 'undefined') return null;
  try {
    return JSON.parse(sessionStorage.getItem('vsh_booking') || 'null');
  } catch {
    return null;
  }
}

export function isReturningUser(phone: string) {
  if (typeof window === 'undefined') return false;
  const users = JSON.parse(localStorage.getItem('vsh_users') || '[]');
  return users.includes(phone);
}

export function markUserRegistered(phone: string) {
  if (typeof window === 'undefined') return;
  const users = JSON.parse(localStorage.getItem('vsh_users') || '[]');
  if (!users.includes(phone)) {
    users.push(phone);
    localStorage.setItem('vsh_users', JSON.stringify(users));
  }
}

export const GALLERY_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'events', label: 'Events' },
  { id: 'construction', label: 'Construction' },
  { id: 'beautician', label: 'Beauty' },
  { id: 'technician', label: 'Technician' },
  { id: 'rental', label: 'Rental' },
];

export const GALLERY_ITEMS = [
  { id: 1, category: 'events', title: 'Wedding Decor Setup', aspect: 'tall', color: '#c8c4bc' },
  { id: 2, category: 'construction', title: 'Home Painting Project', aspect: 'wide', color: '#b8b4ac' },
  { id: 3, category: 'beautician', title: 'Bridal Makeup', aspect: 'square', color: '#d4d0c8' },
  { id: 4, category: 'technician', title: 'AC Installation', aspect: 'square', color: '#a8a49c' },
  { id: 5, category: 'events', title: 'Stage & Sound', aspect: 'wide', color: '#beb8b0' },
  { id: 6, category: 'rental', title: 'Chair & Table Setup', aspect: 'tall', color: '#ccc8c0' },
  { id: 7, category: 'construction', title: 'Tile Flooring Work', aspect: 'square', color: '#b0aca4' },
  { id: 8, category: 'beautician', title: 'Mehendi Ceremony', aspect: 'tall', color: '#d8d4cc' },
  { id: 9, category: 'technician', title: 'Electrical Wiring', aspect: 'wide', color: '#a0a09a' },
  { id: 10, category: 'events', title: 'Birthday Photography', aspect: 'square', color: '#c4c0b8' },
  { id: 11, category: 'rental', title: 'LED Screen Event', aspect: 'wide', color: '#b4b0a8' },
  { id: 12, category: 'construction', title: 'Masonry Work', aspect: 'tall', color: '#aca8a0' },
];

export const FAQ_DATA = [
  {
    category: 'general',
    title: 'General',
    items: [
      { q: 'What is VSolveHub?', a: 'VSolveHub (Quick Service Hub) is an all-in-one doorstep services marketplace connecting customers across India with skilled workers, technicians, and service providers.' },
      { q: 'Which cities do you serve?', a: 'We are expanding across Tier 2 and Tier 3 cities in South and Central India, with 24+ cities active and more launching every month.' },
      { q: 'How do I book a service?', a: 'Browse a category on our website or app, fill in your phone and location, and we call you back within 30 minutes to confirm the booking.' },
      { q: 'Is there a customer app?', a: 'Yes. Download the VSolveHub Customer App (Android & iOS) to browse, book, and track orders. Scan the QR code in our website footer.' },
    ],
  },
  {
    category: 'construction',
    title: 'Construction Labour',
    items: [
      { q: 'How are masons and painters verified?', a: 'All workers complete identity verification and skill checks before their first job. Customer ratings are tracked after every booking.' },
      { q: 'Do I pay per day or per project?', a: 'Most construction labour is quoted per day or per sq.ft depending on the job. You receive a clear estimate before work begins.' },
      { q: 'Can I hire a team for renovation?', a: 'Yes. You can book masons, painters, carpenters and tile workers together. Mention your full requirement in the enquiry form.' },
    ],
  },
  {
    category: 'technician',
    title: 'Technician Services',
    items: [
      { q: 'How fast can an electrician or plumber arrive?', a: 'For most areas, a technician can reach you within 2–4 hours for urgent requests, or at your chosen date and time slot.' },
      { q: 'Are spare parts included in the visit charge?', a: 'The visit charge covers labour and diagnosis. Spare parts are billed separately with your approval before purchase.' },
      { q: 'Do you offer AC annual maintenance?', a: 'Yes. AC servicing, gas refill, and repair are available. Book under Technician Services → AC Repair & Service.' },
    ],
  },
  {
    category: 'beautician',
    title: 'Beautician & Wedding',
    items: [
      { q: 'Can I book a bridal makeup trial?', a: 'Yes. Most bridal artists offer a trial session before the wedding date. Ask when you submit your enquiry.' },
      { q: 'Do beauticians come to my home?', a: 'Absolutely. All beauty and wedding services are doorstep — at your home, hotel, or venue.' },
      { q: 'How early should I book wedding services?', a: 'We recommend booking at least 2–4 weeks ahead for weddings, especially during peak season (Nov–Feb).' },
    ],
  },
  {
    category: 'events',
    title: 'Events & Media',
    items: [
      { q: 'Can I book photography and decor together?', a: 'Yes. Many customers book photography, decor, and stage & sound as a package. Select Events & Media and list all needs in one enquiry.' },
      { q: 'Do you handle corporate events?', a: 'Yes. We support birthdays, weddings, corporate functions, and community events of all sizes.' },
    ],
  },
  {
    category: 'rental',
    title: 'Equipment Rental',
    items: [
      { q: 'Is delivery included for chair and table rental?', a: 'Delivery and pickup are included within city limits. Outstation delivery is quoted separately.' },
      { q: 'What is the minimum rental period?', a: 'Most equipment is rented per day. Generators and LED screens can be booked for half-day or multi-day events.' },
    ],
  },
  {
    category: 'jobs',
    title: 'Workers & Jobs',
    items: [
      { q: 'How do I register as a worker?', a: 'Visit our Job Opportunities page, fill in your skill and area, verify your phone with OTP, and our team will contact you within 24–48 hours.' },
      { q: 'How do workers get paid?', a: 'Workers receive payment through the VSolveHub Worker App after job completion. Earnings can be tracked in real time.' },
      { q: 'Is there a registration fee for workers?', a: 'No. Worker registration is free. We only earn when you complete jobs through the platform.' },
    ],
  },
];
