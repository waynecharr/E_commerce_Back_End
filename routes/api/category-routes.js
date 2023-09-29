const router = require('express').Router();
const { Category, Product } = require('../../models');


// Finds all categories and includes associated Products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [Product], 
    });

    res.status(200).json(categoryData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Finds all Categories by ID and includes associated Products
router.get('/:id', async (req, res) => {
  try {
    // Use the Category model's findOne method to find a specific category by its id
    const categoryData = await Category.findOne({
      where: { id: req.params.id },
      include: [Product], // Include associated Products
    });

    // Check if the category exists
    if (!categoryData) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Creates a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Updates a category by its ID value
router.put('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;
    const updatedCategoryData = req.body; 

    const category = await Category.findByPk(categoryId);
    //checks if the category exists
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    // Updates the category
    category.set(updatedCategoryData);
    await category.save();

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Deletes a category by its ID
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: { id: req.params.id }
    });
    //checks to see if the Category exists
    if (!categoryData) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
