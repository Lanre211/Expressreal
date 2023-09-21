const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3004;

app.use(express.static(path.join(__dirname, '../public/stylesheets/style.css')));

const checkWorkingHours = (req, res, next) => {
  const now = new Date();
  const dayOfWeek = now.getDay(); 
  const hourOfDay = now.getHours();

  if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 9 && hourOfDay < 17) {
    next();
  } else {
    res.send('This web application is only available during working hours (Monday to Friday, 9 AM to 5 PM).');
  }
};



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

app.get('/services', (req, res) => {
  res.render('services', { title: 'Our Services' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
