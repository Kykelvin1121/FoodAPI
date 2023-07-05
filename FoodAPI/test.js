app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
  app.post('/register', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Check if the username already exists in the database
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(409).send('Username already taken');
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = new User({
        username,
        password: hashedPassword,
      });
  
      // Save the user to the database
      await newUser.save();
  
      res.send('User registered successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  mongoose
    .connect('mongodb+srv://yuanpang00:<ziyuan1007>@cluster0.qx4cdqe.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB');
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });