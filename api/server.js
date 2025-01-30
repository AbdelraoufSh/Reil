const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
app.use(express.json());

app.use(cors());

app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));


app.get('/api/images', (req, res) => {
  const fs = require('fs');
  const uploadDir = path.join(__dirname, 'uploads');

  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading the uploads directory' });
    }
    
    const imageFiles = files.filter(file => {
      return file.match(/\.(jpg|jpeg|png|gif)$/i); 
    });
    const imageUrls = imageFiles.map(file => `/api/uploads/${file}`);
    res.json(imageUrls);
  });
});
app.get('/api/hello', async (req, res) => {
    try {
      res.json({
        Homepage:['Welcome to Rayleigh','A minimalistic portfolio template made with Vue2.','Interior design','Exterior design','© 2024 by ASH. All rights reserved.'],
        firstimagestitle:['Modern armchair','Contemporary coffee table','Sleek lamp','Elegant vase','Simple bookshelf','Stylish sofa'],
        secondimagestitle:['Luna bench','Aurora lamp','Serenity fountain','Zeqhyr sculpture','Harmony seating','Mystic path'],
        BlogPage:['Blog','Inspiration at every turn.'],
        AboutPage:['About','Unveiling the artistry of interior and exterior design.','Welcome to my world of transforming spaces with art! I am an interior/exterior artist with a passion for creating visually stunning environments. With my expertise in both interior and exterior design, I have the ability to capture the essence of a space and elevate it to new heights. Whether its revamping a rooms interior or rejuvenating the exterior of a building, I take pride in my ability to bring life and personality to every project. From selecting the perfect color palette to incorporating unique textures and patterns, I believe that each element plays a crucial role in crafting a space that truly reflects the clients vision.','I have a keen eye for detail and a deep understanding of spatial aesthetics. I strive to create balanced compositions that evoke emotions, inspire creativity, and enhance the surrounding atmosphere. By carefully blending form and function, I aim to create harmonious spaces that not only look breathtaking but also fulfill practical needs. My artistic journey began at a young age, fueled by my fascination with colors, textures, and the interplay of light and shadows. Over the years, I have honed my skills through formal education and hands-on experience, working on a diverse range of projects, from residential homes to commercial establishments.','Being an avid traveler, I draw inspiration from various cultures, architectural styles, and natural landscapes. This allows me to infuse a distinct global perspective into my designs, resulting in truly unique and captivating spaces. I strongly believe in the power of collaboration and value open communication with my clients. By understanding their preferences, needs, and aspirations, I am able to create personalized and tailored designs that exceed expectations. Thank you for visiting my portfolio. I look forward to the opportunity to work with you and turn your interior or exterior space into a work of art. Lets embark on a creative journey together!'],
        ContactPage:['Contact','Get in touch.','Your name','Your email address','Message','Send'],
        headers:['Harmony in Space: The Essence of Minimalist Design','Digital Roots: Blending Technology with Nature','Linear Elegance: The Beauty of Architectural Minimalism'],
        dates:['Written on February 21, 2024 by Pruvious','Written on January 11, 2024 by Pruvious','Written on January 10, 2024 by Pruvious'],
        descrs:['"Harmony in Space" elegantly captures the essence of minimalist design, blending indoor and outdoor elements against a tranquil light gray backdrop. Its clean lines and balanced composition evoke serenity, embodying a design philosophy where less is truly more, and simplicity reigns supreme.','"Digital Roots" artfully merges technology and nature in a minimalist tableau. It portrays a world where digital elements and natural beauty coexist in harmony, symbolizing a future where progress and preservation walk hand in hand.','"Linear Elegance" artistically showcases the sophistication of minimalist architecture. With its sleek silhouettes and monochromatic palette, this image embodies the serene beauty and refined simplicity of modern design, inviting viewers to appreciate the elegance in minimal forms.']
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  });
module.exports = (req,res)=>{
  app(req,res);
};
