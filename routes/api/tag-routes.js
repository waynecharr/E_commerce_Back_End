const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Finds all tags and products through ProductTag
router.get('/', async (req, res) => {
  try {
    // Use the Tag model's findAll method to retrieve all tags
    const tags = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }], // Include associated Products through ProductTag
    });

    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Finds a tag by its ID values through its associated Product Data
router.get('/:id', async (req, res) => {
  try {

    // Use the Tag model's findOne method to find a tag by its id
    const tag = await Tag.findOne({
      where: { id: req.params.id },
      include: [{ model: Product, through: ProductTag }], 
    });

    // Check if the tag exists
    if (!tag) {
      return res.status(404).json({ message: 'Tag not found' });
    }

    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Creates a new tag
router.post('/', async (req, res) => {
  try {
    const tags = await Category.create(req.body);
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Updates a tag by its ID value
router.put('/:id', async (req, res) => {
  try {
    const updatedTagName = req.body.tag_name;

    // Use the Tag model's update method to update the tag's name by its id
    const [rowsUpdated] = await Tag.update(
      { tag_name: updatedTagName },
      {
        where: { id: req.params.id },
      }
    );

    // Check if no tag with the given id was updated
    if (rowsUpdated === 0) {
      return res.status(404).json({ message: 'Tag not found' });
    }

    // Fetch the updated tag data after the update
    const updatedTag = await Tag.findByPk(tagId);

    res.status(200).json(updatedTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Deletes a tag by its ID value
router.delete('/:id', async (req, res) => {
  try {
    // Use the Tag model's destroy method to delete the tag by its id
    const deletedRowCount = await Tag.destroy({
      where: { id: req.params.id },
    });

    // Check if no tag with the given id was deleted
    if (deletedRowCount === 0) {
      return res.status(404).json({ message: 'Tag not found' });
    }

    // If a tag was deleted, respond with a success message
    res.status(200).json({ message: 'Tag deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
